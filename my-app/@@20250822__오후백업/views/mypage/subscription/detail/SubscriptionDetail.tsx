'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TextList, Link } from '@shared/ui';
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
  // SubscriptionNotice,
} from '@/views/mypage/subscription/components';
import styles from './SubscriptionDetail.module.scss';
import { mockCommonOrder } from '@mocks/myorder';
import { mockPaymentMethod, mockSubscribeTopInfoData } from '@/mocks/subscription';

// mock 데이터 가져오기
const { orderItems, deliveryDetail } = mockCommonOrder;
const payment = mockPaymentMethod; // 정기구독 결제 수단

// 정기구독 주기
const cycle = {
  period: '1회 맛보기',
  cycle: '1주에 한 번',
  day: '금요일',
  roundInfo: {
    currentRound: 123,
    useCount: 12,
  },
};

export default function SubscriptionDetail() {
  return (
    <Container showBack title="구독 상세 조회">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <SubscriptionTopInfo info={mockSubscribeTopInfoData} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        {/* <SubscriptionProducts data={orderItems} /> */}
        {/* 정기구독 일정 */}
        <SubscriptionCycle
          title="정기구독 일정"
          data={cycle}
          borderTop
          level="1"
          wideGap
          showScheduleCheckBtn
          onScheduleCheck={() => {
            console.log('전체 일정 확인 클릭!');
          }}
        />
        {/* 이번 회차 상품 정보 */}
        <SubscriptionCurrentProductInfo borderTop level="1" mode="mypage" />
        {/* H.Point 사용 */}
        <HPointAvailability borderTop level="1" />
        {/* 배송방법 */}
        <SubscriptionDeliveryMethod
          data={{
            method: '당일배송',
            expect: '(17:30 도착 예정)',
          }}
        />
        {/* 정기구독 배송지 */}
        <DeliveryDetail title="정기구독 배송지" infoData={deliveryDetail} borderTop level="1" />
        {/* 주의사항 */}
        <SubscriptionNotice borderTop level="1">
          <TextList
            data={[
              '등록된 정기구독 결제 수단으로 배송 2일 전 자동 결제됩니다.',
              <>
                결제된 구독 주문 정보는 전체 구독 일정과
                <Link href="#" variant="underline" type="inline">
                  주문/배송
                </Link>
                메뉴에서 확인해 주세요.
              </>,
              '정기배송일이 휴무일인 경우 전날 배송됩니다.',
              '1순위 결제 수단으로 결제를 할 수 없는 경우 2순위로 결제수단으로 결제됩니다. 만약 2순위로도 결제가 불가한 경우, 해당 회차의 주문은 자동으로 건너뛰기(회차 취소)됩니다.',
              '결제 이후에 결제 수단이 변경된 경우, 다음 회차부터 변경된 결제 수단으로 정기결제가 진행됩니다.',
            ]}
          />
        </SubscriptionNotice>
        {/* 정기구독 결제 수단 */}
        <SubscriptionPaymentMethod methods={payment} borderTop level="1" />
        {/* 정기 결제정보 */}
        <PaymentInfo
          title="정기 결제정보"
          hideReciptBtn
          data={{
            items: [
              { label: '상품금액', price: 180000 },
              { label: '배송비', price: 0 },
              { label: '구독 할인금액', price: -45000 },
            ],
            totalPrice: 105000,
          }}
        />
        <ButtonArea>
          <Button size="large">구독 해지하기</Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
