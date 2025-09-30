import { useState } from 'react';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';

export interface MLPD001Props extends DisplayProps {
  data: ProdCardItemProps[];
  variant?: 'grid' | 'swiper';
  columns?: 1 | 1.5 | 2 | 2.5 | 3;
  rows?: 1 | 2;
  cardType?: 'horizontal' | 'vertical';
  /** 카드 사이즈(type = horizontal일 때에만 사용) */
  cardSize?: 'small' | 'medium';
  showGem?: boolean;
}

export const MLPD001 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  variant = 'swiper',
  columns = 2.5,
  rows = 1,
  cardType = 'vertical',
  cardSize,
  showGem = false,
}: MLPD001Props) => {
  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['prod-1', 'prod-3']);

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

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <ProdCardList
        data={data}
        variant={variant}
        columns={columns}
        cardType={cardType}
        cardSize={cardSize}
        wishlist={
          showGem
            ? {
                activeIds: wishlistIds,
                onToggle: handleWishlistToggle,
              }
            : undefined
        }
        autofit
        rows={rows}
      />
    </Display>
  );
};
MLPD001.displayName = 'MLPD001';
