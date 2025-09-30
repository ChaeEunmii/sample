import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderDeliveryData, MyOrderItems } from '@/views/mypage/components/MyOrderItems';
import styles from './MyOrderItemsList.module.scss';

/**
 * 마이페이지 주문/배송 에서 사용
 * 마이페이지 (목록형) : 주문번호 + MyOrderItems 구성 컴퍼넌트
 *                    (주문번호 + 해당하는 주문목록을 배송타입별로 묶어서 나타내는 목록 컴퍼넌트)
 *
 * 마이페이지 (상세형) : MyOrderItems 구성
 *                    (배송타입별로 묶어서 나타내는 목록 컴퍼넌트)
 *
 * */

/** 주문 단위 전체 데이터 타입*/
export interface GroupedOrderData {
  orderNumber: string;
  orderDate: string;
  paymentLabel?: string;
  deliveries: OrderDeliveryData[];
}

interface MyOrderItemsListProps {
  /** 리스트 뷰: GroupedOrderData, 상세 뷰: OrderDeliveryData[] */
  data: GroupedOrderData | OrderDeliveryData[];
  /** 목록 or 상세 뷰 타입 지정 */
  viewType?: 'list' | 'detail';
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function MyOrderItemsList({
  data,
  viewType = 'list',
  onButtonClick,
}: MyOrderItemsListProps) {
  // 주문상세 버튼 클릭 이벤트
  const handleClickDetail = () => {
    console.log('주문상세 버튼클릭!!');
  };

  // viewType이 list일 경우 주문번호별로 그룹화된 데이터에서
  // GroupedOrderData 에서 deliveries 추출
  const deliveries =
    viewType === 'list' ? (data as GroupedOrderData).deliveries : (data as OrderDeliveryData[]);

  return (
    <div className={styles.layout}>
      {viewType === 'list' && (
        <>
          {/* 상단정보 */}
          <div className={styles.info}>
            <OrderInfoTopBar
              date={(data as GroupedOrderData).orderDate}
              detailLabel="주문상세"
              onClickDetail={handleClickDetail}
            />
            <OrderInfoBox
              title="주문번호"
              content={(data as GroupedOrderData).orderNumber}
              isCopy
              sideSlot={
                (data as GroupedOrderData).paymentLabel && (
                  <>{(data as GroupedOrderData).paymentLabel}</>
                )
              }
            />
          </div>
        </>
      )}
      {/* 하단목록 (배송타입별로 목록을 나타낸다)*/}
      <div className={styles.list}>
        {deliveries.map((order) => (
          <MyOrderItems
            key={order.id}
            data={order}
            viewType={viewType}
            onButtonClick={onButtonClick}
          />
        ))}
      </div>
    </div>
  );
}
