'use client';

import { useState } from 'react';
import { Dialog, TitleArea, Button, Stack, Input, FormArea, FormItem } from '@shared/ui';

interface PhoneAuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhoneAuthDialog({ isOpen, onClose }: PhoneAuthDialogProps) {
  // 인증 상태
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Dialog
      title="휴대폰 인증"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          {!isAuth ? (
            <>
              <Button size="large">취소</Button>
              <Button variant="primary" size="large" onClick={() => setIsAuth(true)}>
                인증메일 발송
              </Button>
            </>
          ) : (
            <>
              <Button size="large">인증메일 재발송</Button>
              <Button variant="primary" size="large" onClick={() => setIsAuth(false)}>
                인증 완료
              </Button>
            </>
          )}
        </>
      }
    >
      <TitleArea
        title={
          <>
            회원정보에 등록된
            <br />
            휴대폰 번호로 인증해 주세요.
          </>
        }
        description="휴대폰 번호는 마이페이지>회원정보변경에서 변경하실 수 있습니다."
      />
      <FormArea type="vertical">
        <FormItem
          desc={isAuth && <>인증번호가 발송되었습니다. 보내드린 인증번호 6자리를 입력해 주세요.</>}
        >
          <Stack type="field">
            <Input type="text" title="인증번호" value="010-1234-5678" size="large" disabled />
            <Button variant="primary" size="large" onClick={() => setIsAuth(true)}>
              인증번호 발송
            </Button>
          </Stack>
        </FormItem>
        {isAuth && (
          <FormItem label="인증 번호">
            <Input placeholder="인증번호 입력" suffix={<>유효시간 3:00</>} size="large" />
          </FormItem>
        )}
      </FormArea>
    </Dialog>
  );
}
