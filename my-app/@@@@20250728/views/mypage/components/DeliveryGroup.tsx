import { Heading, Text } from '@shared/ui';
import { OrderItem, OrderStatusFlag } from '@widgets/product';
import { formatPrice } from '@/shared/utils/ui';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { DeliveryType } from '@/widgets/product/OrderList';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
import clsx from 'clsx';
import styles from './DeliveryGroup.module.scss';

/**
 * OrderItem에 배송 유형별 노출 요소를 포함한 컴포넌트
 * @description (배송타입명 + 부가 정보 + 주문 목록(OrderItem)) 구성
 */

// 판매자(셀러)별 주문 상품 목록 타입 정의
export interface Seller {
  id: string;
  seller: string;
  arrival?: string;
  rental?: string;
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

interface DeliveryGroupProps {
  /** 주문 배송 데이터 */
  data: OrderDeliveryData;
  /** 표시 방식: 'list'는 목록형(셀러명/배송비 미노출), 'detail'은 상세형(노출) */
  viewType?: 'list' | 'detail';
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function DeliveryGroup({ data, viewType, onButtonClick, className }: DeliveryGroupProps) {
  return (
    <div key={data.id} className={clsx(styles.wrap, className)}>
      {/* 배송타입 노출 */}
      {data.deliveryType && (
        <div className={styles.category}>
          <Heading as="h2" size="5" weight="bold" className={styles.title}>
            {data.deliveryType as DeliveryType}
          </Heading>
        </div>
      )}
      {/* 해당 배송타입의 주문목록 */}
      <div className={styles.cont}>
        {data.sellers.map((seller) => {
          // 무료배송 체크
          const freeDelivery =
            seller.items.length > 0 &&
            seller.items.every((item) => item.delivery?.feePolicy === 'freeOnly');
          // 배송비 체크
          const deliveryFee = !freeDelivery
            ? (seller.items.find((item) => item.delivery?.deliveryFee !== undefined)?.delivery
                ?.deliveryFee ?? 0)
            : 0;
          // 설치배송비 체크
          const hasInstall = seller.items.some((item) => item.install === true);
          // 글로벌 배송 여부 체크
          const isGlobal = seller.items.some((item) =>
            ['globalExport', 'globalImport'].includes(item.orderStatus?.orderCase ?? '')
          );
          // 상단 배송정보 노출 조건
          const showTopDetail = (deliveryFee > 0 || !!seller.seller) && viewType === 'detail';
          // 상품 가격 지우고 갯수만 노출하는 조건 (체험단, 사은품, 가격이 0일떄)
          const isHidePriceShowCount = seller.items.some(
            (item) =>
              ['experience', 'purchaseGift'].includes(item.orderStatus?.orderCase ?? '') ||
              item.price?.current === 0
          );

          return (
            <div key={seller.id} className={styles.item}>
              {/* 최상단 셀러 + 배송비 노출 */}
              {showTopDetail && (
                <div className={styles.topDetail}>
                  {/* 셀러명이 존재할 경우에 노출 */}
                  {seller.seller && (
                    <Text size="5" weight="semibold" indent className={styles.seller}>
                      {seller.seller}
                    </Text>
                  )}
                  {/* 배송비 or 무료배송 노출 */}
                  {freeDelivery ? (
                    <Text
                      size="3"
                      color="gray2"
                      weight="semibold"
                      align="right"
                      indent
                      className={styles.fee}
                    >
                      무료배송
                    </Text>
                  ) : deliveryFee > 0 ? (
                    <Text
                      size="3"
                      color="gray2"
                      weight="semibold"
                      align="right"
                      indent
                      className={styles.fee}
                    >
                      {isGlobal && <>해외 </>}배송비 {formatPrice(deliveryFee)}
                      {hasInstall && (
                        <Text
                          as="span"
                          weight="regular"
                          color="gray3"
                          indent
                          className={styles.desc}
                        >
                          설치배송비 별도
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </div>
              )}
              {/* 도착예정 노출 */}
              {seller.arrival && (
                <div className={styles.arrival}>
                  <Text size="4" weight="semibold" color="point">
                    {seller.arrival}
                  </Text>
                </div>
              )}
              {/* 목록 노출 : OrderItem에 slot으로 구성*/}
              <OrderItem
                items={seller.items} // 셀러 상품 목록
                showOrderCount // 주문 수량 표시 옵션
                isCart
                hidePrice={isHidePriceShowCount ? true : false}
                orderData={(item) => (
                  <>
                    {/* OrderItem hidePrice시키고 orderData슬롯에 quantity 노출 */}
                    {isHidePriceShowCount && (
                      <span className={styles.experienceCount}>{item.quantity}개</span>
                    )}
                  </>
                )}
                // 주문 위쪽에 주문 상태 표시 플래그 렌더링
                orderTopSlot={(item) =>
                  item.orderStatus ? (
                    <OrderStatusFlag
                      status={item.orderStatus.status}
                      date={viewType === 'detail' ? item.orderStatus.date : undefined}
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
                      viewType={viewType ?? 'list'} // 버튼구조 뷰타입
                      onButtonClick={(action, clickedItem) => {
                        // 버튼 클릭 시 부모 컴포넌트 콜백 호출 (존재 시)
                        onButtonClick?.(action, clickedItem);
                      }}
                    />
                  </>
                )}
                className={styles.myOrder}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
