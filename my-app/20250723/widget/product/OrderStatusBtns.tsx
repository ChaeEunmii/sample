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
    status: ['order_completed', 'payment_completed'], // 주문 완료 또는 결제 완료 상태
    orderCase: 'cultureCenter', // 문화센터 케이스
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
    status: ['order_completed', 'payment_completed'],
    orderCase: 'cancelable',
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
    orderCase: 'experience',
    render: () => null,
  },
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed'],
    match: (orderCase) =>
      orderCase !== 'cultureCenter' && orderCase !== 'cancelable' && orderCase !== 'experience',
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
    orderCase: 'experience',
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
    status: 'delivered_confirmed_no_review',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          배송조회
        </Button>
        <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
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
    status: 'return_cancel',
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          문의하기
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('writeReview', item)}>
          리뷰쓰기
        </Button>
      </ButtonArea>
    ),
  },

  // --- detail view configs ---
  {
    viewType: 'detail',
    status: ['order_completed', 'payment_completed'],
    orderCase: 'experience',
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
    status: 'delivered_confirmed_no_review',
    render: (item, onButtonClick) => (
      <ButtonArea className={clsx(styles.btns, styles.col3)}>
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
];

export const OrderStatusBtns = ({ item, viewType, onButtonClick }: OrderStatusBtnsProps) => {
  // 현재 아이템의 주문 상태 코드와 주문 케이스 추출
  const status = item.orderStatus?.status as OrderStatusCode | undefined;
  const orderCase = item.orderStatus?.orderCase as OrderCase | undefined;

  if (!status) return null; // 상태가 없으면 렌더링하지 않음

  // buttonConfigs 배열에서 현재 상태와 뷰 타입, 주문 케이스에 맞는 config를 찾음
  const config = buttonConfigs.find(({ viewType: vt, status: st, orderCase: oc, match }) => {
    if (vt !== viewType) return false; // 뷰 타입 불일치 시 제외
    if (!isStatusMatch(st, status)) return false; // 상태 불일치 시 제외
    if (!isOrderCaseMatch(oc, orderCase, match)) return false; // 주문 케이스 불일치 시 제외
    return true;
  });

  // 조건에 맞는 버튼이 없으면 렌더링하지 않음
  if (!config) return null;

  // 찾은 config의 render 함수 실행하여 버튼 UI 출력
  return <>{config.render(item, onButtonClick)}</>;
};

OrderStatusBtns.displayName = 'OrderStatusBtns';
