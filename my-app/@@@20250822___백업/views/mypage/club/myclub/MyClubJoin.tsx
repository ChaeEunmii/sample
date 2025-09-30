'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Container } from '@widgets/layout/Container';
import {
  JoinBeautyForm,
  JoinMomsForm,
  JoinOutdoorForm,
  JoinPetForm,
  JoinModernForm,
  JoinHealthyForm,
} from '@/views/mypage/club/myclub/components/clubForms';
import { BeautyValues } from '@/views/mypage/club/myclub/components/clubForms/JoinBeautyForm';
import { MomsValues } from '@/views/mypage/club/myclub/components/clubForms/JoinMomsForm';
import { OutdoorValues } from '@/views/mypage/club/myclub/components/clubForms/JoinOutdoorForm';
import { PetValues } from '@/views/mypage/club/myclub/components/clubForms/JoinPetForm';
import { ModernValues } from '@/views/mypage/club/myclub/components/clubForms/JoinModernForm';
import { HealthyValues } from '@/views/mypage/club/myclub/components/clubForms/JoinHealthyForm';

// 필요한 클럽별 타입 추가
type ClubSelectedValues = {
  beauty: BeautyValues;
  moms: MomsValues;
  outdoor: OutdoorValues;
  pet: PetValues;
  modern: ModernValues;
  healthy: HealthyValues;
  // 다른 클럽들도 추가
};

export default function MyClubJoin() {
  // 화면상태
  const searchParams = useSearchParams();
  const club = searchParams.get('club');

  // 선택된 칩 값들을 저장하는 상태 (각 클럽별로 관리)
  const [selectedValues, setSelectedValues] = useState<ClubSelectedValues>({
    beauty: {},
    moms: {
      child: 'child1',
      children: [{}], // 기본 첫째 정보
    },
    outdoor: {},
    pet: {
      petCount: 'petCount1',
      children: [{}], // 기본 첫째 정보
    },
    modern: {},
    healthy: {},
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

  // 클럽별 렌더링
  let content;
  switch (club) {
    case 'beauty':
      content = (
        <JoinBeautyForm
          selectedValues={selectedValues.beauty}
          handleChipChange={handleChipChange('beauty')}
        />
      );
      break;
    case 'moms':
      content = (
        <JoinMomsForm
          selectedValues={selectedValues.moms}
          handleChipChange={handleChipChange('moms')}
        />
      );
      break;
    case 'outdoor':
      content = (
        <JoinOutdoorForm
          selectedValues={selectedValues.outdoor}
          handleChipChange={handleChipChange('outdoor')}
        />
      );
      break;
    case 'pet':
      content = (
        <JoinPetForm
          selectedValues={selectedValues.pet}
          handleChipChange={handleChipChange('pet')}
        />
      );
      break;
    case 'modern':
      content = (
        <JoinModernForm
          selectedValues={selectedValues.modern}
          handleChipChange={handleChipChange('modern')}
        />
      );
      break;
    case 'healthy':
      content = (
        <JoinHealthyForm
          selectedValues={selectedValues.healthy}
          handleChipChange={handleChipChange('healthy')}
        />
      );
      break;
    default:
      content = (
        <JoinBeautyForm
          selectedValues={selectedValues.beauty}
          handleChipChange={handleChipChange('beauty')}
        />
      );
      break;
  }

  return (
    <Container showBack title="클럽 가입">
      {content}
    </Container>
  );
}
