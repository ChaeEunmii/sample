'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAlert } from '@shared/contexts/AlertContext';
import { IconButton, Text, Input, Empty, Tabs, Button } from '@shared/ui';
import BoardAccList, { type BoardAccListItem, type BoardAccListProps } from './BoardAccList';
import clsx from 'clsx';
import styles from './BoardAccSearch.module.scss';

/**
 * 게시판 아코디언 목록 검색 컴포넌트
 */

export interface BoardAccSearchProps {
  data?: BoardAccListItem[];
  tabs?: { label: React.ReactNode; data: BoardAccListItem[] }[];
  defaultTabIndex?: number;
  activeTab?: number;
  onTabChange?: (index: number) => void;
  defaultQuery?: string;
  placeholder?: string;
  totalTextFormatter?: (n: number) => React.ReactNode;
  pageSize?: number;
  noResultSlot?: React.ReactNode | ((reset: () => void) => React.ReactNode);
  noDataSlot?: React.ReactNode | ((tabIndex: number, reset: () => void) => React.ReactNode);
  listProps?: Omit<BoardAccListProps, 'data'>;
  className?: string;
}

/* ----------------------- utils ----------------------- */
const escapeRegExp = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

const htmlToText = (html: string) =>
  (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const nodeToText = (node: React.ReactNode): string => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join(' ');
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return nodeToText(node.props?.children);
  }
  return '';
};

const toPlainLabel = (label: React.ReactNode): string => {
  if (typeof label === 'string' || typeof label === 'number') return String(label);
  const txt = nodeToText(label).trim();
  return txt || '';
};

const highlightHTML = (html: string, q: string) =>
  !q
    ? html
    : html.replace(new RegExp(escapeRegExp(q), 'gi'), (m) => `<mark class="marking">${m}</mark>`);

const highlightNode = (node: React.ReactNode, q: string, kp = 'mk'): React.ReactNode => {
  if (!q || node == null || typeof node === 'boolean') return node;
  if (typeof node === 'string' || typeof node === 'number') {
    const parts = String(node).split(new RegExp(`(${escapeRegExp(q)})`, 'gi'));
    return parts.map((p, i) =>
      i % 2 ? (
        <mark key={`${kp}-${i}`} className="marking">
          {p}
        </mark>
      ) : (
        <React.Fragment key={`${kp}-${i}`}>{p}</React.Fragment>
      )
    );
  }
  if (Array.isArray(node)) {
    return node.map((c, i) => (
      <React.Fragment key={`${kp}-${i}`}>{highlightNode(c, q, `${kp}-${i}`)}</React.Fragment>
    ));
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode }>;
    const kids =
      'children' in el.props ? highlightNode(el.props.children, q, kp) : el.props?.children;
    return React.cloneElement(el, el.props, kids);
  }
  return node;
};

export default function BoardAccSearch({
  data,
  tabs,
  defaultTabIndex = 0,
  activeTab,
  onTabChange,
  defaultQuery = '',
  placeholder = '궁금한 내용을 입력해 주세요.',
  totalTextFormatter = (n) => <>총 {n}건의 검색결과</>,
  pageSize,
  noResultSlot,
  noDataSlot,
  listProps,
  className,
}: BoardAccSearchProps) {
  const { showAlert } = useAlert();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const initialTabRef = useRef(0);

  const [query, setQuery] = useState(defaultQuery); // 입력 중인 검색어
  const [confirmedQuery, setConfirmedQuery] = useState(defaultQuery); // 실제 검색 실행된 검색어

  // 검색 실행
  const runSearch = () => {
    const q = query.trim();
    if (!q) {
      showAlert({
        message: '검색어를 입력해 주세요',
        onConfirm: () => console.log('확인 클릭'),
        showCancel: false,
        labelProps: { confirm: '확인' },
      });
      return;
    }
    setConfirmedQuery(q);
  };

  /* ----------------------- 탭 구성 ----------------------- */
  const hasTabs = Array.isArray(tabs) && tabs.length > 0;
  const tabLabels = useMemo(
    () => (hasTabs ? tabs!.map((t) => ({ label: toPlainLabel(t.label) })) : []),
    [hasTabs, tabs]
  );
  const effectiveTabs = useMemo(() => (hasTabs ? tabs! : []), [hasTabs, tabs]);

  const clampIndex = (idx: number, len: number) => Math.min(Math.max(idx, 0), Math.max(len - 1, 0));
  const [clickedTab, setClickedTab] = useState(() =>
    clampIndex(defaultTabIndex, effectiveTabs.length)
  );

  useEffect(() => {
    const safe = clampIndex(defaultTabIndex, effectiveTabs.length);
    initialTabRef.current = safe;
    setClickedTab((prev) => clampIndex(prev, effectiveTabs.length));
  }, [defaultTabIndex, effectiveTabs.length]);

  useEffect(() => {
    if (defaultQuery.trim()) setConfirmedQuery(defaultQuery.trim());
  }, [defaultQuery]);

  const isControlled = typeof activeTab === 'number';
  const currentTabRaw = isControlled ? (activeTab as number) : clickedTab;
  const safeTabIndex = clampIndex(currentTabRaw, effectiveTabs.length);

  const handleTabChange = (idx: number) => {
    const next = clampIndex(idx, effectiveTabs.length);
    if (isControlled) onTabChange?.(next);
    else setClickedTab(next);
  };

  const isCurrentTabEmpty = hasTabs
    ? (effectiveTabs[safeTabIndex]?.data?.length ?? 0) === 0
    : false;

  const sourceData = useMemo<BoardAccListItem[]>(() => {
    return hasTabs ? (effectiveTabs[safeTabIndex]?.data ?? []) : (data ?? []);
  }, [hasTabs, effectiveTabs, safeTabIndex, data]);

  const allTabData = useMemo<BoardAccListItem[]>(() => {
    if (!hasTabs) return data ?? [];
    return effectiveTabs.flatMap((t) => t?.data ?? []);
  }, [hasTabs, effectiveTabs, data]);

  // 검색어 하이라이트 및 필터링
  const highlighted = useMemo(() => {
    const q = confirmedQuery.trim();
    const lcq = q.toLowerCase();
    const searchingAll = q.length > 0;

    const matches = (it: BoardAccListItem) => {
      const labelText = nodeToText(it.label).toLowerCase();
      const contentText =
        typeof it.html === 'string' && it.html.length > 0
          ? htmlToText(it.html).toLowerCase()
          : nodeToText(it.content).toLowerCase();
      return q ? labelText.includes(lcq) || contentText.includes(lcq) : true;
    };

    const base = hasTabs && searchingAll ? allTabData : sourceData;
    const filtered = base.filter(matches);

    return filtered.map((it) => {
      const next: BoardAccListItem = { ...it };
      const id = String(it.id ?? 'noid');

      const labelInner = q ? highlightNode(it.label, q, `lbl-${id}`) : it.label;
      next.label = <span data-labelwrap={`lbl-${id}`}>{labelInner}</span>;
      next.updateDate = it.updateDate;

      if (typeof it.html === 'string' && it.html.length > 0) {
        const out = q ? highlightHTML(it.html, q) : it.html;
        next.content = (
          <div className={styles.contFromHtml} dangerouslySetInnerHTML={{ __html: out }} />
        );
        next.html = undefined;
      } else {
        next.content = q ? highlightNode(it.content, q, `cnt-${id}`) : it.content;
        next.html = undefined;
      }
      return next;
    });
  }, [sourceData, confirmedQuery, hasTabs, allTabData]);

  const total = highlighted.length;
  const hasSearched = confirmedQuery.trim().length > 0; // 검색 여부

  // 검색창 초기화
  const handleClear = () => {
    setQuery('');
    setConfirmedQuery('');
    if (hasTabs) {
      if (isControlled) onTabChange?.(initialTabRef.current);
      else setClickedTab(initialTabRef.current);
    }
    inputRef.current?.focus();
  };

  const listKey = `list-${hasSearched ? 's' : 'b'}-tab${safeTabIndex}-${confirmedQuery}`;

  const initialTotal = useMemo(() => {
    if (hasTabs) {
      return effectiveTabs.reduce((sum, t) => sum + (t?.data?.length ?? 0), 0);
    }
    return data?.length ?? 0;
  }, [hasTabs, effectiveTabs, data]);

  const isNoData = initialTotal === 0;

  /* ----------------------- 렌더링 ----------------------- */
  return (
    <div className={clsx(styles.root, className)}>
      {/* 검색창 영역 */}
      {(!isNoData || hasTabs) && (
        <div className={clsx(styles.search)} role="search">
          <Input
            ref={inputRef}
            type="search"
            value={query}
            title="검색어 입력"
            placeholder={placeholder}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                handleClear(); // ESC 키로 초기화
              } else if (e.key === 'Enter') {
                e.preventDefault();
                runSearch(); // Enter로 검색 실행
              }
            }}
            // 검색 전: 검색 아이콘 / 검색 후: 초기화(X) 아이콘
            suffix={
              hasSearched ? (
                <IconButton
                  name="close"
                  aria-label="검색 초기화"
                  onClick={handleClear}
                  size="large"
                />
              ) : (
                <IconButton
                  name="search"
                  aria-label="검색"
                  onClick={runSearch}
                  size="large"
                />
              )
            }
            size="large"
          />
          {/* 검색 전에는 탭 노출, 검색 후에는 숨김 */}
          {hasTabs && !hasSearched && (
            <Tabs
              data={tabLabels}
              variant="divid"
              activeTab={safeTabIndex}
              onTabChange={handleTabChange}
              className={styles.tabs}
            />
          )}
        </div>
      )}

      {/* 본문 영역 */}
      <div className={styles.body}>
        {/* 전체 데이터 없음 */}
        {isNoData ? (
          typeof noDataSlot === 'function' ? (
            noDataSlot(hasTabs ? safeTabIndex : -1, handleClear)
          ) : (
            (noDataSlot ?? <Empty title="등록된 게시글이 없어요." />)
          )
        ) : (
          <>
            {/* 검색 후 총 건수 표시 */}
            {hasSearched && (
              <div className={styles.total}>
                <Text as="span" size="4" color="gray2">
                  {totalTextFormatter(total)}
                </Text>
              </div>
            )}

            {/* 검색 여부에 따른 분기 처리 */}
            {hasSearched ? (
              total === 0 ? (
                // 검색 결과 없음
                typeof noResultSlot === 'function' ? (
                  noResultSlot(handleClear)
                ) : (
                  (noResultSlot ?? (
                    <Empty
                      title={`일치하는 검색 결과가 없어요.\n다른 키워드로 검색해 주세요.`}
                      buttons={
                        <Button type="button" variant="primary" onClick={handleClear}>
                          목록으로 이동
                        </Button>
                      }
                    />
                  ))
                )
              ) : (
                // 검색 결과 있음 → 리스트 출력
                <BoardAccList
                  key={listKey}
                  data={highlighted}
                  {...(listProps ?? {})}
                  canLoadMore
                  pageSize={pageSize}
                />
              )
            ) : hasTabs && isCurrentTabEmpty ? (
              // 검색 전 + 탭 있음 + 현재 탭이 비었을 때
              typeof noDataSlot === 'function' ? (
                noDataSlot(safeTabIndex, handleClear)
              ) : (
                (noDataSlot ?? (
                  <Empty
                    title="등록된 질문이 없어요."
                    buttons={
                      <Button type="button" variant="primary">
                        비즈니스 문의하기
                      </Button>
                    }
                  />
                ))
              )
            ) : (
              // 검색 전 + 현재 탭 데이터 있음 → 원본 리스트 출력
              <BoardAccList
                key={listKey}
                data={sourceData}
                {...(listProps ?? {})}
                canLoadMore
                pageSize={pageSize}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}