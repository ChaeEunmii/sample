'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import type { OrderItemType } from '@widgets/product/OrderItem';
import {
  DeliveryDetail,
  SubscriptionCurrentProductInfo,
  SubscriptionCycle,
  SubscriptionNotice,
  HPointAvailability,
  SubscriptionPaymentMethod,
} from '@/widgets/order';
import { PaymentInfo } from '@/views/mypage/order/detail/components';
import {
  SubscriptionTopInfo,
  SubscriptionProducts,
  SubscriptionDeliveryMethod,
} from '@/views/mypage/subscription/components';
import {
  mockPaymentMethod,
  mockSubscribeTopInfo,
  mockSubscriptionItem,
  mockSubscriptionCycleRound,
  mockSubscribePaymentInfo,
  mockSubscribeDeliveryMethod,
} from '@/mocks/subscription';
import { mockCommonOrder } from '@mocks/claims';
import styles from './SubscriptionDetail.module.scss';

export default function SubscriptionDetail() {
  // 화면 보기용 상태
  const searchParams = useSearchParams();
  const isEnded = searchParams.has('ended'); // 구독종료
  const isCanceled = searchParams.has('canceled'); // 구독해지
  const isFinished = isEnded || isCanceled; // 구독종료+구독해지
  // 상단주문정보 상태값 보기용
  const getTopInfo = () => {
    if (isEnded) return { ...mockSubscribeTopInfo, orderStatus: 'subscription_ended' as const };
    if (isCanceled)
      return { ...mockSubscribeTopInfo, orderStatus: 'subscription_canceled' as const };
    return mockSubscribeTopInfo; // 기본: active
  };

  // mock 데이터 가져오기
  const topInfoData = getTopInfo(); // 상단 주문정보
  const productData: OrderItemType[] = [
    {
      ...mockSubscriptionItem,
      orderStatus: {
        ...mockSubscriptionItem.orderStatus,
        status: isEnded
          ? 'subscription_ended'
          : isCanceled
            ? 'subscription_canceled'
            : 'subscription_active',
      },
    },
  ];
  const cycleData = mockSubscriptionCycleRound; // 일정
  const { deliveryDetail } = mockCommonOrder; // 배송지
  const deliveryMethodData = mockSubscribeDeliveryMethod; // 배송방법
  const paymentData = mockPaymentMethod; // 결제 수단
  const paymentInfoData = mockSubscribePaymentInfo; // 결제 정보

  return (
    <Container showBack title="구독 상세 조회">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <SubscriptionTopInfo info={topInfoData} onCopy={(text) => console.log(text)} />
        {/* 상품 */}
        <SubscriptionProducts data={productData} />
        {/* 일정 */}
        <SubscriptionCycle
          title={`정기구독 일정${isEnded ? ' (종료)' : isCanceled ? ' (해지)' : ''}`}
          data={cycleData}
          borderTop
          level="1"
          wideGap
          showScheduleCheckBtn
          ScheduleCheckBtnLabel={isFinished ? '지난 일정 확인' : undefined}
          onScheduleCheck={() => {
            console.log('일정 확인 클릭!');
          }}
        />
        {/* 이번 회차 상품 정보 */}
        {!isFinished && <SubscriptionCurrentProductInfo borderTop level="1" mode="mypage" />}
        {/* 배송지 */}
        <DeliveryDetail
          title="정기구독 배송지"
          infoData={deliveryDetail}
          borderTop
          level="1"
          hideChangeBtns={isFinished}
        />
        {/* 배송방법 */}
        {!isFinished && <SubscriptionDeliveryMethod data={deliveryMethodData} />}
        {/* H.Point 사용 */}
        {!isFinished && <HPointAvailability borderTop level="1" />}
        {/* 결제 수단 */}
        {!isFinished && <SubscriptionPaymentMethod methods={paymentData} borderTop level="1" />}
        {/* 주의사항 */}
        <SubscriptionNotice borderTop level="1" isMypage />
        {/* 결제정보 */}
        <PaymentInfo title="정기 결제정보" hideReciptBtn data={paymentInfoData} />
        {!isFinished && (
          <ButtonArea>
            <Button size="large">구독 해지하기</Button>
          </ButtonArea>
        )}
      </Contents>
    </Container>
  );
}
