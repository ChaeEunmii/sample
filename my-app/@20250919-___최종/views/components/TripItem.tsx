'use client';

import { Box, Text, Icon } from '@/shared/ui';
import { OrderItem } from '@widgets/product';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderStatusFlag } from '@widgets/product';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import styles from './TripItem.module.scss';

/**
 *
 * @description 여행 주문아이템 (OrderItem.tsx 구성) (상태 플래그/버튼/여행타입별 컨텐츠 렌더 포함)
 */

interface TripItemProps {
  /** 주문 배송 데이터 리스트 (배열) */
  data: OrderItemType[];
  /** 표시 방식: 'list'는 목록형, 'detail'은 상세형 */
  viewType?: 'list' | 'detail';
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 가격영역 숨김 여부 */
  hidePrice?: boolean;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function TripItem({
  data,
  viewType,
  hideStatusBtns,
  hidePrice,
  onButtonClick,
  className,
}: TripItemProps) {
  return (
    <>
      {/* 목록 노출 : OrderItem에 slot으로 구성 */}
      <OrderItem
        items={data} // 상품 목록
        isCart // 장바구니와 동일한 구조 사용
        hideThumbLabel // 썸네일 라벨 숨기기
        lineDivider // 리스트 라인으로 구분되는 스타일
        showOrderCount={!hidePrice} // 갯수 노출
        hidePrice={hidePrice} // 가격 숨김
        itemWrapGap="16"
        showTotalPrice={viewType === 'list'} // 금액을 총금액으로 텍스트넣기
        // 주문 오른쪽 상단 슬롯
        orderTopSlot={(item) => (
          <>
            <div className={styles.topSlot}>
              {item.orderStatus ? (
                <OrderStatusFlag status={item.orderStatus.status} date={item.orderStatus.date} />
              ) : null}
              {item.orderStatus?.trip?.tripInfos && (
                <ul className={styles.infos}>
                  {item.orderStatus.trip.tripInfos?.map((info, index) => {
                    return <li key={index}>{info}</li>;
                  })}
                </ul>
              )}
            </div>
          </>
        )}
        orderDetailData={(item) => (
          <>
            {item.orderStatus?.trip?.segments && (
              <div className={styles.trip}>
                <ul className={styles.segments}>
                  {item.orderStatus?.trip?.segments.map((item, i) => (
                    <li key={item.id}>
                      <div className={styles.title}>여정{i + 1}</div>
                      <div className={styles.sub}>
                        <div className={styles.fromTo}>
                          {item.from}
                          <Icon name="arrowTo" size="small" className={styles.toIcon} />
                          {item.to}
                        </div>
                        <div className={styles.airline}>{item.airline}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        // 주문 하단 슬롯
        orderSlot={(item) => {
          // OrderSlot 슬롯 노출 조건
          const showOrderSlot = !hideStatusBtns || item.orderAddInfo;
          return (
            <>
              {showOrderSlot && (
                <div className={styles.slot}>
                  {/* 하단 추가정보 */}
                  {item.orderAddInfo && (
                    <div className={styles.addInfoWrap}>
                      <Box margin="0">
                        <ul className={styles.addInfos}>
                          {item.orderAddInfo.map((info, index) => {
                            return (
                              <li key={index}>
                                <dl>
                                  <dt>{info.label}</dt>
                                  <dd>{info.value}</dd>
                                </dl>
                              </li>
                            );
                          })}
                        </ul>
                      </Box>
                      {item.orderStatus?.trip?.segments && (
                        <Text size="3" color="gray3" className="ncp-mt-s">
                          구간별 좌석등급 등 상세내역은 주문상세(THT) 버튼을 통해 확인가능 합니다.
                        </Text>
                      )}
                    </div>
                  )}
                  {/* 주문상태 버튼들 */}
                  {!hideStatusBtns && (
                    <OrderStatusBtns
                      item={item}
                      viewType={viewType ?? 'list'}
                      onButtonClick={(action, clickedItem) => onButtonClick?.(action, clickedItem)}
                    />
                  )}
                </div>
              )}
            </>
          );
        }}
        className={className}
      />
    </>
  );
}
