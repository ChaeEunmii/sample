'use client';

import { useEffect, useState } from 'react';
import { Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Chip, Button, ButtonArea, Collapse, Heading, Input } from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubMoms } from '@mocks/club';
import { JoinOfflineBox } from '@/views/mypage/club/myclub/components/clubForms/JoinOfflineBox';
import { InterestBrandForm } from '@/views/mypage/club/myclub/components/clubForms/InterestBrandForm';
import styles from './ClubForms.module.scss';
import { ClubAgreementSection } from '@views/mypage/club/myclub/components/clubForms/ClubAgreementSection';
import { MYCLUB_AGREEMENTS } from '@views/policy/agreements-data';

type ClubKeys = keyof typeof clubMoms;
const myClubData = clubMoms;

export interface ChildInfo {
  relationship?: string;
  twin?: string;
  name?: string;
  birthday?: string;
  gender?: string;
  styling?: string[];
}

export interface MomsValues {
  child?: string;
  children?: ChildInfo[];
  clubOffline?: string;
}

interface JoinMomsProps {
  /** 선택된 값들 */
  selectedValues: MomsValues;
  /** 칩 선택 변경 핸들러 (name별로 value 전달) */
  handleChipChange: (name: keyof MomsValues) => (value: string | string[]) => void;
  /** 모드: 가입('join') 또는 수정('edit'), 기본값 'join' */
  mode?: 'join' | 'edit';
}

export const JoinMomsForm = ({
  selectedValues,
  handleChipChange,
  mode = 'join',
}: JoinMomsProps) => {
  // 수정모드 여부
  const isEdit = mode === 'edit';

  // 최대 선택 개수 매핑 (필요 시 추가)
  const maxSelectionMap: Partial<Record<ClubKeys | 'styling', number>> = {
    styling: 3,
  };

  // 자녀 순서 표시용
  const ordinalMap = ['첫째', '둘째', '셋째', '넷째', '다섯째'];
  // 선택된 자녀 수 계산 ('child1' => 1)
  const getChildCount = (childValue?: string): number => {
    if (!childValue) return 0;
    const countStr = childValue.replace('child', '');
    const count = Number(countStr);
    return Number.isNaN(count) ? 0 : count;
  };
  const childCount = getChildCount(selectedValues.child);

  // 'children' 변경 함수는 ChildInfo[]를 받아야 해서 타입 단언
  const changeChildren = handleChipChange('children') as (value: ChildInfo[]) => void;
  // 특정 자녀 정보 항목 업데이트 함수
  const handleChildChange =
    (index: number, field: keyof ChildInfo) => (value: string | string[]) => {
      const next = [...(selectedValues.children || [])];
      next[index] = { ...next[index], [field]: value };
      changeChildren(next);
    };

  // 다중선택 여부 정의 (필드별)
  const multipleMap: Partial<Record<keyof ChildInfo, boolean>> = {
    relationship: false,
    twin: false,
    gender: false,
    styling: true,
  };

  // 자녀 정보 칩 UI 렌더 함수
  const renderChip = (index: number, field: keyof ChildInfo, required = false): React.ReactNode => {
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
        <ClubTitle type="moms" variant={!isEdit ? 'join' : 'edit'} />
        <FormArea type="vertical" gap="3">
          <FormItem title={myClubData.child.label} required>
            <Chip
              variant="filled"
              size="small"
              selected={selectedValues.child}
              onChange={handleChipChange('child')}
              columns="auto"
              data={myClubData.child.data}
              name="child"
            />
          </FormItem>
          <div className={styles.collapses}>
            {Array.from({ length: childCount }).map((_, index) => (
              <div key={index}>
                <Collapse variant="section" defaultOpen className={styles.collapse}>
                  <Collapse.Control border>
                    <Heading as="strong" className={styles.tit}>
                      {`${ordinalMap[index] || `${index + 1}번째`} 아이 정보`}
                    </Heading>
                  </Collapse.Control>
                  <Collapse.Content>
                    <FormArea type="vertical" gap="3">
                      {/* 아이와의 관계 */}
                      {renderChip(index, 'relationship')}
                      {/* 쌍둥이 여부 */}
                      {renderChip(index, 'twin')}
                      {/* 이름(애칭) 입력 */}
                      <FormItem title="아이 이름(애칭)" required>
                        <Input
                          placeholder="이름 입력, 아직 없다면 태명도 좋아요."
                          value={selectedValues.children?.[index]?.name || ''}
                          onChange={(e) => handleChildChange(index, 'name')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                      {/* 아이 성별 */}
                      {renderChip(index, 'gender')}
                      {/* 아이 생일/출산 예정일 */}
                      <FormItem title="아이 생일/출산 예정일" required>
                        <Input
                          placeholder="생일 8자리 입력"
                          value={selectedValues.children?.[index]?.birthday || ''}
                          onChange={(e) => handleChildChange(index, 'birthday')(e.target.value)}
                          size="large"
                        />
                      </FormItem>
                      {/* 관심 스타일링(최대 3개) */}
                      {renderChip(index, 'styling', true)}
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
                  </Collapse.Content>
                </Collapse>
              </div>
            ))}
          </div>
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
