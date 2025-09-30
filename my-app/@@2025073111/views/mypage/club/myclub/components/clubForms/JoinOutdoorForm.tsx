'use client';

import { useEffect, useState } from 'react';
import { Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Chip, Button, ButtonArea, Select, Stack } from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubOutdoor } from '@mocks/club';
import { InterestBrandForm } from '@/views/mypage/club/myclub/components/clubForms/InterestBrandForm';
import { ClubAgreementSection } from '@views/mypage/club/myclub/components/clubForms/ClubAgreementSection';
import { MYCLUB_AGREEMENTS } from '@views/policy/agreements-data';

// clubBeauty 키만 뽑아서 타입 선언
type ClubKeys = keyof typeof clubOutdoor;
// 해당 클럽 데이터를 할당
const myClubData = clubOutdoor;

export interface OutdoorValues {
  gender?: string;
  favActive?: string[];
  favProd?: string[];
  favInfo?: string[];
}

// 칩 항목별 key와 다중 선택 여부
const chipItems: { name: ClubKeys; multiple: boolean }[] = [
  { name: 'gender', multiple: false },
  { name: 'favActive', multiple: true },
  { name: 'favProd', multiple: true },
  { name: 'favInfo', multiple: true },
];

interface JoinOutdoorFormProps {
  /** 선택된 값들 */
  selectedValues: OutdoorValues;
  /** 칩 선택 변경 핸들러 (name별로 value 전달) */
  handleChipChange: (name: keyof OutdoorValues) => (value: string | string[]) => void;
  /** 모드: 가입('join') 또는 수정('edit'), 기본값 'join' */
  mode?: 'join' | 'edit';
}

export const JoinOutdoorForm = ({
  selectedValues,
  handleChipChange,
  mode = 'join',
}: JoinOutdoorFormProps) => {
  // 수정모드 여부
  const isEdit = mode === 'edit';

  // 최대 선택 제한
  const maxSelectionMap: Partial<Record<ClubKeys | 'favInfo', number>> = {
    favActive: 3,
    favProd: 3,
    favInfo: 2,
  };
  // 최대 선택 제한 함수
  const limitedHandleChipChange = (name: keyof OutdoorValues) => (value: string | string[]) => {
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
        <ClubTitle type="outdoor" variant={!isEdit ? 'join' : 'edit'} />
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
          {/* 주요 활동 지역 */}
          <FormItem title="주요 활동 지역(시도군 선택)" required>
            <Stack type="field" vertical>
              {/* 주소 아이템 */}
              <Stack type="field">
                <Select
                  onChange={() => {}}
                  options={[
                    {
                      label: '서울특별시',
                      value: 'address1-option1',
                    },
                  ]}
                  value=""
                  size="large"
                />
                <Select
                  onChange={() => {}}
                  options={[
                    {
                      label: '중구',
                      value: 'address1-option2',
                    },
                  ]}
                  value=""
                  size="large"
                />
              </Stack>
              {/* 주소 아이템 */}
              <Stack type="field">
                <Select
                  onChange={() => {}}
                  options={[
                    {
                      label: '서울특별시',
                      value: 'address2-option1',
                    },
                  ]}
                  value=""
                  size="large"
                />
                <Select
                  onChange={() => {}}
                  options={[
                    {
                      label: '중구',
                      value: 'address2-option2',
                    },
                  ]}
                  value=""
                  size="large"
                />
              </Stack>
            </Stack>
          </FormItem>
        </FormArea>
        <ButtonArea margin="1" align="center">
          <Button round>지역 추가하기</Button>
        </ButtonArea>
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
