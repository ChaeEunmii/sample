'use client';

import React, { useState, useCallback } from 'react';

import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import styles from './MembershipJoin.module.scss';
import { SearchField } from '@views/mypage/component/SearchField';

const MOCK_DATA = [
  { id: 1, label: '크리니크' },
  { id: 2, label: '겔랑' },
  { id: 3, label: '까사블랑' },
  { id: 4, label: '달팡' },
  { id: 5, label: '구찌뷰티' },
  { id: 6, label: '댕기머리' },
  { id: 7, label: '닥터브로너스' },
  { id: 8, label: '더후' },
  { id: 9, label: '댕기머리2' },
  { id: 10, label: '닥터브로너스2' },
];

export default function MembershipJoin() {
  const [results, setResults] = useState<typeof MOCK_DATA>([]);
  const [selectedItems, setSelectedItems] = useState<typeof MOCK_DATA>([]);

  // 검색어가 바뀔 때 호출
  const handleSearch = useCallback((query: string) => {
    if (query === '') {
      setResults(MOCK_DATA);
      return;
    }
    const filtered = MOCK_DATA.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, []);

  // 검색 버튼 클릭 시 (선택사항)
  const handleSearchButtonClick = (query: string) => {
    alert(`검색 버튼 클릭 - 검색어: ${query}`);
  };

  return (
    <Container title="HiHi 멤버십 가입하기" showBack>
      <Contents className={styles.layout}>
        <SearchField
          onSearch={handleSearch}
          results={results}
          selectedItems={selectedItems}
          onChangeSelected={setSelectedItems}
          placeholder="브랜드 찾기"
          onSearchButtonClick={handleSearchButtonClick}
        />

        <div style={{ marginTop: 20 }}>
          <strong>선택된 항목:</strong>{' '}
          {selectedItems.length > 0 ? selectedItems.map((item) => item.label).join(', ') : '없음'}
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          쇼핑하러 가기
        </Button>
      </ButtonArea>
    </Container>
  );
}
