'use client';

import { OrderItem } from '@widgets/product';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderStatusFlag } from '@widgets/product';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import styles from './GiftItem.module.scss';

/**
 *
 * @description 선물함 상품 (OrderItem.tsx 구성) (상태 플래그/버튼/구독일정요약 포함)
 */

interface GiftItemItemProps {
  /** 주문 배송 데이터 리스트 (배열) */
  data: OrderItemType[];
  /** 표시 방식: 'list'는 목록형, 'detail'은 상세형 */
  viewType?: 'list' | 'detail';
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 가격영역 숨김 여부 */
  hidePrice?: boolean;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function GiftItem({
  data,
  viewType,
  hideStatusBtns,
  hidePrice,
  onButtonClick,
  className,
}: GiftItemItemProps) {
  return (
    <>
      {/* 목록 노출 : OrderItem에 slot으로 구성 */}
      <OrderItem
        items={data} // 상품 목록
        isCart // 장바구니와 동일한 구조 사용
        hideThumbLabel // 썸네일 라벨 숨기기
        lineDivider // 리스트 라인으로 구분되는 스타일
        showOrderCount={!hidePrice} // 갯수 노출
        hidePrice={hidePrice} // 가격 숨김
        // 가격영역 숨김이면 slot으로 갯수 노출
        orderData={(item) => (
          <>{hidePrice && <span className={styles.quantity}>{item.quantity}개</span>}</>
        )}
        // 주문 오른쪽 상단 슬롯
        orderTopSlot={(item) =>
          item.orderStatus ? (
            <OrderStatusFlag status={item.orderStatus.status} date={item.orderStatus.date} />
          ) : null
        }
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
            </div>
          </>
        )}
        className={className}
      />
    </>
  );
}
