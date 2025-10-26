'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import { OrderHistoryAddress, HistoryOrderProducts } from '@/views/mypage/order/history/components';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { CustomerCodeInfo } from '@widgets/order';
import { mockCommonOrder, mockOrderDetailItemsCase } from '@mocks/history';
import styles from './OrderDetail.module.scss';

export default function OrderDetail() {
  // mock 데이터 가져오기
  const { orderer, topInfo, payment, deliveryAddress, expectedPoint, refund } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 일반 오더 샘플 (mockOrderDetailItemsCase)
  const standardOrder = orderData.find((d) => d.id === 'order-detail-default') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보hhh nonono-______-">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <HistoryOrderProducts data={[standardOrder]} />
        {/* 배송지 */}
        <OrderHistoryAddress data={deliveryAddress[1]} />
        {/* 개인통관고유부호 */}
        <CustomerCodeInfo
          hideChangeBtn
          data="P123451234512"
          level="1"
          borderTop
          flush
          hideSuffix
          defaultOpen
        />
        {/* 결제 및 할인정보 */}
        <PaymentInfo title="결제 및 할인정보" data={payment} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} hideInfoTxt />
        {/* 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
