'use client';

import { Fragment } from 'react';
import { useSearchParams } from 'next/navigation';
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
  OrderHistoryAddress,
  BoxInfo,
  HistoryOrderProducts,
} from '@/views/mypage/order/history/components';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { CustomerCodeInfo } from '@widgets/order';
import { mockDeliveryDetailsItem } from '@mocks/address';
import { mockCommonOrder, mockToHomeDetailList } from '@mocks/history';

import styles from './OrderDetail.module.scss';

export default function OrderDetail() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const {
    orderer,
    topInfo,
    deliveryAddress,
    expectedPoint,
    tohomeRefund,
    giftInfo,
    paymentTohome,
    paymentApproval,
  } = mockCommonOrder;

  // 주문상품
  const orderData = mockToHomeDetailList as OrderDeliveryData[];

  // 멀티 배송지
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: [orderData[1]], //주문상품
    },
    {
      id: 'addr-2',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: [orderData[0]], //주문상품
    },
  ];

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const deliveryContent = isMulti ? (
    <>
      {/* 멀티구조 */}
      {/* 배송지 - 멀티 */}
      {DeliveryGroupListData.map((group, idx) => (
        <Fragment key={`delivery-${group.id}`}>
          <OrderHistoryAddress
            title={`배송지 ${idx + 1}`}
            data={deliveryAddress[4]}
            isDefaultAddress //기본배송지 표시
            bottomSlot={
              <HistoryDeliveryGroup
                data={group.orderData}
                viewType="detail"
                onButtonClick={(action, item) => {
                  console.log('Clicked:', action, item);
                }}
              />
            }
          />
        </Fragment>
      ))}
      <BoxInfo title="사은품 정보" data={giftInfo} />
    </>
  ) : (
    <>
      {/* 일반 */}
      {/* 주문상품 */}
      <HistoryOrderProducts data={[orderData[0]]} />
      {/* 사은품 정보 */}
      <BoxInfo title="사은품 정보" data={giftInfo} />
      {/* 배송지 */}
      <OrderHistoryAddress data={deliveryAddress[4]} />
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
      {/* 결제정보 */}
      <PaymentInfo title="결제정보" data={paymentTohome[0]} />
      {/* 적립 예정 포인트 */}
      <ExpectedPoint data={expectedPoint} hideInfoTxt />
    </>
  );

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 일반 또는 멀티 */}
        {deliveryContent}
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
