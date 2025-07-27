'use client';

import { forwardRef, useEffect, useId, useState } from 'react';
import clsx from 'clsx';
import styles from './Switch.module.scss';

export interface SwitchProps {
  /* 스타일 변형 */
  variant?: 'default' | 'point';
  /** 선택 요소의 id값 설정. 미설정시 랜덤으로 제공됨. */
  id?: string;
  /** 선택 상태 (제어 컴포넌트) */
  checked?: boolean;
  /** 초기 선택 상태 (비제어 컴포넌트) */
  defaultChecked?: boolean;
  /** 선택 요소의 비활성화 상태 표시 */
  disabled?: boolean;
  /** 스위치 크기 */
  size?: 'small' | 'medium';
  /** 커스텀 클래스명 */
  className?: string;
  /** 변경 이벤트 핸들러 */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    { variant, id, checked, defaultChecked, disabled, size = 'medium', className, onChange },
    ref
  ) => {
    const switchId = id || `switch-${useId()}`;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;

      // 비제어 컴포넌트일 경우 내부 상태 업데이트
      if (!isControlled) {
        setInternalChecked(isChecked);
      }

      // 외부 onChange 호출
      onChange?.(e);
    };

    return (
      <div
        className={clsx(
          styles.root,
          variant && styles[variant],
          size !== 'medium' && styles[size],
          className
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          id={switchId}
          className={styles.input}
          checked={isControlled ? checked : internalChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <label htmlFor={switchId} className={styles.label} />
      </div>
    );
  }
);

Switch.displayName = 'Switch';
