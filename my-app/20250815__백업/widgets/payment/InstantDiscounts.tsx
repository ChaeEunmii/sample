'use client';

import { useState } from 'react';
import { Text } from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { InstantDiscountSwiper } from './InstantDiscountSwiper';
import styles from './PaymentMethods.module.scss';

// 임시 데이터 (즉시할인)
import { discountItems } from './payment';

export const InstantDiscounts = () => {
  // 즉시할인 상태
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);
  const handleDiscountSelect = (id: string | null) => {
    setSelectedDiscount(id);
    // console.log('선택된 할인 ID:', id);
  };

  return (
    <>
      <Section
        title="즉시할인"
        suffix={
          <span className={styles.state}>
            {(() => {
              if (!selectedDiscount) return '선택안함';
              const selectedItem = discountItems.find((item) => item.id === selectedDiscount);
              return selectedItem?.label ?? '선택안함';
            })()}
          </span>
        }
        variant="collapse"
        defaultOpen
        defaultSuffix
        className={styles.custom}
      >
        <div className={styles.padded}>
          <Text>해당 프로모션은 예산 소진 시 종료됩니다.</Text>
        </div>
        <div className="ncp-mt-s">
          <InstantDiscountSwiper items={discountItems} onSelect={handleDiscountSelect} />
        </div>
      </Section>
    </>
  );
};
InstantDiscounts.displayName = 'InstantDiscounts';
