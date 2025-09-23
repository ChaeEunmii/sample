// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Tabs } from '@shared/ui';
import { VoucherCardProps } from '@widgets/coupon/VoucherCard';
import { VoucherCardList } from '@widgets/coupon/VoucherCardList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface BT_TP_LI_01Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  data: VoucherCardProps[];
}

export const BT_TP_LI_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  defaultTab,
  onTabChange,
  data,
}: BT_TP_LI_01Props) => {
  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

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
      <VoucherCardList
        data={data}
        cardVariant="boxed"
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};
BT_TP_LI_01.displayName = 'BT_TP_LI_01';
