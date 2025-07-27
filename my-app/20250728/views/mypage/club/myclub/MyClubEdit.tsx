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

export default function MyClubEdit() {
  // 화면상태
  const searchParams = useSearchParams();
  const club = searchParams.get('club');

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
    outdoor: {
      gender: 'gender2',
      favActive: ['active1'],
      favProd: ['favProd1', 'favProd2'],
      favInfo: ['favInfo4'],
    },
    pet: {
      petCount: 'petCount1',
      children: [
        {
          petType: 'petType2',
          field: '비숑프리제',
          petGender: 'petGender1',
          name: '비숑프리제',
          birthday: '2023.07.25',
          weight: '6',
          info: '특이사항 없음',
        },
      ],
    },
    modern: {
      modernGender: 'modernGender2',
      favStyling: ['favStyling3'],
      favCategory: ['favCategory3', 'favCategory4'],
      favinfo: ['mdfavinfo5'],
    },
    healthy: {
      gender: 'healthyGender2',
      favField: ['favField9'],
      favFood: ['favFood2'],
      IngFood: ['IngFood4', 'IngFood5'],
      buyingFactors: ['buyingFactors2'],
      wish: ['wish2', 'wish3'],
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

  // 클럽별 렌더링
  let content;
  switch (club) {
    case 'beauty':
      content = (
        <JoinBeautyForm
          selectedValues={selectedValues.beauty}
          handleChipChange={handleChipChange('beauty')}
          mode="edit"
        />
      );
      break;
    case 'moms':
      content = (
        <JoinMomsForm
          selectedValues={selectedValues.moms}
          handleChipChange={handleChipChange('moms')}
          mode="edit"
        />
      );
      break;
    case 'outdoor':
      content = (
        <JoinOutdoorForm
          selectedValues={selectedValues.outdoor}
          handleChipChange={handleChipChange('outdoor')}
          mode="edit"
        />
      );
      break;
    case 'pet':
      content = (
        <JoinPetForm
          selectedValues={selectedValues.pet}
          handleChipChange={handleChipChange('pet')}
          mode="edit"
        />
      );
      break;
    case 'modern':
      content = (
        <JoinModernForm
          selectedValues={selectedValues.modern}
          handleChipChange={handleChipChange('modern')}
          mode="edit"
        />
      );
      break;
    case 'healthy':
      content = (
        <JoinHealthyForm
          selectedValues={selectedValues.healthy}
          handleChipChange={handleChipChange('healthy')}
          mode="edit"
        />
      );
      break;
    default:
      content = (
        <JoinBeautyForm
          selectedValues={selectedValues.beauty}
          handleChipChange={handleChipChange('beauty')}
          mode="edit"
        />
      );
      break;
  }

  return (
    <Container showBack title="관심정보 수정">
      {content}
    </Container>
  );
}
