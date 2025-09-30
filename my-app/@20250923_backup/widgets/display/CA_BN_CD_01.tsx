// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface CA_BN_CD_01Props extends DisplayProps {
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
  }[];
  columns?: 1.5 | 2.5;
}

export const CA_BN_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  columns = 1.5,
}: CA_BN_CD_01Props) => {
  const refinedData = data.map(({ image, title, subtitle, href }) => ({
    image,
    title,
    subtitle,
    href,
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
        columns={columns - 0.3}
        bannerType="portrait"
        titleProps={{
          titleLine: 1,
          titleWeight: 'medium',
        }}
      />
    </Display>
  );
};
CA_BN_CD_01.displayName = 'CA_BN_CD_01';
