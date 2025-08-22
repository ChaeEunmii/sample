'use client';

import { OrderItem } from '@widgets/product';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import { SubscriptionSummary } from '@/views/mypage/components/SubscriptionSummary';
import styles from './SubscriptionItem.module.scss';

/**
 *
 * @description 정기구독 아이템 (상태 플래그/버튼/구독일정요약 포함)
 */

interface SubscriptionItemProps {
  /** 주문 배송 데이터 리스트 (배열) */
  data: OrderItemType[];
  /** 표시 방식: 'list'는 목록형, 'detail'은 상세형 */
  viewType?: 'list' | 'detail';
  /** 주문상태 플래그 숨김 여부 */
  hideStatusFlag?: boolean;
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 구독 일정 요약 박스 클릭 시 호출되는 콜백 함수 (클릭된 아이템 정보 전달) */
  onSummaryClick?: (item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function SubscriptionItem({
  data,
  viewType,
  hideStatusBtns,
  onButtonClick,
  onSummaryClick,
  className,
}: SubscriptionItemProps) {
  return (
    <>
      {/* 목록 노출 : OrderItem에 slot으로 구성 */}
      <OrderItem
        items={data} // 상품 목록
        isCart // 장바구니와 동일한 구조 사용
        showOrderCount // 주문 수량 표시 옵션
        hideThumbLabel // 썸네일 라벨 숨기기
        lineDivider // 리스트 라인으로 구분되는 스타일
        // 주문 하단 슬롯
        orderSlot={(item) => (
          <>
            <div className={styles.slot}>
              {/* 주문상태 버튼들 */}
              {!hideStatusBtns && (
                <OrderStatusBtns
                  item={item}
                  viewType={viewType ?? 'list'}
                  onButtonClick={(action, clickedItem) => onButtonClick?.(action, clickedItem)}
                />
              )}
              {/* 구독일정 요약 */}
              {item.orderStatus?.subscription?.summary && (
                <SubscriptionSummary
                  data={item}
                  onClick={(clickedItem) => onSummaryClick?.(clickedItem)}
                />
              )}
            </div>
          </>
        )}
        className={className}
      />
    </>
  );
}
