'use client';

import { forwardRef, useId, useState } from 'react';
import clsx from 'clsx';
import styles from './Switch.module.scss';

export interface SwitchProps {
  /** 상태에 따라 다르게 보여질 라벨 (string 또는 [켜짐, 꺼짐]) */
  label?: string | [string, string];
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
    { label, variant, id, checked, defaultChecked, disabled, size = 'medium', className, onChange },
    ref
  ) => {
    const generatedId = useId();
    const switchId = id ?? `switch-${generatedId}`;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);

    const currentChecked = isControlled ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      if (!isControlled) {
        setInternalChecked(isChecked);
      }
      onChange?.(e);
    };

    const [onLabel, offLabel] = typeof label === 'string' ? [label, label] : (label ?? []);

    const renderSwitch = (
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
          checked={currentChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <label htmlFor={switchId} className={styles.label} />
      </div>
    );

    // label이 있을 경우 상태 텍스트 + 스위치 묶음
    return label ? (
      <div
        className={clsx(
          styles.barRoot,
          variant && styles[variant],
          !currentChecked && styles.off,
          className
        )}
      >
        <label htmlFor={switchId} className={styles.text}>
          {currentChecked ? onLabel : offLabel}
        </label>
        {renderSwitch}
      </div>
    ) : (
      renderSwitch
    );
  }
);

Switch.displayName = 'Switch';
