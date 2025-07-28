'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  OrderProductWithMeta,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

export default function OrderDeliveryCultureDetail() {
  // mock 데이터 할당
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 스토어픽 오더 샘플 가져옴 (mockOrderDetailList)
  const storepickOrder = orderData.find((d) => d.id === 'order-detail-culture') ?? orderData[0];

  // 픽업목록 샘플 데이터
  const mockPickupGroups = [
    {
      info: {
        name: '김*대',
        phone: '010-****-5678',
        date: '2025년 12월 25일 토요일',
      },
      orderData: storepickOrder,
    },
  ];

  return (
    <Container showBack title="주문 상세 정보 문화 센터">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="문화센터" />
        {/* 픽업들 */}
        {mockPickupGroups.map((group, idx) => (
          <OrderProductWithMeta
            variant="culture"
            key={idx}
            title="주문상품"
            data={group.info}
            bottomSlot={
              <DeliveryGroup
                data={group.orderData}
                viewType="detail"
                onButtonClick={(action, item) => {
                  console.log('Clicked:', action, item);
                }}
              />
            }
          />
        ))}
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
