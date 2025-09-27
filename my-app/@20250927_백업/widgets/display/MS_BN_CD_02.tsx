'use client';

// 라이브러리
import { useState, Fragment } from 'react';
// 컴포넌트
import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { Carousel } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';

interface MS_BN_CD_02Props extends DisplayProps {
  data: {
    mespace: Omit<MeCardProps, 'cardSize'>;
    products?: ProdCardItemProps[];
  }[];
}

export const MS_BN_CD_02 = ({ title, subtitle, moreUrl, margin, data }: MS_BN_CD_02Props) => {
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

  const renderCard = () => {
    return data.map((item, idx) => (
      <Fragment key={idx}>
        <MeCard {...item.mespace} />
        {item.products && (
          <ProdCardList
            data={item.products.slice(0, 2) || []} // 최대 2개만 전달
            variant="grid"
            columns={1}
            gutter="12px"
            cardType="horizontal"
            cardSize="small"
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
            className="ncp-mt-s"
          />
        )}
      </Fragment>
    ));
  };
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      {data.length > 1 ? (
        <Carousel slides={renderCard()} slidesPerView={1.2} spaceBetween={8} />
      ) : (
        renderCard()
      )}
    </Display>
  );
};

MS_BN_CD_02.displayName = 'MS_BN_CD_02';
