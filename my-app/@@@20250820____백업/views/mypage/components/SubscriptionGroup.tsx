import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import type { OrderItemType } from '@widgets/product/OrderItem';
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
  deliveries: OrderDeliveryData[];
}

interface SubscriptionGroupProps {
  /** 주문번호 단위 데이터 */
  data: GroupedOrderData;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

/** 정기구독번호 단위의 전체 묶음: 정기구독번호상단 + 정기구독 그룹 반복 */
export function SubscriptionGroup({ data, onButtonClick }: SubscriptionGroupProps) {
  const handleClickDetail = () => {
    console.log('구독상세 버튼 클릭!');
  };

  return (
    <div className={styles.section}>
      {/* 상단: 구독 정보 (주문일자, 주문번호, 결제수단 등) */}
      <div className={styles.top}>
        <OrderInfoTopBar
          date={data.orderDate}
          detailLabel="구독상세"
          onClickDetail={handleClickDetail}
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
        <DeliveryGroup data={data.deliveries} viewType="list" onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}
