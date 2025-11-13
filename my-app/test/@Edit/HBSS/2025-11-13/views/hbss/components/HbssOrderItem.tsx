'use client';

import { Heading, Box, InfoList, InfoItem, Text } from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import { OrderItem } from '@/widgets/product';
import type { OrderItemType } from '@widgets/product/OrderItem';
import clsx from 'clsx';
import styles from './HbssOrderItem.module.scss';

/**
 * @description HBSS 받은선물정보 + 주문아이템 (OrderItem.tsx)
 */

export interface HbssOrderData {
  senderName?: string; // 보내시는 분
  orderDate?: string; // 선물 주문일
  orderNumber?: string; // 주문번호
  items: OrderItemType[];
}

interface TripItemProps {
  /** 받은선물정보 + 주문아이템 데이터*/
  data: HbssOrderData;
  /** 타이틀 변경 시 (default: 받은 선물) */
  title?: string;
  /** 타이틀 숨김 여부 */
  hideTitle?: boolean;
  /** 타이틀 라인 스타일 여부 */
  titleLined?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function HbssOrderItem({
  title = '받은 선물',
  hideTitle = false,
  titleLined = false,
  data,
  className,
}: TripItemProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {!hideTitle && (
        <>
          {title && (
            <div className={clsx(styles.title, titleLined && styles.titleLined)}>
              <Heading size="5" color="black" indent>
                {title}
              </Heading>
            </div>
          )}
        </>
      )}
      {(data.senderName || data.orderDate || data.orderNumber) && (
        <Box className={styles.box}>
          {data.senderName && (
            <InfoList variant="line" margin="0">
              <InfoItem
                title={
                  <Heading color="black" weight="semibold">
                    보내시는 분
                  </Heading>
                }
                content={<Text color="gray1">{data.senderName}</Text>}
              />
            </InfoList>
          )}
          {data.orderDate && (
            <InfoList variant="line" margin="0">
              <InfoItem
                title={
                  <Heading color="gray1" weight="semibold">
                    선물 주문일
                  </Heading>
                }
                content={<Text>{formatDate(data.orderDate, 'dot')}</Text>}
              />
            </InfoList>
          )}
          {data.orderNumber && (
            <InfoList variant="line" margin="0">
              <InfoItem
                title={
                  <Heading color="gray1" weight="semibold">
                    주문번호
                  </Heading>
                }
                content={<Text>{data.orderNumber}</Text>}
              />
            </InfoList>
          )}
        </Box>
      )}
      {/* 주문 아이템 */}
      <OrderItem
        items={data.items}
        isCart // 장바구니와 동일한 구조 사용
        hideThumbLabel // 썸네일 라벨 숨기기
        lineDivider // 리스트 라인으로 구분되는 스타일
        hidePrice // 가격 숨김
        orderDetailData={(item) => {
          return (
            <div className={styles.detail}>
              <span className={styles.quantity}>{item.quantity}개</span>
            </div>
          );
        }}
        className={styles.orders}
      />
    </div>
  );
}
