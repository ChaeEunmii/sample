'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderTopInfo, OrdererInfo, CouponReceiver } from '@/views/mypage/order/detail/components';
import { HistoryOrderProducts } from '@/views/mypage/order/history/components';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { mockCommonOrder, mockOrderDetailCaseGifticon } from '@mocks/history';
import styles from './OrderDetail.module.scss';

export default function OrderDetailGifticon() {
  // mock 데이터 가져오기
  const { orderer, topInfo } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailCaseGifticon as OrderDeliveryData[];
  // 쿠폰받으시는 분 샘플데이터
  const mockCouponReceiver = [
    {
      id: 'receiver-1',
      name: '김*대',
      phone: '010-****-5678',
    },
    {
      id: 'receiver-2',
      name: '김*현',
      phone: '010-****-5678',
    },
  ];

  return (
    <Container showBack title="주문 상세 정보 - 기프티콘">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="기프티콘" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={orderData} />
        {/* 쿠폰 받으시는 분 */}
        <CouponReceiver data={mockCouponReceiver} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
