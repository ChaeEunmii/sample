// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';

export interface HF_PD_COL2_01Props {
  title?: string;
  margin?: DisplayProps['margin'];
  data: ProdCardItemProps[];
}

export const HF_PD_COL2_01 = ({ margin, title, data }: HF_PD_COL2_01Props) => {
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
    <Display margin={margin} title={title} titleType="bubble">
      <ProdCardList
        data={data}
        columns={2}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
        cardVariant="boxed"
      />
    </Display>
  );
};
HF_PD_COL2_01.displayName = 'HF_PD_COL2_01';
