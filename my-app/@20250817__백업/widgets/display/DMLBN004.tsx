import { useState } from 'react';
import { Dialog } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface DMLBN004Props extends DisplayProps {
  layout?: 'portrait' | 'landscape';
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const DMLBN004 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: DMLBN004Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const refinedData = data.map(({ image, title, subtitle, href, ad }) => ({
    image,
    title,
    subtitle,
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
        variant="swiper"
        data={refinedData}
        bannerType="portrait"
        align="center"
        textInside
        textSize="4"
        textSpacing="in1"
        flush
        autoplay
        onViewAll={() => setIsOpen(true)}
      />

      <Dialog
        title="전체보기"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maximize
        showClose
        flush
      >
        <BannerList
          variant="grid"
          data={refinedData}
          bannerType="portrait"
          align="center"
          textInside
          textSize="4"
          textSpacing="in1"
          flush
        />
      </Dialog>
    </Display>
  );
};
DMLBN004.displayName = 'DMLBN004';
