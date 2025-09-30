'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import ActivityEndDialog from '@/views/mypage/partners/components/ActivityEndDialog';
import ActivityTermsDialog from '@/views/mypage/partners/components/ActivityTermsDialog';

export default function Page() {
  const [isActivityEndDialog, setIsActivityEndDialog] = useState(false);
  const [isActivityTermsDialog, setIsActivityTermsDialog] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsActivityEndDialog(true)}>파트너스 활동 종료 (L)</Button>
          <Button onClick={() => setIsActivityTermsDialog(true)}>이용약관 (L)</Button>
          <br />
          <br />
          <br />
        </ButtonArea>

        {/* 파트너스 활동 종료 (L)*/}
        <ActivityEndDialog
          isOpen={isActivityEndDialog}
          onClose={() => setIsActivityEndDialog(false)}
        />

        {/* 이용약관 (L)*/}
        <ActivityTermsDialog
          isOpen={isActivityTermsDialog}
          onClose={() => setIsActivityTermsDialog(false)}
        />
      </Contents>
    </Container>
  );
}
