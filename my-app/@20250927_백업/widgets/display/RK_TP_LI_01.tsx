// // 컴포넌트
// import { Display, DisplayProps } from '@widgets/display/Display';
// import { ProdRankingList, ProdRankingItemProps } from '@widgets/product/ProdRankingList';
// import { PriceFilter, TabItem } from '../form/PriceFilter';

// export interface RK_TP_LI_01Props extends DisplayProps {
//   tabData: TabItem[];
//   data: ProdRankingItemProps[];
//   columns?: number;
//   defaultTab?: string;
//   onTabChange?: (id: string) => void;
// }

// export const RK_TP_LI_01 = ({
//   margin,
//   title,
//   subtitle,
//   moreUrl,
//   tabData,
//   data,
//   columns = 2,
// }: RK_TP_LI_01Props) => {
//   return (
//     <Display margin={margin} title={title} subtitle={subtitle} moreUrl={moreUrl}>
//       <PriceFilter tabData={tabData} />
//       <ProdRankingList data={data} columns={columns} showChange loop />
//     </Display>
//   );
// };
// RK_TP_LI_01.displayName = 'RK_TP_LI_01';

import { Tabs } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

// 임시데이터
import { ProdRankingList } from '../product';
import { ProdRankingItemProps } from '../product/ProdRankingList';

export interface RK_TP_LI_01Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  price?: Array<{
    id: string;
    label: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  defaultPriceTab?: string;
  onPriceTabChange?: (id: string) => void;
  data: ProdRankingItemProps[];
  columns?: 1 | 2 | 3;
}

export const RK_TP_LI_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  data,
  defaultTab,
  onTabChange,
  price,
  defaultPriceTab,
  onPriceTabChange,
  columns = 2,
}: RK_TP_LI_01Props) => {
  // [Tab] 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

  // [Price Tab] 가격 탭 상태 관리
  const defaultFilterIdx = defaultPriceTab ? price?.findIndex((p) => p.id === defaultPriceTab) : 0;

  // 가격 탭 변경 핸들러
  const handlePriceTabChange = (activeIdx: number) => {
    if (!price) return;
    const activeId = price[activeIdx]?.id;
    onPriceTabChange?.(activeId);
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <Tabs
        data={tabs}
        variant="buttons"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />

      {/* 가격 선택 탭 */}
      {price && (
        <Tabs
          data={price}
          variant="texts"
          defaultActive={defaultFilterIdx}
          onTabChange={handlePriceTabChange}
        />
      )}

      {/* 상품 리스트 */}
      <ProdRankingList data={data} columns={columns} showChange loop />
    </Display>
  );
};
RK_TP_LI_01.displayName = 'RK_TP_LI_01';
