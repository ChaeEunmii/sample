'use client';

import { Heading, Icon, Link } from '@/shared/ui';
import React from 'react';
import { BannerList } from '../banner/BannerList';
import { Banner } from '../banner/Banner';
import { BannerMedia } from '../banner/bannerType';

import styles from './BottomBanners.module.scss';

// 하단 배너 영역 공통 타이틀
export const BottomBannerTitle = ({ title, link }: { title: string; link?: string }) => (
  <div className={styles.title}>
    <Heading as="h2" size="5">
      {title}
    </Heading>
    {link && (
      <Link href={link} color="gray3">
        더보기
        <Icon name="arrowRight" size="xsmall" />
      </Link>
    )}
  </div>
);

// ❇️ 미스페이스
export const MeSpace = () => {
  return (
    <>
      <BottomBannerTitle title="MESPACE" />
      <div className="ncp-mt-s">미스페이스 데이터 출력</div>
    </>
  );
};

// ❇️ 관련 숏폼 시청하기
export const ShortFormViewing = ({
  data,
}: {
  data: {
    video?: {
      src: string;
      poster?: string;
      label?: string;
    };
    subtitle?: React.ReactNode;
    onClick: () => void;
  }[];
}) => {
  return (
    <>
      <BottomBannerTitle title="관련 숏폼 시청하기" link="#" />
      <BannerList
        className="ncp-mt-s"
        variant={data.length === 1 ? 'grid' : 'swiper'}
        data={data}
        {...(data.length !== 1 ? { columns: 1.2 } : {})}
        bannerType="live"
        textInside
        titleProps={{ titleLine: 1 }}
      />
    </>
  );
};

// ❇️ 관련 콘텐츠
export const RelatedContent = ({
  banner,
}: {
  banner: {
    image: BannerMedia;
    href: string;
    ad?: boolean;
  };
}) => {
  const refinedBanner = {
    image: banner.image,
    href: banner.href,
    ad: banner.ad,
  };
  return (
    <>
      <BottomBannerTitle title="관련 콘텐츠" />
      <Banner className="ncp-mt-s" {...refinedBanner} ratio="landscape" textInside textSize="4" />
    </>
  );
};

MeSpace.displayName = 'MeSpace';
ShortFormViewing.displayName = 'ShortFormViewing';
RelatedContent.displayName = 'RelatedContent';
