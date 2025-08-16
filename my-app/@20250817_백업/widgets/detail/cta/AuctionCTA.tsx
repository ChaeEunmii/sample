import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { CTACommonProps } from './drawer/CtaDrawer';
import { useAuctionPhase } from '../DetailPriceAuction';

export const AuctionCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  const { item } = useProdDetail();

  /** 간편결제인지 여부 */
  const isSimplePay = false;

  const { isPurchasePeriod, remainToPurchaseEnd, isBidOngoing } = useAuctionPhase(item);

  // 입찰중
  if (isBidOngoing) {
    return (
      <Button
        size="large"
        variant="primary"
        onClick={() => {
          if (setDrawerType) setDrawerType('auction');
          if (setIsDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        입찰하기
      </Button>
    );
  }

  // 낙찰된 유저가 구매가능 기간에 구매 경로로 진입 : 간편결제 O
  if (item.isContractUser && item.isPerchaseURL && isPurchasePeriod && isSimplePay) {
    return (
      <Button size="large" variant="primary">
        결제하기
      </Button>
    );
  }

  // 낙찰된 유저가 구매가능 기간에 구매 경로로 진입 : 간편결제 X
  if (item.isContractUser && item.isPerchaseURL && isPurchasePeriod) {
    return (
      <Button size="large" variant="primary">
        바로구매
      </Button>
    );
  }

  // 낙찰된 유저가 구매가능 기간이 지난 후, 구매 경로로 진입 : 에러 페이지로 연결되는 등 필요 없으면 제거
  if (item.isContractUser && item.isPerchaseURL && remainToPurchaseEnd === '00:00:00') {
    return (
      <Button size="large" variant="primary" disabled>
        입찰 종료
      </Button>
    );
  }

  return (
    <Button size="large" variant="primary" disabled>
      입찰 종료
    </Button>
  );
};
