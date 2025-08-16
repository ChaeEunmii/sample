import { useState } from 'react';
import { ProdCardList } from '@widgets/product';
import { Carousel, Masonry } from '@/shared/ui';
import {
  MLBN001,
  MLBN002,
  MLBN004,
  MLBN005,
  MLBN006_1,
  MLBN006_2,
  MLBN006_3,
  MLBN007,
  MLBN008,
  MLBN009,
  MLBN010,
  MLBN011,
  MLBN012,
  MLBN014,
  MLBN016,
  MLBN017,
  MLBN019,
  MLPD001,
  MLPD007,
  MLBNPD001_1,
  MLBNPD001_2,
  MLBNPD002,
  MLBNPD003,
  MLBNPD004,
  MLBNPD006,
  MLBNPD007,
  MLBN023,
  MLBN024,
  MLBN025_1,
  MLBN025_2,
  MLBN025_3,
  MLBN026,
  MLBN027,
  MLPD010,
  MLBN028,
  MLBN029,
  MLBN030,
  MLBN031,
  MLBN032,
  MLPD015_2,
  MLVDO002,
  MLVDO007_3,
  MLLIVE001,
  MLLIVE002,
} from '@widgets/display';

// 임시 데이터
import { mockProdBanner } from '@mocks/product';
import {
  mockBannerList,
  mockBannerTabs,
  mockIconBanners,
  mockBannerWithTag,
  mockTextBanners,

  // 라이브배너
  mockLiveBannersLite,
  mockLiveBannersProd,
  mockLiveBannersBrand,
} from '@/mocks/banner';
import { mockLiveCardList } from '@mocks/display';

export default function Sample2() {
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

  const cardData = [
    { title: 'Card 1', content: 'Masonry 임시 카드입니다', height: 120 },
    { title: 'Card 2', content: 'Masonry 임시 카드입니다', height: 180 },
    { title: 'Card 3', content: 'Masonry 임시 카드입니다', height: 240 },
    { title: 'Card 4', content: 'Masonry 임시 카드입니다', height: 100 },
    { title: 'Card 5', content: 'Masonry 임시 카드입니다', height: 160 },
    { title: 'Card 6', content: 'Masonry 임시 카드입니다', height: 200 },
    { title: 'Card 7', content: 'Masonry 임시 카드입니다', height: 90 },
    { title: 'Card 8', content: 'Masonry 임시 카드입니다', height: 220 },
    { title: 'Card 9', content: 'Masonry 임시 카드입니다', height: 140 },
  ];

  const priceData = [
    { id: 'option1', label: '전체' },
    { id: 'option2', label: '3만원 미만' },
    { id: 'option3', label: '3~5만원' },
    { id: 'option4', label: '5~10만원' },
    { id: 'option5', label: '10만원 이상' },
    { id: 'option6', label: '20만원 이상' },
    { id: 'option7', label: '30만원 이상' },
    { id: 'option8', label: '50만원 이상' },
    { id: 'option9', label: '5만원 미만' },
    { id: 'option10', label: '5~15만원' },
    { id: 'option11', label: '15~30만원' },
    { id: 'option12', label: '30~50만원' },
  ];

  const [selectedDate, setSelectedDate] = useState('2025-07-04');
  const availableDates = [
    '2025-07-01',
    '2025-07-02',
    '2025-07-03',
    '2025-07-04',
    '2025-07-05',
    '2025-07-06',
    '2025-07-07',
    '2025-07-08',
    '2025-07-09',
    '2025-07-10',
  ];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    console.log('선택된 날짜:', date);
  };

  return (
    <div style={{ paddingBottom: '20px' }}>
      <MLLIVE001
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        dates={availableDates}
        defaultDate={selectedDate}
        onDateSelect={handleDateSelect}
        data={mockLiveCardList}
        activeIds={['1']}
      />
      <MLLIVE001
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        dates={availableDates}
        defaultDate={selectedDate}
        onDateSelect={handleDateSelect}
        data={[mockLiveCardList[0]]}
      />
      <MLLIVE002
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockLiveBannersProd}
      />
      <MLPD015_2
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        // tabs={mockBannerTabs}
        data={mockProdBanner}
        // price={priceData}
      />
      <MLBNPD007
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        tabs={mockBannerTabs}
        banner={mockBannerList[0]}
        products={mockProdBanner.slice(0, 3)}
      />
      <MLBNPD006
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={[
          {
            tab: mockBannerTabs[0],
            banner: mockBannerList[0],
            thumbnails: mockBannerList.slice(0, 3),
          },
          {
            tab: mockBannerTabs[1],
            banner: mockBannerList[1],
            thumbnails: mockBannerList.slice(0, 3),
          },
          {
            tab: mockBannerTabs[2],
            banner: mockBannerList[2],
            thumbnails: mockBannerList.slice(0, 3),
          },
        ]}
      />
      <MLBN032
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockTextBanners}
      />
      <MLBN028
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockBannerList}
      />
      <MLBN030
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockBannerList}
      />
      <MLPD010
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockBannerWithTag}
      />
      <MLBN027
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockBannerList}
        content={{
          title: { text: '배너 공통 타이틀 영역' },
          desc: { text: '배너 서브타이틀 영역입니다. 배너 서브타이틀 영역입니다.' },
          moreUrl: '#',
        }}
      />
      <MLBNPD004
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={[
          {
            banner: mockBannerList[0],
            prodTitle: { title: '상품 타이틀', subtitle: '상품 서브타이틀 영역입니다.' },
            products: mockProdBanner.slice(0, 3),
          },
          {
            banner: mockBannerList[1],
            prodTitle: { title: '베스트 상품', subtitle: '인기 상품을 만나보세요.' },
            products: mockProdBanner.slice(0, 3),
          },
          {
            banner: mockBannerList[2],
            prodTitle: { title: '신상품 컬렉션', subtitle: '새로운 상품들을 확인해보세요.' },
            products: mockProdBanner.slice(0, 3),
          },
        ]}
      />
      <MLBNPD002
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        banner={mockBannerList[0]}
        prodTitle={{ title: '상품 타이틀', subtitle: '상품 서브타이틀 영역입니다.' }}
        products={mockProdBanner}
      />
      <MLBNPD001_2
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        banner={mockBannerList[0]}
        products={mockProdBanner}
      />
      <MLBNPD001_1
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        banner={mockBannerList[0]}
        tabs={mockBannerTabs}
        products={mockProdBanner}
      />
      <MLBN001
        title="EXCLUSIVE OFFERS"
        subtitle="신규 런칭 최저가 특가 타임딜"
        moreUrl="#"
        data={mockBannerList}
      />
      {/* Masonry */}
      <Masonry columns={2} gutter={8}>
        {cardData.map((card, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px',
              backgroundColor: '#f2f2f2',
              borderRadius: '4px',
              height: `${card.height}px`,
              border: '1px solid #ddd',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Masonry>
      {/* Carousel */}
    </div>
  );
}
