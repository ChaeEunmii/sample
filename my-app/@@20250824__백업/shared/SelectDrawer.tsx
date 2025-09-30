'use client';

// Select Drawer (Select 소스에 Drawer로 감싼 형태)
import { useState, useRef, useEffect, forwardRef, useMemo } from 'react';
import { Icon, Drawer, Tooltip } from '@shared/ui';
import clsx from 'clsx';
import styles from './SelectDrawer.module.scss';

export interface SelectDrawerOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  tip?: React.ReactNode;
}

export interface SelectDrawerProps {
  /** 제목 텍스트 (접근성 준수 사항으로 label 연결이 없는 경우 title 추가 필요) */
  title?: string;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 스타일 변형 */
  variant?: 'default' | 'ghost' | 'filter';
  /** 크기 */
  size?: 'medium' | 'large';
  /** 옵션 배열 */
  options: SelectDrawerOption[];
  /** 선택된 값 */
  value: string;
  /** 값이 변경될 때 호출되는 함수 */
  onChange: (value: string) => void;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검사 여부 */
  invalid?: boolean;
  /** 이미 선택한 데이터가 유효하지 않은 경우 */
  expired?: boolean;
  /** value 앞에 공통으로 적용할 요소가 있는 경우 */
  prefix?: React.ReactNode;
  /** 라벨 텍스트 (필드 내부에 label이 있는 스타일인 경우 사용) */
  label?: string;
  /** 추가 클래스 */
  className?: string;
}

export const SelectDrawer = forwardRef<HTMLDivElement, SelectDrawerProps>(
  (
    {
      title,
      placeholder = '선택',
      variant = 'default',
      size = 'medium',
      options,
      value,
      onChange,
      disabled = false,
      invalid = false,
      expired = false,
      prefix,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); //Drawer 열기 상태
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const selectRef = useRef<HTMLDivElement>(null);
    const selectedOption = useMemo(
      () => options.find((option) => option.value === value),
      [options, value]
    );
    const listboxRef = useRef<HTMLDivElement>(null);

    // ref 병합 (forwardRef와 내부 ref를 함께 사용)
    const handleRef = (element: HTMLDivElement) => {
      // selectRef 업데이트
      if (selectRef.current !== element) {
        selectRef.current = element;
      }

      // 외부에서 전달된 ref 업데이트
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setIsDrawerOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // 키보드 접근성
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case 'Enter':
        case ' ':
          if (!isOpen) {
            setIsOpen(true);
            setIsDrawerOpen(true);
          } else if (highlightedIndex >= 0) {
            const option = options[highlightedIndex];
            if (!option.disabled) {
              onChange(option.value);
              setIsOpen(false);
              setIsDrawerOpen(false);
            }
          }
          e.preventDefault();
          break;
        case 'Escape':
          setIsOpen(false);
          setIsDrawerOpen(false);
          e.preventDefault();
          break;
      }
    };

    const handleOptionClick = (option: SelectDrawerOption, index: number) => {
      if (option.disabled) return;
      onChange(option.value);
      setHighlightedIndex(index);
      setIsOpen(false);
      setIsDrawerOpen(false); //Drawer 닫는다
    };

    // select클릭시 drawer도 함께연다
    const handleSelectClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        setIsDrawerOpen(!isDrawerOpen);
      }
    };

    const arrowSize = size === 'medium' ? 'small' : 'medium';

    return (
      <div
        ref={handleRef}
        className={clsx(
          styles.root,
          variant && styles[variant],
          isOpen && styles.active,
          size && size !== 'medium' && styles[size],
          className
        )}
      >
        <div
          tabIndex={disabled ? -1 : 0}
          className={clsx(styles.combobox, disabled && styles.disabled, invalid && styles.invalid)}
          onClick={handleSelectClick}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          title={title}
          {...props}
        >
          {label && <label className={styles.label}>{label}</label>}
          <span
            className={clsx(
              styles.value,
              !selectedOption && styles.placeholder,
              selectedOption && expired && styles.expired
            )}
          >
            {prefix && prefix}
            {selectedOption ? (
              <>
                {selectedOption.label}
                {expired && ' (불가)'}
              </>
            ) : (
              placeholder
            )}
          </span>
          <Icon name="arrowDown" size={arrowSize} className={styles.arrow} />
        </div>

        {/* 기존 Select구조를 Drawer로 감싼다*/}
        <Drawer
          title={title}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className={styles.drawer}
        >
          <div className={styles.listbox} ref={listboxRef}>
            <ul id="select-listbox" role="listbox" className={styles.options} tabIndex={-1}>
              {options.map((option, index) => {
                const isSelected = option.value === value;
                const isHighlighted = highlightedIndex === index && !option.disabled;

                const optionContent = option.tip ? (
                  <div className={styles.tip}>
                    <button
                      type="button"
                      onClick={() => handleOptionClick(option, index)}
                      aria-selected={isSelected}
                      disabled={option.disabled}
                      className={clsx(styles.optionLabel)}
                    >
                      {option.label}
                    </button>
                    <Tooltip placement="bottom" iconProps={{ size: 'small' }}>
                      {option.tip}
                    </Tooltip>
                  </div>
                ) : (
                  option.label
                );

                return (
                  <li
                    key={option.value}
                    className={clsx(
                      styles.option,
                      isSelected && styles.selected,
                      option.disabled && styles.disabled,
                      isHighlighted && styles.highlighted
                    )}
                    {...(!option.tip && {
                      onClick: () => handleOptionClick(option, index),
                      tabIndex: 0,
                      'aria-selected': isSelected,
                      'aria-disabled': option.disabled,
                      onKeyDown: (e: React.KeyboardEvent) => {
                        if ((e.key === 'Enter' || e.key === ' ') && !option.disabled) {
                          e.preventDefault();
                          handleOptionClick(option, index);
                        }
                      },
                    })}
                  >
                    {optionContent}
                    {variant === 'filter' && isSelected && <Icon name="check" />}
                  </li>
                );
              })}
            </ul>
          </div>
        </Drawer>
      </div>
    );
  }
);

SelectDrawer.displayName = 'SelectDrawer';
