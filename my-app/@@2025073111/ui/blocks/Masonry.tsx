'use client';

// 라이브러리
import { useEffect, useRef, useState, useCallback, use } from 'react';
// 스타일
import styles from './Masonry.module.scss';
import clsx from 'clsx';

interface MasonryProps {
  /** Masonry 레이아웃의 열 개수 */
  columns: number;
  /** 자식 요소 간의 간격 */
  gutter?: number;
  /** 정렬할 자식 요소 */
  children?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

export const Masonry = ({ columns, gutter = 8, children, className }: MasonryProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [items, setItems] = useState<HTMLElement[]>([]);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const calculateMasonry = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemEls = Array.from(container.children) as HTMLElement[];
    setItems(itemEls);

    const columnWidth = (100 - ((gutter * (columns - 1)) / container.offsetWidth) * 100) / columns;
    const columnHeights = new Array(columns).fill(0);

    for (let i = 0; i < itemEls.length; i++) {
      const item = itemEls[i];
      // 가장 높이가 낮은 컬럼 찾기
      const minHeightColIdx = columnHeights.indexOf(Math.min(...columnHeights));

      item.style.position = 'absolute';
      item.style.width = `${columnWidth}%`;
      item.style.left = `${minHeightColIdx * (columnWidth + (gutter / container.offsetWidth) * 100)}%`;
      item.style.top = `${columnHeights[minHeightColIdx]}px`;

      // 열 총 높이 업데이트 (아이템 높이 + gutter)
      columnHeights[minHeightColIdx] += item.offsetHeight + gutter;
    }

    setContainerHeight(Math.max(...columnHeights) - gutter); // 마지막 열 높이에서 gutter 제거
  }, [columns, gutter]);

  // 초기 레이아웃 계산
  useEffect(() => {
    if (!children || columns <= 0) return;
    const timer = setTimeout(() => calculateMasonry(), 0);
    return () => clearTimeout(timer);
  }, [children, columns]);

  // 아이템 크기 변경 감지
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => calculateMasonry(), 150);
    });

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [items]);

  // css 변수 설정
  const masonryStyles = {
    ...(columns && { '--grid-columns': columns }),
    ...(gutter && { '--grid-gutter': `${gutter}px` }),
    height: containerHeight || 'auto',
  } as React.CSSProperties;

  // 스켈레톤 컴포넌트 추가
  const Skeleton = () => {
    const heights = [90, 140, 120];

    return (
      <div className={styles.skeletons} style={{ aspectRatio: `1 / ${2.8 / columns}` }}>
        {Array.from({ length: columns * 2 }, (_, idx) => (
          <div
            key={`skeleton-${idx}`}
            className={styles.skeleton}
            style={{
              maxWidth: `calc((100% - ${gutter * (columns - 1)}px) / ${columns})`,
              aspectRatio: `1 / ${heights[idx % 3] / 100}`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {containerHeight === 0 ? <Skeleton /> : null}

      <section
        className={clsx(styles.root, className)}
        data-masonry={containerHeight > 0 ? 'true' : 'false'}
        style={masonryStyles}
        ref={containerRef}
      >
        {children}
      </section>
    </>
  );
};
