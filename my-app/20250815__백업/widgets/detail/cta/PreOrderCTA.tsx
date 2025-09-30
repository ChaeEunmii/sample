import { Button } from '@/shared/ui';
import { CTACommonProps } from './drawer/CtaDrawer';

export const PreOrderCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  return (
    <Button
      size="large"
      variant="primary"
      onClick={() => {
        if (setDrawerType) setDrawerType('buy');
        if (setIsDrawerOpen) setIsDrawerOpen(true);
      }}
    >
      예약배송일 신청
    </Button>
  );
};
