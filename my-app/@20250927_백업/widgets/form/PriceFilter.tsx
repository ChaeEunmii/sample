'use client';

import { useState } from 'react';
import { SelectDrawer, Stack, Tabs } from '@shared/ui';
import clsx from 'clsx';
import styles from './PriceFilter.module.scss';

// 소팅옵션
import { mockSortOptions } from '@mocks/display';

export interface TabItem {
  label: string;
  subTabs?: TabItem[];
  detTabs?: TabItem[];
}

interface PriceFilterProps {
  tabData: TabItem[];
  isSticky?: boolean;
  showSelectDrawer?: boolean;
  className?: string;
}

export const PriceFilter = ({
  tabData,
  isSticky = false,
  showSelectDrawer = false,
  className,
}: PriceFilterProps) => {
  const [activeMidCategory, setActiveMidCategory] = useState(0);
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [sortValue, setSortValue] = useState('recommended');

  const activeMidTab = tabData[activeMidCategory];
  const subCategoryTabs = activeMidTab?.subTabs || [];

  return (
    <div className={clsx(styles.root, className, isSticky && styles.sticky)}>
      {/* 중카테고리 탭 */}
      <Tabs
        variant="buttons"
        data={tabData.map(({ label }) => ({ label }))}
        activeTab={activeMidCategory}
        onTabChange={(index) => {
          setActiveMidCategory(index);
          setActiveSubCategory(0);
        }}
      />

      {/* 가격필터 탭 */}
      {subCategoryTabs.length > 0 && (
        <Tabs
          variant="texts"
          data={subCategoryTabs.map(({ label }) => ({ label }))}
          className={clsx(!showSelectDrawer && styles.subtab)}
          activeTab={activeSubCategory}
          onTabChange={(index) => {
            setActiveSubCategory(index);
          }}
        />
      )}
      {showSelectDrawer && (
        <Stack type="end">
          <SelectDrawer
            title="정렬"
            options={mockSortOptions}
            value={sortValue}
            onChange={setSortValue}
            variant="filter"
          />
        </Stack>
      )}
    </div>
  );
};
