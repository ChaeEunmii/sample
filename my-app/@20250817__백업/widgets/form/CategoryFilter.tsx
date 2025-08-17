'use client';

import { useState } from 'react';
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
}

export const CategoryFilter = ({ tabData, isSticky, className }: CategoryFilterProps) => {
  const [activeMidCategory, setActiveMidCategory] = useState(0);
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [activeDetailCategory, setActiveDetailCategory] = useState(0);
  const [sortValue, setSortValue] = useState('recommended');

  const activeMidTab = tabData[activeMidCategory];
  const subCategoryTabs = activeMidTab?.subTabs || [];
  const activeSubTab = subCategoryTabs[activeSubCategory] || { detTabs: [] };
  const detailCategoryTabs = activeSubTab.detTabs || [];

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
          onTabChange={(index) => setActiveDetailCategory(index)}
        />
      )}

      <Stack type="end">
        <SelectDrawer
          title="정렬"
          options={mockSortOptions}
          value={sortValue}
          onChange={setSortValue}
          variant="filter"
        />
      </Stack>
    </div>
  );
};
