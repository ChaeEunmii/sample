'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAlert } from '@shared/contexts/AlertContext';
import { IconButton, Text, Input, Empty, Tabs, Button } from '@shared/ui';
import BoardAccList, { type BoardAccListItem, type BoardAccListProps } from './BoardAccList';
import clsx from 'clsx';
import styles from './BoardAccSearch.module.scss';

/**
 * 게시판 아코디언 목록 검색 컴퍼넌트
 *
 */

export interface BoardAccSearchProps {
  /** 데이터 목록 (탭이 없을 때 사용) */
  data?: BoardAccListItem[];
  /** (옵션) 탭 + 탭별 데이터 */
  tabs?: { label: React.ReactNode; data: BoardAccListItem[] }[];
  /** (옵션) 초기 탭 인덱스 */
  defaultTabIndex?: number;
  /** (옵션) 외부 제어용 활성 탭 인덱스 */
  activeTab?: number;
  /** (옵션) 외부 제어용 탭 변경 콜백 */
  onTabChange?: (index: number) => void;
  /** 초기 검색어 */
  defaultQuery?: string;
  /** 검색창 placeholder */
  placeholder?: string;
  /** 검색 결과 총 건수 표시 포맷터 */
  totalTextFormatter?: (n: number) => React.ReactNode;
  /** 더보기 단위 (초기 노출 개수도 동일) */
  pageSize?: number;
  /** 검색 결과가 없을 때 보여줄 UI (직접 노드 전달 or reset 함수 받아서 반환) */
  noResultSlot?: React.ReactNode | ((reset: () => void) => React.ReactNode);
  /** 데이터가 없을 때(빈 배열일 때) 표시할 대체 UI */
  noDataSlot?: React.ReactNode | ((tabIndex: number, reset: () => void) => React.ReactNode);
  /** 전달할 추가 props */
  listProps?: Omit<BoardAccListProps, 'data'>;
  /** 추가 클래스명 */
  className?: string;
}

/* ----------------------- utils ----------------------- */
// 정규식 특수문자를 이스케이프 처리해서 안전한 패턴 문자열로 변환
const escapeRegExp = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

// HTML 문자열에서 태그를 제거하고 순수 텍스트만 추출
const htmlToText = (html: string) =>
  (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// ReactNode에서 재귀적으로 텍스트만 추출
const nodeToText = (node: React.ReactNode): string => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join(' ');
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return nodeToText(node.props?.children);
  }
  return '';
};

// Tabs에 넘길 label은 string이어야 하므로 ReactNode → string 변환
const toPlainLabel = (label: React.ReactNode): string => {
  if (typeof label === 'string' || typeof label === 'number') return String(label);
  const txt = nodeToText(label).trim();
  return txt || '';
};

// HTML 문자열에서 검색어(q)를 찾아 <mark>로 감싸주는 함수
const highlightHTML = (html: string, q: string) =>
  !q
    ? html
    : html.replace(new RegExp(escapeRegExp(q), 'gi'), (m) => `<mark class="marking">${m}</mark>`);

// ReactNode 안에서 검색어(q)를 찾아 <mark>로 감싸주는 함수
const highlightNode = (node: React.ReactNode, q: string, kp = 'mk'): React.ReactNode => {
  // 검색어 없거나, 값이 null/undefined/boolean이면 그대로 반환
  if (!q || node == null || typeof node === 'boolean') return node;

  // 문자열이나 숫자면
  if (typeof node === 'string' || typeof node === 'number') {
    const parts = String(node).split(new RegExp(`(${escapeRegExp(q)})`, 'gi')); // 검색어 기준으로 잘라서
    // 검색어 부분은 <mark>로 감싸고, 나머지는 그대로 둠
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
  // 배열이면 → 안의 값들을 하나씩 다시 highlightNode로 처리
  if (Array.isArray(node)) {
    return node.map((c, i) => (
      <React.Fragment key={`${kp}-${i}`}>{highlightNode(c, q, `${kp}-${i}`)}</React.Fragment>
    ));
  }
  // 리액트 엘리먼트면 → children을 꺼내서 다시 highlightNode로 처리
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode }>;
    const kids =
      'children' in el.props ? highlightNode(el.props.children, q, kp) : el.props?.children;
    // 원래 엘리먼트를 복사(clone)해서 children만 바꿔줌
    return React.cloneElement(el, el.props, kids);
  }

  return node; // 그 외는 그대로 반환
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
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색 입력창 DOM 접근용 ref
  const initialTabRef = useRef(0); // 검색 초기화 시 복원할 탭 인덱스

  const [query, setQuery] = useState(defaultQuery); // 입력 중인 검색어 상태
  const [debounced, setDebounced] = useState(defaultQuery); // 디바운스로 확정된 검색어 상태

  // 공통 검색 실행 함수 (버튼/Enter에서 즉시 호출)
  const runSearch = () => {
    const q = query.trim();
    if (!q) {
      showAlert({
        message: '검색어를 입력해 주세요',
        onConfirm: () => console.log('확인 클릭'),
        showCancel: false,
        labelProps: { confirm: '확인' },
      });
      // inputRef.current?.focus();
      return;
    }
    setDebounced(q);
  };

  /* ----------------------- 탭 구성 (라벨/데이터) ----------------------- */
  const hasTabs = Array.isArray(tabs) && tabs.length > 0;

  // Tabs 컴포넌트에 전달할 데이터 (label: string 필수)
  const tabLabels = useMemo(
    () => (hasTabs ? tabs!.map((t) => ({ label: toPlainLabel(t.label) })) : []),
    [hasTabs, tabs]
  );

  const effectiveTabs = useMemo(() => (hasTabs ? tabs! : []), [hasTabs, tabs]);

  // 기본/안전 인덱스 계산
  const clampIndex = (idx: number, len: number) => Math.min(Math.max(idx, 0), Math.max(len - 1, 0));

  // 내부 상태로 사용할 현재 탭 인덱스를 초기화
  const [clickedTab, setClickedTab] = useState(() =>
    clampIndex(defaultTabIndex, effectiveTabs.length)
  );

  // tabs 변동 시 인덱스/초기값 업데이트
  useEffect(() => {
    const safe = clampIndex(defaultTabIndex, effectiveTabs.length);
    initialTabRef.current = safe;
    setClickedTab((prev) => clampIndex(prev, effectiveTabs.length));
  }, [defaultTabIndex, effectiveTabs.length]);

  // 컴포넌트 초기 렌더 시, 기본 검색어(defaultQuery)가 있으면 즉시 검색어 상태(debounced)에 반영
  useEffect(() => {
    if (defaultQuery.trim()) setDebounced(defaultQuery.trim());
  }, []);

  // 컨트롤 모드 여부
  const isControlled = typeof activeTab === 'number';
  // 현재 탭 인덱스(컨트롤이면 activeTab, 아니면 내부 상태)
  const currentTabRaw = isControlled ? (activeTab as number) : clickedTab;
  // 현재 데이터 소스 (탭이 있으면 탭 데이터, 없으면 단일 data)
  const safeTabIndex = clampIndex(currentTabRaw, effectiveTabs.length);

  // 탭 변경 핸들러(컨트롤이면 onTabChange 호출, 아니면 내부 setState)
  const handleTabChange = (idx: number) => {
    const next = clampIndex(idx, effectiveTabs.length);
    if (isControlled) onTabChange?.(next);
    else setClickedTab(next);
  };

  // 탭이 비어있는지 확인
  const isCurrentTabEmpty = hasTabs
    ? (effectiveTabs[safeTabIndex]?.data?.length ?? 0) === 0
    : false;

  // 현재 선택된 탭 데이터(없으면 단일 data) 메모이제이션
  const sourceData = useMemo<BoardAccListItem[]>(() => {
    return hasTabs ? (effectiveTabs[safeTabIndex]?.data ?? []) : (data ?? []);
  }, [hasTabs, effectiveTabs, safeTabIndex, data]);

  // 모든 탭 데이터를 합친 배열 (검색 시 사용)
  const allTabData = useMemo<BoardAccListItem[]>(() => {
    if (!hasTabs) return data ?? [];
    return effectiveTabs.flatMap((t) => t?.data ?? []);
  }, [hasTabs, effectiveTabs, data]);

  // 검색어 하이라이트 및 필터링 처리
  const highlighted = useMemo(() => {
    const q = debounced.trim();
    const lcq = q.toLowerCase();
    const searchingAll = q.length > 0; // 검색 중 여부(빈 문자열 아님)

    const matches = (it: BoardAccListItem) => {
      const labelText = nodeToText(it.label).toLowerCase();
      const contentText =
        typeof it.html === 'string' && it.html.length > 0
          ? htmlToText(it.html).toLowerCase()
          : nodeToText(it.content).toLowerCase();
      return q ? labelText.includes(lcq) || contentText.includes(lcq) : true;
    };

    // 핵심: 검색 중이면 전체 탭(allTabData), 아니면 기존(sourceData)
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
  }, [sourceData, debounced, hasTabs, allTabData]);

  // 검색 결과 개수
  const total = highlighted.length;
  // 검색 여부 (디바운스된 값 기준)
  const hasSearched = debounced.trim().length > 0;

  // 검색창 초기화 함수: 검색어/디바운스 리셋 + 탭도 초기 인덱스로 복원
  const handleClear = () => {
    setQuery('');
    setDebounced('');
    if (hasTabs) {
      if (isControlled) {
        onTabChange?.(initialTabRef.current);
      } else {
        setClickedTab(initialTabRef.current);
      }
    }
    // inputRef.current?.focus();
  };

  // 리스트 리렌더링 키 (탭 인덱스를 포함해 탭 전환 시 초기화)
  const listKey = `list-${hasSearched ? 's' : 'b'}-tab${safeTabIndex}-${debounced}`;

  // 전체 데이터 건수(탭 합계 또는 단일 data) → 0이면 noData 상태
  const initialTotal = useMemo(() => {
    if (hasTabs) {
      return effectiveTabs.reduce((sum, t) => sum + (t?.data?.length ?? 0), 0);
    }
    return data?.length ?? 0;
  }, [hasTabs, effectiveTabs, data]);

  const isNoData = initialTotal === 0; //noData

  return (
    <div className={clsx(styles.root, className)}>
      {(!isNoData || hasTabs) && (
        <div className={clsx(styles.search)} role="search">
          <Input
            ref={inputRef}
            type="search"
            value={query}
            title="검색어 입력"
            placeholder={placeholder}
            clearable
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                handleClear();
              } else if (e.key === 'Enter') {
                e.preventDefault();
                runSearch(); // Enter로 검색
              }
            }}
            suffix={<IconButton name="search" aria-label="검색" onClick={runSearch} size="large" />}
            size="large"
          />
          {/* 검색 중/결과 표시 중에는 탭 숨김, 검색 비활성화 시에만 탭 표시 */}
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

      <div className={styles.body}>
        {/* 전체 데이터가 아예 없는 경우 (탭까지 전부 0건) */}
        {isNoData ? (
          // noDataSlot이 함수면 실행, JSX면 그대로, 없으면 기본 Empty
          typeof noDataSlot === 'function' ? (
            noDataSlot(hasTabs ? safeTabIndex : -1, handleClear)
          ) : (
            (noDataSlot ?? <Empty title="등록된 게시글이 없어요." />)
          )
        ) : (
          <>
            {/* 검색 중일 때 총 건수 표시 */}
            {hasSearched && (
              <div className={styles.total}>
                <Text as="span" size="4" color="gray2">
                  {totalTextFormatter(total)}
                </Text>
              </div>
            )}
            {/* 검색 여부에 따라 분기 */}
            {hasSearched ? (
              // 검색 중인데 결과가 0건일 때
              total === 0 ? (
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
                // 검색 결과가 있으면 하이라이트된 데이터 출력
                <BoardAccList
                  key={listKey}
                  data={highlighted}
                  {...(listProps ?? {})}
                  canLoadMore
                  pageSize={pageSize}
                />
              )
            ) : hasTabs && isCurrentTabEmpty ? (
              // 검색 아님 + 탭 있음 + 현재 탭이 비어있을 때
              typeof noDataSlot === 'function' ? (
                noDataSlot(safeTabIndex, handleClear)
              ) : (
                (noDataSlot ?? (
                  <Empty
                    title="등록된 질문이 없어요."
                    buttons={
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          /* 페이지에서 라우팅 */
                        }}
                      >
                        비즈니스 문의하기
                      </Button>
                    }
                  />
                ))
              )
            ) : (
              // 검색 아님 + 현재 탭에 데이터가 있을 때 (원본 sourceData 출력)
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
