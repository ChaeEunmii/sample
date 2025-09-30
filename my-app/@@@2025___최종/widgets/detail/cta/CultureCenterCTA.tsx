import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { CTACommonProps } from './drawer/CtaDrawer';

export const CultureCenterCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  const { item } = useProdDetail();

  // 폐강
  if (item.isCanceled) {
    return (
      <Button size="large" variant="primary" disabled>
        폐강
      </Button>
    );
  }

  // 재고 수량 있음
  if (item.stock > 0) {
    return (
      <Button
        size="large"
        variant="primary"
        onClick={() => {
          if (setDrawerType) setDrawerType('buy');
          if (setIsDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        수강신청
      </Button>
    );
  }

  // 재고 수량 없음
  return (
    <Button size="large" variant="primary" disabled>
      마감
    </Button>
  );
};
