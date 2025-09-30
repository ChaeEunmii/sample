// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { Grid, Carousel } from '@shared/ui';
import { BrandSeller } from '@widgets/brand/BrandSeller';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';

export interface CO_BP_LI_04Props extends DisplayProps {
  data: {
    seller: {
      image?: { src: string; alt?: string };
      name: string;
      desc?: React.ReactNode;
    };
    products?: ProdCardItemProps[];
  }[];
  layout?: 'list' | 'slide';
}

export const CO_BP_LI_04 = ({
  margin,
  title,
  subtitle,
  moreUrl,
  data,
  layout = 'list',
}: CO_BP_LI_04Props) => {
  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['prod-1']);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive
        ? prev.includes(productId)
          ? prev
          : [...prev, productId]
        : prev.filter((id) => id !== productId)
    );

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  // 아이템 렌더링
  const renderItem = (
    seller: CO_BP_LI_04Props['data'][number]['seller'],
    products?: ProdCardItemProps[]
  ) => {
    return (
      <>
        <BrandSeller {...seller} />
        {products && (
          <ProdCardList
            data={products}
            cardType="horizontal"
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
            className="ncp-mt-s"
          />
        )}
      </>
    );
  };

  return (
    <Display margin={margin} title={title} subtitle={subtitle} moreUrl={moreUrl}>
      {layout === 'list' ? (
        <Grid gutter={24}>
          {data.map(({ seller, products }, idx) => (
            <Grid.Item key={idx}>{renderItem(seller, products)}</Grid.Item>
          ))}
        </Grid>
      ) : (
        <Carousel
          slides={data.map(({ seller, products }, idx) => (
            <div key={idx}>{renderItem(seller, products)}</div>
          ))}
          slidesPerView={1.1}
          spaceBetween={8}
        />
      )}
    </Display>
  );
};

CO_BP_LI_04.displayName = 'CO_BP_LI_04';
