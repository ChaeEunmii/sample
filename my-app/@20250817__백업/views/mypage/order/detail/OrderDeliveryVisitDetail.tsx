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

export default function OrderDeliveryVisitDetail() {
  // mock 데이터 가져오기
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 방문픽업 오더 샘플 가져옴 (mockOrderDetailList)
  const visitOrder = orderData.find((d) => d.id === 'order-detail-visit') ?? orderData[0];

  // 픽업목록 샘플 데이터
  const mockPickupGroups = [
    {
      info: {
        name: '김*대',
        phone: '010-****-5678',
        address: '현대백화점 압구정본점 1층 로비 탈리다쿰 팝업 스토어 C8번 창구 앞',
      },
      orderData: visitOrder,
    },
  ];

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="방문픽업" />
        {/* 픽업들 */}
        {mockPickupGroups.map((group, idx) => (
          <OrderProductWithMeta
            variant="visit"
            key={idx}
            title="주문상품"
            data={group.info}
            bottomSlot={
              <DeliveryGroup
                data={[group.orderData]}
                hideCategory
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
