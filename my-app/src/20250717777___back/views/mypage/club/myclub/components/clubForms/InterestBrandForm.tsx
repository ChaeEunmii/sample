'use client';

import React, { useState, useRef, useCallback } from 'react';
import { FormArea, FormItem, Text, Stack, Input, Button, ButtonArea, IconButton } from '@shared/ui';
import { SearchField } from '@/views/mypage/components/SearchField';
import styles from './InterestBrandForm.module.scss';

// 브랜드 검색용 mock 데이터
const MOCK_DATA = [
  { id: 1, label: '크리니크' },
  { id: 2, label: '겔랑' },
  { id: 3, label: '까사블랑' },
  { id: 4, label: '달팡' },
  { id: 5, label: '구찌뷰티' },
  { id: 6, label: '댕기머리' },
  { id: 7, label: '닥터브로너스' },
  { id: 8, label: '더후1' },
  { id: 9, label: '더후2' },
  { id: 10, label: '더후3' },
  { id: 11, label: '댕기머리' },
  { id: 12, label: '닥터브로너스1' },
  { id: 13, label: '닥터브로너스2' },
  { id: 14, label: '닥터브로너스3' },
  { id: 15, label: '닥터브로너스4' },
  { id: 16, label: '닥터브로너스5' },
  { id: 17, label: '닥터브로너스6' },
  { id: 18, label: '닥터브로너스7' },
  { id: 19, label: '닥터브로너스8' },
  { id: 20, label: '닥터브로너스9' },
];

// 타입 정의
type BrandItem = { id: number; label: string };

interface InterestBrandFormProps {
  /** 최초 선택된 브랜드 (검색선택) */
  initialSelectedItems?: BrandItem[];
  /** 최초 등록된 직접입력 브랜드 */
  initialRegisteredBrands?: string[];
}

export const InterestBrandForm = ({
  initialSelectedItems = [],
  initialRegisteredBrands = [],
}: InterestBrandFormProps) => {
  const additionalBrandInputRef = useRef<HTMLInputElement>(null); // 기타 브랜드 input ref
  // 검색 결과 상태
  const [results, setResults] = useState<BrandItem[]>(MOCK_DATA);
  // 현재 선택된 검색 브랜드 리스트
  const [selectedItems, setSelectedItems] = useState<BrandItem[]>(initialSelectedItems);
  // 기타 브랜드 입력창 상태
  const [additionalBrand, setAdditionalBrand] = useState('');
  // 등록된 기타 브랜드 리스트
  const [registeredBrands, setRegisteredBrands] = useState<string[]>(initialRegisteredBrands);
  // 검색필드
  const [searchOpen, setSearchOpen] = useState(false);

  // 검색어 입력 시 필터링 수행
  const handleSearch = useCallback((query: string) => {
    if (query === '') {
      setResults(MOCK_DATA); // 검색어 없을 땐 전체 보여줌
      return;
    }
    const filtered = MOCK_DATA.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, []);

  // 검색 버튼 클릭 시 (필요 없으면 제거 가능)
  const handleSearchButtonClick = (query: string) => {
    alert(`검색 버튼 클릭 - 검색어: ${query}`);
  };

  // 기타 브랜드 입력창 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalBrand(e.target.value);
  };

  // 직접입력 브랜드 등록
  const handleRegister = () => {
    const trimmed = additionalBrand.trim();
    if (trimmed === '') return;

    if (registeredBrands.length >= 10) {
      alert('추가 관심 브랜드는 최대 10개까지 등록 가능합니다.');
      return;
    }
    // 새로운 브랜드를 기존 등록 목록에 추가
    setRegisteredBrands((prev) => [...prev, trimmed]);
    // 입력창 초기화 (입력했던 텍스트 지움)
    setAdditionalBrand('');
  };

  // 직접입력 브랜드 삭제
  const handleRemoveBrand = (brandToRemove: string) => {
    setRegisteredBrands((prev) => prev.filter((brand) => brand !== brandToRemove));
  };

  return (
    <FormArea type="vertical" gap="3" className={styles.interest}>
      {/* 브랜드 검색 섹션 */}
      <FormItem title="관심 브랜드 (최대 10개)" required>
        <Text color="gray3" size="4" weight="medium" reading>
          뷰티 전문 브랜드 등록하고 혜택알림을 받아 보세요.
          <br />
          검색할 수 없는 브랜드는 직접 입력해 주세요.
        </Text>
        <br />
        <SearchField
          onSearch={handleSearch}
          results={results}
          selectedItems={selectedItems}
          onChangeSelected={setSelectedItems}
          placeholder="브랜드 찾기"
          onSearchButtonClick={handleSearchButtonClick}
          noDataSlot={
            <div>
              <ButtonArea margin="1">
                <Button
                  size="small"
                  variant="tertiary"
                  onClick={() => {
                    setSearchOpen(false);
                    additionalBrandInputRef.current?.focus();
                  }}
                >
                  기타 브랜드로 등록하기
                </Button>
              </ButtonArea>
            </div>
          }
          isOpen={searchOpen}
          onOpenChange={setSearchOpen}
        />
      </FormItem>
      {/* 추가 관심 브랜드 입력 섹션 */}
      <FormItem title="추가 관심 브랜드 (최대 10개)">
        <Stack type="field">
          <Input
            ref={additionalBrandInputRef}
            type="text"
            placeholder="브랜드 직접입력"
            size="large"
            value={additionalBrand}
            onChange={handleInputChange}
          />
          <Button
            variant="primary"
            size="large"
            disabled={additionalBrand.trim() === ''}
            onClick={handleRegister}
          >
            등록
          </Button>
        </Stack>
        {/* 추가 관심 브랜드 리스트 */}
        <div className={styles.addItems}>
          {registeredBrands.map((brand, idx) => (
            <span key={idx} className={styles.tag}>
              {brand}
              <IconButton
                name="close"
                size="small"
                onClick={() => handleRemoveBrand(brand)}
                className={styles.remove}
                aria-label={`${brand} 선택 해제`}
              />
            </span>
          ))}
        </div>
      </FormItem>
    </FormArea>
  );
};
