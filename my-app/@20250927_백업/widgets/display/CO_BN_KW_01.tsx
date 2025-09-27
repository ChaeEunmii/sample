// 컴포넌트
import { TagBanner } from '@widgets/banner/TagBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_KW_01Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  multiline?: boolean;
}

export const CO_BN_KW_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  multiline,
}: CO_BN_KW_01Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <TagBanner data={data} multiline={multiline} />
    </Display>
  );
};
CO_BN_KW_01.displayName = 'CO_BN_KW_01';
