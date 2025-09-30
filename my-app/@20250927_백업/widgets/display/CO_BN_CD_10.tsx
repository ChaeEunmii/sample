// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Dialog } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_CD_10Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const CO_BN_CD_10 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_CD_10Props) => {
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
        variant={data.length > 1 ? 'swiper' : 'grid'}
        data={refinedData}
        bannerType="landscape"
        textInside
        textSize="4"
        textSpacing="in1"
        {...(data.length > 1
          ? { autoplay: true, onViewAll: () => setIsOpen(true), boxing: true }
          : {})}
      />

      <Dialog title="전체보기" isOpen={isOpen} onClose={() => setIsOpen(false)} maximize showClose>
        <BannerList
          variant="grid"
          data={refinedData}
          bannerType="landscape"
          textInside
          textSize="4"
          textSpacing="in1"
        />
      </Dialog>
    </Display>
  );
};
CO_BN_CD_10.displayName = 'CO_BN_CD_10';
