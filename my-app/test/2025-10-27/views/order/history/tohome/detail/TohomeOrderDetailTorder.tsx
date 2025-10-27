'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import {
  TableOrderStoreInfo,
  TableInfo,
  HistoryOrderProducts,
  BoxInfo,
} from '@/views/mypage/order/history/components';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { mockCommonOrder, mockToHomeDetailList } from '@mocks/history';
import styles from './TohomeOrderDetail.module.scss';

export default function TohomeOrderDetailTorder() {
  // mock 데이터 가져오기
  const {
    orderer,
    topInfo,
    tohomeRefund,
    paymentApproval,
    torderStoreInfo,
    torderTableInfo,
    paymentTohome,
  } = mockCommonOrder;

  // 주문상품
  const orderData = (mockToHomeDetailList as OrderDeliveryData[]).filter(
    (item) => item.id === 'order-detail-torder'
  );

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="테이블오더" />
        {/* 주문상품 */}
        <HistoryOrderProducts data={orderData} />
        {/* 테이블오더 매장정보 */}
        <TableOrderStoreInfo data={torderStoreInfo} />
        {/* 테이블정보 */}
        <TableInfo title="테이블정보" data={torderTableInfo} />
        {/* 수령자 정보 */}
        <OrdererInfo
          title="수령자 정보"
          data={{ ...orderer, email: undefined }}
          hideMaskingBtn={false}
        />
        {/* 매장 주문취소 환불 */}
        <BoxInfo title="매장 주문취소 환불" data={{ content: '결제수단으로 환불' }} />
        {/* 일부 메뉴 품절 시 수령 여부 */}
        <BoxInfo title="일부 메뉴 품절 시 수령 여부" data={{ content: '품절메뉴 제외하고 받기' }} />
        {/* 결제 및 할인정보 */}
        <PaymentInfo title="결제 및 할인정보" data={paymentTohome[2]} />
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
