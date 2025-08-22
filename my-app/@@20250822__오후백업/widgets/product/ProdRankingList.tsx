import React from 'react';
import { Icon } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from './ProdCardList';
import styles from './ProdRankingList.module.scss';
import clsx from 'clsx';

// 랭킹 등락 타입
export type RankingChangeType = 'up' | 'down' | 'same' | 'new';

// 랭킹 정보 타입
export interface RankingInfo {
  /** 현재 랭킹 */
  rank: number;
  /** 등락 타입 */
  change?: RankingChangeType;
  /** 등락 수치 (선택사항) */
  changeValue?: number;
}

// ProdCardItemProps에 랭킹 정보를 추가한 타입
export type ProdRankingItemProps = ProdCardItemProps & {
  /** 랭킹 정보 */
  ranking: RankingInfo;
};

interface ProdRankingListProps {
  /** 랭킹 상품 데이터 배열 */
  data: ProdRankingItemProps[];
  /** 등락 표시 여부 */
  showChange?: boolean;
  /** ProdCardList의 모든 props */
  [key: string]: any;
}

export const ProdRankingList = ({
  data,
  showChange = false,
  className,
  ...prodCardListProps
}: ProdRankingListProps) => {
  // 랭킹 배지 렌더링
  const renderRankingFlag = (ranking: RankingInfo) => {
    const { rank, change, changeValue } = ranking;

    const getChangeIcon = () => {
      if (!showChange) return null;

      switch (change) {
        case 'up':
          return 'up';
        case 'down':
          return 'down';
        case 'same':
          return 'same';
        case 'new':
          return 'new';
        default:
          return null;
      }
    };

    const changeIcon = getChangeIcon();

    return (
      <div className={styles.flag}>
        {/* 랭킹 숫자 */}
        <strong className={styles.rank}>{rank}</strong>

        {/* 등락 표시 */}
        {showChange && change && changeIcon && (
          <span className={clsx(styles.change, styles[change])}>
            {change !== 'same' && changeValue}
          </span>
        )}
      </div>
    );
  };

  // 모든 아이템에 랭킹 플래그를 추가한 데이터 생성
  const dataWithRanking: ProdCardItemProps[] = data.map((item) => {
    const { ranking, ...restItem } = item;
    return {
      ...restItem,
      flagSlot: renderRankingFlag(ranking),
    };
  });

  return <ProdCardList {...prodCardListProps} data={dataWithRanking} />;
};

ProdRankingList.displayName = 'ProdRankingList';
