'use client';

import { useState, useRef, useEffect, forwardRef, useMemo, useId } from 'react';
import { Icon } from '@shared/ui';
import clsx from 'clsx';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

interface SelectProps {
  /** 제목 텍스트 (접근성 준수 사항으로 label 연결이 없는 경우 title 추가 필요) */
  title?: string;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 스타일 변형 */
  variant?: 'default' | 'ghost';
  /** 크기 */
  size?: 'medium' | 'large';
  /** 옵션 배열 */
  options: SelectOption[];
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
  /** 옵션 리스트를 absolute가 아닌 static 위치로 렌더링할지 여부 */
  collapse?: boolean;
  /** 추가 클래스 */
  className?: string;
  /** 시스템 select 사용 여부 */
  useNative?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
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
      collapse,
      className,
      useNative = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const selectRef = useRef<HTMLDivElement>(null);
    const selectedOption = useMemo(
      () => options.find((option) => option.value === value),
      [options, value]
    );
    const listboxRef = useRef<HTMLDivElement>(null);
    const [placement, setPlacement] = useState('bottom');

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
          } else if (highlightedIndex >= 0) {
            const option = options[highlightedIndex];
            if (!option.disabled) {
              onChange(option.value);
              setIsOpen(false);
            }
          }
          e.preventDefault();
          break;
        case 'ArrowDown':
          if (!isOpen) {
            setIsOpen(true);
          } else {
            let nextIndex = highlightedIndex + 1;
            while (nextIndex < options.length && options[nextIndex].disabled) {
              nextIndex++;
            }
            if (nextIndex < options.length) {
              setHighlightedIndex(nextIndex);
              onChange(options[nextIndex].value);
            }
          }
          e.preventDefault();
          break;
        case 'ArrowUp':
          if (!isOpen) {
            setIsOpen(true);
          } else {
            let prevIndex = highlightedIndex - 1;
            while (prevIndex >= 0 && options[prevIndex].disabled) {
              prevIndex--;
            }
            if (prevIndex >= 0) {
              setHighlightedIndex(prevIndex);
              onChange(options[prevIndex].value);
            }
          }
          e.preventDefault();
          break;
        case 'Escape':
          setIsOpen(false);
          e.preventDefault();
          break;
        case 'Tab':
          if (isOpen) {
            setIsOpen(false);
          }
          break;
        default:
          const key = e.key.toLowerCase();

          if (/^[a-z0-9]$/.test(key)) {
            const matchingIndex = options.findIndex((option) => {
              if (option.disabled) return false;

              if (typeof option.label === 'string') {
                return option.label.toLowerCase().startsWith(key);
              }

              return false;
            });

            if (matchingIndex >= 0) {
              const matchedOption = options[matchingIndex];
              setHighlightedIndex(matchingIndex);
              onChange(matchedOption.value);
            }
          }
          break;
      }
    };

    const handleOptionClick = (option: SelectOption, index: number) => {
      if (option.disabled) return;
      onChange(option.value);
      setHighlightedIndex(index);
      setIsOpen(false);
    };

    const arrowSize = size === 'medium' ? 'small' : 'medium';

    // listbox 위치
    useEffect(() => {
      if (!isOpen || collapse) return;

      const selectEl = selectRef.current;
      const listboxEl = listboxRef.current;

      if (!selectEl || !listboxEl) return;

      const selectRect = selectEl.getBoundingClientRect();
      const spaceBelow = window.innerHeight - selectRect.bottom;
      const listboxHeight = listboxEl.offsetHeight;

      setPlacement(listboxHeight + 8 > spaceBelow ? 'top' : 'bottom');
    }, [isOpen]);

    // select태그 에 넣을 고유 id 생성
    const internalId = useId();
    // useNative일 때 ReactNode label을 <option> text로 변환
    const toPlainText = (n: React.ReactNode) =>
      typeof n === 'string' || typeof n === 'number' ? String(n) : '';
    // useNative일 때 Select사용
    if (useNative) {
      return (
        <>
          <div
            ref={handleRef}
            className={clsx(
              styles.root,
              variant && styles[variant],
              size && size !== 'medium' && styles[size],
              styles.useNative,
              className
            )}
          >
            <div
              className={clsx(
                styles.combobox,
                disabled && styles.disabled,
                invalid && styles.invalid
              )}
              {...props}
            >
              <select
                id={internalId}
                aria-label={title ?? placeholder ?? '선택'}
                value={value}
                disabled={disabled}
                aria-invalid={invalid || undefined}
                onChange={(e) => onChange(e.target.value)}
                className={styles.native}
              >
                {placeholder && !value && (
                  <option value="" disabled hidden>
                    {placeholder}
                  </option>
                )}
                {options.map((o) => (
                  <option key={o.value} value={o.value} disabled={o.disabled}>
                    {toPlainText(o.label)}
                  </option>
                ))}
              </select>
              <Icon name="arrowDown" size={arrowSize} className={styles.arrow} />
            </div>
          </div>
        </>
      );
    }

    return (
      <div
        ref={handleRef}
        className={clsx(
          styles.root,
          variant && styles[variant],
          collapse && styles.collapse,
          isOpen && styles.active,
          size && size !== 'medium' && styles[size],
          className
        )}
      >
        <div
          tabIndex={disabled ? -1 : 0}
          className={clsx(styles.combobox, disabled && styles.disabled, invalid && styles.invalid)}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls="select-listbox"
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

        {isOpen && (
          <div
            className={clsx(styles.listbox)}
            ref={listboxRef}
            {...(isOpen ? { 'data-placement': placement } : {})}
          >
            <ul id="select-listbox" role="listbox" className={styles.options} tabIndex={-1}>
              {options.map((option, index) => (
                <li
                  key={option.value}
                  className={clsx(
                    styles.option,
                    option.value === value && styles.selected,
                    option.disabled && styles.disabled,
                    highlightedIndex === index && !option.disabled && styles.highlighted
                  )}
                  onClick={() => handleOptionClick(option, index)}
                  role="option"
                  aria-selected={option.value === value}
                  tabIndex={-1}
                  aria-disabled={option.disabled}
                >
                  {option.label}
                  {variant === 'default' && option.value === value && (
                    <Icon name="check" size="small" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
