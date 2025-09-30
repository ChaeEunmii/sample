'use client';

// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { TextButton, Drawer, Tabs, CheckboxGroup, Accordion, Button, Text } from '@shared/ui';
// 스타일
import styles from './Filter.module.scss';

// 타입 정의
interface FilterOption {
  label: string;
  count?: number;
  value: string;
  disabled?: boolean;
}

interface FilterGroup {
  id: string;
  group: string;
  data: FilterOption[];
}

interface FilterTab {
  id: string;
  title: string;
  data: FilterOption[] | FilterGroup[];
}

interface FilterProps {
  filters: FilterTab[];
  selectedValues: Record<string, string[]>;
  onSelect: (selectedValues: Record<string, string[]>) => void;
}

export const Filter = ({ filters, selectedValues, onSelect }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // 내부적으로 임시 선택값 관리 (적용 버튼 누를 때까지)
  const [tempSelectedValues, setTempSelectedValues] =
    useState<Record<string, string[]>>(selectedValues);

  // 특정 탭의 선택값 변경 핸들러
  const handleTabChange = (tabId: string, values: string[]) => {
    setTempSelectedValues((prev) => ({
      ...prev,
      [tabId]: values,
    }));
  };

  // 옵션 렌더링 헬퍼 함수
  const renderOptions = (options: FilterOption[]) =>
    options.map(({ label, count, value, disabled }) => ({
      label: (
        <>
          {label}
          {count !== undefined && (
            <Text size="4" weight="regular" color="gray3">
              {count}건
            </Text>
          )}
        </>
      ),
      value,
      disabled,
    }));

  // 탭 컨텐츠 렌더링
  const renderTabContent = (tabId: string, data: FilterOption[] | FilterGroup[]) => {
    const currentValues = tempSelectedValues[tabId] || [];

    // 단일 레벨 필터
    if (Array.isArray(data) && data[0] && 'value' in data[0]) {
      return (
        <CheckboxGroup
          options={renderOptions(data as FilterOption[])}
          value={currentValues}
          onChange={(values) => handleTabChange(tabId, values)}
          vertical
          checkboxProps={{ variant: 'filter' }}
        />
      );
    }

    // 그룹 필터 - group 속성이 있으면 아코디언 구조
    if (Array.isArray(data) && data[0] && 'group' in data[0]) {
      return (
        <Accordion
          data={(data as FilterGroup[]).map((group) => ({
            label: group.group,
            content: (
              <CheckboxGroup
                options={renderOptions(group.data)}
                value={currentValues}
                onChange={(values) => handleTabChange(tabId, values)}
                vertical
                checkboxProps={{ variant: 'filter' }}
              />
            ),
          }))}
        />
      );
    }

    return null;
  };

  // 필터 초기화
  const handleReset = () => {
    setTempSelectedValues({});
    setIsOpen(false);
    onSelect({});
  };

  // 필터 적용
  const handleApply = () => {
    onSelect(tempSelectedValues);
    setIsOpen(false);
  };

  // Drawer 열릴 때 현재 선택값으로 임시값 초기화
  const handleOpen = () => {
    setTempSelectedValues(selectedValues);
    setIsOpen(true);
  };

  return (
    <>
      <TextButton className={styles.control} suffixIcon="filter" size="1" onClick={handleOpen}>
        필터
      </TextButton>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="필터"
        footer={
          <>
            <Button onClick={handleReset}>취소</Button>
            <Button variant="primary" onClick={handleApply}>
              적용
            </Button>
          </>
        }
      >
        <Tabs
          variant="texts"
          className={styles.tab}
          data={filters.map(({ id, title, data }) => ({
            id,
            label: title,
            content: renderTabContent(id, data),
          }))}
        />
      </Drawer>
    </>
  );
};

Filter.displayName = 'Filter';

// 기본 필터 데이터 (부모에서 사용할 수 있도록 export)
export const defaultFilterData: FilterTab[] = [
  {
    id: 'tab_01',
    title: '카테고리',
    data: [
      { label: '화장품', count: 999, value: 'cate_01' },
      { label: '아우터', count: 120, value: 'cate_02' },
      { label: '상의', count: 18, value: 'cate_03' },
      { label: '하의', count: 56, value: 'cate_04' },
      { label: '신발', count: 87, value: 'cate_05' },
      { label: '가방', count: 45, value: 'cate_06' },
      { label: '액세서리', count: 73, value: 'cate_07' },
      { label: '스포츠웨어', count: 30, value: 'cate_08' },
      { label: '속옷', count: 25, value: 'cate_09' },
      { label: '생활용품', count: 150, value: 'cate_10' },
      { label: '식품', count: 200, value: 'cate_11' },
      { label: '반려동물용품', count: 35, value: 'cate_12' },
    ],
  },
  {
    id: 'tab_02',
    title: '유형',
    data: [
      {
        id: 'tab_02_01',
        group: '스토어픽',
        data: [
          { label: '전지점', value: 'store_01' },
          { label: '신촌점', value: 'store_02' },
          { label: '중동점', value: 'store_03' },
          { label: '목동점', value: 'store_04' },
          { label: '천호점', value: 'store_05' },
          { label: '판교점', value: 'store_06' },
          { label: '디큐브시티점', value: 'store_07' },
          { label: '더현대서울', value: 'store_08' },
        ],
      },
      {
        id: 'tab_02_02',
        group: '배송유형',
        data: [
          { label: '전체배송', value: 'delivery_01' },
          { label: '오늘배송', value: 'delivery_02' },
          { label: '내일배송', value: 'delivery_03' },
        ],
      },
    ],
  },
];

Filter.displayName = 'Filter';
