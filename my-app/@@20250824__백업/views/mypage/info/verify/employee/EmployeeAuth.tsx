'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  TitleBar,
  ButtonArea,
  Button,
  RadioGroup,
  FormArea,
  FormItem,
  Input,
  Stack,
  Box,
  InfoList,
  InfoItem,
  Text,
  Select,
} from '@shared/ui';
import styles from './EmployeeAuth.module.scss';

// 이메일옵션
const emailoptions = [
  { label: '선택', value: '1' },
  { label: '@thehyundai.com', value: '2' },
  { label: '@thehandsome.com ', value: '3' },
  { label: '@hyundailivart.co.kr ', value: '4' },
  { label: '@hyundaidreamtour.com ', value: '5' },
  { label: '@hyundaigreenfood.com ', value: '6' },
  { label: '@hyundaihmall.com ', value: '7' },
  { label: '@hcn.co.kr ', value: '8' },
  { label: '@hyundairentalcare.co.kr ', value: '9' },
  { label: '@everdigm.com ', value: '10' },
  { label: '@hddfs.com ', value: '11' },
  { label: '@hyundai-ite.com ', value: '12' },
  { label: '@hyundaibioland.co.kr ', value: '13' },
  { label: '@hyundaiezwel.com ', value: '14' },
  { label: '@zinus.com ', value: '15' },
  { label: '@hyundainc.com ', value: '16' },
  { label: '@hyundaicatering.co.kr ', value: '17' },
  { label: '@dwku.com ', value: '18' },
  { label: '@dwjm.co.kr ', value: '19' },
  { label: '@samwon-steel.co.kr ', value: '20' },
];

// 인증방식
const authOptions = [
  {
    label: '백화점 그룹',
    value: 'option1',
  },
  {
    label: '범현대',
    value: 'option2',
  },
];

export default function EmployeeAuth() {
  const searchParams = useSearchParams();
  // 인증완료상태 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isComplete = searchParams.has('complete');
  const [authValue, setAuthValue] = useState('option1');

  // 범현대 일 때
  const isHyundai = authValue === 'option2';

  return (
    <Container showBack title="임직원 인증">
      <Contents>
        {!isComplete ? (
          <>
            <TitleArea
              title={
                <>
                  현대 임직원 혜택을 받기 위한
                  <br />
                  임직원 인증
                </>
              }
            />
            <TitleBar type="docs" title="원하시는 인증방식을 선택해주세요." level="2" />
            <RadioGroup
              name="auth-method"
              options={authOptions}
              value={authValue}
              onChange={(e) => setAuthValue(e.target.value)}
            />
            <TitleBar
              type="docs"
              title={!isHyundai ? '사원번호로 인증받기' : '이메일로 인증받기'}
              level="2"
            />
            <FormArea type="vertical">
              {/* 사원번호로 인증받기 */}
              {!isHyundai && (
                <>
                  <FormItem label="이름">
                    <Input value="이*대" size="large" disabled />
                  </FormItem>
                  <FormItem label="사원번호" required desc="사원번호가 정상 확인되었습니다.">
                    <Stack type="field">
                      <Input size="large" placeholder="-없이 숫자만 입력" clearable={false} />
                      <Button variant="primary" size="large">
                        사번확인
                      </Button>
                    </Stack>
                  </FormItem>
                </>
              )}
              {/* 이메일로 인증받기 */}
              {isHyundai && (
                <FormItem
                  label="이메일"
                  required
                  // error="이메일을 다시 확인해 주세요. 인증 메일만 입력해 주세요."
                >
                  <Input size="large" placeholder="이메일 아이디" clearable={false} />
                  <Stack type="field" className={styles.stack}>
                    <Select onChange={() => {}} options={emailoptions} size="large" value="" />
                    <Button variant="primary" size="large" className={styles.btn}>
                      인증메일 발송
                    </Button>
                  </Stack>
                </FormItem>
              )}
            </FormArea>
            <ButtonArea>
              <Button variant="primary" size="large">
                인증하기
              </Button>
            </ButtonArea>
          </>
        ) : (
          <>
            <TitleArea
              title={
                <>
                  현대 임직원 인증이
                  <br />
                  완료되었어요.
                </>
              }
            />
            <Box size="3" className="ncp-mt-xxl">
              <InfoList variant="stacked" gridColumns="auto">
                <InfoItem
                  title={
                    <Text color="gray2" weight="regular">
                      인증기간
                    </Text>
                  }
                  content={
                    <>
                      <div>
                        <Text>2025.01.01~2025.06.31</Text>
                        <Text color="gray2" weight="regular">
                          6개월 후 재인증이 필요합니다.
                        </Text>
                      </div>
                    </>
                  }
                />
              </InfoList>
            </Box>
          </>
        )}
      </Contents>
      {isComplete && (
        <ButtonArea type="sticky">
          <Button variant="primary" size="large">
            확인
          </Button>
        </ButtonArea>
      )}
    </Container>
  );
}
