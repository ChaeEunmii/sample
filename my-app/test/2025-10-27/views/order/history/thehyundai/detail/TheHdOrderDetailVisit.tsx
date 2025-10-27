'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentApprovalInfo,
  PaymentInfo,
  RefundInfo,
  OrdererInfo,
  OrderProductWithMeta,
} from '@/views/mypage/order/detail/components';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { mockCommonOrder, mockOrderDetailItemsCase } from '@mocks/history';
import styles from './TheHdOrderDetail.module.scss';

export default function TheHdOrderDetailVisit() {
  // mock 데이터 가져오기
  const { orderer, topInfo, paymentApproval, payment, refund } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 방문픽업 오더 샘플 (mockOrderDetailList)
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
            title="방문픽업 정보"
            data={group.info}
            bottomSlot={<HistoryDeliveryGroup data={[group.orderData]} viewType="detail" />}
          />
        ))}
        {/* 결제 및 할인정보 */}
        <PaymentInfo title="결제 및 할인정보" data={payment} />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo {...paymentApproval} isPending={false} />
        {/* 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
