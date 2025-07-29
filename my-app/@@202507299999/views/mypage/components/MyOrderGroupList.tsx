import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderDeliveryData, MyOrderGroup } from '@/views/mypage/components/MyOrderGroup';
import styles from './MyOrderGroupList.module.scss';

/**
 * 배송 유형별 주문 그룹 리스트 컴포넌트
 * @description OrderDeliveryData[]를 받아 배송타입명 + 셀러별 주문목록(OrderItem) 구성으로 반복 렌더링
 */

interface MyOrderGroupListProps {
  /** 배송 유형별 데이터 배열 */
  data: OrderDeliveryData[];
  /** 목록 or 상세 뷰 타입 지정 */
  viewType?: 'list' | 'detail';
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function MyOrderGroupList({
  data,
  viewType = 'list',
  onButtonClick,
}: MyOrderGroupListProps) {
  const deliveries = data as OrderDeliveryData[];

  return (
    <div className={styles.layout}>
      {/* 배송 유형별 그룹 반복 렌더링 */}
      {deliveries.map((order) => (
        <MyOrderGroup
          key={order.id}
          data={order}
          viewType={viewType}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
}
