'use client';

import { Fragment } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import {
  HistoryOrderProducts,
  BoxInfo,
  ReceiverInfo,
} from '@/views/mypage/order/history/components';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { mockCommonOrder, mockToHomeHolidayDetailList } from '@mocks/history';

import styles from './OrderDetail.module.scss';

export default function OrderDetailHoliday() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const { orderer, topInfo, receiverInfo, tohomeRefund, paymentTohome, giftInfo } = mockCommonOrder;

  // 주문상품
  const orderData = mockToHomeHolidayDetailList as OrderDeliveryData[];

  // 선물 받는 분 - 멀티 그룹 데이터
  const ReceiverGroupListData = [
    {
      id: 'receiver-1',
      infoData: receiverInfo[0], // 선물 받는 분 정보
      orderData: [orderData[1]], // 해당 받는 분의 상품 목록
    },
    {
      id: 'receiver-2',
      infoData: receiverInfo[2],
      orderData: [orderData[2]],
    },
  ];

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const receiverContent = isMulti ? (
    <>
      {/* 선물 받는 분 - 멀티 */}
      {ReceiverGroupListData.map((group, idx) => (
        <Fragment key={`receiver-${group.id}`}>
          <ReceiverInfo
            title={`선물 받는 분 ${idx + 1}`}
            data={group.infoData}
            rejectedText="선물 받는 분이 선물을 거절하였습니다."
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
      {/* 일반(단독) 구조 */}
      {/* 주문상품 */}
      <HistoryOrderProducts data={[orderData[0]]} />
      {/* 사은품 정보 */}
      <BoxInfo title="사은품 정보" data={giftInfo} />
      {/* 선물 받는 분 - 단일 */}
      <ReceiverInfo data={receiverInfo[1]} rejectedText="선물 받는 분이 선물을 거절하였습니다." />
    </>
  );

  return (
    <Container showBack title="주문 상세 정보 - 명절배송">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="명절배송" />
        {/* 단독 또는 멀티 구조 */}
        {receiverContent}
        {/* 결제정보 */}
        <PaymentInfo title="결제정보" data={paymentTohome[1]} hideReciptBtn />
        {/* 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={tohomeRefund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
