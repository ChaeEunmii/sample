import { TextButton, ButtonArea } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { BannerTitle } from '@widgets/banner/BannerTitle';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface MLBN027Props extends DisplayProps {
  data: {
    image?: { src: string; alt?: string; figure?: boolean };
    href: string;
    ad?: boolean;
  }[];
  content?: {
    title?: TextWithColor;
    desc?: TextWithColor;
    moreUrl?: string;
    moreText?: string;
  };
}

export const MLBN027 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  content,
}: MLBN027Props) => {
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
        variant={data.length === 1 ? 'grid' : 'swiper'}
        data={refinedData}
        {...(data.length !== 1 ? { columns: 1.2 } : {})}
        bannerType="square"
      />
      <BannerTitle title={content?.title} subtitle={content?.desc} margin />
      {content?.moreUrl && (
        <ButtonArea margin="1">
          <TextButton href={content.moreUrl} variant="underline" size="1" color="gray2">
            {content.moreText || '더보기'}
          </TextButton>
        </ButtonArea>
      )}
    </Display>
  );
};
MLBN027.displayName = 'MLBN027';
