'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@/shared/ui';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  RefundInfo,
  OrdererInfo,
  PaymentApprovalInfo,
} from '@/views/mypage/order/detail/components';
import { OrderHistoryAddress, HistoryOrderProducts } from '@/views/mypage/order/history/components';
import { mockCommonOrder } from '@mocks/history';
import styles from './OrderDetail.module.scss';

export default function OrderDetailGift() {
  // mock 데이터 가져오기
  const {
    orderer,
    topInfo,
    orderItems,
    payment,
    deliveryAddress,
    expectedPoint,
    refund,
    paymentApproval,
  } = mockCommonOrder;

  return (
    <Container showBack title="주문 상세 정보 - 선물하기">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="선물하기" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={orderItems.slice(0, 1)} />
        {/* 배송지 */}
        <OrderHistoryAddress title="받으시는 분" data={deliveryAddress[0]} />
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
        {/* 하단버튼 */}
        <ButtonArea>
          <Button variant="primary" size="large">
            보낸 선물 상세
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
