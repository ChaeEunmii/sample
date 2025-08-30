'use client';

import { useState, useRef } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Input, IconButton, Icon } from '@shared/ui';
import { ProdCardList } from '@widgets/product/ProdCardList';
import styles from './ChangeGroupName.module.scss';
import { mockProdCards2 } from '@mocks/partners';

export default function ChangeGroupName() {
  // 상품 체크 상태 관리
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  // 상품 체크 토글 핸들러
  const handleSelectToggle = (productId: string | number, isSelected: boolean) => {
    setSelectedIds((prev) => {
      let next = prev;
      // 선택된 상태면, 목록에 없을 때만 추가
      if (isSelected) {
        if (!prev.includes(productId)) {
          next = [...prev, productId];
        }
      } else {
        // 선택 해제면, 목록에서 제거
        next = prev.filter((id) => id !== productId);
      }

      console.log('업데이트된 상품 체크목록:', next);
      console.log(`상품 체크리스트 ${isSelected ? '추가' : '제거'}:`, productId);

      return next;
    });
  };
  //상품 검색 아래부터 로직
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색 중인지 확인
  const isSearching = value.trim().length > 0;

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 검색어 초기화
  const handleSearchCancel = () => {
    setValue('');
    inputRef.current?.blur();
  };

  return (
    <Container showBack title="상품 그룹명 수정">
      <Contents>
        <Input
          ref={inputRef}
          type="search"
          placeholder="검색어를 입력해 주세요."
          value={value}
          clearable={false}
          className={styles.search}
          suffix={
            isFocused || isSearching ? (
              <IconButton
                name="delete"
                className={styles.clear}
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleSearchCancel}
              >
                취소
              </IconButton>
            ) : (
              // 꾸밈용 아이콘
              <Icon name="search" size="large" />
            )
          }
          size="large"
          onChange={handleSearchChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <ProdCardList
          data={mockProdCards2}
          variant="grid"
          columns={3}
          cardType="vertical"
          autofit
          mode="select"
          selection={{
            selectedIds: selectedIds,
            onChange: handleSelectToggle,
          }}
        />
      </Contents>
    </Container>
  );
}
