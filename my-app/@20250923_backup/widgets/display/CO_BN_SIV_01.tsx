// 컴포넌트
import { FlickingBanner } from '@widgets/banner/FlickingBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface CO_BN_SIV_01Props extends DisplayProps {
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

export const CO_BN_SIV_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  image,
  video,
  href,
  ad,
}: CO_BN_SIV_01Props) => {
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

CO_BN_SIV_01.displayName = 'CO_BN_SIV_01';
