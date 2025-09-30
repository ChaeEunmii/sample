'use client';

import { useState, useEffect } from 'react';
import { Heading, Text } from '@shared/ui';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';
import clsx from 'clsx';
import styles from './CheckGiftBox.module.scss';

/**
 * 구매사은품 선택하는 목록 영역
 */

interface GiftList {
  id: string;
  items: OrderItemType[];
}

interface CheckGiftBoxProps {
  /** 타이틀 */
  title?: string;
  /** 타이틀 우측 상태 텍스트 */
  status?: string;
  /** 사은품 데이터 */
  data: GiftList[];
  /** 체크여부 */
  isChecked?: boolean;
}

export const CheckGiftBox = ({
  title = '구매 사은품',
  status,
  data,
  isChecked,
}: CheckGiftBoxProps) => {
  // 체크박스 상태관리
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    if (isChecked) {
      // 모든 사은품 아이템을 체크된 상태로 설정
      const initialChecked: { [id: string]: boolean } = {};
      data.forEach((gift) => {
        gift.items.forEach((item) => {
          initialChecked[item.id] = true;
        });
      });
      setCheckedItems(initialChecked);
    }
  }, [isChecked, data]);

  return (
    <div className={clsx(styles.wrap)}>
      <div className={styles.tit}>
        <Heading size="3" weight="semibold">
          {title}
        </Heading>
        <Text as="span" color="alert" size="4">
          {status}
        </Text>
      </div>
      <div className={styles.cont}>
        <OrderItem
          items={data[0].items}
          showOrderCount
          isOrderGift
          selectable
          checkedItems={checkedItems}
          onSelectItem={(itemId: string, checked: boolean) => {
            setCheckedItems((prev) => ({ ...prev, [itemId]: checked }));
          }}
        />
      </div>
    </div>
  );
};
