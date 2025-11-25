'use client';

// Select Drawer (Select 소스에 Drawer로 감싼 형태)
import { useState, useRef, useEffect, forwardRef, useMemo } from 'react';
import { Icon, Drawer, Tooltip, Empty } from '@shared/ui';
import clsx from 'clsx';
import styles from './SelectDrawer.module.scss';

interface SelectDrawerOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  tip?: React.ReactNode;
}

interface SelectDrawerProps {
  /** 제목 텍스트 (접근성 준수 사항으로 label 연결이 없는 경우 title 추가 필요) */
  title?: string;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 스타일 변형 */
  variant?: 'default' | 'ghost' | 'filter' | 'title' | 'storeSelectDrawer' | 'field';
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
  /** 옵션 리스트를 특정 규칙 기준으로 그룹핑 */
  groupMode?: 'alphabet';
  /** 처음부터 열려 있는지 여부(기본: false) */
  defaultOpen?: boolean;
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
      groupMode,
      defaultOpen = false,
      ...props
    },
    ref
  ) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(defaultOpen); //Drawer 열기 상태
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

    // 라벨 텍스트 추출(그룹 모드용)
    const getText = (node: React.ReactNode): string =>
      typeof node === 'string'
        ? node
        : typeof node === 'number'
          ? String(node)
          : Array.isArray(node)
            ? node.map(getText).join(' ')
            : '';

    // groupMode 일 때 사용할 그룹 데이터
    const { groups, flat, flatIndexMap } = useMemo(() => {
      if (groupMode !== 'alphabet')
        return { groups: null as null, flat: options, flatIndexMap: {} as Record<string, number> };

      // label 텍스트 기준 정렬
      const collator = new Intl.Collator('en', { sensitivity: 'base' });
      const sorted = [...options].sort((a, b) =>
        collator.compare(getText(a.label), getText(b.label))
      );
      // 첫 글자 기준 그룹핑(A~Z, 기타 '#')
      const map = new Map<string, SelectDrawerOption[]>();
      for (const o of sorted) {
        const t = getText(o.label).trim();
        const first = (t[0] || '#').toUpperCase();
        const key = /^[A-Z]$/.test(first) ? first : '#';
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(o);
      }
      // 그룹 정렬(A~Z, 마지막에 '#') + 배열/인덱스 맵 생성
      const entries = Array.from(map.entries()).sort(([a], [b]) => {
        if (a === '#') return 1;
        if (b === '#') return -1;
        return a.localeCompare(b, 'en', { sensitivity: 'base' });
      });

      const flatArr: SelectDrawerOption[] = [];
      const idxMap: Record<string, number> = {};
      let idx = 0;
      for (const [, list] of entries) {
        for (const o of list) {
          flatArr.push(o);
          idxMap[String(o.value)] = idx++;
        }
      }

      return { groups: entries, flat: flatArr, flatIndexMap: idxMap };
    }, [groupMode, options]);

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if ((event.target as Element | null)?.closest?.(`.${styles.drawer}`)) return;
        if (listboxRef.current?.contains(event.target as Node)) return;
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
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
          if (!isDrawerOpen) {
            setIsDrawerOpen(true);
          } else if (highlightedIndex >= 0) {
            const base = groupMode === 'alphabet' ? flat : options;
            const option = base[highlightedIndex];
            if (option && !option.disabled) {
              onChange(option.value);
              setIsDrawerOpen(false);
            }
          }
          e.preventDefault();
          break;
        case 'Escape':
          setIsDrawerOpen(false);
          e.preventDefault();
          break;
      }
    };

    // 옵션 키보드 접근성
    const handleOptionKeyDown =
      (option: SelectDrawerOption, index: number) => (e: React.KeyboardEvent) => {
        if ((e.key === 'Enter' || e.key === ' ') && !option.disabled) {
          e.preventDefault();
          handleOptionClick(option, index);
        }
      };

    const handleOptionClick = (option: SelectDrawerOption, index: number) => {
      if (option.disabled) return;
      onChange(option.value);
      setHighlightedIndex(index);
      setIsDrawerOpen(false); //Drawer 닫는다
    };

    // select클릭시 drawer도 함께연다
    const handleSelectClick = () => {
      if (!disabled) {
        setIsDrawerOpen(!isDrawerOpen);
      }
    };

    const handleClose = () => {
      setIsDrawerOpen(false);
    };

    const arrowSize =
      (variant === 'storeSelectDrawer' && 'medium') || (size === 'medium' ? 'xsmall' : 'medium');

    return (
      <div
        ref={handleRef}
        className={clsx(
          styles.root,
          variant && styles[variant],
          isDrawerOpen && styles.active,
          size && size !== 'medium' && styles[size],
          className
        )}
      >
        <div
          tabIndex={disabled ? -1 : 0}
          className={clsx(styles.combobox, disabled && styles.disabled, invalid && styles.invalid)}
          onClick={handleSelectClick}
          onKeyDown={handleKeyDown}
          aria-expanded={isDrawerOpen}
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
        <Drawer title={title} isOpen={isDrawerOpen} onClose={handleClose} className={styles.drawer}>
          <div className={styles.listbox} ref={listboxRef}>
            {variant === 'storeSelectDrawer' && options.length === 0 ? (
              <Empty title="예약 가능한 지점이 없습니다." variant="minDisplay" />
            ) : (
              <ul id="select-listbox" role="listbox" className={styles.options} tabIndex={-1}>
                {/* 기본렌더 */}
                {groupMode !== 'alphabet' &&
                  options.map((option, index) => {
                    const isSelected = option.value === value;
                    const isHighlighted = highlightedIndex === index && !option.disabled;

                    const optionContent = option.tip ? (
                      <div className={styles.tip}>
                        {option.label}
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
                        onClick={(e) => {
                          const target = e.target as HTMLElement;
                          // 툴팁 영역 안이면 클릭 막기
                          if (target.closest('[data-tooltip]')) {
                            e.stopPropagation();
                            return;
                          }
                          handleOptionClick(option, index);
                        }}
                        tabIndex={0}
                        aria-selected={isSelected}
                        aria-disabled={option.disabled}
                        onKeyDown={handleOptionKeyDown(option, index)}
                      >
                        {optionContent}
                        {variant === 'filter' && isSelected && <Icon name="check" />}
                      </li>
                    );
                  })}
                {/* groupMode 렌더 */}
                {groupMode === 'alphabet' && groups && (
                  <>
                    {groups.map(([letter, list]) => {
                      return (
                        <li
                          key={`g-${letter}`}
                          className={styles.groupBlock}
                          role="group"
                          aria-label={letter}
                        >
                          <strong className={styles.groupHeader}>{letter}</strong>
                          <ul className={styles.groupOptions}>
                            {list.map((option) => {
                              const renderIndex = flatIndexMap[String(option.value)] ?? -1;
                              const isSelected = option.value === value;
                              const isHighlighted =
                                highlightedIndex === renderIndex && !option.disabled;

                              const optionContent = option.label;

                              return (
                                <li
                                  key={option.value}
                                  className={clsx(
                                    styles.option,
                                    isSelected && styles.selected,
                                    option.disabled && styles.disabled,
                                    isHighlighted && styles.highlighted
                                  )}
                                  onClick={() => handleOptionClick(option, renderIndex)}
                                  tabIndex={0}
                                  role="option"
                                  aria-selected={isSelected}
                                  aria-disabled={option.disabled}
                                  onKeyDown={handleOptionKeyDown(option, renderIndex)}
                                >
                                  {optionContent}
                                  {isSelected && <Icon name="check" />}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            )}
          </div>
        </Drawer>
      </div>
    );
  }
);

SelectDrawer.displayName = 'SelectDrawer';
