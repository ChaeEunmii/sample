import { ButtonArea, Button, Text } from '@/shared/ui';
import type { OrderItemType } from '@/widgets/product/OrderItem';
import type { OrderStatusCode, OrderCase } from '@/widgets/product/OrderStatus';
import styles from './OrderStatusBtns.module.scss';
import clsx from 'clsx';

interface OrderStatusBtnsProps {
  /** 주문 아이템 정보 */
  item: OrderItemType;
  /** 버튼이 표시될 뷰 타입 ('list' | 'detail') */
  viewType: 'list' | 'detail';
  /** 버튼 클릭 시 호출될 콜백 함수 (action, item) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

interface ButtonConfig {
  /** 이 버튼 구성이 적용될 뷰 타입 (목록 | 상세 구성이 다름) */
  viewType: 'list' | 'detail';
  /** 매칭될 주문 상태 코드 또는 상태 코드 배열 */
  status: OrderStatusCode | OrderStatusCode[];
  /** 매칭될 주문 케이스 또는 케이스 배열 (선택) */
  orderCase?: OrderCase | OrderCase[];
  /** 추가 매칭 조건 함수: orderCase를 기준으로 맞춤 조건 지정 가능 */
  match?: (orderCase?: OrderCase) => boolean;
  /** 버튼 UI를 렌더링하는 함수 */
  render: (
    item: OrderItemType,
    onButtonClick?: (action: string, item: OrderItemType) => void
  ) => React.ReactNode;
}

// 상태 일치 여부 체크 함수
const isStatusMatch = (
  configStatus: OrderStatusCode | OrderStatusCode[],
  currentStatus: OrderStatusCode
) =>
  Array.isArray(configStatus)
    ? configStatus.includes(currentStatus) // 배열이면 포함 여부 체크
    : configStatus === currentStatus; // 단일 값이면 직접 비교

// 주문 케이스 일치 여부 체크 함수
const isOrderCaseMatch = (
  configOrderCase: OrderCase | OrderCase[] | undefined,
  currentOrderCase: OrderCase | undefined,
  matchFn?: (orderCase?: OrderCase) => boolean
): boolean => {
  if (matchFn) return matchFn(currentOrderCase); // 커스텀 매칭 함수가 있으면 실행
  if (configOrderCase === undefined) return true; // 조건 없으면 무조건 true

  if (Array.isArray(configOrderCase)) {
    return currentOrderCase !== undefined && configOrderCase.includes(currentOrderCase);
  }

  return configOrderCase === currentOrderCase; // 단일 값 비교
};

// 버튼 렌더링 조건 및 UI 설정 배열
const buttonConfigs: ButtonConfig[] = [
  // --- list view configs ---
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) =>
      orderCase === 'culture_cancelable_default' || orderCase === 'cancelable_default',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
            상세조회
          </Button>
        </ButtonArea>
      </div>
    ),
  },
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) => orderCase === 'culture_cancelable' || orderCase === 'cancelable',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
            상세조회
          </Button>
        </ButtonArea>
        <Text size="3" color="gray3">
          취소 가능까지 7시간 남았어요.
        </Text>
      </div>
    ),
  },
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) => orderCase === 'culture_cancel_limit' || orderCase === 'cancel_limit',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
            상세조회
          </Button>
        </ButtonArea>
        <Text size="3" color="alert">
          취소 가능시간이 얼마 남지 않았어요.
        </Text>
      </div>
    ),
  },
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) =>
      orderCase === 'culture_cancel_disabled' || orderCase === 'cancel_disabled',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)} disabled>
            취소하기
          </Button>
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
            상세조회
          </Button>
        </ButtonArea>
      </div>
    ),
  },
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) => orderCase === 'experience' || orderCase === 'purchaseGift',
    render: () => null,
  },
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) => orderCase !== 'culture_cancelable' && orderCase !== 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
          취소하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: ['subscription_payment_completed', 'subscription_product_ready_release'],
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
          취소하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'product_ready',
    match: (orderCase) => orderCase === 'experience' || orderCase === 'purchaseGift',
    render: () => null,
  },
  {
    viewType: 'list',
    status: 'product_ready',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'product_ready',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
          취소하기
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'delivering',
    orderCase: 'gift',
    render: () => null,
  },
  {
    viewType: 'list',
    status: 'delivering',
    orderCase: 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'delivering',
    match: (orderCase) => orderCase !== 'gift' && orderCase !== 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'delivered',
    orderCase: 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'delivered',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'delivered_reviewed',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'delivered_not_confirmed',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'delivered_not_confirmed',
    orderCase: 'gift',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'delivered_not_confirmed',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button onClick={() => onButtonClick?.('viewWrite', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'delivered_confirmed_no_review',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'pickup_available',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'pickup_available',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
        <Button onClick={() => onButtonClick?.('pickupConfirm', item)}>픽업확인</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'pickup_completed',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'pickup_completed',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'pickup_confirmed',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'pickup_confirmed',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'cancelled',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'cancelled',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'returning',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReturnDetails', item)}>
          반품상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'return_completed',
    orderCase: 'storePick',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReturnDetails', item)}>
          반품상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'return_completed',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReturnDetails', item)}>
          반품상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'exchanging',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button disabled onClick={() => onButtonClick?.('writeReview', item)}>
          리뷰쓰기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'exchange_delivery_complete',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'exchanging_delivering',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('writeReview', item)}>
          리뷰쓰기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'exchanging_delivering',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'return_cancel',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          문의하기
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'delivered_pending_review',
    orderCase: 'gift',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'list',
    status: 'delivered_claim_blocked',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          문의하기
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'delivered_return_cancelled',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          문의하기
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'subscription_active',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('skipSubscribe', item)}>
          회차 건너뛰기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('paymentMethod', item)}>
          결제 수단
        </Button>
        <Button onClick={() => onButtonClick?.('setSchedule', item)}>일정 설정</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'subscription_ended',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button onClick={() => onButtonClick?.('restartSubscribe', item)}>재구독</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: ['subscription_ended', 'subscription_canceled'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button onClick={() => onButtonClick?.('restartSubscribe', item)}>재구독</Button>
      </ButtonArea>
    ),
  },
  // 선물함
  {
    viewType: 'list',
    status: [
      'giftbox_payment_completed',
      'giftbox_product_ready',
      'giftbox_cancel_refund',
      'giftbox_delivering',
      'giftbox_used',
    ],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewGift', item)}>
          선물보기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: 'giftbox_delivered_no_review',
    render: (item, onClick) => {
      const isClaimable = item.orderStatus?.gift?.isClaimable ?? false;
      return (
        <ButtonArea className={clsx(styles.btns, isClaimable && styles.col3)}>
          <Button variant="tertiary" onClick={() => onClick?.('viewGift', item)}>
            선물보기
          </Button>
          {isClaimable && (
            <Button variant="tertiary" onClick={() => onClick?.('returnOrExchange', item)}>
              반품/교환
            </Button>
          )}
          <Button onClick={() => onClick?.('writeReview', item)}>리뷰쓰기</Button>
        </ButtonArea>
      );
    },
  },
  {
    viewType: 'list',
    status: 'giftbox_delivered_review',
    render: (item, onClick) => {
      const isClaimable = item.orderStatus?.gift?.isClaimable ?? false;
      return (
        <ButtonArea className={clsx(styles.btns, isClaimable && styles.col3)}>
          <Button variant="tertiary" onClick={() => onClick?.('viewGift', item)}>
            선물보기
          </Button>
          {item.orderStatus?.gift?.isClaimable && (
            <Button variant="tertiary" onClick={() => onClick?.('returnOrExchange', item)}>
              반품/교환
            </Button>
          )}
          <Button onClick={() => onClick?.('viewReview', item)}>리뷰보기</Button>
        </ButtonArea>
      );
    },
  },

  // --- detail view configs ---
  {
    viewType: 'detail',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) => orderCase === 'experience' || orderCase === 'purchaseGift',
    render: () => null,
  },
  {
    viewType: 'detail',
    status: ['order_completed', 'payment_completed'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
          취소하기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['subscription_payment_completed', 'subscription_product_ready_release'],
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
          취소하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
          상세조회
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'product_ready',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
          취소하기
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'delivering',
    orderCase: 'gift',
    render: () => null,
  },
  {
    viewType: 'detail',
    status: 'delivering',
    orderCase: 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivering',
    match: (orderCase) => orderCase !== 'gift' && orderCase !== 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'delivered',
    orderCase: 'experience',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'delivered_reviewed',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_reviewed',
    orderCase: 'gift',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_reviewed',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'delivered_not_confirmed',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_not_confirmed',
    orderCase: 'gift',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_not_confirmed',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button onClick={() => onButtonClick?.('viewWrite', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'delivered_confirmed_no_review',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_confirmed_no_review',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'pickup_available',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button onClick={() => onButtonClick?.('pickupConfirm', item)}>픽업확인</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'pickup_available',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'pickup_completed',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'pickup_completed',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('returnOrExchange', item)}>
          반품/교환
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'pickup_confirmed',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'pickup_confirmed',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'pickup_confirmed',
    orderCase: 'storePick',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewVoucher', item)}>
          교환권 조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'cancelled',
    orderCase: 'storePick',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'cancelled',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'cancelled',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'returning',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReturnDetails', item)}>
          반품상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'returning',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReturnDetails', item)}>
          반품상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'return_completed',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReturnDetails', item)}>
          반품상세
        </Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'exchanging',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button disabled onClick={() => onButtonClick?.('writeReview', item)}>
          리뷰쓰기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'exchange_delivery_complete',
    orderCase: 'subscription', //정기구독
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('addSubscribeApply', item)}>
          추가 구독 신청
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'exchanging_delivering',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('writeReview', item)}>
          리뷰쓰기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'exchanging_delivering',
    orderCase: 'pickup',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
          교환상세
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_claim_blocked',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'delivered_return_cancelled',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'return_cancel',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },

  {
    viewType: 'detail',
    status: 'delivered_pending_review',
    orderCase: 'gift',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('repurchase', item)}>
          재구매
        </Button>
        <Button onClick={() => onButtonClick?.('writeReview', item)}>리뷰쓰기</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['order_completed'],
    match: (orderCase) =>
      orderCase === 'culture_cancelable_default' || orderCase === 'cancelable_default',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
        </ButtonArea>
      </div>
    ),
  },
  {
    viewType: 'detail',
    status: ['order_completed'],
    match: (orderCase) => orderCase === 'culture_cancelable' || orderCase === 'cancelable',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
        </ButtonArea>
        <Text size="3" color="gray3">
          취소 가능까지 7시간 남았어요.
        </Text>
      </div>
    ),
  },
  {
    viewType: 'detail',
    status: ['order_completed'],
    match: (orderCase) => orderCase == 'culture_cancel_limit' || orderCase === 'cancel_limit',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
        </ButtonArea>
        <Text size="3" color="alert">
          취소 가능시간이 얼마 남지 않았어요.
        </Text>
      </div>
    ),
  },
  {
    viewType: 'detail',
    status: ['order_completed'],
    match: (orderCase) =>
      orderCase === 'culture_cancel_disabled' || orderCase === 'cancel_disabled',
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" disabled onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
        </ButtonArea>
      </div>
    ),
  },
  {
    viewType: 'detail',
    status: ['apply_completed'],
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('cancelOrder', item)}>
            취소하기
          </Button>
        </ButtonArea>
      </div>
    ),
  },
  {
    viewType: 'detail',
    status: 'subscription_active',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('skipSubscribe', item)}>
          회차 건너뛰기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('paymentMethod', item)}>
          결제 수단
        </Button>
        <Button onClick={() => onButtonClick?.('setSchedule', item)}>일정 설정</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'subscription_ended',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button onClick={() => onButtonClick?.('restartSubscribe', item)}>재구독</Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['subscription_ended', 'subscription_canceled'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button onClick={() => onButtonClick?.('restartSubscribe', item)}>재구독</Button>
      </ButtonArea>
    ),
  },
  // 선물함
  {
    viewType: 'detail',
    status: 'giftbox_delivering',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'giftbox_used',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('writeReview', item)}>
          리뷰쓰기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: 'giftbox_delivered_no_review',
    render: (item, onClick) => {
      const isClaimable = item.orderStatus?.gift?.isClaimable ?? false;
      return (
        <ButtonArea className={clsx(styles.btns, isClaimable && styles.col3)}>
          <Button variant="tertiary" onClick={() => onClick?.('trackDelivery', item)}>
            배송조회
          </Button>
          {isClaimable && (
            <Button variant="tertiary" onClick={() => onClick?.('returnOrExchange', item)}>
              반품/교환
            </Button>
          )}
          <Button onClick={() => onClick?.('writeReview', item)}>리뷰쓰기</Button>
        </ButtonArea>
      );
    },
  },
  {
    viewType: 'detail',
    status: 'giftbox_delivered_review',
    render: (item, onClick) => {
      const isClaimable = item.orderStatus?.gift?.isClaimable ?? false;
      return (
        <ButtonArea className={clsx(styles.btns, isClaimable && styles.col3)}>
          <Button variant="tertiary" onClick={() => onClick?.('trackDelivery', item)}>
            배송조회
          </Button>
          {item.orderStatus?.gift?.isClaimable && (
            <Button variant="tertiary" onClick={() => onClick?.('returnOrExchange', item)}>
              반품/교환
            </Button>
          )}
          <Button onClick={() => onClick?.('viewReview', item)}>리뷰보기</Button>
        </ButtonArea>
      );
    },
  },
];

export const OrderStatusBtns = ({ item, viewType, onButtonClick }: OrderStatusBtnsProps) => {
  // 현재 아이템의 주문 상태 코드와 주문 케이스 추출
  const status = item.orderStatus?.status as OrderStatusCode | undefined;
  const orderCase = item.orderStatus?.orderCase as OrderCase | undefined;

  if (!status) return null; // 상태가 없으면 렌더링하지 않음

  // 1. buttonConfigs에서 현재 상태와 뷰타입이 일치하는 후보군 필터링
  const filteredConfigs = buttonConfigs.filter(
    ({ viewType: vt, status: st }) => vt === viewType && isStatusMatch(st, status)
  );

  // 2. 우선순위 정렬: orderCase가 명시된 항목 우선 → match 함수가 있는 항목 우선
  const sortedConfigs = filteredConfigs.sort((a, b) => {
    const aHasOrderCase = a.orderCase !== undefined ? 1 : 0;
    const bHasOrderCase = b.orderCase !== undefined ? 1 : 0;
    const aHasMatch = a.match ? 1 : 0;
    const bHasMatch = b.match ? 1 : 0;

    // orderCase 우선 → match 함수 우선
    return bHasOrderCase - aHasOrderCase || bHasMatch - aHasMatch;
  });

  // 3. 위에서 정렬된 리스트 중 orderCase 조건이 가장 먼저 만족되는 config를 선택
  const config = sortedConfigs.find((c) => isOrderCaseMatch(c.orderCase, orderCase, c.match));

  // 조건에 맞는 버튼이 없으면 렌더링하지 않음
  if (!config) return null;

  // 찾은 config의 render 함수 실행하여 버튼 UI 출력
  return <>{config.render(item, onButtonClick)}</>;
};

OrderStatusBtns.displayName = 'OrderStatusBtns';
