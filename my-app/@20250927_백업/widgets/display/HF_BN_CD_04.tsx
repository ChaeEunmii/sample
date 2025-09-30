import { useState } from 'react';
// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface HF_BN_CD_04Props {
  margin?: DisplayProps['margin'];
  data: {
    id?: string;
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    showGem?: boolean;
  }[];
}

export const HF_BN_CD_04 = ({ margin, data }: HF_BN_CD_04Props) => {
  const refinedData = data.map(({ id, image, title, subtitle, href, showGem }) => ({
    id,
    image,
    title,
    subtitle,
    href,
    showGem,
  }));

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<string[]>(['bn-1']);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string, isActive: boolean) => {
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
  return (
    <Display margin={margin}>
      <BannerList
        variant="grid"
        data={refinedData}
        bannerType="tall"
        columns={2}
        textInside
        bannerSize="small"
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};
HF_BN_CD_04.displayName = 'HF_BN_CD_04';
