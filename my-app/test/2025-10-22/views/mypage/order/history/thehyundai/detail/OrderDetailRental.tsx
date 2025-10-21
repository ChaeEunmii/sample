'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { OrderTopInfo, OrdererInfo } from '@/views/mypage/order/detail/components';
import { OrderHistoryAddress, HistoryOrderProducts } from '@/views/mypage/order/history/components';
import { mockCommonOrder, mockOrderDetailCaseRental } from '@mocks/history';
import styles from './OrderDetail.module.scss';

export default function OrderDetailRental() {
  // mock 데이터 가져오기
  const { orderer, topInfo, deliveryAddress } = mockCommonOrder;

  // 주문상품 (설치상품 정보 rentalInfo 추가)
  const orderData = (mockOrderDetailCaseRental as OrderDeliveryData[]).map((group) => ({
    ...group,
    sellers: group.sellers.map((seller) => ({
      ...seller,
      items: seller.items.map((item) => ({
        ...item,
        // 설치상품 정보 있는경우
        rentalInfo: {
          monthlyFee: 44000,
          period: 60,
          separateContract: true,
        },
        // 상담후 결제인 경우 orderOptions로 표시
        // orderOptions: ['상담 후 결제'],
      })),
    })),
  }));

  return (
    <Container showBack title="주문 상세 정보 - 렌탈">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="렌탈" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={orderData} />
        {/* 배송지 */}
        <OrderHistoryAddress data={deliveryAddress[0]} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
