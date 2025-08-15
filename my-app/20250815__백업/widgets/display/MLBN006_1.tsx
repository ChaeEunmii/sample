import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN006_1Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN006_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLBN006_1Props) => {
  const refinedData = data.map(({ image, title, href, ad }) => ({
    image,
    title,
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
        variant="grid"
        data={refinedData}
        columns={2}
        bannerType="square"
        textInside
        textSize="1"
        align="center"
      />
    </Display>
  );
};
MLBN006_1.displayName = 'MLBN006_1';
