// 상품 정보
export const mockProdItem = {
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
  },
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 129000,
    discountRate: 32,
  },
};

export const mockProdItems = [
  { ...mockProdItem, id: 'prod-1' },
  { ...mockProdItem, id: 'prod-2' },
  { ...mockProdItem, id: 'prod-3' },
  { ...mockProdItem, id: 'prod-4' },
  { ...mockProdItem, id: 'prod-5' },
  { ...mockProdItem, id: 'prod-6' },
  { ...mockProdItem, id: 'prod-7' },
  { ...mockProdItem, id: 'prod-8' },
];

// 브랜드 정보
export const mockBrandItem = {
  image: {
    src: '/images/dummy/@sample_brand_logo_01.png',
    alt: 'diptyque',
  },
  name: 'DIPTYQUE',
};

export const mockBrandItems = [
  { ...mockBrandItem, id: 'brand-1' },
  { ...mockBrandItem, id: 'brand-2' },
  { ...mockBrandItem, id: 'brand-3' },
  { ...mockBrandItem, id: 'brand-4' },
  { ...mockBrandItem, id: 'brand-5' },
  { ...mockBrandItem, id: 'brand-6' },
  { ...mockBrandItem, id: 'brand-7' },
  { ...mockBrandItem, id: 'brand-8' },
];

export const mockMespaceUser = {
  name: '오또리 하우스',
  gems: 12348633,
  userType: 'manager' as const,
  isMyProfile: true,
  traits: ['데스크인테리어', '하이디라오', '사백안'],
  description: `홈캉스 즐기는 집순이~ 데스크테리어족 공간에서 만나요.`,
  brands: [
    { id: '1', name: 'CHANEL', image: '/images/dummy/@sample_product_01.png', href: '#' },
    { id: '2', name: 'DIOR', image: '/images/dummy/@sample_product_02.png', href: '#' },
    { id: '3', name: 'GUCCI', image: '/images/dummy/@sample_product_01.png', href: '#' },
  ],
  partners: '/partners',
};

export const mockMePhotos = [
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 1' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 2' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 3' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 4' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 5' },
];
export const mockMeFeedData = [
  {
    id: 'card_1',
    images: mockMePhotos,
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    barData: {
      type: 'vote' as const,
      title: '음질이 더 좋은 헤드셋은?',
      data: {
        status: 'active' as const,
        startDate: '2025-07-28',
        options: [
          { id: '1', label: '짬뽕', count: 1320 },
          { id: '2', label: '돈까스', count: 72 },
          { id: '3', label: '김치찌개', count: 2 },
          { id: '4', label: '샐러드', count: 133 },
        ],
      },
    },
    products: {
      data: mockProdItems,
    },
    updateAt: '2025-08-01T08:00:00Z',
    likes: {
      count: 120,
      isLiked: false,
    },
    comments: {
      count: 45,
    },
    isPinned: true,
    shareUrl: '/shared-url',
  },
  {
    id: 'card_1_02',
    images: mockMePhotos,
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    barData: {
      type: 'vote' as const,
      title: '음질이 더 좋은 헤드셋은?',
      data: {
        type: 'product' as const,
        status: 'active' as const,
        startDate: '2025-07-28',
        options: [
          {
            id: 'prod-card-id-1',
            count: 42,
            label: mockProdItems[0],
          },
          {
            id: 'prod-card-id-2',
            count: 38,
            label: mockProdItems[1],
          },
        ],
      },
    },
    updateAt: '2025-03-01T08:00:00Z',
    likes: {
      count: 120,
      isLiked: false,
    },
    comments: {
      count: 45,
    },
    shareUrl: '/shared-url',
  },
  {
    id: 'card_1_03',
    images: mockMePhotos,
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    barData: {
      type: 'vote' as const,
      title: '음질이 더 좋은 헤드셋은?',
      data: {
        type: 'brand' as const,
        status: 'active' as const,
        startDate: '2025-07-28',
        options: [
          {
            id: 'prod-card-id-1',
            count: 42,
            label: mockBrandItems[0],
          },
          {
            id: 'prod-card-id-2',
            count: 38,
            label: mockBrandItems[1],
          },
        ],
      },
    },
    updateAt: '2025-03-01T08:00:00Z',
    likes: {
      count: 120,
      isLiked: false,
    },
    comments: {
      count: 45,
    },
    shareUrl: '/shared-url',
  },
  {
    id: 'card_2',
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    barData: {
      type: 'review' as const,
      title: '내가 작성한 리뷰',
      data: {
        rating: 4.8,
        date: new Date('2025-03-25'),
        photos: mockMePhotos,
        review: `항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 해서 함께 주문해요. 
                  항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 해서 함께 주문해요.
                  항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 해서 함께 주문해요.`,
        product: {
          image: '/images/dummy/@sample_product_01.png',
          brand: '프레데릭 말',
          title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
          href: '#',
        },
      },
    },
    brands: [
      { id: 'br_1', name: 'CELINE 셀린느', image: '/images/dummy/@sample_brand_01.png' },
      { id: 'br_2', name: 'CHANEL 샤넬', image: '/images/dummy/@sample_brand_01.png' },
      { id: 'br_3', name: 'CELINE 셀린느', image: '/images/dummy/@sample_brand_01.png' },
      { id: 'br_4', name: 'CHANEL 샤넬', image: '/images/dummy/@sample_brand_01.png' },
    ],
    updateAt: '2025-07-28T08:00:00Z',
    likes: {
      count: 120,
      isLiked: false,
    },
    comments: {
      count: 45,
    },
    isPinned: true,
    shareUrl: '/shared-url',
  },
  {
    id: 'card_3',
    content: `올 한해를 돌이켜보면, 가장 변화 무쌍하게 나를 표현했던 공간이 바로 이공간인거 같아요. 늘
        책상에서 사부작거리면서 마만의 꿈을 펼쳐가는 제일 행복했던 사람이라, 제일 애정이 가는 곳
        역시 데스크였네요~ <br />
        <br />
        <a
          href="https://www.thehyundai.com/front/pda
        itemPtc.thdslitmCd=60A1850187&sectId=236667"
        >
          https://www.thehyundai.com/front/pda itemPtc.thdslitmCd=60A1850187&sectId=236667
        </a>{' '}
        이동해서 확인해 보세요.
      `,
    barData: {
      type: 'collection' as const,
      title: '프레데릭말 컬렉션',
      data: {
        products: [
          {
            id: 'collect_p_01',
            image: {
              src: '/images/dummy/@sample_product_01.png',
              alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
            },
            brand: '프레데릭 말',
            title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
            price: {
              current: 129000,
              discountRate: 32,
            },
            updateAt: '2024-07-01T08:00:00Z',
          },
        ],
        brands: [
          {
            id: 'collect_b_01',
            image: {
              src: '/images/dummy/@sample_brand_01.png',
              alt: '브랜드 이미지',
            },
            name: '프레데릭말',
            updateAt: '2024-08-09T08:00:00Z',
          },
        ],
      },
    },
    updateAt: '2024-03-01T08:00:00Z',
    likes: {
      count: 120,
      isLiked: false,
    },
    comments: {
      count: 45,
    },
    shareUrl: '/shared-url',
  },
];

// Comment
// 현재 사용자 정보
export const mockCurrentUser = {
  userName: '내아이디123',
  avatar: '/images/no_avatar.png',
};

// 더미 댓글 데이터
export const mockMeComments = [
  {
    feedId: 'card_1_02',
    comments: [
      {
        id: '1',
        userName: '내아이디123',
        userType: 'normal' as const,
        avatar: '/images/no_avatar.png',
        content: '정말 좋은 상품이네요! 추천합니다.',
        likes: 12,
        deleted: true,
        createdAt: '2024-01-15T10:30:00Z',
        replies: [
          {
            id: '2',
            userName: '다른사용자',
            userType: 'normal' as const,
            avatar: '/images/no_avatar.png',
            content: '저도 같은 생각이에요!',
            likes: 3,
            createdAt: '2024-01-15T11:15:00Z',
          },
          {
            id: '3',
            userName: '인플루언서A',
            userType: 'influencer' as const,
            avatar: '/images/no_avatar.png',
            content: '감사합니다! 좋은 리뷰 남겨주셔서 ^^',
            likes: 8,
            createdAt: '2024-01-15T12:00:00Z',
          },
        ],
      },
      {
        id: '4',
        userName: '브랜드관리자',
        userType: 'manager' as const,
        avatar: '/images/no_avatar.png',
        content: '고객님의 소중한 리뷰 감사드립니다. 앞으로도 더 좋은 제품으로 보답하겠습니다.',
        likes: 25,
        createdAt: '2024-01-15T14:20:00Z',
        replies: [],
      },
      {
        id: '5',
        userName: '다른고객님',
        userType: 'normal' as const,
        avatar: '/images/no_avatar.png',
        content: '배송이 좀 늦었지만 제품은 만족스러워요.',
        likes: 7,
        createdAt: '2024-01-15T16:45:00Z',
        replies: [
          {
            id: '6',
            userName: '내아이디123',
            userType: 'normal' as const,
            avatar: '/images/no_avatar.png',
            content: '저도 배송은 조금 아쉬웠어요. 그래도 제품 품질은 좋네요!',
            likes: 2,
            createdAt: '2024-01-15T17:30:00Z',
          },
        ],
      },
    ],
  },
  {
    feedId: 'card_1_03',
    comments: [
      {
        id: '1',
        userName: '내아이디123',
        userType: 'normal' as const,
        avatar: '/images/no_avatar.png',
        content: '정말 좋은 상품이네요! 추천합니다.',
        likes: 12,
        deleted: true,
        createdAt: '2024-01-15T10:30:00Z',
      },
    ],
  },
];

export const mockMeCardData = mockMeFeedData
  .filter(({ images, content }) => !!images || !!content)
  .map(({ images, content, barData, ...rest }) => ({
    user: {
      image: { src: '/images/dummy/@sample_people_01.png' },
      name: 'bebeyul',
      type: 'seller' as const,
    },
    traits: ['패션', '데일리룩', '원피스추천'],
    image: images?.[0],
    content,
    barData,
    href: '#',
  }));
