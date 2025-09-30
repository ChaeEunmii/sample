import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { MyOrderGroup, OrderDeliveryData } from '@/views/mypage/components/MyOrderGroup';
import type { OrderItemType } from '@widgets/product/OrderItem';
import styles from './OrderGroupSection.module.scss';

/**
 * 주문번호 단위 주문 섹션 컴포넌트
 * @description (주문상단 정보 + 배송유형별 주문 목록) 구성
 */

/** 주문 단위 전체 데이터 타입 */
export interface GroupedOrderData {
  orderNumber: string;
  orderDate: string;
  paymentLabel?: string;
  deliveries: OrderDeliveryData[];
}

interface OrderGroupSectionProps {
  /** 주문번호 단위 데이터 */
  data: GroupedOrderData;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

/** 주문번호 단위의 전체 묶음: 주문상단 + 배송유형 그룹 반복 */
export function OrderGroupSection({ data, onButtonClick }: OrderGroupSectionProps) {
  const handleClickDetail = () => {
    console.log('주문상세 버튼 클릭!');
  };

  return (
    <div className={styles.section}>
      {/* 상단: 주문 정보 (주문일자, 주문번호, 결제수단 등) */}
      <div className={styles.top}>
        <OrderInfoTopBar
          date={data.orderDate}
          detailLabel="주문상세"
          onClickDetail={handleClickDetail}
        />
        <OrderInfoBox
          title="주문번호"
          content={data.orderNumber}
          isCopy
          sideSlot={data.paymentLabel && <>{data.paymentLabel}</>}
        />
      </div>
      {/* 하단: 배송유형별 그룹 반복 */}
      <div className={styles.bottom}>
        <MyOrderGroup data={data.deliveries} viewType="list" onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}
