import { Tabs } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN006_3Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export const MLBN006_3 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  data,
  defaultTab,
  onTabChange,
}: MLBN006_3Props) => {
  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };
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
      <Tabs
        data={tabs}
        variant="buttons"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />
      <BannerList variant="grid" data={refinedData} columns={2} bannerType="square" textSize="1" />
    </Display>
  );
};
MLBN006_3.displayName = 'MLBN006_3';
