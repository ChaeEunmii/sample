'use client';

import { Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Chip, Button, ButtonArea } from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubModern } from '@mocks/club';
import { InterestBrandForm } from '@/views/mypage/club/myclub/components/clubForms/InterestBrandForm';

// clubBeauty 키만 뽑아서 타입 선언
type ClubKeys = keyof typeof clubModern;
// 해당 클럽 데이터를 할당
const myClubData = clubModern;

export interface ModernValues {
  modernGender?: string;
  favStyling?: string[];
  favCategory?: string[];
  favinfo?: string[];
}

// 칩 항목별 key와 다중 선택 여부
const chipItems: { name: ClubKeys; multiple: boolean }[] = [
  { name: 'modernGender', multiple: false },
  { name: 'favStyling', multiple: true },
  { name: 'favCategory', multiple: true },
  { name: 'favinfo', multiple: true },
];

interface JoinModernFormProps {
  /** 선택된 값들 */
  selectedValues: ModernValues;
  /** 칩 선택 변경 핸들러 (name별로 value 전달) */
  handleChipChange: (name: keyof ModernValues) => (value: string | string[]) => void;
  /** 모드: 가입('join') 또는 수정('edit'), 기본값 'join' */
  mode?: 'join' | 'edit';
}

export const JoinModernForm = ({
  selectedValues,
  handleChipChange,
  mode = 'join',
}: JoinModernFormProps) => {
  // 수정모드 여부
  const isEdit = mode === 'edit';

  // 최대 선택 제한
  const maxSelectionMap: Partial<Record<ClubKeys | 'favInfo', number>> = {
    favStyling: 3,
    favCategory: 3,
    favinfo: 3,
  };
  // 최대 선택 제한 함수
  const limitedHandleChipChange = (name: keyof ModernValues) => (value: string | string[]) => {
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
        <ClubTitle type="modern" variant={!isEdit ? 'join' : 'edit'} />
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
