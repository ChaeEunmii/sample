import { Button } from '@/shared/ui';
import { CTACommonProps } from './drawer/CtaDrawer';

export const RentalCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  return (
    <Button
      size="large"
      variant="primary"
      onClick={() => {
        if (setDrawerType) setDrawerType('rental');
        if (setIsDrawerOpen) setIsDrawerOpen(true);
      }}
    >
      렌탈 상담신청
    </Button>
  );
};
