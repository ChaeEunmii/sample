// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Tabs, Carousel } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, BannerImage, TextWithColor } from '../banner/bannerType';

interface TabProps {
  id: string;
  label: string;
  thumb?: string;
}

interface BannerProps {
  image: BannerMedia;
  title?: TextWithColor;
  subtitle?: TextWithColor;
  href: string;
  ad?: boolean;
}

interface ThumbnailsProps {
  image: BannerImage;
  href: string;
}

export interface MLBNPD006Props extends DisplayProps {
  data: {
    tab: TabProps;
    banner: BannerProps;
    thumbnails: ThumbnailsProps[];
  }[];
  defaultTab?: string;
  onTabChange?: (activeTabId: string) => void;
}

export const MLBNPD006 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  defaultTab,
  onTabChange,
}: MLBNPD006Props) => {
  // 탭 데이터
  const tabs = data.map(({ tab }) => tab);

  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabIdx);

  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    setActiveTabIndex(activeIdx);
    onTabChange?.(activeId);
  };

  // 슬라이드 변경 핸들러
  const handleSlideChange = (index: number) => {
    setActiveTabIndex(index);
    const activeId = tabs[index]?.id;
    onTabChange?.(activeId);
  };

  // banner + thumbnails 슬라이드 아이템
  const renderTabContent = (
    item: { tab: TabProps; banner: BannerProps; thumbnails: ThumbnailsProps[] },
    index: number
  ) => {
    const { banner, thumbnails } = item;

    // 배너 데이터 정제
    const refinedBanner = {
      image: banner.image,
      title: banner.title,
      subtitle: banner.subtitle,
      href: banner.href,
      ad: banner.ad,
    };

    // 썸네일 데이터 정제
    const refinedThumbnails = thumbnails.map(({ image, href }) => ({
      image,
      href,
    }));

    return (
      <div key={index}>
        <Banner {...refinedBanner} ratio="landscape" textInside textSize="4" />
        <BannerList
          data={refinedThumbnails}
          variant="grid"
          bannerType="square"
          columns={3}
          gutter={8}
          margin="1"
        />
      </div>
    );
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Tabs
        data={tabs}
        variant="buttons"
        className="ncp-mt-l"
        defaultActive={defaultTabIdx}
        activeTab={activeTabIndex}
        onTabChange={handleTabChange}
      />

      <Carousel
        slides={data.map((item, index) => renderTabContent(item, index))}
        slideTo={activeTabIndex}
        onSlideChange={handleSlideChange}
        spaceBetween={8}
        boxing
      />
    </Display>
  );
};

MLBNPD006.displayName = 'MLBNPD006';
