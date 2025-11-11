'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, ButtonArea, Button, TextList } from '@shared/ui';
import { HbssAuthForm } from '@views/hbss/components';
import styles from './TohomeVerify.module.scss';

export default function TohomeVerify() {
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
    <Container title="현대백화점 배송 정보확인 서비스">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              서비스 이용을 위해서
              <br />
              본인인증이 필요합니다
            </>
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
            name: '받으시는 분의 이름을 입력해 주세요.',
            phone: '휴대폰 번호 입력 (01012345678)',
            code: '인증번호 입력',
          }}
        />
        <TextList
          data={[
            '접수 시 등록하신 받으시는 분의 이름을 통일하게 입력해 주세요.',
            '휴대폰 번호는 접수 시 입력한 휴대폰 번호입니다.',
            '휴대폰 번호는 ‘-’나 띄어쓰기 없이 숫자로만 입력해 주세요.',
          ]}
          variant="info"
          margin="4"
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
