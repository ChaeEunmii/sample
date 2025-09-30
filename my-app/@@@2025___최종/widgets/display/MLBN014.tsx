import { FlickingBanner } from '@widgets/banner/FlickingBanner';
import { Display, DisplayProps } from './Display';

export interface MLBN014Props extends DisplayProps {
  image: {
    src: string;
    alt?: string;
  };
  video: {
    src: string;
    poster?: string;
    label?: string;
  };
  href: string;
  ad?: boolean;
}

export const MLBN014 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  image,
  video,
  href,
  ad,
}: MLBN014Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <FlickingBanner image={{ ...image }} video={{ ...video }} href={href} ad={ad} />
    </Display>
  );
};

MLBN014.displayName = 'MLBN014';
