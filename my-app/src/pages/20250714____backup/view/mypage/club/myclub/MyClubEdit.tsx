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

export default function MyClubEdit() {
  // 기존 가입 정보 불러와서 초기값 세팅
  const initialSelectedValues: ClubSelectedValues = {
    beauty: {
      gender: 'gender1',
      skinTone: 'skintone2',
      skinType: 'skintype3',
      skinIssue: ['skinissue2', 'skinissue5'],
      favProd: ['favProd1', 'favProd2'],
      favInfo: ['favInfo1', 'favInfo3'],
      clubOffline: 'offline1',
    },
    moms: {
      child: 'child1',
      children: [
        {
          name: '대한이',
          birthday: '2024.05.31',
          relationship: 'relationship2',
          twin: 'twin2',
          gender: 'gender3',
          styling: [],
        },
      ],
      clubOffline: 'offline1',
    },
    // ...
  };

  const [selectedValues, setSelectedValues] = useState<ClubSelectedValues>(initialSelectedValues);

  const handleChipChange =
    (club: keyof ClubSelectedValues) => (name: string) => (value: string | string[]) => {
      setSelectedValues((prev) => ({
        ...prev,
        [club]: {
          ...prev[club],
          [name]: value,
        },
      }));
    };

  return (
    <Container showBack title="관심정보 수정">
      {/* <JoinBeautyForm
        selectedValues={selectedValues.beauty}
        handleChipChange={handleChipChange('beauty')}
        mode="edit"
      /> */}
      <JoinMomsForm
        selectedValues={selectedValues.moms}
        handleChipChange={handleChipChange('moms')}
        mode="edit"
      />
    </Container>
  );
}
