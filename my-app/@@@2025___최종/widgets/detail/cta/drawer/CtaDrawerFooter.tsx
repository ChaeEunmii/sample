// CtaDrawerFooter.tsx
import React, { useState } from 'react';
import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { SubscriptionSettingsDialog } from '@/widgets/order';

// Drawer 내부 버튼 타입
export type DrawerButtonType =
  | 'gift'
  | 'buy'
  | 'confirm'
  | 'apply'
  | 'auction'
  | 'raffle'
  | 'reserve'
  | 'rental'
  | 'consultation';

interface Props {
  footerType: DrawerButtonType | null;
  onClose: () => void;
}

export const CtaDrawerFooter = ({ footerType, onClose }: Props) => {
  const { prodDetailType } = useProdDetail();
  const [isSubscriptionSettingsDialogOpen, setIsSubscriptionSettingsDialogOpen] = useState(false);

  // 신청하기 Click 핸들러
  const handleApply = () => {
    if (prodDetailType === 'subscription') {
      setIsSubscriptionSettingsDialogOpen(true); // 정기구독 설정 dialog 열기
    } else {
      onClose(); // subscription이 아닐 때만 drawer 닫기
    }
  };

  switch (footerType) {
    case 'buy':
      return (
        <>
          <Button size="large" onClick={onClose}>
            장바구니
          </Button>
          <Button variant="primary" size="large" onClick={onClose}>
            바로구매
          </Button>
        </>
      );
    case 'gift':
      return (
        <>
          <Button size="large" onClick={onClose}>
            선물담기
          </Button>
          <Button variant="primary" size="large" onClick={onClose}>
            선물하기
          </Button>
        </>
      );
    case 'confirm':
      return (
        <Button variant="primary" size="large" onClick={onClose}>
          확인
        </Button>
      );
    case 'apply':
      return (
        <>
          <Button variant="primary" size="large" onClick={handleApply}>
            {prodDetailType === 'subscription' && '정기구독 '}신청하기
          </Button>
          {/* 정기구독 설정(L) */}
          <SubscriptionSettingsDialog
            isOpen={isSubscriptionSettingsDialogOpen}
            onClose={() => setIsSubscriptionSettingsDialogOpen(false)}
          />
        </>
      );
    case 'auction':
      return (
        <Button variant="primary" size="large" onClick={onClose}>
          응찰하기
        </Button>
      );
    case 'raffle':
      return (
        <Button variant="primary" size="large" onClick={onClose}>
          응모하기
        </Button>
      );
    case 'reserve':
      return (
        <Button variant="primary" size="large" onClick={onClose}>
          예약하기
        </Button>
      );
    case 'rental':
      return (
        <Button variant="primary" size="large" onClick={onClose}>
          렌탈 상담 신청하기
        </Button>
      );
    case 'consultation':
      return (
        <Button variant="primary" size="large" onClick={onClose}>
          상담 신청
        </Button>
      );
    default:
      return null;
  }
};
