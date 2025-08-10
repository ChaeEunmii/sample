'use client';

import React, { useState } from 'react';
import { Box, Button, Heading, Icon, Text } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from './ProdCardList';
import styles from './ProdDealList.module.scss';
import DealDetailDialog from '../detail/DealDetailDialog';

export interface ProdDealListProps {
  /** 상품 데이터 배열 */
  data: ProdCardItemProps[];
  /** 갤러리형인지 리스트형인지 구분 */
  type?: 'card' | 'list';
  /** 기타 ProdCardList에 전달할 props */
  [key: string]: any;
}

export const ProdDealList = ({ data, type = 'card', ...prodCardListProps }: ProdDealListProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dataWithExtras: ProdCardItemProps[] = data.map((item, index) => ({
    ...item,
    topFlags: [
      {
        color: 'black',
        label: `선택 ${index + 1}`,
      },
    ],
    buttonSlot: (
      <div className={styles.button}>
        <Button size="small" variant="tertiary" onClick={() => setIsDialogOpen(true)}>
          자세히 보기
        </Button>
        <Button size="small" variant="tertiary" iconOnly="cart">
          장바구니
        </Button>
      </div>
    ),
  }));

  return (
    <>
      <Box>
        <Heading className={styles.title}>
          <Icon name="search" />
          상품 자세히 보기
        </Heading>
        <Text size="4" color="gray2" indent>
          각 상품을 터치하면 자세한 내용을 볼 수 있습니다.
        </Text>
      </Box>
      {type === 'card' ? (
        <ProdCardList
          {...prodCardListProps}
          data={dataWithExtras}
          columns={2}
          className={styles.vertical}
        />
      ) : (
        <ProdCardList
          {...prodCardListProps}
          data={dataWithExtras}
          cardType="horizontal"
          cardSize="large"
          columns={1}
        />
      )}
      <DealDetailDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};

ProdDealList.displayName = 'ProdDealList';
