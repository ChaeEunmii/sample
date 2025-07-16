'use client';

import { Button } from '@/shared/ui';
import { CrossDiscountInfo } from './CrossDiscountInfo';
import { useState } from 'react';
import CrossDiscountDialog from './CrossDiscountDialog';
import { mockProdDetailItem } from '@/mocks/detail';

import clsx from 'clsx';
import styles from './CrossDiscount.module.scss';

export const CrossDiscount = () => {
  // mock데이터
  const data = mockProdDetailItem.crossDiscount;

  // 함께 구매 가능한 상품 보기 팝업
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className={clsx(styles.root)}>
        <CrossDiscountInfo data={data} />
        {/* 수량할인 유형의 경우 버튼 없음 */}
        {data.case !== 'case2' && (
          <Button
            suffixIcon="arrowRight"
            setIconSize="xsmall"
            className={styles.button}
            onClick={() => setIsDialogOpen(true)}
          >
            함께 구매 가능한 상품 보기
          </Button>
        )}
      </div>

      {/* 함께 구매 가능한 상품 보기 팝업 */}
      <CrossDiscountDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};

CrossDiscount.displayName = 'CrossDiscount';
