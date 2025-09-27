// 컴포넌트
import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_IC_04Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  iconType?: 'round' | 'square';
}

export const CO_BN_IC_04 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  iconType,
}: CO_BN_IC_04Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <IconBanner data={data} columns={3} iconType={iconType} />
    </Display>
  );
};
CO_BN_IC_04.displayName = 'CO_BN_IC_04';
