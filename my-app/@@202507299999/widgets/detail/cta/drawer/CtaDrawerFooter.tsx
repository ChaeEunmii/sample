// CtaDrawerFooter.tsx
import React from 'react';
import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

// Drawer 내부 버튼 타입
export type DrawerButtonType =
  | 'gift'
  | 'buy'
  | 'confirm'
  | 'apply'
  | 'auction'
  | 'raffle'
  | 'reserve'
  | 'rental';

interface Props {
  footerType: DrawerButtonType | null;
  onClose: () => void;
}

export const CtaDrawerFooter = ({ footerType, onClose }: Props) => {
  const { prodDetailType } = useProdDetail();

  // 신청하기 Click 핸들러
  const handleApply = () => {
    if (prodDetailType === 'subscription') alert('정기구독 합니다!');
    onClose();
  };

  switch (footerType) {
    case 'buy':
      return (
        <>
          <Button onClick={onClose}>장바구니</Button>
          <Button variant="primary" onClick={onClose}>
            바로구매
          </Button>
        </>
      );
    case 'gift':
      return (
        <>
          <Button onClick={onClose}>선물담기</Button>
          <Button variant="primary" onClick={onClose}>
            선물하기
          </Button>
        </>
      );
    case 'confirm':
      return (
        <Button variant="primary" onClick={onClose}>
          확인
        </Button>
      );
    case 'apply':
      return (
        <Button variant="primary" onClick={handleApply}>
          {prodDetailType === 'subscription' && '정기구독 '}신청하기
        </Button>
      );
    case 'auction':
      return (
        <Button variant="primary" onClick={onClose}>
          응찰하기
        </Button>
      );
    case 'raffle':
      return (
        <Button variant="primary" onClick={onClose}>
          응모하기
        </Button>
      );
    case 'reserve':
      return (
        <Button variant="primary" onClick={onClose}>
          예약하기
        </Button>
      );
    case 'rental':
      return (
        <Button variant="primary" onClick={onClose}>
          렌탈 상담 신청하기
        </Button>
      );
    default:
      return null;
  }
};
