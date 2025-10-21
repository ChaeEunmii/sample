'use client';

import clsx from 'clsx';
import { CouponItem, CouponsData } from './CouponItem';
import styles from './CouponList.module.scss';

/**
 * 쿠폰 리스트 렌더 컴포넌트
 * - 항상 ul > li 구조로 렌더링
 * - 각 쿠폰은 CouponItem 컴포넌트로 분리됨
 */
interface CouponListProps {
  mode?: 'default' | 'select';
  coupons: CouponsData[];
  selection?: {
    selectedIds: (string | number)[];
    onChange: (id: string | number, isSelected: boolean) => void;
    disabledIds?: (string | number)[];
  };
  className?: string;
  onResendClick?: (coupon: CouponsData, index: number) => void;
  onExtendClick?: (coupon: CouponsData, index: number) => void;
  onCancelDetailClick?: (coupon: CouponsData, index: number) => void;
}

export const CouponList = ({
  mode = 'default',
  coupons,
  className,
  selection,
  onResendClick,
  onExtendClick,
  onCancelDetailClick,
}: CouponListProps) => {
  return (
    <ul className={clsx(styles.coupons, className)}>
      {coupons.map((coupon, index) => (
        <li key={`${coupon.number}-${index}`} className={styles.numberItem}>
          <CouponItem
            mode={mode}
            coupon={coupon}
            index={index}
            selection={selection}
            onResendClick={onResendClick}
            onExtendClick={onExtendClick}
            onCancelDetailClick={onCancelDetailClick}
          />
        </li>
      ))}
    </ul>
  );
};