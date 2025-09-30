'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { DeliveryDetail, SubscriptionCurrentProductInfo, SubscriptionCycle } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  OrdererInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  PaymentInfo,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailCaseSubscribe } from '@mocks/myorder';
import { mockSubscriptionCycleRound } from '@/mocks/subscription';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailRental() {
  // mock 데이터 가져오기
  const { topInfo, orderer, expectedPoint, paymentApproval, payment } = mockCommonOrder;
  const cycleData = mockSubscriptionCycleRound; // 일정

  // 주문상품 (정기구독용 orderStatus 추가)
  const orderData = mockOrderDetailCaseSubscribe as OrderDeliveryData[];

  // 배송지 상세데이터
  const deliveryDetailData = {
    note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
  };

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts data={orderData} />
        {/* 배송지 */}
        <DeliveryDetail infoData={deliveryDetailData} borderTop level="1" defaultOpen />
        {/* 일정 */}
        <SubscriptionCycle
          title={`정기구독 일정`}
          data={cycleData}
          borderTop
          level="1"
          wideGap
          showScheduleCheckBtn
          onScheduleCheck={() => {
            console.log('일정 확인 클릭!');
          }}
          hideAutoRenewCheckbox
        />
        {/* 이번 회차 상품 정보 */}
        <SubscriptionCurrentProductInfo borderTop level="1" mode="mypage" />
        {/* 결제정보 */}
        <PaymentInfo data={payment} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} />
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
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
