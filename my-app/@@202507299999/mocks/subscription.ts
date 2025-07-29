// 구독 > 상품 상세 > 상품 구매정보 안내 샘플 데이터
export const mockProductPurchaseInfo = {
  title: '6월 3주차 (수/금) 반찬 구성',
  name: '투홈구독] 압구정 예향 반찬 구독 (2025년)',
  image: {
    src: '/images/dummy/@sample_img.png',
    alt: '한글 표시 사항',
  },
};

// 구독 > 정기구독 상품 샘플 데이터
export const mockSubscriptionProductItem = [
  {
    id: 'sub-prod-1',
    href: '#',
    image: {
      src: '/images/dummy/@sample_product_02.png',
      alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
    },
    brand: '예향',
    title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
    orderOptions: ['채식주의자용', '6종 세트'],
    price: {
      current: 1560000,
      original: 1800000,
    },
    stock: 6,
    quantity: 23,
  },
];

// 구독 > 정기구독 주기 샘플 데이터
export const mockSubscriptionCycle = {
  period: '1회 맛보기',
  cycle: '1주에 한 번',
  day: '금요일',
};

// 구독 > 이번 회차 상품 정보 샘플 데이터
export const mockProductInfoItem = {
  round: 124,
  package: [
    '시골시래기해장국 650g',
    '사과카레500g',
    '쑥갓도토리묵무침340g',
    '표고버섯강정180g',
    '취나물120g',
    '고구마 단호박 샐러드200g',
    '오징어 실채 70g',
  ],
};

// 구독 > 이번 회차 상품 정보 샘플 데이터 목록
export const mockProductInfoList = [
  {
    ...mockProductInfoItem,
  },
  {
    round: 125,
    package: [
      '미역냉국 650g',
      '순두부찌개 550g',
      '닭갈비 550g',
      '알감자조림 200g',
      '시래기된장나물 250g',
      '계란장 300g',
    ],
  },
  {
    round: 126,
    package: [
      '버섯들깨탕 650g',
      '미역줄기볶음 150g',
      '콩나물국 650g',
      '육전과영앙부추무침 270g',
      '가지찜덮밥소스 360g',
      '명란젓무침 120g',
    ],
  },
  {
    round: 127,
    package: [
      '소고기무국 650g',
      '차돌박이 청국장 500g',
      '국산나물비빔밥세트 300g',
      '황태구이 300g',
      '깻잎장아찌 120g',
      '콩자반 140g',
    ],
  },
  {
    round: 128,
    package: [
      '시골시래기해장국 650g',
      '사과카레500g',
      '쑥갓도토리묵무침340',
      '표고버섯강정180g',
      '취나물120g',
      '고구마 단호박 샐러드200g',
      '오징어 실채 70g',
    ],
  },
  {
    round: 129,
    package: [
      '미역냉국 650g',
      '순두부찌개 550g',
      '닭갈비 550g',
      '알감자조림 200g',
      '시래기된장나물 250g',
      '계란장 300g',
    ],
  },
  {
    round: 130,
    package: [
      '버섯들깨탕 650g',
      '콩나물국 650g',
      '육전과영앙부추무침 270g',
      '가지찜덮밥소스 360g',
      '명란젓무침 120g',
      '미역줄기볶음 150g',
    ],
  },
  {
    round: 131,
    package: [
      '소고기무국 650g',
      '차돌박이 청국장 500g',
      '국산나물비빔밥세트 300g',
      '황태구이 300g',
      '깻잎장아찌 120g',
      '콩자반 140g',
    ],
  },
  {
    round: 132,
    package: [
      '시골시래기해장국 650g',
      '사과카레500g',
      '쑥갓도토리묵무침340',
      '표고버섯강정180g',
      '취나물120g',
      '고구마 단호박 샐러드200g',
      '오징어 실채 70g',
    ],
  },
  {
    round: 133,
    package: [
      '미역냉국 650g',
      '순두부찌개 550g',
      '닭갈비 550g',
      '알감자조림 200g',
      '시래기된장나물 250g',
      '계란장 300g',
    ],
  },
];

// 구독 > 정기구독 결제 수단 샘플 데이터
export const mockPaymentMethod = [
  {
    id: 'hyundaidp-card',
    label: '현대백화점 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'hyundai-card',
    label: '현대카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundai',
  },
];

// 구독 > 정기 결제정보 샘플 데이터
export const mockPaymentInfo = [
  {
    id: 'paymentInfo',
    items: [
      {
        id: 'paymentInfo-1',
        title: '상품금액',
        price: 180000,
      },
      {
        id: 'paymentInfo-2',
        title: '배송비',
        price: 0,
      },
      {
        id: 'paymentInfo-3',
        title: '구독 할인금액',
        price: -30000,
      },
    ],
  },
];
