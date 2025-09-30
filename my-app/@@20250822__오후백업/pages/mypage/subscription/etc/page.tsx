'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { SubscriptionSettingsDialog } from '@/widgets/order';
import { MethodSelectDrawer } from '@/widgets/payment';

export default function Page() {
  const [isSubscriptionSettingsDialogOpen, setIsSubscriptionSettingsDialogOpen] = useState(false);
  const [isMethodSelectDrawerOpen, setIsMethodSelectDrawerOpen] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsSubscriptionSettingsDialogOpen(true)}>
            정기구독 설정 (상품상세-정기구독와 공유) (L)
          </Button>
          <br />
          <br />
          <Button onClick={() => setIsMethodSelectDrawerOpen(true)}>
            등록할 결제수단 선택 (주문서와 공유) (L)
          </Button>
          <br />
          <br />
          <br />
        </ButtonArea>

        {/* 정기구독 설정 (L) */}
        <SubscriptionSettingsDialog
          isOpen={isSubscriptionSettingsDialogOpen}
          onClose={() => setIsSubscriptionSettingsDialogOpen(false)}
          isChange // 변경 여부
          defaultValues={{
            period: 'month6',
            interval: 'weekly2',
            weekday: ['mon', 'thu'],
          }}
        />
        {/* 등록할 결제수단 선택 (L) */}
        <MethodSelectDrawer
          isOpen={isMethodSelectDrawerOpen}
          onClose={() => setIsMethodSelectDrawerOpen(false)}
          hideInstantPay
          hideBankAccount
        />
      </Contents>
    </Container>
  );
}
