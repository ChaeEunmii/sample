'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  RefundInfo,
  OrdererInfo,
  PaymentApprovalInfo,
  OrderProducts,
} from '@/views/mypage/order/detail/components';
import { TripItem } from '@/views/mypage/components';
import styles from './TripDetail.module.scss';
import { mockCommonOrder } from '@mocks/myorder';
import { mockTripDetailList, mockAspDetailList } from '@mocks/mypage';

export default function TripDetail() {
  // 화면 보기용 상태
  const searchParams = useSearchParams();
  const isASP = searchParams.has('asp'); // asp 패키지

  // mock 데이터 가져오기
  const { refund, orderer, paymentApproval } = mockCommonOrder;
  const tripListData = !isASP ? mockTripDetailList : mockAspDetailList; // 여행 상품 목록 샘플데이터

  return (
    <Container showBack title="여행 상세 정보" type="basket">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo
          info={{ date: '20251225' }}
          rows={
            isASP
              ? [
                  { title: '예약번호', content: '25122512345678', isCopy: true },
                  { title: '주문번호', content: '25122598765432', isCopy: true },
                ]
              : [{ title: '주문번호', content: '25122598765432', isCopy: true }]
          }
          onCopy={(text) => console.log('복사됨:', text)}
          detailLabel={isASP ? '상세보기(트립스토어)' : undefined}
          onClickDetail={() => console.log('상세보기 클릭')}
        />
        {/* 주문상품 */}
        <OrderProducts>
          <TripItem
            data={tripListData}
            viewType="detail"
            onButtonClick={(action, item) => {
              console.log('버튼 클릭:', action, item);
            }}
          />
        </OrderProducts>
        {/* 예약자 정보 */}
        <OrdererInfo
          title="예약자 정보"
          data={{
            name: '김*대',
            passportNo: 'KIM********',
            enName: 'KIM********',
          }}
          type="trip"
        />
        {/* 결제정보 */}
        <PaymentInfo
          data={{
            items: [
              { label: '상품금액', price: 180000 },
              { label: '포인트 사용', price: -30000 },
            ],
            totalPrice: 105000,
            variant: 'contract_done',
          }}
          hideDetailBtn
        />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={[{ label: 'H.Point', field: '주문적립', point: 12345 }]} hideInfoTxt />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo
          {...paymentApproval}
          paymentData={[
            {
              label: '네이버페이',
              price: 123456700000,
            },
            {
              label: '신용카드',
              price: 123456700000,
              detail: {
                card: '현대카드',
                cardPlan: '무이자 3개월',
                cardAt: '202512241530',
                cardAmt: 123456700000,
              },
              info: '정확한 무이자 할부 적용 여부는 카드사를 통해 확인 가능해요.',
            },
          ]}
          showChangeButton
        />
        {/* 환불정보 */}
        <RefundInfo data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
