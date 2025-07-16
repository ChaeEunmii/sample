import { useState } from 'react';
import { Dialog } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN009_1Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN009_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLBN009_1Props) => {
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
        bannerType="landscape"
        textInside
        textSize="4"
        textSpacing="1"
        autoplay
        onViewAll={() => setIsOpen(true)}
        boxing
      />

      <Dialog title="전체보기" isOpen={isOpen} onClose={() => setIsOpen(false)} maximize showClose>
        <BannerList
          variant="grid"
          data={refinedData}
          bannerType="landscape"
          textInside
          textSize="4"
          textSpacing="1"
        />
      </Dialog>
    </Display>
  );
};
MLBN009_1.displayName = 'MLBN009_1';
