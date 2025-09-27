// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia } from '@widgets/banner/bannerType';

export interface CO_BN_CD_07Props extends DisplayProps {
  data: {
    image: BannerMedia;
    href: string;
    ad?: boolean;
  }[];
}

export const CO_BN_CD_07 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_CD_07Props) => {
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

CO_BN_CD_07.displayName = 'CO_BN_CD_07';
