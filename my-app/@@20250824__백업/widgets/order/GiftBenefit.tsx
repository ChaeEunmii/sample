'use client';
import { useState } from 'react';
import { Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';
import styles from './GiftBenefit.module.scss';

interface GiftList {
  id: string;
  isMulti?: boolean;
  items: OrderItemType[];
}

interface GiftBenefitProps {
  /** 사은품 타입 */
  type: 'all' | 'select' | 'multi' | null;
  /** 사은품 데이터 */
  data: GiftList[];
}

export const GiftBenefit = ({ type, data }: GiftBenefitProps) => {
  // 상태관리
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>({}); // 체크박스

  return (
    <>
      <Section
        title="사은품"
        side={type === 'all' || type === 'multi' ? '2' : ''}
        suffix={
          <>
            {(type === 'select' || type === 'multi') && (
              <Text as="span" weight="medium" color="point">
                사은품을 선택해 주세요
              </Text>
            )}
          </>
        }
        variant="collapse"
        className={styles.deliveryCoupon}
      >
        <div className={styles.content}>
          <Text indent className={styles.giftDesc}>
            주문 사은품 프로모션 이름이 들어갑니다. 주문 사은품 프로모션 이름이 들어갑니다. 주문
            사은품 프로모션 이름이 들어갑니다. 주문 사은품 프로모션 이름이 들어갑니다. 주문 사은품
            프로모션 이름이 들어갑니다. 주문 사은품 프로모션 이름이 들어갑니다. 주문 사은품 프로모션
            이름이 들어갑니다. 주문 사은품 프로모션 이름이 들어갑니다. 주문 사은품 프로모션 이름이
            들어갑니다
          </Text>

          {type === 'select' && (
            <div className={styles.grayBox}>
              <Text size="4" weight="semibold">
                아래 사은품 중 2개 선택해 주세요.
              </Text>
              <Text size="4" color="gray3">
                사은품 재고 소진 시, 해당 프로모션은 종료됩니다.
              </Text>
            </div>
          )}

          <OrderItem
            items={data[0].items}
            checkedItems={checkedItems}
            onSelectItem={(itemId: string, checked: boolean) => {
              setCheckedItems((prev) => ({ ...prev, [itemId]: checked }));
            }}
            selectable={type === 'select'}
            priceVariant
            showOrderCount
            isOrderGift
            className={styles.giftItemList}
          />

          {type === 'select' && (
            <Text size="3" color="gray3" className={styles.selectDesc}>
              무형상품/스토어픽은 주문사은품 프로모션 대상에서 제외됩니다.
            </Text>
          )}
        </div>
      </Section>
    </>
  );
};
GiftBenefit.displayName = 'GiftBenefit';
