import { Heading, Text } from '@shared/ui';
import { OrderItem, OrderStatusFlag } from '@widgets/product';
import { formatPrice } from '@/shared/utils/ui';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { DeliveryType } from '@/widgets/product/OrderList';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
import clsx from 'clsx';
import styles from './MyOrderItems.module.scss';

// 판매자(셀러)별 주문 상품 목록 타입 정의
export interface Seller {
  id: string;
  seller: string;
  arrival?: string;
  /** 목록에 표시할 상품 아이템 배열 */
  items: OrderItemType[];
}

// 전체 주문 배송 데이터 타입 정의
export interface OrderDeliveryData {
  /** 고유 ID */
  id: string;
  /** 배송 타입 */
  deliveryType?: DeliveryType;
  /** 목록에 표시할 판매자(셀러)별 상품 배열 */
  sellers: Seller[];
  // ... 기타 필드
}

interface MyOrderItemsProps {
  /** 주문 배송 데이터 */
  data: OrderDeliveryData;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function MyOrderItems({ data, onButtonClick, className }: MyOrderItemsProps) {
  return (
    <div key={data.id} className={clsx(styles.layout, className)}>
      {/* 배송타입 노출 */}
      <div className={styles.category}>
        <Heading as="h2" size="5" weight="bold" indent className={styles.title}>
          {data.deliveryType as DeliveryType}
        </Heading>
      </div>
      {/* 해당 배송타입의 주문목록 */}
      <div className={styles.list}>
        {data.sellers.map((seller) => {
          // 배송비 체크
          const deliveryFee =
            seller.items.find((item) => item.delivery?.deliveryFee !== undefined)?.delivery
              ?.deliveryFee ?? 0;
          // 설치배송비 체크
          const hasInstall = seller.items.some((item) => item.install === true);

          return (
            <div key={seller.id} className={styles.items}>
              <div className={styles.topDetail}>
                <Text size="5" weight="semibold" className={styles.seller}>
                  {seller.seller}
                </Text>
                {/* 배송비 노출 */}
                {deliveryFee > 0 && (
                  <Text
                    size="3"
                    color="gray2"
                    weight="semibold"
                    align="right"
                    className={styles.fee}
                  >
                    배송비 {formatPrice(deliveryFee)}
                    {hasInstall && (
                      <Text as="span" weight="regular" color="gray3" className={styles.desc}>
                        설치배송비 별도
                      </Text>
                    )}
                  </Text>
                )}
              </div>
              {/* 도착예정 노출 */}
              {seller.arrival && (
                <div className={styles.arrival}>
                  <Text size="4" weight="semibold" color="point">
                    {seller.arrival}
                  </Text>
                </div>
              )}
              <OrderItem
                items={seller.items} // 셀러 상품 목록
                showOrderCount // 주문 수량 표시 옵션
                isCart
                // 주문 위쪽에 주문 상태 표시 플래그 렌더링
                orderTopSlot={(item) =>
                  item.orderStatus ? (
                    <OrderStatusFlag
                      status={item.orderStatus.status}
                      date={item.orderStatus.date}
                    />
                  ) : null
                }
                orderSlot={(item) => (
                  <>
                    {/* 추가 정보 데이터가 있으면 노출 */}
                    {item.orderAddInfo && <OrderItemsInfoBox />}
                    {/* 주문상태별 버튼 렌더링 */}
                    <OrderStatusBtns
                      item={item} // 해당 상품 아이템
                      viewType="detail" // 상세 뷰 타입
                      onButtonClick={(action, clickedItem) => {
                        // 버튼 클릭 시 부모 컴포넌트 콜백 호출 (존재 시)
                        onButtonClick?.(action, clickedItem);
                      }}
                    />
                  </>
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
