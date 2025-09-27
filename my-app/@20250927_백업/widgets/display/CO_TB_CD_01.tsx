import { Tabs } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface CO_TB_CD_01Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    caption?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export const CO_TB_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  data,
  defaultTab,
  onTabChange,
}: CO_TB_CD_01Props) => {
  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

  const refinedData = data.map(({ image, title, subtitle, href, ad, caption }) => ({
    image,
    title,
    subtitle,
    href,
    ad,
    caption,
  }));

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Tabs
        data={tabs}
        variant="buttons"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />
      <BannerList variant="grid" data={refinedData} />
    </Display>
  );
};
CO_TB_CD_01.displayName = 'CO_TB_CD_01';
