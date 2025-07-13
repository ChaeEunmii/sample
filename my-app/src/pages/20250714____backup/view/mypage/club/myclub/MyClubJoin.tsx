'use client';

import { useState } from 'react';
import { Container } from '@widgets/layout/Container';
import {
  JoinBeautyForm,
  BeautyValues,
} from '@/views/mypage/club/myclub/components/clubForms/JoinBeautyForm';
import {
  JoinMomsForm,
  MomsValues,
} from '@/views/mypage/club/myclub/components/clubForms/JoinMomsForm';

// 필요한 클럽별 타입 추가
type ClubSelectedValues = {
  beauty: BeautyValues;
  moms: MomsValues;
  // 다른 클럽들도 추가
};

export default function MyClubJoin() {
  // 선택된 칩 값들을 저장하는 상태 (각 클럽별로 관리)
  const [selectedValues, setSelectedValues] = useState<ClubSelectedValues>({
    beauty: {},
    moms: {
      child: 'child1',
      children: [{}], // 기본 1명 아이 정보
    },
    // ... 초기화
  });

  // 클럽별 칩 선택이 바뀔 때 호출되는 함수
  const handleChipChange =
    (club: keyof ClubSelectedValues) => (name: string) => (value: string | string[]) => {
      setSelectedValues((prev) => {
        const newValues = {
          ...prev,
          [club]: {
            ...prev[club],
            [name]: value,
          },
        };
        console.log('업데이트 될 값:', newValues);
        return newValues;
      });
    };

  return (
    <Container showBack title="클럽 가입">
      {/* <JoinBeautyForm
        selectedValues={selectedValues.beauty}
        handleChipChange={handleChipChange('beauty')}
      /> */}
      <JoinMomsForm
        selectedValues={selectedValues.moms}
        handleChipChange={handleChipChange('moms')}
      />
    </Container>
  );
}
