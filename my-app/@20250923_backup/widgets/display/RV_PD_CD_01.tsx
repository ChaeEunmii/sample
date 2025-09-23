// 라이브러리
import { useState, useMemo } from 'react';
// 컴포넌트
import { Carousel } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ReviewBriefCard } from '@widgets/review';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard';

export interface RV_PD_CD_01Props extends DisplayProps {
  data: {
    id?: string;
    rating: string | number;
    total: number;
    review: React.ReactNode;
    href: string;
    product: Pick<ProdCardProps, 'id' | 'image' | 'brand' | 'title' | 'price' | 'button'>;
  }[];
}

export const RV_PD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: RV_PD_CD_01Props) => {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  const handleWishlistToggle = (productId: string, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        return [...prev, productId];
      } else {
        return prev.filter((id) => id !== productId);
      }
    });
  };

  const renderItem = () => {
    return data.map((item, idx) => {
      const isWishlistActive = item.product.id ? wishlistIds.includes(item.product.id) : false;

      return (
        <div key={item.id || idx}>
          <ReviewBriefCard
            id={item.id}
            rating={item.rating}
            total={item.total}
            review={item.review}
            reviewLine={4}
            href={item.href}
          />
          <ProdCard
            {...item.product}
            href={item.href}
            type="horizontal"
            size="small"
            gem={{
              isActive: isWishlistActive,
              onChange: handleWishlistToggle,
            }}
            variant="boxed"
            className="ncp-mt-s"
          />
        </div>
      );
    });
  };

  const slides = useMemo(() => renderItem(), [data, wishlistIds]);

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {data.length > 1 ? (
        <Carousel slides={slides} slidesPerView={1} pagination="bullet" spaceBetween={8} boxing />
      ) : (
        slides
      )}
    </Display>
  );
};

RV_PD_CD_01.displayName = 'RV_PD_CD_01';
