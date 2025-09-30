'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { useSearchParams } from 'next/navigation';
import {
  Line,
  TitleBar,
  ButtonArea,
  Button,
  Carousel,
  Image,
  Link,
  TextButton,
  Heading,
  Text,
  Empty,
} from '@shared/ui';
import { ProdCardList } from '@widgets/product';
import { MainUserInfo, MainFavMenu, MainNav } from '@views/mypage/components';
import { MAIN_NAV_GROUPS, MAIN_FAV_ITEMS } from '@views/mypage/components/mainMenu';
import styles from './MypageMain.module.scss';
import {
  mockProductCardList,
  mainBannerData,
  mainBenefitData,
  mockMainUserInfoData,
} from '@mocks/mypage';

export default function MypageMain() {
  const searchParams = useSearchParams();

  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isGuest = searchParams.has('guest'); // 비로그인
  const isCollector = searchParams.has('collector'); // 컬렉터
  const isLover = searchParams.has('lover'); // 러버
  const isMania = searchParams.has('mania'); // 마니아
  const isEmployees = searchParams.has('employees'); // 임직원
  const isBiz = searchParams.has('biz'); // 비즈

  // mock 데이터 가져오기
  const grade = isCollector
    ? ('collector' as const)
    : isLover
      ? ('lover' as const)
      : isMania
        ? ('mania' as const)
        : ('fan' as const);
  const position = isEmployees ? '임직원' : isBiz ? 'BIZ' : '';
  const summary = {
    ...(isEmployees
      ? { coupon: 20, myvoucher: 10, hpoint: 500000, rsvppoint: 500000 }
      : isBiz
        ? { coupon: 20, myvoucher: 10, hpoint: 500000 }
        : { coupon: 20, myvoucher: 10, hpoint: 500000, rsvppoint: 500000, deposit: 50000000 }),
  };
  // 상단정보
  const userInfoData = {
    ...mockMainUserInfoData,
    header: {
      ...mockMainUserInfoData.header,
      grade,
      position,
    },
    summary,
  };
  const bannerData = mainBannerData; // 배너
  const benefitData = mainBenefitData; // 혜택배너
  const productCardData = isGuest ? [] : mockProductCardList; // 최근 본 상품

  // 사용자 메뉴 카운트 표시
  const userNavCounts: Record<string, number | undefined> = isGuest
    ? {}
    : {
        review: 3,
        alarm: 1,
        club: 4,
        giftBox: 1,
        subscribe: 2,
      };
  // 자주찾는 메뉴 카운트 표시
  const userFavCounts: Record<string, number | undefined> = isGuest
    ? {}
    : {
        order: 10,
        cancel: 2,
        gift: 2,
        club: 2,
      };

  // 상단배너 스와이퍼
  const renderBanner = () => {
    return bannerData.map((banner, idx) => (
      <Link key={idx} as="route" href={banner.href} type="block" className={styles.banner}>
        <Image src={banner.image.src} alt={banner.image.alt} className={styles.img} />
      </Link>
    ));
  };

  // 쏟아지는헤택 스와이퍼
  const renderBenefit = () => {
    return benefitData.map((banner, idx) => (
      <Link key={idx} as="route" href={banner.href} className={styles.benefit}>
        <Image src={banner.image.src} alt={banner.image.alt} className={styles.img} />
        <div className={styles.title}>
          <Heading size="3" weight="semibold" color="black">
            {banner.title}
          </Heading>
          <Text as="span" size="4" color="gray2">
            {banner.desc}
          </Text>
        </div>
      </Link>
    ));
  };

  // 상단 배너 숨김 조건
  const hideTopBanner = isEmployees || isBiz;

  return (
    <Container title="마이페이지" showBack type="mypage">
      <Contents className={styles.layout}>
        {/* 상단정보 */}
        {!isGuest ? (
          <MainUserInfo
            header={userInfoData.header}
            mespace={userInfoData.mespace}
            summary={userInfoData.summary}
          />
        ) : (
          <>
            <TitleBar
              type="docs"
              title={
                <>
                  로그인하시면
                  <br />
                  상세정보를 확인할 수 있어요
                </>
              }
              level="1"
            />
            <ButtonArea margin="1">
              <Button>회원가입</Button>
              <Button variant="primary">로그인</Button>
            </ButtonArea>
          </>
        )}
        {/* 상단 배너 */}
        {!hideTopBanner && (
          <Carousel
            slides={renderBanner()}
            slidesPerView={1}
            pagination="bullet"
            boxing
            className="ncp-mt-m"
          />
        )}
        {/* 자주 찾는 메뉴 */}
        <TitleBar type="docs" title="자주 찾는 메뉴" level="1" className="ncp-mt-xxl" />
        <MainFavMenu
          items={MAIN_FAV_ITEMS.map((item) => ({
            ...item,
            count: userFavCounts[item.id] ?? undefined,
          }))}
        />
        {/* 최근 본 상품 */}
        <TitleBar
          type="docs"
          title="최근 본 상품"
          level="1"
          side={
            <TextButton href="#" size="1" color="gray3" suffixIcon="arrowRight">
              전체보기
            </TextButton>
          }
          className="ncp-mt-xxl"
        />
        {productCardData.length > 0 ? (
          <ProdCardList
            data={productCardData}
            variant="swiper"
            columns={2.5}
            cardType="vertical"
            autofit
            className={styles.prods}
          />
        ) : (
          <Empty title="최근 본 상품이 없습니다." variant="inline" className={styles.empty} />
        )}
        {/* NCP 쏟아지는 혜택 */}
        <TitleBar type="docs" title="NCP 쏟아지는 혜택" level="1" className="ncp-mt-xxl" />
        <Carousel
          slides={renderBenefit()}
          slidesPerView={1.3}
          spaceBetween={12}
          className="ncp-mt-m"
        />
        <Line margin="5" variant="bold" />
        {/* 하단 메뉴 */}
        <MainNav
          groups={MAIN_NAV_GROUPS.map((group) => ({
            ...group,
            items: group.items.map((item) => ({
              ...item,
              count: userNavCounts[item.id],
            })),
          }))}
        />
        <ButtonArea align="center">
          <TextButton href="#" size="1" color="gray3" variant="underline">
            회원 탈퇴
          </TextButton>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
