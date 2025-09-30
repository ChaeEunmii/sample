// 컴포넌트
import { Grid } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface HF_BN_LI_01Props {
  title?: string;
  margin?: DisplayProps['margin'];
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    description?: React.ReactNode;
    href: string;
    ad?: boolean;
    emblem?: string;
  }[];
  layout?: 'overlay' | 'boxed';
}

export const HF_BN_LI_01 = ({ title, margin, data, layout = 'overlay' }: HF_BN_LI_01Props) => {
  const refinedData = data.map(({ image, title, subtitle, description, href, ad }) => ({
    image,
    title,
    subtitle,
    description,
    href,
    ad,
  }));
  return (
    <Display title={title} margin={margin} titleType="bubble">
      <Grid gutter={16}>
        {refinedData.map((item, idx) => (
          <Banner
            key={idx}
            {...item}
            {...(layout === 'overlay' ? { textInside: true } : { variant: 'boxed' })}
            textSize="4"
          />
        ))}
      </Grid>
    </Display>
  );
};
HF_BN_LI_01.displayName = 'HF_BN_LI_01';
