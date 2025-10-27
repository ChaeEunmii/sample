'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { OrderTopInfo, OrdererInfo } from '@/views/mypage/order/detail/components';
import {
  HistoryDeliveryDetail,
  HistoryOrderProducts,
} from '@/views/mypage/order/history/components';
import { mockCommonOrder, mockOrderDetailItemsCase } from '@mocks/history';
import styles from './TheHdOrderDetail.module.scss';

export default function TheHdOrderDetailRental() {
  // mock 데이터 가져오기
  const { orderer, topInfo, deliveryAddress } = mockCommonOrder;

  // 주문상품 (설치상품 정보 rentalInfo 추가)
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 렌탈 오더 샘플 (mockOrderDetailItemsCase)
  const rentalOrder = orderData.find((d) => d.id === 'order-detail-rental') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="렌탈" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={[rentalOrder]} />
        {/* 배송지 */}
        <HistoryDeliveryDetail data={deliveryAddress[2]} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
