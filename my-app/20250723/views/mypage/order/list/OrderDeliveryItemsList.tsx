import { Heading, Stack, TextButton } from '@shared/ui';
import { OrderInfoBox } from '@views/mypage/order/components/OrderInfoBox';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderDeliveryData, OrderDeliveryItems } from '@views/mypage/order/list/OrderDeliveryItems';

interface OrderDeliveryItemsListProps {
  data: OrderDeliveryData[];
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function OrderDeliveryItemsList({ data, onButtonClick }: OrderDeliveryItemsListProps) {
  return (
    <>
      <Stack type="between">
        <Heading size="6" weight="bold">
          2025.12.25
        </Heading>
        <TextButton size="1" suffixIcon="arrowRight" iconSize="xsmall">
          주문상세
        </TextButton>
      </Stack>
      <OrderInfoBox
        title="주문번호"
        content="25122512345678"
        isCopy
        sideSlot={
          <TextButton color="point" size="1" variant="bold">
            Omni 결제
          </TextButton>
        }
      />
      {data.map((order) => (
        <OrderDeliveryItems key={order.id} data={order} onButtonClick={onButtonClick} />
      ))}
    </>
  );
}
