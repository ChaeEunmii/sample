'use client';

import { IconButton } from '@shared/ui';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Stepper.module.scss';

interface StepperProps {
  /** 현재 수량 */
  value: number;
  /** 값이 변경될 때 호출되는 핸들러 */
  onChange: (value: number) => void;
  /** 최소 수량 (기본값: 1) */
  min?: number;
  /** 최대 수량 */
  max?: number;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 추가 CSS 클래스명 */
  className?: string;
}

export const Stepper = ({ value, onChange, min = 1, max, disabled, className }: StepperProps) => {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    setQuantity(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      // val이 빈 문자열("")이면 0 또는 min 처리할지 결정
      const num = val === '' ? 0 : Number(val);
      setQuantity(num);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange(newValue);
    }
  };

  const handleIncrease = () => {
    if (max === undefined || quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className={clsx(styles.root, disabled && styles.disabled, className)}>
      <IconButton
        name="minus"
        size="large"
        className={styles.control}
        onClick={handleDecrease}
        disabled={disabled || quantity <= min}
      >
        감소
      </IconButton>
      <input
        type="number"
        className={styles.value}
        value={quantity}
        // readOnly
        disabled={disabled}
        aria-label="수량"
        onChange={handleChange}
      />
      <IconButton
        name="plus"
        size="large"
        className={styles.control}
        onClick={handleIncrease}
        disabled={disabled || (max !== undefined && quantity >= max)}
      >
        증가
      </IconButton>
    </div>
  );
};

Stepper.displayName = 'Stepper';
