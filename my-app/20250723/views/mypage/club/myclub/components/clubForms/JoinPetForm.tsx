'use client';

import { useEffect, useState } from 'react';
import { Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Chip, Button, ButtonArea, Collapse, Heading, Input } from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubPet } from '@mocks/club';
import styles from './ClubForms.module.scss';
import { ClubAgreementSection } from '@views/mypage/club/myclub/components/clubForms/ClubAgreementSection';
import { MYCLUB_AGREEMENTS } from '@views/policy/agreements-data';

type ClubKeys = keyof typeof clubPet;
const myClubData = clubPet;

export interface PetInfo {
  petType?: string;
  field?: string;
  petGender?: string;
  name?: string;
  birthday?: string;
  weight?: string;
  info?: string;
}

export interface PetValues {
  petCount?: string;
  children?: PetInfo[];
  clubOffline?: string;
}

interface JoinPetFormProps {
  /** 선택된 값들 */
  selectedValues: PetValues;
  /** 칩 선택 변경 핸들러 (name별로 value 전달) */
  handleChipChange: (name: keyof PetValues) => (value: string | string[]) => void;
  /** 모드: 가입('join') 또는 수정('edit'), 기본값 'join' */
  mode?: 'join' | 'edit';
}

export const JoinPetForm = ({
  selectedValues,
  handleChipChange,
  mode = 'join',
}: JoinPetFormProps) => {
  // 수정모드 여부
  const isEdit = mode === 'edit';

  // 최대 선택 개수 매핑 (필요 시 추가)
  const maxSelectionMap: Partial<Record<ClubKeys | 'styling', number>> = {
    // styling: 3,
  };

  // 펫 순서 표시용
  const ordinalMap = ['첫째', '둘째', '셋째', '넷째', '다섯째'];
  // 선택된 펫 수 계산 ('petCount1' => 1)
  const getChildCount = (childValue?: string): number => {
    if (!childValue) return 0;
    const countStr = childValue.replace('petCount', '');
    const count = Number(countStr);
    return Number.isNaN(count) ? 0 : count;
  };
  const childCount = getChildCount(selectedValues.petCount);

  // 'children' 변경 함수는 PetInfo[]를 받아야 해서 타입 단언
  const changeChildren = handleChipChange('children') as (value: PetInfo[]) => void;
  // 특정 펫 정보 항목 업데이트 함수
  const handleChildChange = (index: number, field: keyof PetInfo) => (value: string | string[]) => {
    const next = [...(selectedValues.children || [])];
    next[index] = { ...next[index], [field]: value };
    changeChildren(next);
  };

  // 다중선택 여부 정의 (필드별)
  const multipleMap: Partial<Record<keyof PetInfo, boolean>> = {
    // example: true,
  };

  // 자녀 정보 칩 UI 렌더 함수
  const renderChip = (index: number, field: keyof PetInfo, required = false): React.ReactNode => {
    if (!(field in myClubData)) return null;
    const { label, data } = myClubData[field as keyof typeof myClubData];

    return (
      <FormItem title={label} required={required}>
        <Chip
          variant="filled"
          size="small"
          selected={selectedValues.children?.[index]?.[field] || (multipleMap[field] ? [] : '')}
          onChange={(val) => {
            const max = maxSelectionMap[field as keyof typeof maxSelectionMap] ?? Infinity;
            const limited = Array.isArray(val) && val.length > max ? val.slice(0, max) : val;
            handleChildChange(index, field)(limited);
          }}
          columns="auto"
          data={data}
          name={`${field}-${index}`}
          multiple={multipleMap[field] || false}
        />
      </FormItem>
    );
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
        <ClubTitle type="pet" variant={!isEdit ? 'join' : 'edit'} />
        <FormArea type="vertical" gap="3">
          <FormItem title={myClubData.petCount.label} required>
            <Chip
              variant="filled"
              size="small"
              selected={selectedValues.petCount}
              onChange={handleChipChange('petCount')}
              columns="auto"
              data={myClubData.petCount.data}
              name="child"
            />
          </FormItem>
          <div className={styles.collapses}>
            {Array.from({ length: childCount }).map((_, index) => (
              <div key={index}>
                <Collapse variant="section" defaultOpen className={styles.collapse}>
                  <Collapse.Control border>
                    <Heading as="strong" className={styles.tit}>
                      {`${ordinalMap[index] || `${index + 1}번째`} 반려동물 정보`}
                    </Heading>
                  </Collapse.Control>
                  <Collapse.Content>
                    <FormArea type="vertical" gap="3">
                      {/* 반려동물 */}
                      {renderChip(index, 'petType')}
                      {/* 품종 */}
                      <FormItem title="품종" required>
                        <Input
                          placeholder="아직 반려동물이 없으시면 ‘없음'으로 입력"
                          value={selectedValues.children?.[index]?.field || ''}
                          onChange={(e) => handleChildChange(index, 'field')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                      {/* 성별 */}
                      {renderChip(index, 'petGender')}
                      {/* 이름 */}
                      <FormItem title="이름" required>
                        <Input
                          placeholder="이름 입력"
                          value={selectedValues.children?.[index]?.name || ''}
                          onChange={(e) => handleChildChange(index, 'name')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                      {/* 생일 */}
                      <FormItem title="생일" required>
                        <Input
                          placeholder="생일 8자리 입력"
                          value={selectedValues.children?.[index]?.birthday || ''}
                          onChange={(e) => handleChildChange(index, 'birthday')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                      {/* 몸무게 */}
                      <FormItem title="몸무게(kg)" required>
                        <Input
                          placeholder="숫자만 입력"
                          value={selectedValues.children?.[index]?.weight || ''}
                          onChange={(e) => handleChildChange(index, 'weight')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                      {/* 건강정보 */}
                      <FormItem title="건강정보(염려 질환/알러지 여부)" required>
                        <Input
                          placeholder="특이사항 입력"
                          value={selectedValues.children?.[index]?.info || ''}
                          onChange={(e) => handleChildChange(index, 'info')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                    </FormArea>
                  </Collapse.Content>
                </Collapse>
              </div>
            ))}
          </div>
        </FormArea>
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
          <Button variant="primary" size="large">
            가입하기
          </Button>
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
