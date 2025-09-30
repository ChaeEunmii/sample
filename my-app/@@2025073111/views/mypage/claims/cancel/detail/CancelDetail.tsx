'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/claims';
import styles from './CancelDetail.module.scss';

export default function CancelDetail() {
  // mock 데이터 할당
  const {
    topInfo,
    orderItems,
    deliveryDetail,
    gift,
    payment,
    expectedPoint,
    paymentApproval,
    refund,
    orderer,
  } = mockCommonOrder;

  return (
    <Container showBack title="주문 상세 정보(취소/반품/교환 상세)">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts data={orderItems} />
        {/* 배송지 */}
        <DeliveryDetail infoData={deliveryDetail} borderTop level="1" defaultOpen={false} />
        {/* 구매 사은품 */}
        <PurchaseGiftInfo data={gift} />
        {/* 결제정보 */}
        <PaymentInfo data={payment} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo
          {...paymentApproval}
          showChangeButton
          isPending={false}
          onCopyClick={(value) => {
            console.log(value);
          }}
        />
        {/* 환불정보 */}
        <RefundInfo data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
