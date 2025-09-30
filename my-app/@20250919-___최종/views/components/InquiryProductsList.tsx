'use client';
import { OrderItem, OrderStatusFlag } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';

// export interface GroupedOrderData {
//   orderNumber: string;
//   orderDate: string;
//   paymentLabel?: string;
//   deliveries: OrderDeliveryData[];
// }

interface InquiryProductsListProps {
  data: OrderItemType[];
  /** 현재 선택된 아이템 ID (단일 선택 모드) */
  selectedItem?: string;
  /** 개별 아이템 선택 시 호출되는 콜백 함수 */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 가격 옆 주문 개수 노출 여부 체크 */
  showOrderCount?: boolean;
}

export const InquiryProductsList = ({
  data,
  selectedItem,
  onSelectItem,
  showOrderCount = false,
}: InquiryProductsListProps) => {
  return (
    <OrderItem
      items={data}
      showOrderCount={showOrderCount}
      thumbSize="medium"
      selectable
      selectMode="single"
      selectedItem={selectedItem}
      onSelectItem={onSelectItem}
      orderTopSlot={(item) =>
        item.orderStatus ? (
          <>
            {/* 주문플래그 */}
            <OrderStatusFlag status={item.orderStatus.status} />
          </>
        ) : null
      }
    />
  );
};

InquiryProductsList.displayName = 'InquiryProductsList';
