'use client';
// 라이브러리
import React, { useState } from 'react';
// 컴포넌트
import { Checkbox } from './Checkbox';
// 스타일
import styles from './CheckItem.module.scss';
import clsx from 'clsx';

interface CheckItemProps {
  className?: string;
  label: string;
  value: string;
  checked?: boolean;
  centered?: boolean;
  variant?: 'card';
  children: React.ReactNode;
  onSelectChange?: (value: string, selected: boolean) => void;
}

export const CheckItem = ({
  className,
  label,
  value,
  checked,
  centered = false,
  variant,
  children,
  onSelectChange,
  ...props
}: CheckItemProps) => {
  const [internalChecked, setInternalChecked] = useState(false);

  // 제어 컴포넌트면 checked prop 사용, 아니면 내부 state 사용
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newChecked = e.target.checked;

    // 비제어 컴포넌트일 때만 내부 state 업데이트
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    onSelectChange?.(value, newChecked);
  };

  const handleClick = () => {
    const newChecked = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    onSelectChange?.(value, newChecked);
  };

  return (
    <div
      className={clsx(
        styles.root,
        centered && styles.center,
        variant && styles[variant],
        className
      )}
      {...props}
    >
      <Checkbox checked={isChecked} onChange={handleChange} hideLabel label={`${label} 선택`} />
      {React.cloneElement(children as any, {
        onClick: handleClick,
      })}
    </div>
  );
};

CheckItem.displayName = 'CheckItem';
