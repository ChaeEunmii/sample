// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Dialog } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_CD_01Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
  }[];
}

export const CO_BN_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_CD_01Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const refinedData = data.map(({ image, title, subtitle, href, ad, emblem }) => ({
    image,
    title,
    subtitle,
    href,
    ad,
    emblem,
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
        bannerType="portrait"
        textInside
        textSize="4"
        textSpacing="in2"
        {...(data.length > 1
          ? { autoplay: true, onViewAll: () => setIsOpen(true), boxing: true }
          : {})}
      />

      <Dialog title="전체보기" isOpen={isOpen} onClose={() => setIsOpen(false)} maximize showClose>
        <BannerList
          variant="grid"
          data={refinedData}
          bannerType="portrait"
          textInside
          textSize="4"
          textSpacing="in2"
          gutter={16}
          className="ncp-mt-l"
        />
      </Dialog>
    </Display>
  );
};
CO_BN_CD_01.displayName = 'CO_BN_CD_01';
