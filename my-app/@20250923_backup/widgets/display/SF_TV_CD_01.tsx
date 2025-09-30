// 컴포넌트
import { Tabs } from '@shared/ui';
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface SF_TV_CD_01Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  data: {
    video?: {
      src: string;
      poster?: string;
      label?: string;
    };
    onClick: () => void;
    brand?: { image: string; name: string };
  }[];
  multiline?: boolean;
}

export const SF_TV_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  defaultTab,
  onTabChange,
  data,
  multiline,
}: SF_TV_CD_01Props) => {
  const refinedData = data.map(({ video, onClick, brand }) => ({
    video,
    onClick,
    brand,
  }));
  console.log(refinedData);

  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

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
      <BannerList
        variant="swiper"
        data={refinedData}
        columns={2.2}
        rows={multiline ? 2 : undefined}
        bannerType="live"
        bannerSize="small"
      />
    </Display>
  );
};
SF_TV_CD_01.displayName = 'SF_TV_CD_01';
