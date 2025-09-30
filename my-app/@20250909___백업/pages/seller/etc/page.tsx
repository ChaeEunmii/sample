'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button, Text, Stack } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import SellerCenterMenuBtn from '@/views/mypage/seller/components/SellerCenterMenuBtn';
import LoginPwResetDrawer from '@/views/mypage/seller/login/LoginPwResetDrawer';

export default function Page() {
  const [isLoginPwResetDrawer, setIsLoginPwResetDrawer] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsLoginPwResetDrawer(true)}>비밀번호 초기화 (D)</Button>
          <br />
          <Stack>
            <Text color="gray3">메뉴-비로그인</Text>
            <SellerCenterMenuBtn />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Text color="gray3">메뉴-로그인</Text>
            <SellerCenterMenuBtn isLoggedIn />
          </Stack>
          <br />
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
