'use client';

import { Contents } from '@widgets/layout/Container';
import {
  FormArea,
  FormItem,
  Chip,
  Button,
  ButtonArea,
  Line,
  Collapse,
  Heading,
  Input,
} from '@shared/ui';
import { ClubTitle } from '@/views/mypage/club/myclub/components';
import { clubMoms } from '@mocks/club';
import { JoinOfflineBox } from '@/views/mypage/club/myclub/components/clubForms/JoinOfflineBox';
import { InterestBrandForm } from '@/views/mypage/club/myclub/components/clubForms/InterestBrandForm';
import styles from './ClubForms.module.scss';

// clubMoms 키만 뽑아서 타입 선언
type ClubKeys = keyof typeof clubMoms;
// 해당 클럽 데이터를 할당
const myClubData = clubMoms;

export interface MomsValues {
  child?: string;
  relationship?: string;
  twin?: string;
  gender?: string;
  styling?: string[];
  clubOffline?: string; // clubMoms에 없는 키는 따로 둠
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

  // 최대 선택 제한
  const maxSelectionMap: Partial<Record<ClubKeys | 'styling', number>> = {
    styling: 3,
  };
  // 최대 선택 제한 함수
  const limitedHandleChipChange = (name: keyof MomsValues) => (value: string | string[]) => {
    const max = maxSelectionMap[name as ClubKeys | 'styling'] ?? Infinity;
    if (Array.isArray(value)) {
      const limitedValue = value.length > max ? value.slice(0, max) : value;
      handleChipChange(name)(limitedValue);
    } else {
      handleChipChange(name)(value);
    }
  };

  // 다중선택 여부 정의
  const multipleMap: Partial<Record<keyof MomsValues, boolean>> = {
    child: false,
    relationship: false,
    twin: false,
    gender: false,
    styling: true,
  };

  // FormItem Chip 렌더링
  const renderChipItem = (key: keyof MomsValues, required = false) => (
    <FormItem label={myClubData[key as ClubKeys]?.label} required={required}>
      <Chip
        variant="filled"
        size="small"
        selected={selectedValues[key]}
        onChange={limitedHandleChipChange(key)}
        columns="auto"
        data={myClubData[key as ClubKeys]?.data || []}
        name={key}
        multiple={multipleMap[key]}
      />
    </FormItem>
  );

  // 아이 수의 한글 순서명 배열 (1명부터 5명까지)
  const ordinalMap = ['첫째', '둘째', '셋째', '넷째', '다섯째'];

  // 아이 수 문자열에서 숫자만 추출 ('child3' → 3), 없거나 잘못된 값은 0 반환
  const getChildCount = (childValue?: string): number => {
    if (!childValue) return 0;
    const countStr = childValue.replace('child', '');
    const count = Number(countStr);
    return Number.isNaN(count) ? 0 : count;
  };
  // 실제로 선택된 아이 수를 구함
  const childCount = getChildCount(selectedValues.child);

  return (
    <>
      <Contents>
        <ClubTitle type="moms" variant={!isEdit ? 'join' : 'edit'} />
        <FormArea type="vertical" gap="3">
          {/* 아이 수 선택 */}
          {renderChipItem('child', true)}
          <FormItem>
            {/* 선택한 아이 수 만큼 Collapse 반복 생성 */}
            {Array.from({ length: childCount }).map((_, index) => (
              <div key={index}>
                <Line color="bg2" />
                <Collapse variant="section" defaultOpen className={styles.collapse}>
                  <Collapse.Control>
                    <Heading as="strong" className={styles.tit}>
                      {`${ordinalMap[index] || `${index + 1}번째`} 아이 정보`}
                    </Heading>
                  </Collapse.Control>
                  <Collapse.Content>
                    <FormArea type="vertical" gap="3">
                      {renderChipItem('relationship', true)}
                      {renderChipItem('twin', true)}
                      <FormItem label="아이 이름(애칭)" required>
                        <Input
                          placeholder="이름 입력, 아직 없다면 태명도 좋아요."
                          value={isEdit ? '대한이' : undefined}
                        />
                      </FormItem>
                      {renderChipItem('gender', true)}
                      <FormItem label="아이 생일/출산 예정일" required>
                        <Input
                          placeholder="생일 8자리 입력"
                          value={isEdit ? '2024.05.31' : undefined}
                        />
                      </FormItem>
                      {renderChipItem('styling', true)}
                    </FormArea>

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
          </FormItem>
        </FormArea>

        {/* 오프라인 선택 박스 */}
        {!isEdit && (
          <JoinOfflineBox
            variant="moms"
            selected={selectedValues.clubOffline}
            onChange={handleChipChange('clubOffline')}
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
