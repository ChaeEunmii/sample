'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IconButton, Text, Input, Empty, Tabs } from '@shared/ui';
import SellerAccordionList, {
  type SellerAccordionItem,
  type SellerAccordionListProps,
} from './SellerAccordionList';
import clsx from 'clsx';
import styles from './SellerAccordionSearch.module.scss';

export interface SellerAccordionSearchLocalProps {
  /** 데이터 목록 (탭이 없을 때 사용) */
  data?: SellerAccordionItem[];
  /** (옵션) 탭 + 탭별 데이터 */
  tabs?: { label: React.ReactNode; data: SellerAccordionItem[] }[];
  /** (옵션) 초기 탭 인덱스 */
  defaultTabIndex?: number;
  /** 초기 검색어 */
  defaultQuery?: string;
  /** 검색창 placeholder */
  placeholder?: string;
  /** 검색 결과 총 건수 표시 포맷터 */
  totalTextFormatter?: (n: number) => React.ReactNode;
  /** 입력 디바운스 시간(ms) */
  debounceMs?: number;
  /** 더보기 단위 (초기 노출 개수도 동일) */
  pageSize?: number;
  /** 검색 결과 없을 때 대체 UI */
  noResultSlot?: React.ReactNode;
  /** 전달할 추가 props */
  listProps?: Omit<SellerAccordionListProps, 'data'>;
  /** 추가 클래스명 */
  className?: string;
}

/* ===== utils ===== */
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

// ReactNode 안에서 검색어(q)를 찾아 <mark>로 감싸 반환하는 함수
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

/* ===== component ===== */
export default function SellerAccordionSearch({
  data,
  tabs,
  defaultTabIndex = 0,
  defaultQuery = '',
  placeholder = '검색어를 입력하세요',
  totalTextFormatter = (n) => <>총 {n}건의 검색결과</>,
  debounceMs = 150,
  pageSize,
  noResultSlot,
  listProps,
  className,
}: SellerAccordionSearchLocalProps) {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색 입력창 DOM 접근용 ref
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null); // 디바운스 타이머 ref
  const initialTabRef = useRef(0); // 검색 초기화 시 복원할 탭 인덱스

  const [query, setQuery] = useState(defaultQuery); // 입력 중인 검색어 상태
  const [debounced, setDebounced] = useState(defaultQuery); // 디바운스로 확정된 검색어 상태

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

  const [clickedTab, setClickedTab] = useState(() =>
    clampIndex(defaultTabIndex, effectiveTabs.length)
  );

  // tabs 변동 시 인덱스/초기값 업데이트
  useEffect(() => {
    const safe = clampIndex(defaultTabIndex, effectiveTabs.length);
    initialTabRef.current = safe;
    setClickedTab((prev) => clampIndex(prev, effectiveTabs.length));
  }, [defaultTabIndex, effectiveTabs.length]);

  // query 입력값을 debounceMs(ms) 지연 후 debounced 로 반영
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDebounced(query), debounceMs);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [query, debounceMs]);

  // 현재 데이터 소스 (탭이 있으면 탭 데이터, 없으면 단일 data)
  const safeTabIndex = clampIndex(clickedTab, effectiveTabs.length);

  // 현재 선택된 탭 데이터(없으면 단일 data) 메모이제이션
  const sourceData = useMemo<SellerAccordionItem[]>(() => {
    return hasTabs ? (effectiveTabs[safeTabIndex]?.data ?? []) : (data ?? []);
  }, [hasTabs, effectiveTabs, safeTabIndex, data]);

  // 검색어 하이라이트 및 필터링 처리
  const highlighted = useMemo(() => {
    const q = debounced.trim();
    const lcq = q.toLowerCase();

    const matches = (it: SellerAccordionItem) => {
      const labelText = nodeToText(it.label).toLowerCase();
      const contentText =
        typeof it.html === 'string' && it.html.length > 0
          ? htmlToText(it.html).toLowerCase()
          : nodeToText(it.content).toLowerCase();
      return q ? labelText.includes(lcq) || contentText.includes(lcq) : true;
    };

    const filtered = sourceData.filter(matches);

    return filtered.map((it) => {
      const next: SellerAccordionItem = { ...it };
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
  }, [sourceData, debounced]);

  // 검색 결과 개수
  const total = highlighted.length;
  // 검색 여부 (디바운스된 값 기준)
  const hasSearched = debounced.trim().length > 0;

  // 검색창 초기화 함수: 검색어/디바운스 리셋 + 탭도 초기 인덱스로 복원
  const handleClear = () => {
    setQuery('');
    setDebounced('');
    if (hasTabs) setClickedTab(initialTabRef.current);
    inputRef.current?.focus();
  };

  // 리스트 리렌더링 키 (탭 인덱스를 포함해 탭 전환 시 초기화)
  const listKey = `list-${hasSearched ? 's' : 'b'}-tab${safeTabIndex}-${debounced}`;

  return (
    <section className={clsx(styles.root, className)}>
      <div className={clsx(styles.search)}>
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
            }
          }}
          suffix={
            <IconButton name="search" aria-label="검색" onClick={() => setDebounced(query)} />
          }
          size="large"
        />
        {/* 검색 중/결과 표시 중에는 탭 숨김, 검색 비활성화 시에만 탭 표시 */}
        {hasTabs && !hasSearched && (
          <Tabs
            data={tabLabels}
            variant="divid"
            activeTab={safeTabIndex}
            onTabChange={(idx) => setClickedTab(clampIndex(idx, effectiveTabs.length))}
            className={styles.tabs}
          />
        )}
        {/* 겸색결과 있는경우  */}
        {hasSearched && (
          <div className={styles.total}>
            <Text as="span" size="4" color="gray2">
              {totalTextFormatter(total)}
            </Text>
          </div>
        )}
      </div>

      <div className={styles.body}>
        {total === 0 ? (
          // 검색 결과 없음 처리
          (noResultSlot ?? (
            <Empty title={`일치하는 검색 결과가 없어요.\n다른 키워드로 검색해 주세요.`} />
          ))
        ) : (
          <SellerAccordionList
            key={listKey}
            data={highlighted}
            {...(listProps ?? {})}
            canLoadMore
            pageSize={pageSize}
          />
        )}
      </div>
    </section>
  );
}
