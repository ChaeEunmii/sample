'use client';

import { Box, IconButton, Stepper, Text } from '@/shared/ui';
import React, { useEffect, useState } from 'react';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { formatPrice } from '@/shared/utils/ui';

import styles from './CtaDrawer.module.scss';

interface QuantitySectionProps {
  isComposite?: boolean;
}

export const QuantitySection = ({ isComposite = false }: QuantitySectionProps) => {
  const { prodDetailType, item } = useProdDetail();

  // 임시 데이터
  const [subPrice] = useState(1000); // 옵션 추가금

  // 최소값 보장
  const minQuantity = typeof item?.minOrder === 'number' && item.stock > 0 ? item.minOrder : 1;
  // 최대값 보장
  const maxQuantity = typeof item?.stock === 'number' && item.stock > 0 ? item.stock : 1;

  // 기본 수량 1, 최대 optionStock까지
  const [qty, setQty] = useState(minQuantity);

  // quantity 변경 시 내부 상태 동기화
  useEffect(() => {
    // quantity가 최소값 이상 최대값 이하가 되도록 보정
    if (qty < minQuantity) setQty(minQuantity);
    else if (qty > maxQuantity) setQty(maxQuantity);
  }, [minQuantity, maxQuantity]);

  const isOutOfStock =
    !item || item.stock === 0 || item.status != null || item.delivery?.status === null;
  const unitPrice = item?.price?.current ?? 0;
  const totalPrice = unitPrice * qty;

  // Stepper 핸들러
  const handleStepperChange = (newVal: number) => {
    setQty(newVal);
  };

  return (
    <Box className={styles.box}>
      <div className={styles.inner}>
        <Text size="4">
          {item?.title}
          {isComposite && subPrice !== 0 && `(${subPrice > 0 && '+'}${formatPrice(subPrice)})`}
        </Text>
        <div className={styles.right}>
          {isComposite && (
            <IconButton name="close" size="small" onClick={() => {}} aria-label="옵션 삭제" />
          )}
        </div>
      </div>
      <div className={styles.inner}>
        <Stepper
          value={qty}
          onChange={handleStepperChange}
          min={minQuantity}
          max={maxQuantity}
          disabled={isOutOfStock}
        />
        <div className={styles.values}>
          {prodDetailType === 'subscription' && (
            <span className={styles.nthTime}>
              <Text size="5">{item.nthTime}회차</Text>
            </span>
          )}
          <Text size="7" weight="bold" className={styles.price}>
            {formatPrice(totalPrice)}
          </Text>
        </div>
      </div>
    </Box>
  );
};
