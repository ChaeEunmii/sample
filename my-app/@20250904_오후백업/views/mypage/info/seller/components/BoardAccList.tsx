'use client';

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Accordion, Heading, Text, Flag, Icon, Button, Empty } from '@shared/ui';
import styles from './BoardAccList.module.scss';

// 플래그 상태 타입
type SellerFlagType = 'hot' | 'new';

// 파일
export type SellerFile = {
  id?: string | number;
  name: string;
  href?: string; // 링크 다운로드가 가능한 경우 사용
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export type BoardAccListItem = {
  /** 고유 ID */
  id?: string;
  /** 플래그 설정 */
  flags?: SellerFlagType | readonly SellerFlagType[];
  /** 상단 타이틀 텍스트/노드 */
  label: React.ReactNode;
  /** 보조 정보(날짜 등) */
  updateDate?: React.ReactNode;
  /** 에디터에서 내려오는 HTML 문자열 */
  html?: string;
  /** 직접 작성한 노드 전달 시 */
  content?: React.ReactNode;
  /** 첨부파일 */
  files?: SellerFile[];
  /** 안내사항 */
  notice?: React.ReactNode;
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
}

export function BoardAccList({ data, className, canLoadMore, pageSize = 5 }: BoardAccListProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const usePaging = Boolean(canLoadMore);

  // 내부 더보기 상태
  const [visibleCount, setVisibleCount] = useState<number>(usePaging ? pageSize : data.length);

  // data가 바뀌면 초기화
  useEffect(() => {
    setVisibleCount(usePaging ? pageSize : data.length);
  }, [data, usePaging, pageSize]);

  // table태그 가로스크롤을 위해 table태그 찾아서 div 클래스로 감싸기
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
  }, [data]);

  // 데이터 없음
  if (!data || data.length === 0) {
    return (
      <div ref={rootRef} className={clsx(styles.root, className)}>
        <Empty title="등록된 게시글이 없어요." />
      </div>
    );
  }

  const listData = usePaging ? data.slice(0, visibleCount) : data;
  const showMore = usePaging && listData.length < data.length;

  const mapped = listData.map((item, idx) => {
    const accId = String(item.id ?? `ac-${idx + 1}`);

    const types: SellerFlagType[] = Array.isArray(item.flags)
      ? item.flags
      : item.flags
        ? [item.flags]
        : [];

    const flagsArr = [];
    if (types.includes('hot')) flagsArr.push({ color: 'green2' as const, label: '인기' });
    if (types.includes('new')) flagsArr.push({ color: 'red2' as const, label: '신규' });

    const labelNode = (
      <div className={styles.title}>
        <div className={styles.tit}>
          {flagsArr.length > 0 && <Flag data={flagsArr} radius="br" />}
          <Heading as="strong" className={styles.head}>
            {item.label}
          </Heading>
        </div>
        {item.updateDate && (
          <div className={styles.desc}>
            <Text as="span" size="3" color="gray3" weight="regular">
              {item.updateDate}
            </Text>
          </div>
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
                <a href={file.href} onClick={(e) => file.onClick?.(e)} className={styles.file}>
                  {file.name}
                  <Icon name="download" size="small" />
                </a>
              ) : (
                <button onClick={(e) => file.onClick?.(e)} className={styles.file}>
                  {file.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );

    const contentNode = (
      <div className={styles.content}>
        {contentBody}
        {filesBody}
        {item.notice && (
          <div className={styles.infoTxt}>
            <Icon name="info" size="small" />
            <div className={styles.txt}>{item.notice}</div>
          </div>
        )}
      </div>
    );

    return { id: accId, label: labelNode, content: contentNode };
  });

  return (
    <div ref={rootRef} className={clsx(styles.root, className)}>
      <Accordion variant="info" data={mapped} className={styles.accVars} />
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
