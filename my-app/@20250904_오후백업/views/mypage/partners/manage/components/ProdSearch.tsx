'use client';

import { useMemo, useRef, useState } from 'react';
import { Input, IconButton, Icon, Empty } from '@shared/ui';
import { CategoryFilter } from '@widgets/form/CategoryFilter';
import { ProdShareList } from '@views/mypage/partners/manage/product/component/ProdShareList';
import { ProdCardList, type ProdCardItemProps } from '@widgets/product/ProdCardList';
import styles from './ProdSearch.module.scss';

type TabItem = {
  label: string;
  subTabs?: TabItem[];
  detTabs?: TabItem[];
};

type Mode = 'share' | 'select';

interface ProdSearchProps {
  /** 표시 모드: 공유 버튼 리스트 or 선택 모드 */
  mode?: Mode;
  /** 상품 배열 */
  data: ProdCardItemProps[];
  /** 카테고리 탭 데이터 (있을 때만 노출) */
  tabData?: TabItem[];
  /** 현재 선택된 아이템 id 배열(부모가 제어) */
  selectedIds?: (string | number)[];
  /** 선택 토글 콜백: (id, 다음 선택상태) */
  onSelectToggle?: (id: string | number, isSelected: boolean) => void;
  /** 공유 모드 전용: 공유 버튼 핸들러/라벨 */
  onShare?: (item: ProdCardItemProps) => void;
  /** 공유 모드 버튼라벨 변경 시 */
  buttonLabels?: { share?: string };
  /** 기본 grid 열 수 */
  columns?: number;
  /** placeholder */
  placeholder?: string;
  /** 결과가 없을 때 (변경 시) */
  emptySlot?: React.ReactNode;
}

export function ProdSearch({
  mode = 'select',
  data,
  tabData = [],
  selectedIds = [],
  onSelectToggle,
  onShare,
  buttonLabels,
  columns = 3,
  placeholder = '검색어를 입력해 주세요.',
  emptySlot,
}: ProdSearchProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearching = value.length > 0; // 검색 중 여부
  const hasTabs = tabData?.length > 0; // 탭 데이터 존재 여부

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
    <>
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

      {/* 카테고리 필터: tabData가 있을 때 + 검색 중이 아닐 때만 노출 */}
      {!isSearching && hasTabs && <CategoryFilter tabData={tabData} className={styles.category} />}

      {/* 결과 리스트 */}
      {filtered.length > 0 ? (
        mode === 'share' ? (
          <ProdShareList
            data={filtered}
            columns={columns}
            className={styles.list}
            onShare={onShare}
            buttonLabels={buttonLabels}
          />
        ) : (
          <ProdCardList
            data={filtered}
            variant="grid"
            columns={columns}
            mode="select"
            selection={{
              selectedIds,
              onChange: onSelectToggle!,
            }}
            className={styles.list}
          />
        )
      ) : (
        isSearching &&
        (emptySlot ?? (
          <Empty title="검색한 상품이 없습니다." desc="상품검색을 통해 상품을 추가해 보세요." />
        ))
      )}
    </>
  );
}
