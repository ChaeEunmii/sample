'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, TitleArea, ButtonArea, Button } from '@shared/ui';
import { HbssAuthForm } from '@views/hbss/components';
import styles from './SpecialStep.module.scss';

export default function SpecialStepVerify() {
  // 인증 상태
  const [isAuth, setIsAuth] = useState(false);
  // 입력값 상태
  const [form, setForm] = useState({
    name: '',
    phone: '',
    code: '',
  });
  // 입력 변경 시 상태 갱신
  const handleChange = (field: 'name' | 'phone' | 'code', value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    console.log(form);
  };
  // 인증번호 발송 처리
  const handleSendAuth = () => {
    setIsAuth(true);
  };

  return (
    <Container title="DB손해보험 VIP 감사선물 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              서비스 이용을 위해서
              <br />
              본인인증이 필요합니다
            </>
          }
          bottomSlot={
            <Text size="5" color="gray2" weight="regular">
              아래 인증정보를 입력 후 본인 인증 버튼을 선택해 주세요.
            </Text>
          }
        />
        {/* 인증폼 */}
        <HbssAuthForm
          name={form.name}
          phone={form.phone}
          code={form.code}
          isAuth={isAuth}
          onChange={handleChange}
          onSendAuth={handleSendAuth}
          placeholders={{
            name: '이름을 입력해 주세요.',
            phone: '휴대폰 번호 입력 (01012345678)',
            code: '인증번호 입력',
          }}
        />
      </Contents>
      {isAuth && (
        <ButtonArea type="sticky">
          <Button variant="primary" size="large">
            인증 완료
          </Button>
        </ButtonArea>
      )}
    </Container>
  );
}
