'use client';

import clsx from 'clsx';
import { Text } from '@/shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import styles from './O4OOrderMenus.module.scss';

// Text 컴퍼넌트 props 공유
type TextColor = React.ComponentProps<typeof Text>['color'];

export interface O4OOrderMenuItemType {
  /** 상품 ID */
  id: string;
  /** 상품명 */
  title: string;
  /** 주문 수량 */
  quantity?: number;
  /** 가격 정보 */
  price?: {
    current?: number;
  };
  /** 주문옵션들 */
  options?: string[];
}

// order 목록
interface O4OOrderMenusProps {
  /** 목록에 표시할 상품 아이템 배열 */
  data: O4OOrderMenuItemType[];
  /** 상품의 옵션 정보를 렌더링 하는 함수(ProdTitle과 ProdPrice 사이에 렌더링) */
  ordeOptions?: (item: O4OOrderMenuItemType) => React.ReactNode;
  /** gap 설정(기본: 8px, 4px) */
  gap?: '4' | '8';
  /** 텍스트 컬러(기본: #222) */
  color?: TextColor;
  className?: string;
}

export const O4OOrderMenus = ({
  data,
  ordeOptions,
  gap = '8',
  color,
  className,
}: O4OOrderMenusProps) => {
  return (
    <>
      <ul className={clsx(styles.root, gap && styles[`gap${gap}`], className)}>
        {data.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.oneLineInfo}>
                <Text as="span" size="4" color={color} className={styles.title}>
                  {item.title}
                </Text>
                <Text as="span" size="4" color={color} className={styles.line}>
                  {item.quantity}개
                </Text>
                <Text as="span" size="4" color={color} className={styles.line}>
                  {formatPrice(item.price?.current ?? 0)}
                </Text>
              </div>
              {ordeOptions && ordeOptions(item)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

O4OOrderMenus.displayName = 'O4OOrderMenus';
