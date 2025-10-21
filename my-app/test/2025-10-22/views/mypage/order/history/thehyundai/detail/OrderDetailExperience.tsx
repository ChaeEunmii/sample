'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { OrderTopInfo, OrderProducts, OrdererInfo } from '@/views/mypage/order/detail/components';
import { OrderHistoryAddress } from '@/views/mypage/order/history/components';
import { mockCommonOrder, mockOrderDetailItemsCase } from '@mocks/history';
import styles from './OrderDetail.module.scss';

export default function OrderDetailExperience() {
  // mock 데이터 가져오기
  const { orderer, topInfo, deliveryAddress } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 체험단 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const experienceOrder = orderData.find((d) => d.id === 'order-detail-experience') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보 - 체험단">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="체험단" />
        {/* 주문상품 */}
        <OrderProducts>
          <HistoryDeliveryGroup data={[experienceOrder]} viewType="detail" />
        </OrderProducts>
        {/* 배송지 */}
        <OrderHistoryAddress data={deliveryAddress[0]} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
