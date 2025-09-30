'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  PersonalCustomsCode,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailGlobalEMS() {
  // mock 데이터 할당
  const { topInfo, gift, payment, expectedPoint, paymentApproval, refund, orderer } =
    mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 배송지 상세데이터
  const deliveryDetailData = {
    note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
  };
  // 직구 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const globalOrder = orderData.find((d) => d.id === 'order-detail-global') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보 직구">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts>
          <DeliveryGroup data={[globalOrder]} viewType="detail" />
        </OrderProducts>
        {/* 배송지 */}
        <DeliveryDetail infoData={deliveryDetailData} borderTop level="1" defaultOpen={false} />
        {/* 구매 사은품 */}
        <PurchaseGiftInfo data={gift} />
        {/* 개인통관고유부호 */}
        <PersonalCustomsCode data="P123451234512" />
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
