import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { CTACommonProps } from './drawer/CtaDrawer';
import { useRafflePhase } from '../DetailPriceRaffle';

export const RaffleCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  const { item } = useProdDetail();

  /** 간편결제인지 여부 */
  const isSimplePay = false;

  const { remainToStart, remainToEnd, isPurchasePeriod, remainToPurchaseEnd } =
    useRafflePhase(item);

  // 응모중
  if (remainToStart === '00:00:00' && remainToEnd !== '00:00:00') {
    return (
      <Button
        size="large"
        variant="primary"
        onClick={() => {
          if (setDrawerType) setDrawerType('raffle');
          if (setIsDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        응모하기
      </Button>
    );
  }

  if (item.isContractUser && item.isPerchaseURL && isPurchasePeriod && isSimplePay) {
    // 당첨자+당첨URL+구매기간+간편결제
    return (
      <Button size="large" variant="primary">
        결제하기
      </Button>
    );
  }

  if (item.isContractUser && item.isPerchaseURL && isPurchasePeriod) {
    // 당첨자+당첨URL+구매기간
    return (
      <Button size="large" variant="primary">
        바로구매
      </Button>
    );
  }

  if (item.isContractUser && item.isPerchaseURL && remainToPurchaseEnd === '00:00:00') {
    // 당첨자+당첨URL+구매기간 종료
    return (
      <Button size="large" variant="primary" disabled>
        응모 종료
      </Button>
    );
  }

  return (
    <Button size="large" variant="primary" disabled>
      응모 종료
    </Button>
  );
};
