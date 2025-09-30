'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import { MyOrderGroup, OrderDeliveryData } from '@/views/mypage/components/MyOrderGroup';
import { OrderTopInfo, OrderProducts, OrdererInfo } from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailPurchaseGift() {
  // mock 데이터 할당
  const { topInfo, orderer } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];

  // 사은품 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const purchaseGiftOrder =
    orderData.find((d) => d.id === 'order-detail-purchaseGift') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보 사은품">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts>
          <MyOrderGroup data={purchaseGiftOrder} viewType="detail" />
        </OrderProducts>
        {/* 배송지 */}
        <DeliveryDetail borderTop level="1" defaultOpen={false} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
