'use client';

import { Container, Contents } from '@widgets/layout/Container';
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
  Avatar,
  Icon,
  Box,
  InfoList,
  InfoItem,
} from '@shared/ui';
import { MeBadge } from '@widgets/mespace/MeBadge';
import { ProdCardList } from '@widgets/product';
import styles from './MypageMain.module.scss';
import { mockProductCardList, mainBannerData, mainBenefitData } from '@mocks/mypage';
import { MAIN_NAV_GROUPS, MAIN_FAV_ITEMS } from './mainMenu';
import MainNav from './MainNav';
import MainFavMenu from './MainFavMenu';

export default function MypageMain() {
  // mock 데이터 가져오기
  const bannerData = mainBannerData;
  const benefitData = mainBenefitData;

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

  // 사용자 메뉴 카운트 표시
  const userNavCounts: Record<string, number> = {
    review: 3,
    alarm: 1,
    club: 4,
    giftBox: 1,
    subscribe: 2,
  };
  // 자주찾는 메뉴 카운트 표시
  const userFavCounts: Record<string, number> = {
    order: 10,
    cancel: 2,
    gift: 2,
    club: 2,
  };

  return (
    <Container title="마이페이지" showBack type="mypage">
      <Contents className={styles.layout}>
        <div className={styles.info}>
          <div className={styles.my}>
            <Heading as="h3" size="8" color="black" weight="bold">
              이*대 님
            </Heading>
            <Image
              src={`/images/promotion/img_grade2.png`}
              alt="컬렉터"
              className={styles.gradeImg}
            />
          </div>
          <div className={styles.state}>
            <Text as="strong" size="4" weight="semibold" color="point">
              HiHi 멤버십 플러스
            </Text>
            <Text as="span" size="4" weight="semibold">
              임직원
            </Text>
          </div>
        </div>
        <Box size="6" className={styles.meInfo}>
          <div className={styles.left}>
            <div className={styles.thumb}>
              <Avatar
                size="3"
                src="/images/dummy/@sample_people_01.png"
                alt="트렌디 셀렉터"
                className={styles.avatar}
              />
              <MeBadge userType="influencer" size="small" className={styles.badge} />
            </div>
            <Heading size="3" weight="bold" className={styles.name}>
              오또리하우스
            </Heading>
          </div>
          <div className={styles.gemInfo}>
            <Icon name="gem" size="xsmall" className={styles.icon} />
            <Text as="span" size="4" weight="medium" color="gray2">
              10K
            </Text>
          </div>
        </Box>
        <div className={styles.boxs}>
          <Box size="3" margin="0">
            <InfoList variant="between" gap="row16">
              <InfoItem
                title={
                  <Text color="gray2" weight="medium">
                    쿠폰
                  </Text>
                }
                content={
                  <Text color="primary" weight="semibold">
                    20장
                  </Text>
                }
              />
            </InfoList>
          </Box>
          <Box size="3" margin="0">
            <InfoList variant="between" gap="row16">
              <InfoItem
                title={
                  <Text color="gray2" weight="medium">
                    마이바우처
                  </Text>
                }
                content={
                  <Text color="primary" weight="semibold">
                    10장
                  </Text>
                }
              />
            </InfoList>
          </Box>
          <Box size="3" margin="0">
            <InfoList variant="between" gap="row16">
              <InfoItem
                title={
                  <Text color="gray2" weight="medium">
                    H.Point
                  </Text>
                }
                content={
                  <Text color="primary" weight="semibold">
                    500,000P
                  </Text>
                }
              />
              <InfoItem
                title={
                  <Text color="gray2" weight="medium">
                    RSVP.Point
                  </Text>
                }
                content={
                  <Text color="primary" weight="semibold">
                    500,000P
                  </Text>
                }
              />
              <InfoItem
                title={
                  <Text color="gray2" weight="medium">
                    예치금
                  </Text>
                }
                content={
                  <Text color="primary" weight="semibold">
                    50,000,000원
                  </Text>
                }
              />
            </InfoList>
          </Box>
        </div>

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
        <Carousel
          slides={renderBanner()}
          slidesPerView={1}
          pagination="bullet"
          boxing
          className="ncp-mt-m"
        />
        <TitleBar type="docs" title="자주 찾는 메뉴" level="1" className="ncp-mt-xxl" />
        <MainFavMenu
          items={MAIN_FAV_ITEMS.map((item) => ({
            ...item,
            count: userFavCounts[item.id] ?? undefined,
          }))}
        />

        <TitleBar
          type="docs"
          title="최근 본 상품"
          level="1"
          side={
            <>
              <TextButton href="#" size="1" color="gray3" suffixIcon="arrowRight">
                전체보기
              </TextButton>
            </>
          }
          className="ncp-mt-xxl"
        />
        <ProdCardList
          data={mockProductCardList}
          variant="swiper"
          columns={2.5}
          cardType="vertical"
          autofit
          className={styles.prods}
        />
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
