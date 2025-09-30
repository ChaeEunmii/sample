'use client';
// 라이브러리
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
// 컴포넌트
import { Line } from '@/shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import {
  HF_BN_LI_01,
  HF_BN_IC_01,
  HF_BN_KW_01,
  HF_BN_TX_01,
  CO_BN_CD_01,
  CO_BN_CD_02,
  CO_BN_CD_03,
  CO_BN_CD_04,
  CO_BN_CD_05,
  CO_BN_CD_06,
  CO_BN_CD_07,
  CO_BN_CD_08,
  CO_BN_CD_09,
  CO_BN_CD_10,
  CO_BN_CD_11,
  CO_BN_COL2_01,
  CO_BN_COL2_02,
  CO_BN_IC_02,
  CO_BN_IC_03,
  CO_BN_IC_04,
  CO_BN_IC_05,
  CO_BN_IC_01,
  CO_BN_KW_01,
  CO_BN_LI_01,
  CO_BN_LI_02,
  CO_BN_LI_03,
  CO_BN_LI_04,
  CO_BN_LI_05,
  CO_BN_LI_06,
  CO_BN_LI_07,
  CO_BN_LI_08,
  CO_BN_SIV_01,
  CO_BN_TX_01,
  CO_IF_TX_01,
  CO_IF_TX_02,
  LV_BN_LI_01,
  HF_PD_COL2_01,
  CO_PD_GD_01,
  CO_PD_COL2_01,
  CO_PD_COL2_02,
  CO_PD_COL2_03,
  CO_PD_MS_01,
  SB_PD_CD_01,
  PR_PD_CD_01,
  CO_TB_GD_01,
  CO_TB_GD_02,
  CO_TB_GD_03,
  DE_PD_CD_01,
  RF_PD_CD_01,
  CO_TP_CD_02,
  CO_TP_CD_03,
  CO_TP_CD_01,
  CO_TP_COL2_01,
  BT_TP_LI_01,
  RF_PD_CD_02,
  RV_PD_CD_01,
  AU_PD_CD_01,
  TM_PD_COL2_01,
  TM_PD_CD_01,
  CO_BP_CD_02,
  CO_BP_LI_04,
  CO_BP_LI_03,
  CO_BP_LI_02,
  CO_BP_LI_01,
  CO_BP_CD_01,
  HF_BP_COL2_01,
  HF_VD_COL2_01,
  SF_TV_CD_01,
  SF_VD_LI_01,
  SF_VD_CD_01,
  CO_SP_01,
  BR_BN_CD_01,
  BR_BN_CD_02,
  BR_MS_CD_01,
  CO_TB_CD_01,
  CO_TB_COL2_01,
  CO_TB_COL2_02,
  RK_PD_CD_01,
  BR_RK_CD_01,
  LV_TB_LI_01,
  LV_VD_CD_01,
  CO_BTP_CD_01,
  MS_BN_CD_01,
  MS_BN_COL2_01,
  BR_UP_CD_01,
  CA_MS_CD_01,
  Contents_timer_01,
  HF_UP_CD_01,
  MS_UP_CD_01,
  HF_MS_LI_01,
  MS_BP_CD_01,
  CA_BN_CD_01,
  LV_BN_CD_01,
  LV_BN_CD_02,
  HF_RC_GD_01,
  CO_BN_LI_10,
  BR_BN_CD_06,
  BR_BN_CD_07,
  BR_BN_CD_08,
  BR_BN_CD_09,
  CO_TG_GD_02,
  CO_TG_GD_01,
  HF_BN_CD_01,
  HF_BN_CD_04,
  HF_BN_TX_02,
  HF_TIMER_01,
  HF_PR_LI_01,
  HF_CL_COL2_01,
  HF_LV_GD_01,
  CO_TP_LI_11,
  RK_TP_LI_01,
  AT_BN_TX_01,
  AT_BN_TX_02,
  AT_TB_LI_01,
  BT_PD_CD_01,
  FD_TM_PD_01,
  FD_SALE_01,
  MS_BN_CD_02,
  Rsvp_rcmm_01,
  CO_TP_LI_08,
} from '@widgets/display';
import UnitCase from '@widgets/display/UnitCase';
// 임시 데이터
import {
  mockProdBanner,
  mockProdCards,
  mockProdLiteCards,
  mockProdRaffle,
  mockProdCount,
  mockProdSubscription,
  mockProdPreview,
  mockReviewWithProd,
  mockProdDirect,
  mockProdRanking,
  mockProdGiftRanking,
  mockGiftProdCards,
} from '@mocks/product';
import { mockProdRecommands, mockBrandRecommands } from '@mocks/rsvp';
import {
  mockBannerList,
  mockIconBanners,
  mockTypographBanners,
  mockAccrBanners,
  mockBannerImages,
  mockBannerTabs,
  mockBannersNoVdo,
  mockBannerList2,
  mockLiveBannersBrand,
  mockBannersWithColor,
  mockLiveBannersProd,
  mockNotifyBanners,
  mockCoordinateBannerList,
  mockBannersWithGem,
  mockTimers,
  mockTimersWithProd,
  mockColorSetupBanner,
  mockTabTextBanner,
  mockMarqueeTxtBanner,
  mockMarqueeImgBanner,
} from '@/mocks/banner';
import { mockBrandStore } from '@/mocks/shopmain';
import { mockDisplayVoucher } from '@/mocks/voucher';
import { mockBrandProfile, mockBrandSeller, mockSellerWithProd } from '@/mocks/brand';
import {
  mockLiveDates,
  mockLiveCardList,
  mockLiveTiles,
  mockCurrentLiveTile,
  mockTabs,
  mockPriceData,
  mockFoodPriceTabs,
  mockCategoryFilterTabs,
} from '@mocks/display';
import {
  mockMeCardData,
  mockMeUsers,
  mockMeCardsWithSocial,
  mockMeCardsWithProduct,
  mockMeCardsWithProducts,
} from '@mocks/mespace';
import { mockCollectionList } from '@/mocks/gem';
import { mockProductCardList, mockBrandCardList } from '@/mocks/mycollection';

function SearchParamsWrapper({
  children,
}: {
  children: (component: string | null) => React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const component = searchParams.get('component');

  return <>{children(component)}</>;
}

export default function DynamicComponent() {
  // 컴포넌트
  const renderComponent = (component: string | null) => {
    switch (component) {
      // 상품 유닛
      case 'vertical':
        return <UnitCase params={{ type: 'vertical' }} />;
      case 'horizontal':
        return <UnitCase params={{ type: 'horizontal' }} />;
      // 1순위 모듈
      case 'HF_BN_IC_01':
        return <HF_BN_IC_01 data={mockIconBanners} />;
      case 'HF_BN_LI_01':
        return (
          <>
            <HF_BN_LI_01 title="HomeFeed Title" data={mockBannerList.slice(0, 4)} />
            <HF_BN_LI_01
              title="HomeFeed Title"
              data={mockBannerList.slice(0, 4)}
              layout="boxed"
              margin="6"
            />
          </>
        );
      case 'HF_BN_KW_01':
        return (
          <HF_BN_KW_01 title="EXCLUSIVE OFFERS" data={[...mockIconBanners, ...mockIconBanners]} />
        );
      case 'HF_BN_TX_01':
        return (
          <HF_BN_TX_01
            data={[
              { text: '첫번째 줄 텍스트입니다.' },
              { text: '텍스트 그라데이션 지정 색상입니다.', color: 'gradient1' },
              {
                text: '텍스트 색상은 자유롭게 변경 가능하며, color 속성에서 허용되는 모든 값이 적용됩니다',
                color: '#fbb',
              },
            ]}
            link={{
              label: '텍스트 링크 버튼',
              href: '/test',
            }}
          />
        );
      case 'CO_BN_CD_01':
        return (
          <CO_BN_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_02':
        return (
          <CO_BN_CD_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_03':
        return (
          <>
            <CO_BN_CD_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList.slice(0, 2)}
            />
            <CO_BN_CD_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList}
              layout="slide"
              margin="6"
            />
          </>
        );
      case 'CO_BN_CD_04':
        return (
          <CO_BN_CD_04
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_05':
        return (
          <>
            <CO_BN_CD_05
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList.slice(0, 2)}
              layout="slide"
            />
            <CO_BN_CD_05
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList}
              layout="list"
              margin="6"
            />
          </>
        );
      case 'CO_BN_CD_06':
        return (
          <CO_BN_CD_06
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_07':
        return (
          <CO_BN_CD_07
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_08':
        return (
          <CO_BN_CD_08
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_09':
        return (
          <>
            <CO_BN_CD_09
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList}
            />
            <CO_BN_CD_09
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList.slice(0, 2)}
              margin="6"
            />
          </>
        );
      case 'CO_BN_CD_10':
        return (
          <CO_BN_CD_10
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_CD_11':
        return (
          <CO_BN_CD_11
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBrandStore}
            showGem
          />
        );
      case 'CO_BN_COL2_01':
        return (
          <CO_BN_COL2_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_COL2_02':
        return (
          <CO_BN_COL2_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannerList}
          />
        );
      case 'CO_BN_IC_01':
        return (
          <CO_BN_IC_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={[...mockIconBanners, ...mockIconBanners]}
          />
        );
      case 'CO_BN_IC_02':
        return (
          <CO_BN_IC_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={[...mockIconBanners, ...mockIconBanners]}
          />
        );
      case 'CO_BN_IC_03':
        return (
          <CO_BN_IC_03
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={[...mockIconBanners, ...mockIconBanners]}
          />
        );
      case 'CO_BN_IC_04':
        return (
          <CO_BN_IC_04
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={[...mockIconBanners, ...mockIconBanners]}
          />
        );
      case 'CO_BN_IC_05':
        return (
          <CO_BN_IC_05
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={[...mockIconBanners, ...mockIconBanners]}
          />
        );
      case 'CO_BN_KW_01':
        return (
          <CO_BN_KW_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={[...mockIconBanners, ...mockIconBanners]}
          />
        );
      case 'CO_BN_LI_01':
        return (
          <>
            <CO_BN_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList.slice(0, 2)}
            />
            <CO_BN_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList}
              layout="slide"
              margin="6"
            />
          </>
        );
      case 'CO_BN_LI_02':
        return (
          <>
            <CO_BN_LI_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[...mockBannersNoVdo, mockBannersNoVdo[0]]}
            />
          </>
        );
      case 'CO_BN_LI_03':
        return (
          <>
            <CO_BN_LI_03 data={mockBannerImages} />
          </>
        );
      case 'CO_BN_LI_04':
        return (
          <CO_BN_LI_04
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannersNoVdo}
          />
        );
      case 'CO_BN_LI_05':
        return (
          <CO_BN_LI_05
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockTypographBanners}
          />
        );
      case 'CO_BN_LI_06':
        return (
          <CO_BN_LI_06
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockAccrBanners}
            defaultActive={0}
          />
        );
      case 'CO_BN_LI_07':
        return (
          <>
            <CO_BN_LI_07
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersNoVdo}
            />
            <CO_BN_LI_07
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersWithColor.slice(0, 1)}
              layout="slide"
              margin="6"
            />
            <CO_BN_LI_07
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersWithColor}
              layout="slide"
              margin="6"
            />
          </>
        );
      case 'CO_BN_SIV_01':
        return (
          <CO_BN_SIV_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            image={{
              src: 'https://image.thehyundai.com/static/image/sect/dispbnnr22410015211020250613172837.jpg',
            }}
            video={{ src: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
            href="#"
            ad
          />
        );
      case 'CO_BN_TX_01':
        return (
          <>
            <CO_BN_TX_01 label="버튼형 배너 테스트" />
            <CO_BN_TX_01
              margin="3"
              label="버튼형 배너 테스트 색상 커스텀 버튼형 배너 테스트 색상 커스텀 버튼형 배너 테스트 색상 커스텀"
              textColor="#174534ff"
              bgColor="#0ee190ff"
            />
          </>
        );
      case 'CO_IF_TX_01':
        return (
          <>
            <CO_IF_TX_01
              data={{
                title: '사은품 증정 관련 안내',
                texts: [
                  '본 이벤트는 H.Point 통합회원 대상으로 기존 더현대닷컴 회원의 경 통합회원 전환가입 후 참여 가능합니다.',
                  '리스트 내용 리스트 내용',
                ],
              }}
            />
            <CO_IF_TX_01
              data={{
                title: '사은품 증정 관련 안내',
              }}
              margin="3"
            />
            <CO_IF_TX_01
              data={{
                texts: [
                  '본 이벤트는 H.Point 통합회원 대상으로 기존 더현대닷컴 회원의 경 통합회원 전환가입 후 참여 가능합니다.',
                  '리스트 내용 리스트 내용',
                ],
              }}
              margin="3"
            />
          </>
        );

      case 'CO_IF_TX_02':
        return (
          <CO_IF_TX_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={{
              title: '텍스트 모듈 타이틀 영역',
              subtitle: '텍스트 모듈 서브타이틀 영역',
              description:
                '더보기 텍스트 영역 초과 시 줄바꿈 및 하단 확장 더보기 텍스트 영역 초과 시 줄바꿈 및 하단 확장 더보기 텍스트 영역 초과 시 줄바꿈',
            }}
          />
        );
      case 'CO_BN_LI_08':
        return (
          <CO_BN_LI_08
            margin={0}
            data={{
              image: {
                src: '/images/dummy/@sample_banner_benefit_01.png',
                alt: '환경 보호 캠페인',
              },
              title: 'BENEFIT 03',
              subtitle: '리필 서비스 이용 시 추가 할인 혜택과 포인트 적립 기회를 제공합니다.',
              description: [
                '리필 서비스 이용 시 추가 할인 혜택과 포인트 적립 기회를 제공합니다.',
                '리필 서비스 이용 시 추가 할인 혜택과 포인트 적립 기회를 제공합니다.',
              ],
            }}
          />
        );
      case 'LV_BN_LI_01':
        return (
          <>
            <LV_BN_LI_01 margin={0} data={mockProdDirect.slice(0, 3)} />
            <LV_BN_LI_01 margin="6" data={mockProdDirect} columns={2} />
          </>
        );
      case 'HF_PD_COL2_01':
        return <HF_PD_COL2_01 margin={0} title="2단 2열 상품" data={mockProdBanner} />;
      case 'CO_PD_GD_01':
        return (
          <>
            <CO_PD_GD_01
              margin={0}
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              rows={2}
            />

            <CO_PD_GD_01
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              rows={1}
            />
          </>
        );
      case 'CO_PD_COL2_01':
        return (
          <>
            <CO_PD_COL2_01
              margin={0}
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              columns={2}
            />

            <CO_PD_COL2_01
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              columns={1}
            />
          </>
        );

      case 'SB_PD_CD_01':
        return (
          <>
            <SB_PD_CD_01
              margin={0}
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdSubscription}
              columns={1.5}
            />

            <SB_PD_CD_01
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdSubscription}
              columns={2}
            />
          </>
        );
      case 'CO_PD_COL2_02':
        return (
          <>
            <CO_PD_COL2_02
              margin={0}
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              layout="vert2"
            />

            <CO_PD_COL2_02
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              layout="vert3"
            />

            <CO_PD_COL2_02
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              layout="horizS"
            />
          </>
        );
      case 'CO_PD_COL2_03':
        return (
          <>
            <CO_PD_COL2_03
              margin={0}
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
            />

            <CO_PD_COL2_03
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              columns={2.5}
            />
          </>
        );
      case 'PR_PD_CD_01':
        return (
          <>
            <PR_PD_CD_01
              margin={0}
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdPreview}
              columns={1.5}
            />

            <PR_PD_CD_01
              margin="6"
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdPreview}
              columns={1}
            />
          </>
        );
      case 'CO_TB_GD_01':
        return (
          <>
            <CO_TB_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 3)}
            />
            <CO_TB_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 2)}
              margin="6"
            />
            <CO_TB_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 1)}
              margin="6"
            />
            <CO_TB_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              margin="6"
            />
          </>
        );

      case 'CO_TB_GD_02':
        return (
          <>
            <CO_TB_GD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 3)}
              layout="vert"
            />
            <CO_TB_GD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 3)}
              layout="horiz"
              margin="6"
            />
          </>
        );

      case 'CO_TB_GD_03':
        return (
          <>
            <CO_TB_GD_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 5)}
            />
            <CO_TB_GD_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              products={mockProdBanner.slice(0, 4)}
              margin="6"
            />
            <CO_TB_GD_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              banner={mockBannerList[0]}
              margin="6"
            />
          </>
        );
      case 'DE_PD_CD_01':
        return (
          <DE_PD_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            countdown="2025-10-20 22:00:00"
            data={mockProdCards}
          />
        );
      case 'RF_PD_CD_01':
        return (
          <RF_PD_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdRaffle}
          />
        );
      case 'RF_PD_CD_02':
        return (
          <RF_PD_CD_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdRaffle}
          />
        );
      case 'CO_PD_MS_01':
        return (
          <CO_PD_MS_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdBanner}
          />
        );
      case 'RV_PD_CD_01':
        return (
          <RV_PD_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockReviewWithProd}
          />
        );
      case 'AU_PD_CD_01':
        return (
          <AU_PD_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdRaffle}
          />
        );
      case 'TM_PD_COL2_01':
        return (
          <TM_PD_COL2_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdCount}
          />
        );
      case 'TM_PD_CD_01':
        return (
          <TM_PD_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdCount}
          />
        );
      case 'CO_TP_CD_01':
        return (
          <>
            <CO_TP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockProdBanner}
              rows={1}
            />
            <CO_TP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockProdBanner}
              rows={2}
              margin="6"
            />
          </>
        );
      case 'CO_TP_CD_02':
        return (
          <CO_TP_CD_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs}
            data={mockProdBanner}
          />
        );
      case 'CO_TP_CD_03':
        return (
          <CO_TP_CD_03
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs}
            data={mockProdBanner}
          />
        );
      case 'CO_TP_COL2_01':
        return (
          <>
            <CO_TP_COL2_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockProdBanner}
              columns={2}
            />
            <CO_TP_COL2_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockProdBanner}
              columns={1}
              margin="6"
            />
          </>
        );
      case 'BT_TP_LI_01':
        return (
          <BT_TP_LI_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs.map(({ id, label }) => ({ id, label }))}
            data={mockDisplayVoucher.slice(0, 3)}
          />
        );

      case 'HF_BP_COL2_01':
        return (
          <HF_BP_COL2_01 banner={mockBannerList[0]} products={mockProdLiteCards.slice(0, 5)} />
        );

      case 'CO_BP_CD_01':
        return (
          <>
            <CO_BP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              products={mockProdBanner.slice(0, 3)}
              layout="vert"
            />
            <CO_BP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              products={mockProdBanner.slice(0, 3)}
              layout="horiz"
              margin="6"
            />
          </>
        );
      case 'CO_BP_LI_01':
        return (
          <>
            <CO_BP_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList2[0],
                  products: mockProdBanner.slice(0, 2),
                },
                {
                  banner: mockBannerList[1],
                  products: mockProdBanner.slice(0, 2),
                },
                {
                  banner: mockBannerList[2],
                  products: mockProdBanner.slice(0, 2),
                },
              ]}
            />
            <CO_BP_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList2[0],
                },
                {
                  banner: mockBannerList[1],
                },
                {
                  banner: mockBannerList[2],
                },
              ]}
              margin="6"
            />
          </>
        );
      case 'CO_BP_LI_02':
        return (
          <>
            <CO_BP_LI_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList[0],
                  products: mockProdBanner.slice(0, 2),
                },
                {
                  banner: mockBannerList[1],
                  products: mockProdBanner.slice(0, 2),
                },
                {
                  banner: mockBannerList[2],
                  products: mockProdBanner.slice(0, 2),
                },
              ]}
              columns={1.5}
            />
            <CO_BP_LI_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList[0],
                },
                {
                  banner: mockBannerList[1],
                },
              ]}
              columns={1.5}
              margin="6"
            />
            <CO_BP_LI_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList[0],
                  products: mockProdBanner.slice(0, 2),
                },
                {
                  banner: mockBannerList[1],
                  products: mockProdBanner.slice(0, 2),
                },
                {
                  banner: mockBannerList[2],
                  products: mockProdBanner.slice(0, 2),
                },
              ]}
              columns={1}
              margin="6"
            />
            <CO_BP_LI_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList[0],
                },
                {
                  banner: mockBannerList[1],
                },
              ]}
              columns={1}
              margin="6"
            />
            <CO_BP_LI_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={[
                {
                  banner: mockBannerList[0],
                  products: mockProdBanner.slice(0, 1),
                },
              ]}
              columns={1}
              margin="6"
            />
          </>
        );
      case 'CO_BP_LI_03':
        return (
          <>
            <CO_BP_LI_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              products={mockProdCards.slice(0, 3)}
            />
            <CO_BP_LI_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              products={mockProdCards}
              margin="6"
            />
            <CO_BP_LI_03
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              margin="6"
            />
          </>
        );
      case 'CO_BP_CD_02':
        return (
          <>
            <CO_BP_CD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockProdBanner}
              rows={1}
            />
            <CO_BP_CD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockProdBanner}
              rows={2}
              margin="6"
            />
          </>
        );
      case 'HF_VD_COL2_01':
        return <HF_VD_COL2_01 data={mockLiveBannersBrand} />;

      case 'SF_TV_CD_01':
        return (
          <>
            <SF_TV_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockLiveBannersBrand}
            />
            <SF_TV_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={mockLiveBannersBrand}
              multiline
              margin="6"
            />
          </>
        );
      case 'SF_VD_LI_01':
        return (
          <>
            <SF_VD_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockLiveBannersBrand}
            />
            <SF_VD_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockLiveBannersBrand}
              columns={2}
              margin="6"
            />
          </>
        );
      case 'SF_VD_CD_01':
        return (
          <>
            <SF_VD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockLiveBannersBrand}
            />
            <SF_VD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockLiveBannersBrand}
              columns={2.5}
              margin="6"
            />
          </>
        );
      case 'CO_SP_01':
        return (
          <>
            컨텐츠 사이의 간격을 조절하는 스페이싱 모듈입니다.양수값으로 간격을 벌릴 수 있습니다.
            <CO_SP_01 spacing={20} />
            스페이싱 모듈 기준 텍스트입니다.
            <CO_SP_01 spacing={-12} />
            컨텐츠 사이의 간격을 조절하는 스페이싱 모듈입니다. 음수값도 허용됩니다.
          </>
        );
      case 'BR_BN_CD_01':
        return <BR_BN_CD_01 data={mockBrandProfile} />;

      case 'BR_BN_CD_02':
        return <BR_BN_CD_02 data={mockBrandSeller} />;

      case 'BR_MS_CD_01':
        return <BR_MS_CD_01 title="미스페이스" data={mockMeCardData} />;

      case 'CO_BP_LI_04':
        return (
          <>
            <CO_BP_LI_04
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockSellerWithProd}
            />
            <CO_BP_LI_04
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockSellerWithProd}
              layout="slide"
              margin="6"
            />
          </>
        );
      case 'CO_TB_CD_01':
        return (
          <CO_TB_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs}
            data={mockBannerList.slice(0, 1)}
          />
        );
      case 'CO_TB_COL2_01':
        return (
          <CO_TB_COL2_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs}
            data={mockBannersNoVdo}
          />
        );
      case 'CO_TB_COL2_02':
        return (
          <CO_TB_COL2_02
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs}
            data={mockBannersNoVdo}
          />
        );
      case 'RK_PD_CD_01':
        return (
          <>
            <RK_PD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdRanking}
            />
            <RK_PD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdRanking}
              columns={2.5}
              margin="6"
            />
          </>
        );
      case 'BR_RK_CD_01':
        return (
          <>
            <BR_RK_CD_01 data={mockProdRanking} />
            <BR_RK_CD_01 data={mockProdRanking} columns={2.5} margin="6" />
          </>
        );
      case 'LV_TB_LI_01':
        return (
          <>
            <LV_TB_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              dates={mockLiveDates}
              data={mockLiveCardList}
              activeIds={[mockLiveCardList[0].id]}
            />
            <LV_TB_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              dates={mockLiveDates}
              data={[mockLiveCardList[0]]}
              margin="3"
            />
          </>
        );
      case 'LV_VD_CD_01':
        return (
          <>
            <LV_VD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockLiveBannersProd}
            />
          </>
        );
      case 'CO_BTP_CD_01':
        return (
          <>
            <CO_BTP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              tabs={mockBannerTabs}
              products={mockProdBanner.slice(0, 4)}
              layout="vert"
            />
            <CO_BTP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              tabs={mockBannerTabs}
              products={mockProdBanner.slice(0, 4)}
              layout="horiz"
              margin="6"
            />
            <CO_BTP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              banner={mockBannerList2[0]}
              tabs={mockBannerTabs}
              products={mockProdBanner.slice(0, 4)}
              layout="horizM"
              margin="6"
            />
          </>
        );
      case 'LV_BN_CD_01':
        return (
          <>
            <LV_BN_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockNotifyBanners}
            />
            <LV_BN_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockNotifyBanners.slice(0, 1)}
              margin="6"
            />
          </>
        );
      case 'LV_BN_CD_02':
        return (
          <>
            <LV_BN_CD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockNotifyBanners}
            />
            <LV_BN_CD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockNotifyBanners.slice(0, 1)}
              margin="6"
            />
          </>
        );
      case 'AT_BN_TX_01':
        return (
          <>
            <AT_BN_TX_01
              data={{
                ...mockColorSetupBanner,
                colorType: 'black',
              }}
            />
            <AT_BN_TX_01
              margin="4"
              data={{
                ...mockColorSetupBanner,
                subtitle: {
                  text: null,
                },
                colorType: 'black',
              }}
            />
            <AT_BN_TX_01
              margin="4"
              data={{
                ...mockColorSetupBanner,
                keywords: [],
                colorType: 'black',
              }}
            />
            <AT_BN_TX_01
              margin="4"
              data={{
                ...mockColorSetupBanner,
                subtitle: {
                  text: null,
                },
                keywords: [],
                colorType: 'black',
              }}
            />
            <AT_BN_TX_01
              margin="4"
              data={{
                ...mockColorSetupBanner,
                colorType: 'lime',
              }}
            />
            <AT_BN_TX_01
              margin="4"
              data={{
                ...mockColorSetupBanner,
                subtitle: {
                  text: '서브 타이틀은 최대 2줄까지 표현됩니다. 모듈 서브 타이틀은 색상이 조절가능하며 2줄이 넘어갈 경우 말줄임으로 표현 됩니다.',
                },
                keywords: ['PERFUME PERFUME', 'FRANCE FRANCE', 'NEW NEW NEW NEW NEW NEW NEW NEW'],
                colorType: 'black',
              }}
            />
          </>
        );
      case 'AT_BN_TX_02':
        return (
          <>
            <AT_BN_TX_02 data={mockMarqueeTxtBanner} />
            <AT_BN_TX_02
              data={{
                title: {
                  text: 'SALOMON X SANDY LIANG XT-6 10% OFF',
                  color: '#000000',
                },
                subtitle: {
                  text: '더현대닷컴 단독 25 SUMMER SALE 살로몬 X 샌디리앙 10% 세일이 시작되었습니다.',
                  color: '#000000',
                },
                color: '#11C87F',
              }}
              margin="6"
            />
            <AT_BN_TX_02
              data={{
                title: {
                  text: 'SALOMON X SANDY LIANG XT-6 10% OFF',
                  color: '#FFFFFF',
                },
                href: '#',
                color: '#000000',
              }}
              margin="6"
            />
            <AT_BN_TX_02
              data={{
                title: {
                  text: 'SALOMON X SANDY LIANG XT-6 10% OFF',
                  color: '#000000',
                },
                color: '#11C87F',
              }}
              margin="6"
            />
            <AT_BN_TX_02 data={mockMarqueeImgBanner} margin="6" />
            <AT_BN_TX_02
              data={{
                ...mockMarqueeImgBanner,
                href: undefined,
              }}
              margin="6"
            />
          </>
        );

      // 2순위
      case 'MS_BN_CD_01':
        return (
          <>
            <MS_BN_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockMeCardData}
            />
            <MS_BN_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockMeCardData.slice(0, 1)}
              margin="6"
            />
          </>
        );
      case 'MS_BN_COL2_01':
        return (
          <MS_BN_COL2_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockMeCardData}
          />
        );
      case 'BR_UP_CD_01':
        return <BR_UP_CD_01 title="브랜드매니저" data={mockMeUsers} />;

      case 'CA_MS_CD_01':
        return <CA_MS_CD_01 title="미스페이스" data={mockMeCardData} />;

      case 'Contents_timer_01':
        return (
          <Contents_timer_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={{
              startDate: '2025-07-20 00:00:00',
              endDate: '2025-11-20',
            }}
          />
        );
      case 'HF_UP_CD_01':
        return <HF_UP_CD_01 title="EXCLUSIVE OFFERS" data={mockMeUsers} />;

      case 'MS_UP_CD_01':
        return (
          <MS_UP_CD_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockMeUsers}
          />
        );
      case 'HF_MS_LI_01':
        return (
          <>
            <HF_MS_LI_01 data={mockMeCardsWithSocial} />
            <HF_MS_LI_01 data={mockMeCardsWithSocial} columns={1} margin="6" />
          </>
        );
      case 'MS_BP_CD_01':
        return (
          <>
            <MS_BP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockMeCardsWithProduct}
            />
            <MS_BP_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockMeCardsWithProduct.slice(0, 1)}
              margin="6"
            />
          </>
        );
      case 'CA_BN_CD_01':
        return (
          <>
            <CA_BN_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList}
            />
            <CA_BN_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannerList}
              columns={2.5}
              margin="6"
            />
          </>
        );
      case 'HF_RC_GD_01':
        return (
          <>
            <HF_RC_GD_01
              collections={mockCollectionList}
              brands={mockBrandCardList}
              mespaces={mockMeCardsWithSocial}
              banners={mockBannerList}
              products={mockProductCardList}
            />
          </>
        );
      case 'CO_BN_LI_10':
        return <CO_BN_LI_10 data={mockBannersNoVdo} />;

      case 'BR_BN_CD_06':
        return <BR_BN_CD_06 data={mockBannersNoVdo} />;

      case 'BR_BN_CD_07':
        return (
          <BR_BN_CD_07
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockBannersNoVdo}
          />
        );

      case 'BR_BN_CD_08':
        return (
          <>
            <BR_BN_CD_08
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersNoVdo}
            />
            <BR_BN_CD_08
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersNoVdo.slice(0, 2)}
              margin="6"
            />
            <BR_BN_CD_08
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersNoVdo.slice(0, 1)}
              margin="6"
            />
          </>
        );
      case 'BR_BN_CD_09':
        return (
          <>
            <BR_BN_CD_09
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersNoVdo}
            />
            <BR_BN_CD_09
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockBannersNoVdo.slice(0, 1)}
              margin="6"
            />
          </>
        );

      // 3순위
      case 'CO_TG_GD_02':
        return (
          <>
            {/* 리스트 */}
            <CO_TG_GD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockCoordinateBannerList}
            />
            <Line variant="bold" margin="4" />
            {/* 슬라이더 */}
            <CO_TG_GD_02
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              type="swiper"
              data={mockCoordinateBannerList}
            />
          </>
        );
      case 'CO_TG_GD_01':
        return (
          <>
            {/* 슬라이더 - 1개 */}
            <CO_TG_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              type="swiper"
              data={mockCoordinateBannerList.slice(0, 1)}
            />
            <Line variant="bold" margin="4" />
            {/* 리스트 */}
            <CO_TG_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockCoordinateBannerList}
            />
            <Line variant="bold" margin="4" />
            {/* 슬라이더 */}
            <CO_TG_GD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              type="swiper"
              data={mockCoordinateBannerList}
            />
          </>
        );
      case 'HF_BN_CD_01':
        return (
          <>
            <HF_BN_CD_01
              title={
                <>
                  하이하이 김현대님
                  <br />
                  새롭게 태어난 식물성 나일론
                  <br />
                  올뉴 탱커가 출시되었어요
                </>
              }
              href="#"
            />
            <HF_BN_CD_01
              image={{ src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'HIHI 브랜딩' }}
              margin="6"
            />
            <HF_BN_CD_01
              title={
                <>
                  하이하이 김현대님
                  <br />
                  새롭게 태어난 식물성 나일론
                  <br />
                  올뉴 탱커가 출시되었어요
                </>
              }
              bubbleText="어택!!"
              margin="6"
            />
            <HF_BN_CD_01
              image={{ src: '/images/dummy/@sample_homefeed_01.png', alt: 'HIHI 브랜딩' }}
              margin="6"
            />
            <HF_BN_CD_01
              title={
                <>
                  새로운 스타일
                  <br />
                  클래식의 재해석
                </>
              }
              href="#"
              image={{ src: '/images/dummy/@sample_homefeed_02.png' }}
              margin="6"
            />
            <HF_BN_CD_01
              title={
                <>
                  새롭게 태어난
                  <br />
                  신상 컬렉션 보러가기
                </>
              }
              image={{ src: '/images/dummy/@sample_homefeed_03.png' }}
              margin="6"
            />
            <HF_BN_CD_01
              title={
                <>
                  한가인 자유부인 팝업
                  <br />
                  슬리핑보틀
                </>
              }
              image={{ src: '/images/dummy/@sample_homefeed_04.png' }}
              margin="6"
            />
          </>
        );
      case 'HF_BN_CD_04':
        return (
          <>
            <HF_BN_CD_04 data={mockBannersWithGem.slice(0, 1)} />
            <HF_BN_CD_04 data={mockBannersWithGem} margin="6" />
          </>
        );
      case 'HF_BN_TX_02':
        return (
          <>
            <HF_BN_TX_02
              links={[
                { label: '홈피드를 재미있게 이용하는 방법', href: '#' },
                { label: '물어보고 싶은 것이 있어요', href: '#' },
              ]}
            />
            <HF_BN_TX_02
              margin="6"
              title="회원님이 GEM한 상품이 재입고됐어요!"
              image={{ src: '/images/dummy/@sample_product_01.png' }}
              links={[
                { label: 'GEM한 상품에 대한 정보가 제공됩니다', href: '#' },
                { label: '정보가 제공됩니다', href: '#' },
              ]}
            />
          </>
        );
      case 'HF_TIMER_01':
        return <HF_TIMER_01 data={mockTimers} />;

      case 'HF_PR_LI_01':
        return <HF_PR_LI_01 data={mockTimersWithProd} />;
      case 'HF_CL_COL2_01':
        return (
          <HF_CL_COL2_01
            title="홈피드 컬렉션 모듈"
            data={[...mockCollectionList, ...mockCollectionList]}
          />
        );

      case 'HF_LV_GD_01':
        return <HF_LV_GD_01 currentLive={mockCurrentLiveTile} data={mockLiveTiles} />;

      case 'CO_TP_LI_11':
        return (
          <>
            <CO_TP_LI_11
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockGiftProdCards}
              tabs={mockTabs}
              price={mockPriceData}
              showGem
            />
            <CO_TP_LI_11
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockGiftProdCards}
              tabs={mockTabs}
              price={mockPriceData}
              columns={3}
              showGem
              margin="6"
            />
          </>
        );
      case 'RK_TP_LI_01':
        return (
          <RK_TP_LI_01
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            data={mockProdGiftRanking}
            tabs={mockTabs}
            price={mockPriceData}
          />
        );
      case 'AT_TB_LI_01':
        return (
          <>
            <AT_TB_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs.map(({ id, label }) => ({ id, label }))}
              data={[
                {
                  title: {
                    text: '최대 1줄 노출 후 말줄임 표시 최대 1줄 노출 후 말줄임 표시 최대 1줄 노출 후 말줄임 표시',
                  },
                  subtitle: {
                    text: '최대 1줄 노출 후 말줄임 표시됩니다. 최대 1줄 노출 후 말줄임 표시됩니다.',
                  },
                  href: '#',
                },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
              ]}
              maxItems={6}
            />
            <AT_TB_LI_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockBannerTabs}
              data={[
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                { ...mockTabTextBanner },
                {
                  title: { text: 'ARTS DE BASE', color: '#11C87F' },
                  subtitle: { text: '아드베스', color: '#11C87F' },
                  href: '#',
                },
              ]}
              maxItems={6}
              margin="6"
            />
          </>
        );
      case 'BT_PD_CD_01':
        return (
          <>
            <BT_PD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              rows={1}
            />
            <BT_PD_CD_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockProdBanner}
              rows={2}
              margin="6"
            />
          </>
        );
      case 'FD_TM_PD_01':
        return (
          <>
            <FD_TM_PD_01 title="마감세일" data={mockProdBanner} />
          </>
        );
      case 'FD_SALE_01':
        return (
          <>
            <FD_SALE_01
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              tabs={mockFoodPriceTabs}
              data={mockProdBanner.slice(0, 4)}
            />
          </>
        );
      case 'CO_TP_LI_08':
        return (
          <>
            <CO_TP_LI_08
              title="EXCLUSIVE OFFERS"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              categoryTabs={mockCategoryFilterTabs}
              data={mockProdBanner.slice(0, 4)}
              onCategoryChange={(mid, sub, det, sort) => {
                console.log('카테고리 변경됨:', { mid, sub, det, sort });
              }}
            />
          </>
        );
      case 'MS_BN_CD_02':
        return (
          <>
            <MS_BN_CD_02
              title="미스페이스"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockMeCardsWithProducts}
            />
            <MS_BN_CD_02
              title="미스페이스"
              subtitle="신규 런칭 최저가 특가 타임딜"
              moreUrl="#"
              data={mockMeCardsWithProducts.slice(0, 1)}
              margin="6"
            />
          </>
        );
      case 'Rsvp_rcmm_01':
        return (
          <>
            <Rsvp_rcmm_01
              name="김*대"
              keywords={['아트&굿즈', '악기', '패션', '백&슈즈', '워치&쥬얼리']}
              tabs={[
                { id: 'tab_01', label: '추천 상품' },
                { id: 'tab_02', label: '추천 브랜드' },
              ]}
              products={mockProdRecommands.slice(0, 4)}
              brands={mockBrandRecommands}
            />
            <Rsvp_rcmm_01
              name="김*대"
              keywords={['아트&굿즈', '악기', '패션', '백&슈즈', '워치&쥬얼리']}
              tabs={[
                { id: 'tab_01', label: '추천 상품' },
                { id: 'tab_02', label: '추천 브랜드' },
              ]}
              products={[]}
              brands={[]}
              margin="6"
            />
            <Rsvp_rcmm_01
              name="김*대"
              tabs={[
                { id: 'tab_01', label: '추천 상품' },
                { id: 'tab_02', label: '추천 브랜드' },
              ]}
              products={[]}
              brands={[]}
              margin="6"
            />
          </>
        );
      default:
        return <div>컴포넌트를 선택해주세요.</div>;
    }
  };

  return (
    <Suspense>
      <SearchParamsWrapper>
        {(component) => (
          <Container
            title="전시모듈"
            showBack
            {...(component?.startsWith('HF_') ? { mode: 'gray' } : {})}
          >
            <Contents>{renderComponent(component)}</Contents>
          </Container>
        )}
      </SearchParamsWrapper>
    </Suspense>
  );
}
