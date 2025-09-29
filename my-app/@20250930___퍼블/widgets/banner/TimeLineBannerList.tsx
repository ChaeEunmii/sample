'use client';

import { useState } from 'react';
import { Button } from '@shared/ui';
import { TimeLineBanner, TimeLineBannerProps } from '@widgets/banner/TimeLineBanner';
import clsx from 'clsx';
import styles from './TimeLineBannerList.module.scss';

export interface TimeLineBannerListProps {
  data: TimeLineBannerProps[];
  className?: string;
}

export const TimeLineBannerList = ({ data, className }: TimeLineBannerListProps) => {
  const STEP = 4; // 더보기 클릭 시 늘어나는 개수
  const INITIAL = 8; // 최초 노출 개수

  const [visibleCount, setVisibleCount] = useState(INITIAL);

  const handleMore = () => {
    setVisibleCount((prev) => prev + STEP);
  };

  const hasMore = visibleCount < data.length;

  return (
    <>
      <ul className={clsx(styles.root, className)}>
        {data.slice(0, visibleCount).map((item) => (
          <li
            key={item.id}
            className={clsx(styles.item, item.status === 'active' && styles.active)}
          >
            <TimeLineBanner {...item} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <div className="ncp-mt-m ncp-text-center">
          <Button suffixIcon="arrowDown" variant="tertiary" size="small" round onClick={handleMore}>
            더보기
          </Button>
        </div>
      )}
    </>
  );
};

TimeLineBannerList.displayName = 'TimeLineBannerList';
