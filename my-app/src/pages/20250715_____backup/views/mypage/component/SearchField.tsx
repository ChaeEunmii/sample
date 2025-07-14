'use client';

import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useAlert } from '@shared/contexts/AlertContext';
import { Input, IconButton, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './SearchField.module.scss';

interface SearchItem {
  id: number;
  label: string;
}

interface SearchFieldProps {
  /** 검색어가 변경될 때 호출되는 콜백 */
  onSearch: (query: string) => void;
  /** 검색 결과 리스트 */
  results: SearchItem[];
  /** 현재 선택된 아이템들 */
  selectedItems: SearchItem[];
  /** 선택 항목 변경 시 호출되는 콜백 */
  onChangeSelected: (selected: SearchItem[]) => void;
  /** 검색 버튼 클릭 시 호출되는 콜백 */
  onSearchButtonClick?: (query: string) => void;
  /** 입력창 플레이스홀더 */
  placeholder?: string;
  /** 루트 요소에 추가할 CSS 클래스명 */
  className?: string;
  /** 최대 선택 가능 항목 수 (기본 10) */
  maxSelectedCount?: number;
  /** 검색 결과 없을 때 보여줄 사용자 정의 콘텐츠 */
  noDataSlot?: React.ReactNode;
  /** 드롭다운 열림 상태 (외부 제어) */
  isOpen?: boolean;
  /** 드롭다운 열림 상태 변경 콜백 */
  onOpenChange?: (open: boolean) => void;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  onSearch,
  results,
  selectedItems,
  onChangeSelected,
  placeholder = '검색어를 입력하세요',
  onSearchButtonClick,
  className,
  maxSelectedCount = 10,
  noDataSlot,
  isOpen,
  onOpenChange,
}) => {
  const { showAlert } = useAlert();
  const [query, setQuery] = useState(''); // 검색어 상태
  const [internalFocused, setInternalFocused] = useState(false); // 내부 포커스 상태
  const dropdownRef = useRef<HTMLDivElement>(null); // 드롭다운 영역 참조
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색 input 참조
  const [dropdownTop, setDropdownTop] = useState<number>(0); // 드롭다운 top 위치(px)

  // 드롭다운 위치 계산 (input 하단 기준)
  useEffect(() => {
    if (inputRef.current) {
      const inputHeight = inputRef.current.offsetHeight;
      setDropdownTop(inputHeight - 4); // 높이 - 4px
    }
  }, []);

  // query 변경 시 검색 실행
  useEffect(() => {
    if (query.trim() !== '') {
      onSearch(query);
    }
    // query가 빈 경우에도 부모가 results를 clear하도록 유도 가능
  }, [query, onSearch]);

  // 드롭다운 외 클릭 시 포커스 해제
  useEffect(() => {
    const current = dropdownRef.current;
    if (!current) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (current.contains(e.target as Node)) {
        // 드롭다운 클릭 → 포커스 유지
        handleSetOpen(true);
        if (inputRef.current) {
          setTimeout(() => inputRef.current?.focus(), 0);
        }
      } else {
        handleSetOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // 드롭다운 열림 상태 변경 함수 (내부 상태 or 외부 콜백 사용)
  const handleSetOpen = (open: boolean) => {
    if (onOpenChange) onOpenChange(open);
    else setInternalFocused(open);
  };

  // 드롭다운 노출 여부 결정 (외부 isOpen prop 우선)
  const shouldShowDropdown =
    (typeof isOpen === 'boolean' ? isOpen : internalFocused) && query.trim() !== '';

  // 항목이 선택되었는지 여부 확인
  const isSelected = (item: SearchItem) =>
    selectedItems.some((selected) => selected.id === item.id);

  // 선택/해제 토글
  const toggleSelect = (item: SearchItem) => {
    if (isSelected(item)) {
      onChangeSelected(selectedItems.filter((selected) => selected.id !== item.id));
      setQuery('');
    } else if (selectedItems.length < maxSelectedCount) {
      onChangeSelected([...selectedItems, item]);
      setQuery('');
    } else {
      showAlert({
        message: `최대 ${maxSelectedCount}까지 등록가능해요.`,
        onConfirm: () => console.log('확인 클릭'),
        showCancel: false,
        labelProps: { confirm: '확인' },
      });
    }
  };

  // 엔터 키 입력 시 검색 버튼 동작
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearchButtonClick) {
      onSearchButtonClick(query);
      handleSetOpen(false);
    }
  };

  // 검색어 강조 표시
  const highlightText = (text: string, query: string) => {
    if (!query) return text; // 검색어 없으면 원본 텍스트 반환

    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className={styles.highlight}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className={clsx(styles.root, className)} ref={dropdownRef}>
      <Input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        clearable
        reveal={false}
        className={styles.input}
        aria-autocomplete="list"
        aria-expanded={shouldShowDropdown}
        aria-controls="search-results-list"
        role="combobox"
        onKeyDown={onKeyDown}
        size="large"
        suffix={
          onSearchButtonClick ? (
            <IconButton
              name="search"
              aria-label="검색"
              className={styles.searchButton}
              onClick={() => {
                onSearchButtonClick(query);
                handleSetOpen(false);
              }}
            />
          ) : null
        }
      />
      {shouldShowDropdown && (
        <div className={styles.dropdown} style={{ top: dropdownTop }}>
          {results.length > 0 ? (
            <ul id="search-results-list" role="listbox" tabIndex={-1} className={styles.droplist}>
              {results.map((item) => (
                <li
                  key={item.id}
                  role="option"
                  tabIndex={-1}
                  className={clsx(styles.dropdownItem, {
                    [styles.selected]: isSelected(item),
                  })}
                  onClick={() => toggleSelect(item)}
                  aria-selected={isSelected(item)}
                >
                  {highlightText(item.label, query)}{' '}
                  {/* {isSelected(item) && (
                    <>
                      <Icon name="check" />
                    </>
                  )} */}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.nodata}>
              <Text size="4" align="left" color="gray3" className={styles.nodataText}>
                검색결과가 없습니다.
              </Text>
              {noDataSlot}
            </div>
          )}
        </div>
      )}
      {selectedItems.length > 0 && (
        <div className={styles.addItems}>
          {selectedItems.map((item) => (
            <span key={item.id} className={styles.tag}>
              {item.label}
              <IconButton
                name="close"
                size="small"
                onClick={() => toggleSelect(item)}
                className={styles.remove}
                aria-label={`${item.label} 선택 해제`}
              />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
