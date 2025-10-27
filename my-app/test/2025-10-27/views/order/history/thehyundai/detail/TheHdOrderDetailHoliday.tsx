'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  RefundInfo,
  OrdererInfo,
  PaymentApprovalInfo,
} from '@/views/mypage/order/detail/components';
import {
  HistoryDeliveryDetail,
  HistoryOrderProducts,
} from '@/views/mypage/order/history/components';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { mockCommonOrder, mockOrderDetailItemsCase } from '@mocks/history';
import styles from './TheHdOrderDetail.module.scss';

export default function TheHdOrderDetailHoliday() {
  // mock 데이터 가져오기
  const { orderer, topInfo, payment, deliveryAddress, expectedPoint, refund, paymentApproval } =
    mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 명절배송 오더 샘플 (mockOrderDetailItemsCase)
  const holidayOrder = orderData.find((d) => d.id === 'order-detail-holiday') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="명절배송" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={[holidayOrder]} />
        {/* 배송지 */}
        <HistoryDeliveryDetail data={deliveryAddress[2]} />
        {/* 결제 및 할인정보 */}
        <PaymentInfo title="결제 및 할인정보" data={payment} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} hideInfoTxt />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo {...paymentApproval} isPending={false} />
        {/* 예상 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
