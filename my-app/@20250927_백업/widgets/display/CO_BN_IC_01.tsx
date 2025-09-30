// 컴포넌트
import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_IC_01Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  iconType?: 'round' | 'square';
}

export const CO_BN_IC_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  iconType,
}: CO_BN_IC_01Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <IconBanner data={data} columns={4} iconType={iconType} variant="more" />
    </Display>
  );
};
CO_BN_IC_01.displayName = 'CO_BN_IC_01';
