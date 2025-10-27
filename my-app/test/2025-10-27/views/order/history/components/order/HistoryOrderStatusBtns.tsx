import { ButtonArea, Button } from '@/shared/ui';
import type { OrderItemType } from '@/views/mypage/order/history/components/order/HistoryOrderItem';
import type {
  OrderStatusCode,
  OrderCase,
} from '@/views/mypage/order/history/components/order/HistoryOrderStatus';
import styles from './HistoryOrderStatusBtns.module.scss';
import clsx from 'clsx';

interface OrderStatusBtnsProps {
  /** '과거주문내역조회' 주문 아이템 정보 */
  item: OrderItemType;
  /** 버튼이 표시될 뷰 타입 ('list' | 'detail') */
  viewType: 'list' | 'detail';
  /** mode (추후 투홈 구분필요시 사용) */
  mode?: 'default' | 'tohome';
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

// '배송조회' 버튼 라벨 헬퍼: 새벽배송(dawn)만 '수령사진 확인'
const getTrackLabel = (oc?: OrderCase) => (oc === 'dawn' ? '수령사진 확인' : '배송조회');

// 버튼 렌더링 조건 및 UI 설정 배열
const buttonConfigs: ButtonConfig[] = [
  // --- list view configs ---
  {
    viewType: 'list',
    status: ['order_completed', 'payment_completed', 'delivery_ready'],
    render: () => null,
  },
  {
    viewType: 'list',
    status: ['accept_pending'],
    render: () => null,
  },
  {
    viewType: 'list',
    status: ['pickup_completed'],
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          {!isNoReview ? (
            <ButtonArea className={styles.btns}>
              <Button variant="tertiary" onClick={() => onButtonClick?.('viewReview', item)}>
                리뷰보기
              </Button>
            </ButtonArea>
          ) : null}
        </>
      );
    },
  },
  {
    viewType: 'list',
    status: ['delivering'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          {getTrackLabel(item.orderStatus?.orderCase)}
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: ['delivered'],
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          <ButtonArea className={styles.btns}>
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              {getTrackLabel(item.orderStatus?.orderCase)}
            </Button>
            {!isNoReview ? (
              <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
            ) : null}
          </ButtonArea>
        </>
      );
    },
  },
  {
    viewType: 'list',
    status: ['order_cancel'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: ['exchanging'],
    render: (item, onButtonClick) => {
      const isStorePick = item.orderStatus?.orderCase === 'storePick'; // 스토어픽 여부
      return (
        <ButtonArea className={clsx(styles.btns, styles.col3)}>
          {!isStorePick && (
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              {getTrackLabel(item.orderStatus?.orderCase)}
            </Button>
          )}
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
            교환상세
          </Button>
          <Button onClick={() => onButtonClick?.('viewDetails', item)}>리뷰보기</Button>
        </ButtonArea>
      );
    },
  },
  {
    viewType: 'list',
    status: ['pickup_waiting'],
    match: (orderCase) => orderCase === 'tOrder', //테이블오더
    render: () => null,
  },
  {
    viewType: 'list',
    status: ['pickup_completed'],
    match: (orderCase) => orderCase === 'tOrder', //테이블오더
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          {!isNoReview ? (
            <ButtonArea className={styles.btns}>
              <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
            </ButtonArea>
          ) : null}
        </>
      );
    },
  },
  {
    viewType: 'list',
    status: ['order_cancel'],
    match: (orderCase) => orderCase === 'tOrder', //테이블오더
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'list',
    status: ['claim_return', 'claim_exchange'],
    render: (item, onButtonClick) => {
      const isStorePick = item.orderStatus?.orderCase === 'storePick'; // 스토어픽 여부
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      const isReturn = item.orderStatus?.status === 'claim_return'; // 클레임(반품)
      const detailBtnLabel = isReturn ? '반품' : '교환';
      return (
        <ButtonArea className={clsx(styles.btns, styles.col3)}>
          {!isStorePick && (
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              {getTrackLabel(item.orderStatus?.orderCase)}
            </Button>
          )}
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewDetails', item)}>
            {detailBtnLabel}상세
          </Button>
          {!isNoReview && (
            <Button onClick={() => onButtonClick?.('viewDetails', item)}>리뷰보기</Button>
          )}
        </ButtonArea>
      );
    },
  },

  // --- detail view configs ---
  {
    viewType: 'detail',
    status: ['order_completed', 'payment_completed', 'delivery_ready'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['accept_pending', 'accepted_gift_ready'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['delivering'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
          {getTrackLabel(item.orderStatus?.orderCase)}
        </Button>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['delivered'],
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          <ButtonArea className={clsx(styles.btns, styles.col3)}>
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              {getTrackLabel(item.orderStatus?.orderCase)}
            </Button>
            <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
              문의하기
            </Button>
            {!isNoReview ? (
              <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
            ) : null}
          </ButtonArea>
        </>
      );
    },
  },
  {
    viewType: 'detail',
    status: ['delivered'],
    orderCase: 'gift', //선물
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          <ButtonArea className={clsx(styles.btns, styles.col3)}>
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              배송조회
            </Button>
            {isNoReview && (
              <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
                문의하기
              </Button>
            )}
            {!isNoReview ? (
              <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
            ) : null}
          </ButtonArea>
        </>
      );
    },
  },
  {
    viewType: 'detail',
    status: ['order_cancel'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewCancelDetails', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['exchanging'],
    render: (item, onButtonClick) => {
      const isStorePick = item.orderStatus?.orderCase === 'storePick'; // 스토어픽 여부
      return (
        <ButtonArea className={clsx(styles.btns, styles.col3)}>
          {!isStorePick && (
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              {getTrackLabel(item.orderStatus?.orderCase)}
            </Button>
          )}
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
            교환상세
          </Button>
          <Button onClick={() => onButtonClick?.('viewDetails', item)}>리뷰보기</Button>
        </ButtonArea>
      );
    },
  },
  {
    viewType: 'detail',
    status: ['pickup_waiting'],
    match: (orderCase) => orderCase === 'tOrder', //테이블오더
    render: () => null,
  },
  {
    viewType: 'detail',
    status: ['pickup_completed'],
    match: (orderCase) => orderCase === 'tOrder', //테이블오더
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          {!isNoReview ? (
            <ButtonArea className={styles.btns}>
              <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
            </ButtonArea>
          ) : null}
        </>
      );
    },
  },
  {
    viewType: 'detail',
    status: ['order_cancel'],
    match: (orderCase) => orderCase === 'tOrder', //테이블오더
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('viewReview', item)}>
          취소상세
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['pickup_available'],
    render: (item, onButtonClick) => (
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
          문의하기
        </Button>
      </ButtonArea>
    ),
  },
  {
    viewType: 'detail',
    status: ['pickup_completed'],
    render: (item, onButtonClick) => {
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      return (
        <>
          <ButtonArea className={styles.btns}>
            <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
              문의하기
            </Button>
            {!isNoReview ? (
              <Button onClick={() => onButtonClick?.('viewReview', item)}>리뷰보기</Button>
            ) : null}
          </ButtonArea>
        </>
      );
    },
  },
  {
    viewType: 'detail',
    status: ['claim_return', 'claim_exchange'],
    render: (item, onButtonClick) => {
      const isStorePick = item.orderStatus?.orderCase === 'storePick'; // 스토어픽 여부
      const isNoReview = item.orderStatus?.noReview ?? false; // 리뷰없음
      const isReturn = item.orderStatus?.status === 'claim_return'; // 클레임(반품)
      const detailBtnLabel = isReturn ? '반품' : '교환';
      return (
        <ButtonArea className={clsx(styles.btns, styles.col3)}>
          {!isStorePick && (
            <Button variant="tertiary" onClick={() => onButtonClick?.('trackDelivery', item)}>
              {getTrackLabel(item.orderStatus?.orderCase)}
            </Button>
          )}
          <Button variant="tertiary" onClick={() => onButtonClick?.('viewExchangeDetails', item)}>
            {detailBtnLabel}상세
          </Button>
          {!isNoReview && (
            <Button onClick={() => onButtonClick?.('viewDetails', item)}>리뷰보기</Button>
          )}
        </ButtonArea>
      );
    },
  },
  {
    viewType: 'detail',
    status: ['apply_completed'],
    render: (item, onButtonClick) => (
      <div className={styles.bottom}>
        <ButtonArea className={styles.btns}>
          <Button variant="tertiary" onClick={() => onButtonClick?.('inquiry', item)}>
            문의하기
          </Button>
        </ButtonArea>
      </div>
    ),
  },
];

export const HistoryOrderStatusBtns = ({ item, viewType, onButtonClick }: OrderStatusBtnsProps) => {
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

HistoryOrderStatusBtns.displayName = 'HistoryOrderStatusBtns';
