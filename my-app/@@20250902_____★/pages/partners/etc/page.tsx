'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import ActivityEndDialog from '@/views/mypage/partners/manage/components/ActivityEndDialog';
import { PrivacyConsentDialog } from '@/widgets/agreement/PrivacyDialog';
import PartnersTermsAgreeDrawer from '@/views/mypage/partners/apply/PartnersTermsAgreeDrawer';

export default function Page() {
  const [isActivityEndDialog, setIsActivityEndDialog] = useState(false);
  const [isPrivacyDialog, setIsPrivacyDialog] = useState(false);
  const [isPartnersTermsAgreeDrawer, setIsPartnersTermsAgreeDrawer] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsActivityEndDialog(true)}>파트너스 활동 종료 (L)</Button>
          <Button onClick={() => setIsPrivacyDialog(true)}>이용약관 (L)</Button>
          <Button onClick={() => setIsPartnersTermsAgreeDrawer(true)}>이용약관 (D)</Button>
          <br />
          <br />
          <br />
        </ButtonArea>

        {/* 파트너스 활동 종료 (L)*/}
        <ActivityEndDialog
          isOpen={isActivityEndDialog}
          onClose={() => setIsActivityEndDialog(false)}
        />

        {/* 이용약관 (L) */}
        <PrivacyConsentDialog
          type="partners"
          isOpen={isPrivacyDialog}
          onClose={() => setIsPrivacyDialog(false)}
        />

        {/* 파트너스 이용약관 (D) */}
        <PartnersTermsAgreeDrawer
          isOpen={isPartnersTermsAgreeDrawer}
          onClose={() => setIsPartnersTermsAgreeDrawer(false)}
        />
      </Contents>
    </Container>
  );
}
