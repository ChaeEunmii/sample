// 라이브러리
import { Fragment } from 'react';
// 컴포넌트
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia } from '../banner/bannerType';
import { BannerList } from '../banner/BannerList';

export interface MLBN034Props extends DisplayProps {
  data: {
    image: BannerMedia;
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN034 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN034Props) => {
  const refinedData = data.map(({ image, href, ad }) => ({
    image,
    href,
    ad,
  }));

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant={refinedData.length === 1 ? 'grid' : 'swiper'}
        data={refinedData}
        columns={refinedData.length !== 1 ? 1.2 : undefined}
        bannerType="tall"
        centered={refinedData.length > 2}
        loop={refinedData.length > 2}
      />
    </Display>
  );
};

MLBN034.displayName = 'MLBN034';
