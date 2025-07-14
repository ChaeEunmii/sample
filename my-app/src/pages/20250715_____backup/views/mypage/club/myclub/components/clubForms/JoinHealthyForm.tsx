'use client';

import { Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Chip, Button, ButtonArea } from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubHealthy } from '@mocks/club';
import { InterestBrandForm } from '@/views/mypage/club/myclub/components/clubForms/InterestBrandForm';

// clubBeauty 키만 뽑아서 타입 선언
type ClubKeys = keyof typeof clubHealthy;
// 해당 클럽 데이터를 할당
const myClubData = clubHealthy;

export interface HealthyValues {
  gender?: string;
  favField?: string[];
  favFood?: string[];
  IngFood?: string[];
  buyingFactors?: string[];
  wish?: string[];
}

// 칩 항목별 key와 다중 선택 여부
const chipItems: { name: ClubKeys; multiple: boolean }[] = [
  { name: 'gender', multiple: false },
  { name: 'favField', multiple: true },
  { name: 'favFood', multiple: true },
  { name: 'IngFood', multiple: true },
  { name: 'buyingFactors', multiple: true },
  { name: 'wish', multiple: true },
];

interface JoinHealthyFormProps {
  /** 선택된 값들 */
  selectedValues: HealthyValues;
  /** 칩 선택 변경 핸들러 (name별로 value 전달) */
  handleChipChange: (name: keyof HealthyValues) => (value: string | string[]) => void;
  /** 모드: 가입('join') 또는 수정('edit'), 기본값 'join' */
  mode?: 'join' | 'edit';
}

export const JoinHealthyForm = ({
  selectedValues,
  handleChipChange,
  mode = 'join',
}: JoinHealthyFormProps) => {
  // 수정모드 여부
  const isEdit = mode === 'edit';

  // 최대 선택 제한
  const maxSelectionMap: Partial<Record<ClubKeys | 'favInfo', number>> = {
    favField: 5,
    favFood: 5,
    IngFood: 5,
    buyingFactors: 3,
    wish: 3,
  };
  // 최대 선택 제한 함수
  const limitedHandleChipChange = (name: keyof HealthyValues) => (value: string | string[]) => {
    const max = maxSelectionMap[name as ClubKeys | 'favInfo'] ?? Infinity;
    if (Array.isArray(value)) {
      const limitedValue = value.length > max ? value.slice(0, max) : value;
      handleChipChange(name)(limitedValue);
    } else {
      handleChipChange(name)(value);
    }
  };

  return (
    <>
      <Contents>
        <ClubTitle type="healthy" variant={!isEdit ? 'join' : 'edit'} />
        <FormArea type="vertical" gap="3">
          {chipItems.map(({ name, multiple }) => (
            <FormItem key={name} title={myClubData[name].label} required>
              <Chip
                name={name}
                variant="filled"
                size="small"
                columns="auto"
                data={myClubData[name].data}
                multiple={multiple}
                selected={selectedValues[name]}
                onChange={multiple ? limitedHandleChipChange(name) : handleChipChange(name)}
              />
            </FormItem>
          ))}
        </FormArea>

        {/* 관심 브랜드 */}
        {!isEdit ? (
          <InterestBrandForm />
        ) : (
          <InterestBrandForm
            initialSelectedItems={[
              { id: 1, label: '브랜드' },
              { id: 2, label: '브랜드' },
            ]}
            initialRegisteredBrands={['브랜드', '브랜드']}
          />
        )}
      </Contents>
      <ButtonArea type="sticky">
        {!isEdit ? (
          <>
            <Button variant="primary" size="large">
              가입하기
            </Button>
          </>
        ) : (
          <>
            <Button size="large">취소</Button>
            <Button variant="primary" size="large">
              저장하기
            </Button>
          </>
        )}
      </ButtonArea>
    </>
  );
};
