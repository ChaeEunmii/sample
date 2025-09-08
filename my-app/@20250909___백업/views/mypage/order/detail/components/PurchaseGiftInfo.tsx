'use client';

import { useState } from 'react';
import { Section } from '@shared/ui';
import clsx from 'clsx';
import styles from './PurchaseGiftInfo.module.scss';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';

/** 
    '구매 사은품' 영역
*/

interface GiftList {
  id: string;
  items: OrderItemType[];
}

interface PurchaseGiftInfoProps {
  /** 타입 */
  type?: 'default' | 'select' | null;
  /** 유형 */
  variant?: 'normal' | 'collapse';
  /** 상단보더여부 */
  borderTop?: boolean;
  /** 사은품 데이터 */
  data: GiftList[];
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const PurchaseGiftInfo = ({
  type = 'default',
  variant = 'collapse',
  borderTop = true,
  data,
  className,
}: PurchaseGiftInfoProps) => {
  const [{ items }] = data;

  // 상태관리
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>({}); // 체크박스
  // 체크가능한유형
  const isTypeCheckable = type === 'select';
  return (
    <Section
      title="구매 사은품"
      variant={variant}
      marginTop={variant === 'normal' ? '2' : undefined}
      level={variant === 'normal' ? '2' : '1'}
      flush
      borderTop={borderTop}
      defaultOpen
      className={clsx(styles.section, className)}
    >
      <OrderItem
        items={items}
        showOrderCount
        isOrderGift
        selectable={isTypeCheckable}
        checkedItems={checkedItems}
        onSelectItem={(itemId: string, checked: boolean) => {
          setCheckedItems((prev) => ({ ...prev, [itemId]: checked }));
        }}
      />
    </Section>
  );
};
