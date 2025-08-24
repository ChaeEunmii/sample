'use client';

import { useState, useRef, useEffect, forwardRef, useMemo } from 'react';
import { Icon, Drawer, Tooltip } from '@shared/ui';
import clsx from 'clsx';
import type {
  SelectDrawerOption,
  SelectDrawerProps as BaseSelectDrawerProps,
} from '@shared/ui/blocks/SelectDrawer';
import styles from '@shared/ui/blocks/SelectDrawer.module.scss';
import custom from './IndexedSelectDrawer.module.scss';

/**
 * 인덱스(영문) 기준으로 그룹/정렬된 drawer 목록 Select Drawer
 *
 */

/** SelectDrawer에서 export한 SelectDrawerProps를 확장해 그룹/정렬 콜백만 추가 */
interface IndexedSelectDrawerProps extends BaseSelectDrawerProps {
  /** 그룹 키 (없으면 A~Z/기타 '#') */
  getGroupKey?: (o: SelectDrawerOption) => string | undefined;
  /** 정렬 키 */
  getSortKey?: (o: SelectDrawerOption) => string;
  /** 그룹 헤더 커스텀 */
  formatGroupHeader?: (groupKey: string) => React.ReactNode;
}

export const IndexedSelectDrawer = forwardRef<HTMLDivElement, IndexedSelectDrawerProps>(
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
      getGroupKey,
      getSortKey,
      formatGroupHeader,
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

    // -------------------------------
    // 그룹/정렬 데이터 준비
    // -------------------------------
    const toLabel = (o: SelectDrawerOption) =>
      typeof o.label === 'string' ? o.label : String(o.label ?? '');
    const sortKeyFn = getSortKey ?? ((o: SelectDrawerOption) => toLabel(o));

    const orderedOptions = useMemo(
      () =>
        getSortKey
          ? [...options].sort((a, b) =>
              sortKeyFn(a).localeCompare(sortKeyFn(b), 'en', { sensitivity: 'base' })
            )
          : options,
      [options, getSortKey]
    );

    // [FORCE GROUP] getGroupKey 없을 때도 기본(A~Z / 기타 '#')로 그룹핑
    const defaultGroupKey = (o: SelectDrawerOption) => {
      const s = toLabel(o).trim();
      const c = (s[0] || '#').toUpperCase();
      return /[A-Z]/.test(c) ? c : '#';
    };

    const grouped = useMemo(() => {
      const groupKeyFn = getGroupKey ?? defaultGroupKey;
      const m = new Map<string, SelectDrawerOption[]>();
      for (const o of orderedOptions) {
        const k = (groupKeyFn(o) ?? '#').toUpperCase();
        if (!m.has(k)) m.set(k, []);
        m.get(k)!.push(o);
      }
      // 키 정렬(A~Z, '#')
      return Array.from(m.entries()).sort(([a], [b]) => {
        if (a === '#') return 1;
        if (b === '#') return -1;
        return a.localeCompare(b, 'en', { sensitivity: 'base' });
      });
    }, [orderedOptions, getGroupKey]);

    const headerFmt = formatGroupHeader ?? ((k: string) => k);

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        if ((event.target as Element | null)?.closest?.(`.${styles.drawer}`)) return; // 드로어 내부 클릭은 무시
        if (listboxRef.current?.contains(target)) return; // 드로어 내부 클릭은 무시
        if (selectRef.current && !selectRef.current.contains(target)) {
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
            // [FORCE GROUP] 항상 orderedOptions 기준
            const option = orderedOptions[highlightedIndex];
            if (option && !option.disabled) {
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

        <Drawer
          title={title}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className={styles.drawer}
        >
          <div className={styles.listbox} ref={listboxRef}>
            <ul id="select-listbox" role="listbox" className={styles.options} tabIndex={-1}>
              {grouped.map(([letter, list]) => (
                <li key={`g-${letter}`} className={custom.groupBlock}>
                  <strong className={custom.groupHeader}>{headerFmt(letter)}</strong>
                  <ul className={custom.groupOptions}>
                    {list.map((option) => {
                      const idx = orderedOptions.indexOf(option);
                      const isSelected = option.value === value;
                      const isHighlighted = highlightedIndex === idx && !option.disabled;

                      const optionContent = option.tip ? (
                        <div className={styles.tip}>
                          <button
                            type="button"
                            onClick={() => handleOptionClick(option, idx)}
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
                          onClick={() => handleOptionClick(option, idx)}
                          tabIndex={0}
                          role="option"
                          aria-selected={isSelected}
                          aria-disabled={option.disabled}
                          onKeyDown={(e: React.KeyboardEvent) => {
                            if ((e.key === 'Enter' || e.key === ' ') && !option.disabled) {
                              e.preventDefault();
                              handleOptionClick(option, idx);
                            }
                          }}
                        >
                          {optionContent}
                          {isSelected && <Icon name="check" />}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    );
  }
);

IndexedSelectDrawer.displayName = 'IndexedSelectDrawer';
