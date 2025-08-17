'use client';

import { Heading, Text } from '@/shared/ui';
import clsx from 'clsx';
import styles from './StoreTitle.module.scss';

type StoreTitleVariant = 'default' | 'cart';

interface StoreTitle {
  /** 푸드코트명 */
  courtName?: string;
  /** 매장명 */
  store: string;
  /** 층수 */
  floor?: string;
}

interface StoreTitleProps {
  /** 매장명 데이터 */
  data: StoreTitle;
  /** StoreTitle 스타일
   * - default{heading: { size: '3', color: 'primary', weight: 'semibold' },
   *           text: { color: 'gray1', weight: 'regular' }}
   * - cart{heading: { size: '5', color: 'primary', weight: 'semibold' },
   *        text: { color: 'gray1', weight: 'regular' }}
   */
  variant?: StoreTitleVariant;
  /** 추가 클래스명 */
  className?: string;
}

export const StoreTitle = ({ data, variant = 'default', className }: StoreTitleProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Heading as="strong" size={variant === 'cart' ? '5' : '3'} weight="semibold" color="primary">
        {data.courtName && <span className={styles.courtName}>{data.courtName}</span>}
        {data.store}
      </Heading>
      <Text as="span" color="gray1" weight="regular" className={styles.floor}>
        {data.floor}
      </Text>
    </div>
  );
};

StoreTitle.displayName = 'StoreTitle';
