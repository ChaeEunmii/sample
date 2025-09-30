import React from 'react';
import { Flag } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '../product/ProdCardList';
import styles from './ProdPromoList.module.scss';
import { formatNumber } from '@/shared/utils/ui';

// ProdCardItemProps에 랭킹 정보를 추가한 타입
export type ProdPromoItemProps = ProdCardItemProps & {
  /** 당첨자 수 */
  winner: number;
};

interface ProdPromoListProps {
  /** 체험단 상품 데이터 배열 */
  data: ProdPromoItemProps[];
  /** ProdCardList의 모든 props */
  [key: string]: any;
}

export const ProdPromoList = ({ data, ...prodCardListProps }: ProdPromoListProps) => {
  // 당첨자 수 배지 렌더링
  const renderWinnerFlag = (winner: number) => {
    return (
      <Flag
        size="xlarge"
        radius="br"
        data={{
          color: 'green3',
          label: `${formatNumber(winner, 'user')}`,
        }}
        className={styles.flagWinner}
      />
    );
  };

  // 모든 아이템에 당첨자 수 플래그를 추가한 데이터 생성
  const dataWithWinner: ProdCardItemProps[] = data.map((item) => {
    const { winner, ...restItem } = item;
    return {
      ...restItem,
      flagSlot: renderWinnerFlag(winner),
    };
  });

  return <ProdCardList {...prodCardListProps} data={dataWithWinner} />;
};

ProdPromoList.displayName = 'ProdPromoList';
