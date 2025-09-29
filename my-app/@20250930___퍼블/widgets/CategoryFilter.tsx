'use client';

import { useState, useEffect } from 'react';
import { SelectDrawer, Stack, Tabs } from '@shared/ui';
import clsx from 'clsx';
import styles from './CategoryFilter.module.scss';

// 소팅옵션
import { mockSortOptions } from '@mocks/display';

interface TabItem {
  label: string;
  subTabs?: TabItem[];
  detTabs?: TabItem[];
}

interface CategoryFilterProps {
  tabData: TabItem[];
  isSticky?: boolean;
  className?: string;
  /** 기본 활성화된 탭 인덱스 */
  defaultActive?: { mid?: number; sub?: number; det?: number; sort?: string };
  /** 탭 변경 콜백 (optional) */
  onTabChange?: (mid: number, sub: number, det: number, sort: string) => void;
}

export const CategoryFilter = ({
  tabData,
  isSticky = false,
  className,
  defaultActive,
  onTabChange,
}: CategoryFilterProps) => {
  const [activeMidCategory, setActiveMidCategory] = useState(defaultActive?.mid ?? 0);
  const [activeSubCategory, setActiveSubCategory] = useState(defaultActive?.sub ?? 0);
  const [activeDetailCategory, setActiveDetailCategory] = useState(defaultActive?.det ?? 0);
  const [sortValue, setSortValue] = useState(defaultActive?.sort ?? 'recommended');

  const activeMidTab = tabData[activeMidCategory];
  const subCategoryTabs = activeMidTab?.subTabs || [];
  const activeSubTab = subCategoryTabs[activeSubCategory] || { detTabs: [] };
  const detailCategoryTabs = activeSubTab.detTabs || [];

  // 선택된 카테고리와 정렬값 전달
  const updateCategory = (m: number, s: number, d: number, sort: string) => {
    onTabChange?.(m, s, d, sort);
  };

  // 초기 선택 상태를 부모에 전달
  useEffect(() => {
    updateCategory(activeMidCategory, activeSubCategory, activeDetailCategory, sortValue);
  }, []);

  return (
    <div className={clsx(styles.root, className, isSticky && styles.sticky)}>
      {/* 중카테고리 탭 */}
      <Tabs
        variant="divid"
        data={tabData.map(({ label }) => ({ label }))}
        activeTab={activeMidCategory}
        onTabChange={(index) => {
          setActiveMidCategory(index);
          setActiveSubCategory(0);
          setActiveDetailCategory(0);
          updateCategory(index, 0, 0, sortValue);
        }}
      />

      {/* 소카테고리 탭 */}
      {subCategoryTabs.length > 0 && (
        <Tabs
          variant="texts"
          textActiveType="none"
          data={subCategoryTabs.map(({ label }) => ({ label }))}
          className={styles.subtab}
          activeTab={activeSubCategory}
          onTabChange={(index) => {
            setActiveSubCategory(index);
            setActiveDetailCategory(0);
            updateCategory(activeMidCategory, index, 0, sortValue);
          }}
        />
      )}

      {/* 세카테고리 탭 */}
      {detailCategoryTabs.length > 0 && (
        <Tabs
          variant="boxes"
          data={detailCategoryTabs.map(({ label }) => ({ label }))}
          className={styles.dettab}
          activeTab={activeDetailCategory}
          onTabChange={(index) => {
            setActiveDetailCategory(index);
            updateCategory(activeMidCategory, activeSubCategory, index, sortValue);
          }}
        />
      )}

      <Stack type="end">
        <SelectDrawer
          title="정렬"
          options={mockSortOptions}
          value={sortValue}
          onChange={(v) => {
            setSortValue(v);
            updateCategory(activeMidCategory, activeSubCategory, activeDetailCategory, v);
          }}
          variant="filter"
        />
      </Stack>
    </div>
  );
};
