'use client';

import { Fragment } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
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
import {
  mockCommonOrder,
  mockRefundInfoData2,
  mockPaymentApprovalData2,
  mockGiftInfo,
  mockToHomeDetailList,
  mockToHomeExtraPayment,
  mockOrderDetaiMultilList,
} from '@mocks/history';

import styles from './OrderDetail.module.scss';

export default function OrderDetail() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const { orderer, topInfo, deliveryAddress, expectedPoint } = mockCommonOrder;

  // 주문상품
  const orderData = mockToHomeDetailList as OrderDeliveryData[];

  // 멀티 배송지
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: mockOrderDetaiMultilList as OrderDeliveryData[], //주문상품
      // giftData: mockGiftInfo, // 배송지별 사은품
    },
    {
      id: 'addr-2',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: mockOrderDetaiMultilList as OrderDeliveryData[], //주문상품
      giftData: mockGiftInfo, // 배송지별 사은품
    },
  ];

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const deliveryContent = isMulti ? (
    <>
      {/* 멀티구조 */}
      {/* 배송지 - 멀티 */}
      {DeliveryGroupListData.map((group, idx) => (
        <Fragment key={`delivery-${group.id}`}>
          <DeliveryDetail
            title={`배송지 ${idx + 1}`}
            infoData={group.infoData}
            borderTop
            level="1"
            bottomSlot={
              <>
                <HistoryDeliveryGroup
                  data={group.orderData}
                  viewType="detail"
                  onButtonClick={(action, item) => {
                    console.log('Clicked:', action, item);
                  }}
                />
              </>
            }
          />
          {group.giftData && <BoxInfo title="사은품 정보" data={mockGiftInfo} />}
        </Fragment>
      ))}
    </>
  ) : (
    <>
      {/* 일반 */}
      {/* 주문상품 */}
      <HistoryOrderProducts data={orderData} />
      {/* 사은품 정보 */}
      <BoxInfo title="사은품 정보" data={mockGiftInfo} />
      {/* 배송지 */}
      <OrderHistoryAddress data={deliveryAddress[0]} />
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
      <PaymentInfo title="결제정보" data={mockToHomeExtraPayment} />
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
        {/* 주문상품 */}
        {/* <HistoryOrderProducts data={orderData} /> */}
        {/* 사은품 정보 */}
        {/* <BoxInfo title="사은품 정보" data={mockGiftInfo} /> */}
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo {...mockPaymentApprovalData2} isPending={false} />
        {/* 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={mockRefundInfoData2} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
