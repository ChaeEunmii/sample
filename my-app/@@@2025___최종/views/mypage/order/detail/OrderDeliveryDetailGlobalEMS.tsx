'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
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
  DeliveryDestination,
} from '@/views/mypage/order/detail/components';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import { mockCommonOrder } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailGlobalEMS() {
  // mock 데이터 할당
  const { topInfo, gift, payment, expectedPoint, paymentApproval, refund, orderer } =
    mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 배송지 (역직구)
  const deliveryDestinationData = {
    name: 'Joseph Biden',
    phone: '+1-(202)456-1111',
    address: ['1600 Pennsylvania Avenue NW', 'Washington, D.C. 20500 U.S.'],
    shippingMethod: 'EMS (Korea Post Parcel Service)',
    limitInfo: 'Max ₩214,583 per day and 20 lbs (9 kg).',
  };

  // EMS 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const EMSOrder = orderData.find((d) => d.id === 'order-detail-EMS') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보 EMS">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts>
          <DeliveryGroup data={[EMSOrder]} viewType="detail" />
        </OrderProducts>
        {/* 배송지(역직구) */}
        <DeliveryDestination data={deliveryDestinationData} />
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
