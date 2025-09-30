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
}

export function BoardAccList({
  data,
  className,
  canLoadMore,
  pageSize = 10,
  contentBottomSlot,
}: BoardAccListProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const usePaging = Boolean(canLoadMore);

  // 현재 보여줄 아이템 개수
  const [visibleCount, setVisibleCount] = useState<number>(usePaging ? pageSize : data.length);

  // data가 바뀌면 초기화
  useEffect(() => {
    setVisibleCount(usePaging ? pageSize : data.length);
  }, [data, usePaging, pageSize]);

  /**
   * table 태그 감싸기 처리
   * (에디터 본문에 table이 있을 경우 가로스크롤 허용을 위해 div.scrollX로 감쌈)
   */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.querySelectorAll('table').forEach((table) => {
      if (table.parentElement?.classList.contains(styles.scrollX)) return; // 이미 감싼 경우 제외

      const wrapper = document.createElement('div');
      wrapper.className = styles.scrollX; // 모듈 CSS 클래스 적용
      table.replaceWith(wrapper);
      wrapper.appendChild(table);
    });
  }, [data, visibleCount]);

  // 첨부파일 다운로드 핸들러 (퍼블 단계 최소 구현)
  function handleDownload(url: string, filename?: string) {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    if (filename) link.download = filename;
    link.click();
  }

  // 데이터 없음
  if (!data || data.length === 0) {
    return (
      <div ref={rootRef} className={clsx(styles.root, className)}>
        <Empty title="등록된 게시글이 없어요." />
      </div>
    );
  }

  // 실제 렌더링할 목록 데이터
  const listData = usePaging ? data.slice(0, visibleCount) : data;
  const showMore = usePaging && listData.length < data.length;

  // 아코디언 데이터 매핑
  const mapped = listData.map((item, idx) => {
    const accId = String(item.id ?? `ac-${idx + 1}`);

    // 아코디언 헤더 부분 (타이틀 + 날짜)
    const labelNode = (
      <div className={styles.title}>
        <div className={styles.tit}>
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

    // 본문 영역 (HTML or 직접 전달한 content)
    const contentBody = item.html ? (
      <div className={styles.cont} dangerouslySetInnerHTML={{ __html: item.html }} />
    ) : (
      <div className={styles.cont}>{item.content}</div>
    );

    // 첨부파일 영역
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

    // 컨텐츠 하단 슬롯 노드 계산 (함수면 item, idx 전달)
    const contentBottomSlotNode =
      typeof contentBottomSlot === 'function' ? contentBottomSlot(item, idx) : contentBottomSlot;

    // 전체 컨텐츠 구성 (본문 + 첨부파일 + 안내문구)
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
      {/* 아코디언 */}
      <Accordion variant="info" data={mapped} className={styles.accVars} />
      {/* 더보기 버튼 */}
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
}

export default BoardAccList;
