import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { CTACommonProps } from './drawer/CtaDrawer';

export const FreegiftCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  const { item } = useProdDetail();

  // 단독형만 버튼 노출
  if (item.freeGift === 'exclusive') {
    return (
      <Button
        size="large"
        variant="primary"
        onClick={() => {
          if (setDrawerType) setDrawerType('buy');
          if (setIsDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        신청하기
      </Button>
    );
  }
};
