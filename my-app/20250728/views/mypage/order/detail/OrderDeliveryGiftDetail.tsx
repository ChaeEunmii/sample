'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  GiftReceiverInfo,
} from '@/views/mypage/order/detail/components';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import { mockCommonOrder } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';
import { MyOrderItems, OrderDeliveryData } from '@/views/mypage/components/MyOrderItems';

export default function OrderDeliveryGiftDetail() {
  // mock 데이터 할당
  const { topInfo, gift, payment, expectedPoint, paymentApproval, refund, orderer } =
    mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 선물하기 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const giftOrder = orderData.find((d) => d.id === 'order-detail-gift') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보 선물하기">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 받으시는 분 */}
        <GiftReceiverInfo
          name="김*대"
          phone="010-****-5678"
          onClickGoGiftbox={() => {
            console.log('보낸 선물함 바로가기 클릭!!');
          }}
        >
          <MyOrderItems data={giftOrder} viewType="detail" />
        </GiftReceiverInfo>
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
