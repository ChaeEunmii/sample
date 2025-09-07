'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  TitleBar,
  Steps,
  FormArea,
  FormItem,
  Input,
  Line,
  Text,
} from '@shared/ui';
import { AgreementGroup } from '@widgets/form';
import { SELLER_JOIN_AUTH_AGREEMENTS } from '@views/policy/agreements-data';
import { JOIN_STEPS } from './Join';
import styles from './JoinAuth.module.scss';

export default function JoinAuth() {
  // 현재 단계
  const currentStep = 1;

  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>({});
  // 필수요소 체크되엇는지 검사 상태
  const validateMode = true;

  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    const defaultCheckedId = [''];
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
    <Container showBack title="사업자 인증">
      <Contents className={styles.layout}>
        <Steps steps={JOIN_STEPS} activeStep={currentStep} title="판매자 가입 진행단계" />
        <TitleBar
          type="docs"
          title="사업자 정보"
          description="정확한 사업자 정보를 입력해주세요."
        />
        <FormArea type="vertical" className="ncp-mt-m">
          <FormItem label="사업자번호">
            <Input type="number" placeholder="숫자만 입력(10자리)" size="large" />
          </FormItem>
          <FormItem label="휴대폰 번호" desc="비밀번호 초기화 시 해당 번호로 발송됩니다.">
            <Input type="number" placeholder="숫자만 입력" size="large" />
          </FormItem>
          <FormItem label="비밀번호" desc="최소 4글자~10자 이내 입력 가능합니다.">
            <Input type="password" placeholder="비밀번호 입력" reveal size="large" />
          </FormItem>
          <FormItem label="비밀번호 확인" desc="비밀번호를 재입력 해주세요.">
            <Input type="password" placeholder="비밀번호 입력" reveal size="large" />
          </FormItem>
        </FormArea>
        <Line variant="bold" margin="4" />
        <TitleBar level="2" title="판매자 가입 필수 약관" />
        <AgreementGroup
          variant="type3"
          data={SELLER_JOIN_AUTH_AGREEMENTS}
          checked={agreeStates[SELLER_JOIN_AUTH_AGREEMENTS.id]}
          onChange={handleCheckChange}
          allStates={agreeStates}
          disabledStates={disabledStates}
          validateMode={validateMode}
          showBottomRequired
        />
        <ButtonArea>
          <Button size="large">이전</Button>
          <Button variant="primary" size="large">
            사업자 인증
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
