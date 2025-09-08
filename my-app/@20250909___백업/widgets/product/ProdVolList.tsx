import React from 'react';
import { Flag } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from './ProdCardList';
import styles from './ProdVolList.module.scss';

// ProdCardItemProps에 회차 정보를 추가한 타입
export type ProdVolItemProps = ProdCardItemProps & {
  /** 회차 정보 */
  vol: number | string;
};

interface ProdVolListProps {
  /** 회차 상품 데이터 배열 */
  data: ProdVolItemProps[];
  /** ProdCardList의 모든 props */
  [key: string]: any;
}

export const ProdVolList = ({ data, className, ...prodCardListProps }: ProdVolListProps) => {
  // 회차 배지 렌더링
  const renderVolFlag = (vol: number | string) => {
    return (
      <Flag
        data={[{ label: `${vol} 회차`, color: 'black' }]}
        size="xlarge"
        radius="br"
        className={styles.flag}
      />
    );
  };

  // 모든 아이템에 회차 플래그를 추가한 데이터 생성
  const dataWithVol: ProdCardItemProps[] = data.map((item) => {
    const { vol, ...restItem } = item;
    return {
      ...restItem,
      flagSlot: renderVolFlag(vol),
    };
  });

  return <ProdCardList {...prodCardListProps} data={dataWithVol} />;
};

ProdVolList.displayName = 'ProdVolList';
