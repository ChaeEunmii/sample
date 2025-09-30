import { useState } from 'react';
// 컴포넌트
import { Masonry } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { BrandCard, BrandCardProps } from '@widgets/brand/BrandCard';
import { Banner, BannerProps } from '@widgets/banner/Banner';
import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard';
import { CollectionCard, CollectionCardProps } from '@widgets/collection/CollectionCard';

type CollectionType = Omit<CollectionCardProps, 'gem' | 'color' | 'pattern'>;
type BrandType = Pick<BrandCardProps, 'id' | 'href' | 'image' | 'brand'>;
type MespaceType = Omit<MeCardProps, 'cardSize'>;
type BannerType = Pick<BannerProps, 'title' | 'subtitle' | 'image' | 'href'>;
type ProductType = Pick<ProdCardProps, 'id' | 'href' | 'image' | 'brand' | 'title' | 'price'>;

export interface HF_RC_GD_01Props extends Pick<DisplayProps, 'margin'> {
  collections: CollectionType[];
  brands: BrandType[];
  mespaces: MespaceType[];
  banners?: BannerType[];
  products: ProductType[];
}

export const HF_RC_GD_01 = ({
  margin,
  collections,
  brands,
  mespaces,
  banners = [],
  products,
}: HF_RC_GD_01Props) => {
  const [likedCards, setLikedCards] = useState<Record<string, { count: number; isLiked: boolean }>>(
    {}
  );
  const [brandGemIds, setBrandGemIds] = useState<Record<string, boolean>>({});
  const [productGemIds, setProductGemIds] = useState<Record<string, boolean>>({});

  const handleLikeToggle = (cardId: string, isLiked: boolean, baseCount = 0) => {
    setLikedCards((prev) => ({
      ...prev,
      [cardId]: {
        count: isLiked
          ? (prev[cardId]?.count ?? baseCount) + 1
          : (prev[cardId]?.count ?? baseCount) - 1,
        isLiked,
      },
    }));
  };

  const handleBrandGemToggle = (id: string, isActive: boolean) => {
    setBrandGemIds((prev) => ({ ...prev, [id]: isActive }));
  };

  const handleProductGemToggle = (id: string, isActive: boolean) => {
    setProductGemIds((prev) => ({ ...prev, [id]: isActive }));
  };

  const data = {
    collections,
    brands,
    mespaces,
    banners,
    products,
  };

  const layout = [
    { type: 'brand', index: 0 },
    { type: 'banner', index: 0 },
    { type: 'product', index: 0 },
    { type: 'mespace', index: 0 },
    { type: 'collection', index: 0 },
    { type: 'collection', index: 1 },
    { type: 'banner', index: 1 },
    { type: 'product', index: 1 },
    { type: 'mespace', index: 1 },
    { type: 'brand', index: 1 },
  ];

  const components = {
    brand: (item: BrandType, key: string) => (
      <BrandCard
        key={key}
        {...item}
        gem={{
          isActive: !!brandGemIds[item.id],
          onChange: (id: string, active: boolean) => handleBrandGemToggle(id, active),
        }}
      />
    ),
    banner: (item: BannerType, key: string) => (
      <Banner
        key={key}
        ratio="tall"
        size="small"
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        href={item.href || '#'}
      />
    ),
    product: (item: ProductType, key: string) => (
      <ProdCard
        key={key}
        {...item}
        variant="boxed"
        gem={{
          isActive: !!productGemIds[item.id],
          onChange: (id: string, active: boolean) => handleProductGemToggle(id, active),
        }}
      />
    ),
    mespace: (item: MespaceType, key: string) => (
      <MeCard
        key={key}
        {...item}
        cardSize="small"
        infoType="social"
        color="white"
        likes={
          item.likes && {
            count: likedCards[item.id!]?.count ?? item.likes.count,
            isLiked: likedCards[item.id!]?.isLiked ?? item.likes.isLiked,
            onToggle: (id: string, next: boolean) => handleLikeToggle(id, next, item.likes?.count),
          }
        }
      />
    ),
    collection: (item: CollectionType, key: string) => (
      <CollectionCard key={key} {...item} variant="banner" />
    ),
  };

  return (
    <Display margin={margin}>
      <Masonry columns={2}>
        {layout.map(({ type, index }, i) => {
          const source = (data as any)[`${type}s`];
          const item = source?.[index];
          return item ? components[type as keyof typeof components](item, `${type}-${i}`) : null;
        })}
      </Masonry>
    </Display>
  );
};

HF_RC_GD_01.displayName = 'HF_RC_GD_01';
