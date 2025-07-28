import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderDeliveryData, DeliveryGroup } from '@/views/mypage/components/DeliveryGroup';
import styles from './DeliveryGroupList.module.scss';

/**
 * 배송 유형별 주문 그룹 리스트 컴포넌트
 * @description OrderDeliveryData[]를 받아 배송타입명 + 셀러별 주문목록(OrderItem) 구성으로 반복 렌더링
 */

interface DeliveryGroupListProps {
  /** 배송 유형별 데이터 배열 */
  data: OrderDeliveryData[];
  /** 목록 or 상세 뷰 타입 지정 */
  viewType?: 'list' | 'detail';
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function DeliveryGroupList({
  data,
  viewType = 'list',
  onButtonClick,
}: DeliveryGroupListProps) {
  const deliveries = data as OrderDeliveryData[];

  return (
    <div className={styles.layout}>
      {/* 배송 유형별 그룹 반복 렌더링 */}
      {deliveries.map((order) => (
        <DeliveryGroup
          key={order.id}
          data={order}
          viewType={viewType}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
}
