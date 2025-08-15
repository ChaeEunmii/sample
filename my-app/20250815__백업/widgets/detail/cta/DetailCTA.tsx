'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ButtonArea } from '@/shared/ui';
import { formatRemainTime } from '@/shared/utils/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { CtaDrawer } from './drawer/CtaDrawer';
import { DrawerButtonType } from './drawer/CtaDrawerFooter';
import {
  GeneralCTA,
  LiveCTA,
  StorepickCTA,
  AuctionCTA,
  RaffleCTA,
  FreegiftCTA,
  RentalCTA,
  CultureCenterCTA,
  ReserveCTA,
  ProdStateCTA,
  SubscriptionCTA,
} from '.';
import { PreOrderCTA } from './PreOrderCTA';
import { ShowroomCTA } from './ShowroomCTA';

const CTA_COMPONENT_MAP = {
  // 퍼블 산출물 확인 param: prodType=[key] 에 맞춰 CTA 버튼 매핑
  general: GeneralCTA,
  showroom: ShowroomCTA,
  live: LiveCTA,
  storepick: StorepickCTA,
  auction: AuctionCTA,
  raffle: RaffleCTA,
  freegift: FreegiftCTA,
  rental: RentalCTA,
  cultureCenter: CultureCenterCTA,
  serviceReserve: ReserveCTA,
  visitCoupon: ReserveCTA,
  visitReserve: ReserveCTA,
};

interface DetailCTAProps {
  /** Dialog 안에 위치하는지 여부 */
  inDialog?: boolean;
}

const DetailCTA = ({ inDialog }: DetailCTAProps) => {
  const { prodType, prodDetailType, prodState, item } = useProdDetail();

  // 화면 상태(퍼블 화면 확인용)
  const searchParams = useSearchParams();
  const hasRounds = searchParams.get('hasRounds') === 'true'; // 구독 상세 > 회차별 구성상품 있는지 여부

  // Drawer 상태
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState<DrawerButtonType | null>(null);

  const closeDrawer = () => setIsDrawerOpen(false);

  // ✅ 버튼 미노출 케이스
  if (prodType === 'freegift' && item.freeGift === 'experience') return null;

  // ✅ 그 외 나머지 버튼 렌더링
  let CTAButton =
    prodType in CTA_COMPONENT_MAP
      ? CTA_COMPONENT_MAP[prodType as keyof typeof CTA_COMPONENT_MAP]
      : GeneralCTA;
  let isGeneral;

  // ✅ 품절, 일시중단, 일시품절, 선공개상품의 경우 ProdStateCTA 렌더링
  const isProdStateCTA = ['soldout', 'paused', 'outOfStock', 'preRelease'].includes(prodState);

  // 라이브 상품
  if (prodType === 'live') {
    const isPreLive = item?.preLive;
    const hasSchedule = item?.schedule && item.schedule.start && item.schedule.end;

    if (hasSchedule) {
      const remainToStart = formatRemainTime(item.schedule.start);
      const remainToEnd = formatRemainTime(item.schedule.end);
      isGeneral = isPreLive || (remainToStart === '00:00:00' && remainToEnd !== '00:00:00');
    }

    CTAButton = isGeneral ? GeneralCTA : LiveCTA;
  }

  // 스토어픽 상품
  if (prodType === 'storepick') {
    CTAButton = item.storePickOnly ? StorepickCTA : GeneralCTA;
  }

  /** ✅ ---- prodDetailType 분기 ----
   * 퍼블 산출물 확인 param: prodDetailType=[key] */
  // 일반 상품 > 구독 상품
  if (prodDetailType === 'subscription') {
    CTAButton = SubscriptionCTA;
  }
  // 일반 상품 > 예약 배송일
  if (prodDetailType === 'preOrder') {
    CTAButton = PreOrderCTA;
  }

  const Wrapper: React.FC<{ children: React.ReactNode }> = inDialog
    ? ({ children }) => <>{children}</>
    : ({ children }) => (
        <ButtonArea type="sticky" vertical={hasRounds}>
          {children}
        </ButtonArea>
      );

  return (
    <>
      <Wrapper>
        {isProdStateCTA ? (
          <ProdStateCTA />
        ) : (
          <CTAButton
            setDrawerType={setDrawerType}
            setIsDrawerOpen={setIsDrawerOpen}
            inDialog={inDialog}
            hasRounds={hasRounds}
          />
        )}
      </Wrapper>

      <CtaDrawer isOpen={isDrawerOpen} onClose={closeDrawer} type={drawerType} />
    </>
  );
};

export default DetailCTA;
