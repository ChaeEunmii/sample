// 컴포넌트
import { Tabs } from '@shared/ui';
import { TextBanner } from '@widgets/banner/TextBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { TextWithColor } from '../banner/bannerType';

export interface ML_ATTAG_BN_003Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  data: {
    title: TextWithColor;
    subtitle: TextWithColor;
    href: string;
  }[];
}

export const ML_ATTAG_BN_003 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  defaultTab,
  onTabChange,
  data,
}: ML_ATTAG_BN_003Props) => {
  const refinedData = data.map(({ title, href, subtitle }) => ({
    title,
    subtitle,
    href,
  }));

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
      <TextBanner data={refinedData} variant="arrow" color="gray" reverse maxItems={6} />
    </Display>
  );
};
ML_ATTAG_BN_003.displayName = 'ML_ATTAG_BN_003';
