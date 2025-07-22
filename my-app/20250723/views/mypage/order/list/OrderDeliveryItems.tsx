import { Collapse, Heading, Text } from '@shared/ui';
import { OrderItem, OrderStatusFlag } from '@widgets/product';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { DeliveryType } from '@/widgets/product/OrderList';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import styles from './OrderDeliveryItems.module.scss';

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

interface OrderDeliveryItemsProps {
  /** 주문 배송 데이터 */
  data: OrderDeliveryData;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function OrderDeliveryItems({ data, onButtonClick }: OrderDeliveryItemsProps) {
  return (
    <Collapse
      key={data.id}
      variant="section"
      defaultSummary
      className={styles.prodSection}
      defaultOpen
    >
      <Collapse.Control>
        <Heading as="h2" size="5" weight="bold" indent className={styles.title}>
          {data.deliveryType as DeliveryType}
        </Heading>
      </Collapse.Control>
      <Collapse.Content>
        {data.sellers.map((seller) => (
          <div key={seller.id}>
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
              // 각 상품 위쪽에 주문 상태 표시 플래그 렌더링
              orderTopSlot={(item) =>
                item.orderStatus ? (
                  <OrderStatusFlag status={item.orderStatus.status} date={item.orderStatus.date} />
                ) : null
              }
              // 각 상품에 상태별 버튼 렌더링
              orderSlot={(item) => (
                <OrderStatusBtns
                  item={item} // 해당 상품 아이템
                  viewType="detail" // 상세 뷰 타입
                  onButtonClick={(action, clickedItem) => {
                    // 버튼 클릭 시 부모 컴포넌트 콜백 호출 (존재 시)
                    onButtonClick?.(action, clickedItem);
                  }}
                />
              )}
            />
          </div>
        ))}
      </Collapse.Content>
    </Collapse>
  );
}
