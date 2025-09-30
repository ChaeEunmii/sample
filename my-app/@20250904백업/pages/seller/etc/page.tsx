'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import LoginPwResetDrawer from '@/views/mypage/info/seller/login/LoginPwResetDrawer';

export default function Page() {
  const [isLoginPwResetDrawer, setIsLoginPwResetDrawer] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsLoginPwResetDrawer(true)}>비밀번호 초기화 (D)</Button>
          <br />
          <br />
          <br />
        </ButtonArea>

        {/* 비밀번호 초기화 (D) */}
        <LoginPwResetDrawer
          isOpen={isLoginPwResetDrawer}
          onClose={() => setIsLoginPwResetDrawer(false)}
        />
      </Contents>
    </Container>
  );
}
