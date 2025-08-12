'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  PaymentInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import { RefundAccountInfo } from '@/views/mypage/claims/components';
import { mockCommonOrder } from '@mocks/claims';
import styles from './CancelDetail.module.scss';

export default function CancelDetail() {
  // mock 데이터 가져오기
  const { topInfo, orderItems, deliveryDetail, payment, refund, orderer, returner } =
    mockCommonOrder;

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts data={orderItems} />
        {/* 배송지 */}
        <DeliveryDetail infoData={deliveryDetail} borderTop level="1" defaultOpen={false} />
        {/* 예상 환불 정보 */}
        <RefundInfo title="예상 환불 정보" data={refund} />
        {/* 환불 계좌 안내 */}
        <RefundAccountInfo data={returner} />
        <RefundAccountInfo data={returner} isEmpty />
        {/* 추가 결제정보 */}
        <PaymentInfo title="추가 결제 정보" data={payment} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
