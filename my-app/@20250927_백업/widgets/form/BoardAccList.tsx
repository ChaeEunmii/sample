'use client';

import React, { useState, useEffect, useRef } from 'react';
import { formatDate } from '@shared/utils/ui';
import clsx from 'clsx';
import { Accordion, Heading, Text, Icon, Button, Empty } from '@shared/ui';
import styles from './BoardAccList.module.scss';

/**
 * 게시판 아코디언 목록 컴포넌트
 */

// 파일
export type SellerFile = {
  id?: string | number;
  name: string;
  href?: string; // 링크 다운로드가 가능한 경우 사용
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

// 아코디언 아이템 타입 정의
export type BoardAccListItem = {
  /** 고유 ID */
  id?: string;
  /** 카테고리 */
  category?: React.ReactNode;
  /** 상단 타이틀 텍스트/노드 */
  label: React.ReactNode;
  /** 보조 정보(날짜 등) */
  updateDate?: string;
  /** 에디터에서 내려오는 HTML 문자열 */
  html?: string;
  /** 직접 작성한 노드 전달 시 */
  content?: React.ReactNode;
  /** 첨부파일 */
  files?: SellerFile[];
  /** 상단 고정 여부 */
  isPinned?: boolean;
};

export interface BoardAccListProps {
  /** 데이터 목록 배열 */
  data: BoardAccListItem[];
  /** 추가적인 클래스 */
  className?: string;
  /** 더보기 내부 처리 사용 여부 */
  canLoadMore?: boolean;
  /** 더보기 단위(기본 10) */
  pageSize?: number;
  /** 아코디언 컨텐츠 하단 슬롯 (함수면 item, index) */
  contentBottomSlot?:
    | React.ReactNode
    | ((item: BoardAccListItem, index: number) => React.ReactNode);
  /** 아코디언 오픈시 아이템을 화면 상단으로 스크롤할지 여부(기본: true) */
  scrollOnOpen?: boolean;
}

export const BoardAccList = ({
  data,
  className,
  canLoadMore,
  pageSize = 10,
  contentBottomSlot,
  scrollOnOpen = false,
}: BoardAccListProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const usePaging = Boolean(canLoadMore);

  const [visibleCount, setVisibleCount] = useState<number>(usePaging ? pageSize : data.length);
  const [openId, setOpenId] = useState<number | null>(null); // 열린 아코디언 ID

  // data 변경 시 visibleCount 초기화
  useEffect(() => {
    setVisibleCount(usePaging ? pageSize : data.length);
  }, [data, usePaging, pageSize]);

  // table 감싸기 처리
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.querySelectorAll('table').forEach((table) => {
      if (table.parentElement?.classList.contains(styles.scrollX)) return;

      const wrapper = document.createElement('div');
      wrapper.className = styles.scrollX;
      table.replaceWith(wrapper);
      wrapper.appendChild(table);
    });
  }, [data, visibleCount]);

  // 열린 아이템 스크롤 처리 (고정 헤더 고려)
  useEffect(() => {
    if (openId === null) return;
    if (!scrollOnOpen) return; // ← 프롭스가 true일 때만 실행

    setTimeout(() => {
      const el = document.getElementById(`ac-${openId}`);
      if (!el) return;

      const header = document.getElementById('header');
      const headerHeight = header?.clientHeight || 0;

      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - headerHeight;

      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }, 300); // 아코디언 애니메이션 고려
  }, [openId, scrollOnOpen]);

  // 첨부파일 다운로드
  const handleDownload = (url: string, filename?: string) => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    if (filename) link.download = filename;
    link.click();
  };

  // 데이터 없으면
  if (!data || data.length === 0) {
    return (
      <div ref={rootRef} className={clsx(styles.root, className)}>
        <Empty title="등록된 게시글이 없어요." />
      </div>
    );
  }

  const listData = usePaging ? data.slice(0, visibleCount) : data;
  const showMore = usePaging && listData.length < data.length;

  // 아코디언 데이터 매핑
  const mapped = listData.map((item, idx) => {
    const accNum = idx; // number
    const accId = `ac-${accNum}`; // DOM id

    const labelNode = (
      <div className={styles.title}>
        {item.category && (
          <Text as="span" size="3" color="gray3" weight="regular">
            {item.category}
          </Text>
        )}
        <div className={styles.tit}>
          {item.isPinned && <Icon name="pinFilled" size="small" className="ncp-mr-xxs" />}
          <Heading as="strong" className={styles.head}>
            {item.label}
          </Heading>
        </div>
        {item.updateDate && (
          <Text as="span" size="3" color="gray3" weight="regular">
            {formatDate(item.updateDate, 'dot', true)}
          </Text>
        )}
      </div>
    );

    const contentBody = item.html ? (
      <div className={styles.cont} dangerouslySetInnerHTML={{ __html: item.html }} />
    ) : (
      <div className={styles.cont}>{item.content}</div>
    );

    const validFiles = (item.files ?? []).filter(
      (f) => f && String(f.name ?? '').trim().length > 0
    );
    const filesBody = validFiles.length > 0 && (
      <div className={styles.filesSec}>
        <Heading as="strong" size="3" weight="semibold" color="black">
          첨부파일
        </Heading>
        <ul className={styles.files}>
          {validFiles.map((file, fIdx) => (
            <li key={file.id ?? `${accId}-file-${fIdx}`}>
              {file.href ? (
                <button
                  type="button"
                  onClick={() => handleDownload(file.href!, file.name)}
                  aria-label={`${file.name} 다운로드`}
                  className={styles.file}
                >
                  {file.name}
                  <Icon name="download" size="small" />
                </button>
              ) : (
                <button type="button" onClick={(e) => file.onClick?.(e)} className={styles.file}>
                  {file.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );

    const contentBottomSlotNode =
      typeof contentBottomSlot === 'function' ? contentBottomSlot(item, idx) : contentBottomSlot;

    const contentNode = (
      <div className={styles.content}>
        {contentBody}
        {filesBody}
        {contentBottomSlotNode && (
          <div className={styles.contentBottom}>{contentBottomSlotNode}</div>
        )}
      </div>
    );

    return { id: accId, label: labelNode, content: contentNode };
  });

  return (
    <div ref={rootRef} className={clsx(styles.root, className)}>
      <Accordion
        variant="info"
        iconSize="small"
        data={mapped}
        openId={openId}
        onOpenChange={(id) => {
          if (typeof id !== 'number') {
            setOpenId(null);
            return;
          }
          setOpenId(id); // useEffect에서 스크롤 처리
        }}
        className={styles.accVars}
      />

      {showMore && (
        <div className={styles.more}>
          <Button
            size="small"
            suffixIcon="arrowDown"
            variant="tertiary"
            round
            onClick={() => setVisibleCount((c) => Math.min(data.length, c + pageSize))}
          >
            더보기
          </Button>
        </div>
      )}
    </div>
  );
};

BoardAccList.displayName = 'BoardAccList';
