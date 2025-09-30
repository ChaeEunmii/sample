import { useState } from 'react';
import { CollectionCard } from '@widgets/collection/CollectionCard';
import { Carousel } from '@shared/ui';
import { Display } from '@widgets/display/Display';

// 더미 데이터
import { mockCollectionList } from '@/mocks/gem';

export const ML_B_COLLECTION_001 = () => {
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-1', 'prod-3']);

  const handleWishlistToggle = (profileId: string, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        return prev.includes(profileId) ? prev : [...prev, profileId];
      } else {
        return prev.filter((id) => id !== profileId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, profileId);
  };

  const renderProfile = () => {
    return mockCollectionList.map((collection) => (
      <CollectionCard
        {...collection}
        pattern="2"
        color="gray"
        gem={{ isActive: wishlistIds.includes(collection.id), onChange: handleWishlistToggle }}
      />
    ));
  };

  return (
    <Display title="컬렉션" moreUrl="#">
      <Carousel slides={renderProfile()} slidesPerView={1.2} spaceBetween={8} />
    </Display>
  );
};
