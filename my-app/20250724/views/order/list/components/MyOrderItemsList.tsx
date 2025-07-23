import { TextButton } from '@shared/ui';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderDeliveryData, MyOrderItems } from '@views/mypage/order/list/components/MyOrderItems';
import { ImageUpload } from '@views/mypage/claims/components/ImageUpload';
import { ReturnStatusFlag } from '@views/mypage/claims/components/ReturnStatusFlag';
import styles from './MyOrderItemsList.module.scss';

interface MyOrderItemsListProps {
  data: OrderDeliveryData[];
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function MyOrderItemsList({ data, onButtonClick }: MyOrderItemsListProps) {
  return (
    <div className={styles.layout}>
      <ReturnStatusFlag status="return_confirmed" date="2025-12-25T12:34:56" />
      <ReturnStatusFlag status="return_confirmed" />
      <ImageUpload />
      {/* 상단정보 */}
      <div className={styles.info}>
        <OrderInfoTopBar date="20251225" />
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
      </div>
      {/* 하단목록 (배송타입별 목록)*/}
      <div className={styles.list}>
        {data.map((order) => (
          <MyOrderItems key={order.id} data={order} onButtonClick={onButtonClick} />
        ))}
      </div>
    </div>
  );
}
