'use client';

import React from 'react';
import { Button } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import styles from './ProdShareList.module.scss';

interface ButtonLabels {
  /** 공유 버튼 텍스트 */
  share?: string;
}

export interface ProdShareListProps {
  /** 상품 데이터 배열 */
  data: ProdCardItemProps[];
  /** 버튼 텍스트 커스터마이징 */
  buttonLabels?: ButtonLabels;
  /** 공유하기 버튼 클릭 콜백 */
  onShare?: (item: ProdCardItemProps) => void;
  /** 기타 ProdCardList에 전달할 props */
  [key: string]: any;
}

export const ProdShareList = ({
  data,
  buttonLabels = { share: '공유하기' },
  onShare,
  ...prodCardListProps
}: ProdShareListProps) => {
  const dataWithExtras: ProdCardItemProps[] = data.map((item) => ({
    ...item,
    buttonSlot: (
      <div className={styles.buttons}>
        <Button size="small" variant="tertiary" onClick={() => onShare?.(item)}>
          {buttonLabels.share}
        </Button>
      </div>
    ),
  }));

  return <ProdCardList {...prodCardListProps} data={dataWithExtras} />;
};
