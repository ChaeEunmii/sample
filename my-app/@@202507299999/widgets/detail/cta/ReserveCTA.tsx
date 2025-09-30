import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { CTACommonProps } from './drawer/CtaDrawer';

export const ReserveCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  const { prodType } = useProdDetail();

  if (prodType === 'serviceReserve') {
    return (
      <Button size="large" variant="primary">
        상담신청
      </Button>
    );
  }

  if (prodType === 'visitCoupon') {
    return (
      <Button size="large" variant="primary">
        쿠폰받기
      </Button>
    );
  }

  if (prodType === 'visitReserve') {
    return (
      <Button
        size="large"
        variant="primary"
        onClick={() => {
          if (setDrawerType) setDrawerType('buy');
          if (setIsDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        예약하기
      </Button>
    );
  }
};
