// 컴포넌트
import { TagBanner } from '@widgets/banner/TagBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { TextWithColor } from '@widgets/banner/bannerType';

export interface HF_BN_KW_01Props {
  title?: string;
  margin?: DisplayProps['margin'];
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  multiline?: boolean;
}

export const HF_BN_KW_01 = ({ title, margin, data, multiline = false }: HF_BN_KW_01Props) => {
  return (
    <Display title={title} margin={margin} titleType="bubble">
      <TagBanner data={data} multiline={multiline} color="white" />
    </Display>
  );
};
HF_BN_KW_01.displayName = 'HF_BN_KW_01';
