'use client';
import clsx from 'clsx';
import React from 'react';
import { Switch } from '@/shared/ui';
import styles from './DiscountSwitchBox.module.scss';

interface DiscountSwitchBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const DiscountSwitchBox = ({ className, checked, onChange }: DiscountSwitchBoxProps) => {
  return (
    <div className={clsx(styles.switchBox, checked ? styles.green : styles.gary, className)}>
      <label htmlFor="discount-switch" className={styles.label}>
        최대 할인이 적용{checked ? '됐어요.' : '되지 않았어요.'}
      </label>
      <Switch
        id="discount-switch"
        variant="point"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
};
DiscountSwitchBox.displayName = 'DiscountSwitchBox';
