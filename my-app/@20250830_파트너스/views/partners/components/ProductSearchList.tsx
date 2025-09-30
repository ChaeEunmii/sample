'use client';

import { useMemo, useRef, useState } from 'react';
import { Input, IconButton, Icon, Empty } from '@shared/ui';
import { ProdCardList, type ProdCardItemProps } from '@widgets/product/ProdCardList';
import styles from './ProductSearchList.module.scss';

interface ProductSearchListProps {
  /** 원본 상품 배열 */
  data: ProdCardItemProps[];
  /** 선택 상태 제어 (부모 관리) */
  selectedIds: (string | number)[];
  onSelectToggle: (id: string | number, isSelected: boolean) => void;
  /** UI 옵션 */
  columns?: number; // 기본 3
  cardType?: 'vertical' | 'horizontal'; // 기본 vertical
  placeholder?: string; // 검색 placeholder
  /** 결과가 없을 때 사용자 정의 UI */
  emptySlot?: React.ReactNode;
}

export function ProductSearchList({
  data,
  selectedIds,
  onSelectToggle,
  columns = 3,
  cardType = 'vertical',
  placeholder = '검색어를 입력해 주세요.',
  emptySlot,
}: ProductSearchListProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearching = value.length > 0;

  // 상품명 필터링 (샘플 - 설계에 맞게 필터링)
  const filtered = useMemo(() => {
    const q = value.toLowerCase();
    if (!q) return data;
    return data.filter((p) => {
      const t = (p.title ?? '').toLowerCase();
      return t.includes(q);
      // const b = (p.brand ?? '').toLowerCase();
      // return t.includes(q) || b.includes(q);
    });
  }, [value, data]);

  const handleCancel = () => {
    setValue('');
    inputRef.current?.blur();
  };

  return (
    <div className={styles.root}>
      <Input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={value}
        clearable={false}
        className={styles.search}
        suffix={
          isFocused || isSearching ? (
            <IconButton
              name="delete"
              className={styles.clear}
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleCancel}
            >
              취소
            </IconButton>
          ) : (
            <Icon name="search" size="large" />
          )
        }
        size="large"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {filtered.length > 0 ? (
        <ProdCardList
          data={filtered}
          variant="grid"
          columns={columns}
          cardType={cardType}
          mode="select"
          selection={{
            selectedIds,
            onChange: onSelectToggle,
          }}
        />
      ) : (
        isSearching &&
        (emptySlot ?? (
          <Empty title={'검색한 상품이 없습니다. '} desc="상품검색을 통해 상품을 추가해 보세요." />
        ))
      )}
    </div>
  );
}
