'use client';

import { useEffect, useState } from 'react';
import { Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Chip, Button, ButtonArea } from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubBeauty } from '@mocks/club';
import { JoinOfflineBox } from '@/views/mypage/club/myclub/components/clubForms/JoinOfflineBox';
import { InterestBrandForm } from '@/views/mypage/club/myclub/components/clubForms/InterestBrandForm';
import { ClubAgreementSection } from '@views/mypage/club/myclub/components/clubForms/ClubAgreementSection';
import { MYCLUB_AGREEMENTS } from '@views/policy/agreements-data';

// clubBeauty 키만 뽑아서 타입 선언
type ClubKeys = keyof typeof clubBeauty;
// 해당 클럽 데이터를 할당
const myClubData = clubBeauty;

export interface BeautyValues {
  gender?: string;
  skinTone?: string;
  skinType?: string;
  skinIssue?: string[];
  favProd?: string[];
  favInfo?: string[];
  clubOffline?: string; // clubBeauty에 없는 키는 따로 둠
}

// 칩 항목별 key와 다중 선택 여부
const chipItems: { name: ClubKeys; multiple: boolean }[] = [
  { name: 'gender', multiple: false },
  { name: 'skinTone', multiple: false },
  { name: 'skinType', multiple: false },
  { name: 'skinIssue', multiple: true },
  { name: 'favProd', multiple: true },
];

interface JoinBeautyFormProps {
  /** 선택된 값들 */
  selectedValues: BeautyValues;
  /** 칩 선택 변경 핸들러 (name별로 value 전달) */
  handleChipChange: (name: keyof BeautyValues) => (value: string | string[]) => void;
  /** 모드: 가입('join') 또는 수정('edit'), 기본값 'join' */
  mode?: 'join' | 'edit';
}

export const JoinBeautyForm = ({
  selectedValues,
  handleChipChange,
  mode = 'join',
}: JoinBeautyFormProps) => {
  // 수정모드 여부
  const isEdit = mode === 'edit';

  // 최대 선택 제한
  const maxSelectionMap: Partial<Record<ClubKeys | 'favInfo', number>> = {
    skinIssue: 3,
    favProd: 3,
    favInfo: 3,
  };
  // 최대 선택 제한 함수
  const limitedHandleChipChange = (name: keyof BeautyValues) => (value: string | string[]) => {
    const max = maxSelectionMap[name as ClubKeys | 'favInfo'] ?? Infinity;
    if (Array.isArray(value)) {
      const limitedValue = value.length > max ? value.slice(0, max) : value;
      handleChipChange(name)(limitedValue);
    } else {
      handleChipChange(name)(value);
    }
  };

  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>({});
  // 필수요소 체크되엇는지 검사 상태
  const validateMode = true;

  // 약관 체크 상태가 바뀌면 해당 id의 상태를 업데이트
  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    const defaultCheckedId = ['myclub-sms'];
    const defaultDisabledIds = [''];

    // 초기 체크 상태 설정
    setAgreeStates((prev) => {
      const updated = { ...prev };
      defaultCheckedId.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });

    // 초기 disabled 상태 설정
    setDisabledStates((prev) => {
      const updated = { ...prev };
      defaultDisabledIds.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });
  }, []);

  return (
    <>
      <Contents>
        <ClubTitle type="beauty" variant={!isEdit ? 'join' : 'edit'} />
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
        <FormArea type="vertical" gap="3">
          <FormItem title={myClubData.favInfo.label} required>
            <Chip
              variant="filled"
              size="small"
              selected={selectedValues.favInfo}
              onChange={limitedHandleChipChange('favInfo')}
              columns="auto"
              data={myClubData.favInfo.data}
              name="favInfo"
              multiple={true}
            />
          </FormItem>
        </FormArea>
        {/* 오프라인 */}
        {!isEdit && (
          <JoinOfflineBox
            variant="moms"
            selected={selectedValues.clubOffline}
            onChange={handleChipChange('clubOffline')}
          />
        )}
        {/* 약관동의 영역 */}
        {!isEdit && (
          <ClubAgreementSection
            agreeStates={agreeStates}
            disabledStates={disabledStates}
            validateMode={validateMode}
            handleCheckChange={handleCheckChange}
            agreementData={MYCLUB_AGREEMENTS}
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
