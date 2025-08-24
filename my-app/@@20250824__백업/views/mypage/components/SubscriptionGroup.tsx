import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderStatusFlag } from '@/widgets/product';
import type { OrderStatusCode } from '@widgets/product/OrderStatus';
import { SubscriptionItem } from '@views/mypage/components';
import styles from './OrderGroup.module.scss';

/**
 * 정기구독번호 단위 주문 섹션 컴포넌트
 * @description (구독 정보 + 정기구독 주문 목록) 구성
 */

/** 주문 단위 전체 데이터 타입 */
export interface GroupedOrderData {
  orderNumber: string;
  orderDate: string;
  paymentLabel?: string;
  items: OrderItemType[];
}

interface SubscriptionGroupProps {
  /** 주문번호 단위 데이터 */
  data: GroupedOrderData;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 구독 일정 요약 박스 클릭 시 호출되는 콜백 함수 (클릭된 아이템 정보 전달) */
  onSummaryClick?: (item: OrderItemType) => void;
}

/** 정기구독번호 단위의 전체 묶음: 정기구독번호상단 + 정기구독 그룹 반복 */
export function SubscriptionGroup({ data, onButtonClick, onSummaryClick }: SubscriptionGroupProps) {
  const handleClickDetail = () => {
    console.log('구독상세 버튼 클릭!');
  };

  // 상단 날짜 좌측 위치한 대표 orderState를 가져오는 함수
  function getOrderState(items: OrderItemType[]): OrderStatusCode | undefined {
    // items 배열에서 orderStatus.status가 있는 첫 번째 아이템을 찾음
    const status = items.find((i) => i.orderStatus?.status)?.orderStatus?.status;
    // 찾은 상태(status)를 OrderStatusCode 타입으로 반환 (없으면 undefined)
    return status as OrderStatusCode | undefined;
  }
  // 위 함수로 현재 주문 묶음(data.items)의 대표 상태 추출 (플래그로 표현됨)
  const orderState = getOrderState(data.items);

  return (
    <div className={styles.section}>
      {/* 상단: 구독 정보 (플래그, 날짜, 정기구독번호) 등) */}
      <div className={styles.top}>
        <OrderInfoTopBar
          date={data.orderDate}
          detailLabel="구독상세"
          onClickDetail={handleClickDetail}
          titleSlot={orderState ? <OrderStatusFlag status={orderState} /> : null}
        />
        <OrderInfoBox
          title="정기구독번호"
          content={data.orderNumber}
          isCopy
          sideSlot={data.paymentLabel && <>{data.paymentLabel}</>}
        />
      </div>
      {/* 하단: 정기구독오더 그룹 반복 */}
      <div className={styles.bottom}>
        {/* 나중에 예시용으로 쓰기 */}
        {/* <OrderItem
          items={data.items}
          orderSlot={(item) => (
            <OrderStatusBtns
              item={item}
              viewType="list"
              onButtonClick={(action, clickedItem) => {
                console.log(action, clickedItem);
              }}
            />
          )}
          showOrderCount
          hideThumbLabel
          lineDivider
        /> */}
        <SubscriptionItem
          data={data.items}
          viewType="list"
          onButtonClick={onButtonClick}
          onSummaryClick={onSummaryClick}
        />
      </div>
    </div>
  );
}
