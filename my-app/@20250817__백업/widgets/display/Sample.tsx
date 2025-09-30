'use client';

import { useState } from 'react';
import { TitleBar } from '@shared/ui';
import { ProdCard, ProdCardList } from '@widgets/product';

// 임시 데이터
import { mockProdCards, mockProdCase, mockProdSimpleCase } from '@mocks/product';

const mockTitle = {
  title: 'EXCLUSIVE OFFERS',
  subtitle: '신규 런칭 최저가 특가 타임딜',
  moreUrl: '#',
};

interface SampleProps {
  params: {
    type: 'test' | 'title' | 'vertical' | 'horizontal';
  };
}

export default function Sample({ params }: SampleProps) {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  if (params.type === 'title') {
    return (
      <>
        <TitleBar title="🔖 모듈정의 - 타이틀 케이스" />
        {/* 아래는 예시 케이스이고 실제로는 각 모듈 컴포넌트 또는 Display 컴포넌트에서 해당 속성을 사용해야함 */}
        <TitleBar type="module" {...mockTitle} />
        <TitleBar type="module" {...mockTitle} align="center" />
        <TitleBar type="module" {...mockTitle} align="right" />

        <TitleBar type="module" title={mockTitle.title} moreUrl={mockTitle.moreUrl} />
        <TitleBar
          type="module"
          title={mockTitle.title}
          moreUrl={mockTitle.moreUrl}
          align="center"
        />
        <TitleBar type="module" title={mockTitle.title} moreUrl={mockTitle.moreUrl} align="right" />

        <TitleBar type="module" title={mockTitle.title} />
        <TitleBar type="module" title={mockTitle.title} align="center" />
        <TitleBar type="module" title={mockTitle.title} align="right" />
      </>
    );
  }

  if (params.type === 'vertical') {
    return (
      <>
        <TitleBar title="🔖 모듈정의 - 상품 유닛 (세로형)" />
        <ProdCardList
          data={mockProdCase}
          columns={3}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(세로)_3열" />
        <ProdCardList
          data={mockProdCase.slice(0, 6)}
          columns={3}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(세로)_2.5열" />
        <ProdCardList
          data={mockProdCase.slice(0, 6)}
          variant="swiper"
          columns={2.5}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(세로)_2열" />
        <ProdCardList
          data={mockProdCase.slice(0, 4)}
          columns={2}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(세로)_1.5열" />
        <ProdCardList
          data={mockProdCase.slice(0, 4)}
          variant="swiper"
          columns={1.5}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(세로)_1열" />
        <ProdCardList
          data={mockProdCase.slice(0, 2)}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </>
    );
  }

  if (params.type === 'horizontal') {
    return (
      <>
        <TitleBar title="🔖 모듈정의 - 상품 유닛 (가로형)" />
        <ProdCardList
          data={mockProdCase}
          cardType="horizontal"
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(가로)_소형" />
        <ProdCardList
          data={mockProdCase.slice(0, 2)}
          cardType="horizontal"
          cardSize="small"
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 상품유닛(가로)_소형_단축형" />
        <ProdCardList
          data={mockProdSimpleCase.slice(0, 4)}
          variant="swiper"
          cardType="horizontal"
          cardSize="small"
          columns={1.3}
        />

        <TitleBar title="🔖 모듈정의 - 상품유닛(가로)_중형" />
        <ProdCardList
          data={mockProdCase.slice(0, 2)}
          cardType="horizontal"
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />

        <TitleBar title="🔖 상품유닛(가로)_중형_단축형" />
        <ProdCardList
          data={mockProdSimpleCase.slice(0, 4)}
          variant="swiper"
          cardType="horizontal"
          columns={1.1}
        />

        <TitleBar title="🔖 상품유닛(가로)_중형_박스" />
        <ProdCardList
          data={mockProdCase.slice(0, 4)}
          cardType="horizontal"
          cardVariant="boxed"
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </>
    );
  }

  if (params.type === 'test') {
    return (
      <>
        <ProdCard
          {...mockProdCards[0]}
          gem={{
            isActive: wishlistIds.includes(mockProdCards[0].id),
            onChange: handleWishlistToggle,
          }}
        />
        <ProdCard
          {...mockProdCards[1]}
          isSoldOut
          gem={{
            isActive: wishlistIds.includes(mockProdCards[1].id),
            onChange: handleWishlistToggle,
          }}
        />
        <ProdCard
          {...mockProdCards[2]}
          isAdult
          isSoldOut
          gem={{
            isActive: wishlistIds.includes(mockProdCards[2].id),
            onChange: handleWishlistToggle,
          }}
        />
        <ProdCard
          type="horizontal"
          variant="inverse"
          {...mockProdCards[3]}
          gem={{
            isActive: wishlistIds.includes(mockProdCards[3].id),
            onChange: handleWishlistToggle,
          }}
        />

        <br />
        <br />

        <div style={{ padding: '1rem', background: '#222' }}>
          <ProdCard
            variant="inverse"
            {...mockProdCards[2]}
            isAdult
            isSoldOut
            gem={{
              isActive: wishlistIds.includes(mockProdCards[2].id),
              onChange: handleWishlistToggle,
            }}
          />
          <ProdCard
            type="horizontal"
            variant="inverse"
            {...mockProdCards[3]}
            gem={{
              isActive: wishlistIds.includes(mockProdCards[3].id),
              onChange: handleWishlistToggle,
            }}
          />
        </div>
      </>
    );
  }

  return null;
}
