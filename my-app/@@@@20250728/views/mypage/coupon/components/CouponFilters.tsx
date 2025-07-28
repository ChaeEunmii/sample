'use client';

import { useState } from 'react';
import { Tabs } from '@/shared/ui/blocks/Tabs';
import { Checkbox, SelectDrawer, Stack } from '@/shared/ui';
import {
  downloadOfflineTabList,
  downloadOnlineTabList,
  ownedOfflineTabList,
  ownedOnlineTabList,
} from './categoryTabs';
import styles from './CouponSort.module.scss';

interface CouponFiltersProps {
  type: 'owned' | 'downloadable';
  isEmpty: boolean;
  onlineOfflineTab: number;
  onChangeOnlineOfflineTab: (index: number) => void;
  onCategoryTab: number;
  onChangeCategoryTab: (index: number) => void;
}

export const CouponFilters = ({ type, isEmpty = false, onlineOfflineTab, onChangeOnlineOfflineTab, onCategoryTab, onChangeCategoryTab }: CouponFiltersProps) => {
  // 상태 관리
  
  const [sortValue, setSortValue] = useState('latest'); // 보유 쿠폰 리스트 Drawer

  // 카테고리 탭 타입별 렌더링
  const renderCategoryTabs = () => {
    if (type === 'owned' && onlineOfflineTab === 0) {
      return ownedOnlineTabList;
    }
    if (type === 'owned' && onlineOfflineTab === 1) {
      return ownedOfflineTabList;
    }
    if (type === 'downloadable' && onlineOfflineTab === 0) {
      return downloadOnlineTabList;
    }
    if (type === 'downloadable' && onlineOfflineTab === 1) {
      return downloadOfflineTabList;
    }
    return [];
  };

  // 보유 쿠폰 리스트 Drawer 데이터
  const couponSortOptions = [
    {
      label: '최신발급순',
      value: 'latest',
    },
    {
      label: '마감임박순',
      value: 'endingSoon',
    },
  ];

  return (
    <>
      {/* 온라인/오프라인 탭 */}
      <Tabs
        data={[
          {
            label: '온라인(9,999)',
          },
          {
            label: '오프라인(9,999)',
          },
        ]}
        defaultActive={onlineOfflineTab}
        onTabChange={onChangeOnlineOfflineTab}
        variant="buttons"
        className="ncp-mt-m"
      />
      
      {/* 쿠폰 카테고리 탭 */}
      <Tabs
        data={renderCategoryTabs()}
        defaultActive={onCategoryTab}
        onTabChange={onChangeCategoryTab}
        variant="texts"
        className="ncp-mt-m"
      />

      {type === 'owned' && !isEmpty && (
        <div className={styles.sortBox}>
          {onCategoryTab === 0 && (
            <Checkbox
              size="small"
              label="7일 이내 사용 가능한 쿠폰 보기"
              className={styles.sortCheckbox}
            />
          )}
          <Stack type="end">
            <SelectDrawer
              title="보유 쿠폰 내역"
              options={couponSortOptions}
              value={sortValue}
              onChange={setSortValue}
              variant="filter"
            />
          </Stack>
        </div>
      )}
    </>
  );
};

CouponFilters.displayName = 'CouponFilters';
