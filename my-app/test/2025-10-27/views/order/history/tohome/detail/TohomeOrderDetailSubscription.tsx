'use client';

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
import { mockCommonOrder, mockToHomeDetailList } from '@mocks/history';

import styles from './TohomeOrderDetail.module.scss';

export default function TohomeOrderDetailSubscription() {
  // mock 데이터 가져오기
  const {
    orderer,
    topInfo,
    deliveryAddress,
    expectedPoint,
    paymentApproval,
    tohomeRefund,
    paymentTohome,
  } = mockCommonOrder;

  // 주문상품
  const orderData = (mockToHomeDetailList as OrderDeliveryData[]).filter(
    (item) => item.id === 'order-detail-subscription'
  );

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="투홈구독" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={orderData} />
        {/* 배송지 */}
        <HistoryDeliveryDetail data={deliveryAddress[5]} />
        {/* 결제정보 */}
        <PaymentInfo title="결제정보" data={paymentTohome[0]} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} hideInfoTxt />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo {...paymentApproval} isPending={false} />
        {/* 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={tohomeRefund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
