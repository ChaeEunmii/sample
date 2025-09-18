'use client';

import { IconButton } from '@shared/ui';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Stepper.module.scss';
import { formatPrice } from '@/shared/utils/ui';

interface StepperProps {
  /** 모드 */
  mode?: 'price';
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

export const Stepper = ({
  mode,
  value,
  onChange,
  min = 1,
  max,
  disabled,
  className,
}: StepperProps) => {
  const [quantity, setQuantity] = useState(value);
  // 수정(포커스) 상태
  const [isEditing, setIsEditing] = useState(false);

  // 금액 스텝 단위, price 모드일 때만 사용
  const priceStep = 1000;

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
    if (mode === 'price') {
      if (quantity - priceStep >= min) {
        const newValue = quantity - priceStep;
        setQuantity(newValue);
        onChange(newValue);
      }
    } else {
      if (quantity > min) {
        const newValue = quantity - 1;
        setQuantity(newValue);
        onChange(newValue);
      }
    }
  };

  const handleIncrease = () => {
    if (mode === 'price') {
      if (max === undefined || quantity + priceStep <= max) {
        const newValue = quantity + priceStep;
        setQuantity(newValue);
        onChange(newValue);
      }
    } else {
      if (max === undefined || quantity < max) {
        const newValue = quantity + 1;
        setQuantity(newValue);
        onChange(newValue);
      }
    }
  };

  // 포커스/블러 핸들러: 포커스 시 숫자만, 블러 시 포맷 표시
  const handleFocus = () => {
    setIsEditing(true); // 편집 모드 진입 시 숫자만 노출
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (mode === 'price') {
      if (quantity % priceStep !== 0) {
        alert('입찰가는 천원 단위 이상 금액 으로만 입력 가능합니다. 다시 입력해주세요.');
        return;
      }
      // 조건 충족 시 min/max 클램프
      const clamped =
        max !== undefined ? Math.max(min, Math.min(quantity, max)) : Math.max(min, quantity);
      setQuantity(clamped);
      onChange(clamped);
    }
  };

  const displayValue =
    mode === 'price'
      ? isEditing
        ? String(quantity || '')
        : formatPrice(quantity) // 포커스 해제 시 포맷+원 표기
      : quantity;

  return (
    <div
      className={clsx(
        styles.root,
        mode && styles[`${mode}mode`],
        disabled && styles.disabled,
        className
      )}
    >
      <IconButton
        name="minus"
        size="large"
        className={styles.control}
        onClick={handleDecrease}
        disabled={disabled || (mode === 'price' ? quantity <= min : quantity <= min)}
      >
        감소
      </IconButton>
      <input
        type={mode === 'price' ? 'text' : 'number'}
        className={styles.value}
        value={displayValue}
        // readOnly
        disabled={disabled}
        aria-label={mode === 'price' ? '금액' : '수량'}
        onChange={handleChange}
        onFocus={handleFocus} // 포커스에서 숫자만
        onBlur={handleBlur} // 블러에서 포맷 적용
      />
      <IconButton
        name="plus"
        size="large"
        className={styles.control}
        onClick={handleIncrease}
        disabled={
          disabled || (max !== undefined && (mode === 'price' ? quantity >= max : quantity >= max))
        }
      >
        증가
      </IconButton>
    </div>
  );
};

Stepper.displayName = 'Stepper';
