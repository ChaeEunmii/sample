// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Masonry } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard';
import { Banner } from '@widgets/banner/Banner';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface HF_BP_COL2_01Props {
  /** Display 여백 옵션 */
  margin?: DisplayProps['margin'];
  /** 배너 데이터 */
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  /** 상품 카드 리스트 (최대 5개) */
  products: ProdCardProps[];
}

export const HF_BP_COL2_01 = ({ margin, banner, products }: HF_BP_COL2_01Props) => {
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
  };

  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
  };

  return (
    <Display margin={margin}>
      <Masonry columns={2} gutter={6}>
        <Banner {...refinedBanner} ratio="portrait2" size="small" />

        {products.map((product) => (
          <ProdCard
            key={product.id}
            type="vertical"
            variant="boxed"
            {...product}
            gem={{
              isActive: wishlistIds.includes(product.id),
              onChange: handleWishlistToggle,
            }}
          />
        ))}
      </Masonry>
    </Display>
  );
};

HF_BP_COL2_01.displayName = 'HF_BP_COL2_01';
