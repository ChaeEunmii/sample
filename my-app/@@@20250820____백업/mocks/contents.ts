// 소팅옵션
export const sortContent = [
  {
    label: '최신순',
    value: 'option1',
  },
  {
    label: '인기순',
    value: 'option2',
  },
];

export const sortSocial = [
  {
    label: '최신순',
    value: 'option1',
  },
  {
    label: '인기순',
    value: 'option2',
    tip: '게시물의 댓글, 하이파이브, 작성기간 등으로 인기도를 계산해요',
  },
  {
    label: '하이파이브순',
    value: 'option3',
  },
];

// 에디토리얼
export const mockEditorial = [
  {
    nametag: '더매거진',
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '250년의 변하지 않는 가치' },
    subtitle: { text: '클래스가 다른 명품 향수' },
    href: '#',
  },
  {
    nametag: '더매거진',
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '세계 명소의 느낌을 그대로' },
    subtitle: { text: '향기로 여행을 떠나다' },
    href: '#',
  },
];

// 룩북
export const mockLookbook = [
  {
    nametag: 'PROMOTION',
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '공기보다 가벼운 스타일' },
    subtitle: { text: '스타일을 막강하게 해줄 소재' },
    brand: {
      image: '/images/dummy/@sample_product_01.png',
      name: '갤러리 아트버디',
    },
    href: '#',
  },
  {
    nametag: 'PROMOTION',
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '정돈된 질서의 매력' },
    subtitle: { text: '콰이어트 럭셔리' },
    brand: {
      image: '/images/dummy/@sample_product_01.png',
      name: '갤러리 아트버디',
    },
    href: '#',
  },
];

// 숏폼
export const mockShortform = [
  {
    video: {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    onClick: () => {},
    title: '여름 스타일링 제안 & 전 상품 10% 할인',
  },
  {
    video: {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    onClick: () => {},
    title: '여름 스타일링 제안 & 전 상품 10% 할인',
  },
  {
    video: {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    onClick: () => {},
    title: '여름 스타일링 제안 & 전 상품 10% 할인',
  },
];

// 미스페이스
export const mockMespace = [
  {
    user: {
      image: { src: '/images/dummy/@sample_people_01.png' },
      name: 'bebeyul',
      type: 'seller' as const,
    },
    image: { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 1' },
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    href: '#',
    barData: {
      type: 'vote' as const,
      title: '음질이 더 좋은 헤드셋은?',
    },
  },
  {
    user: {
      image: { src: '/images/dummy/@sample_people_01.png' },
      name: 'bebeyul',
      type: 'seller' as const,
    },
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    href: '#',
    barData: {
      type: 'vote' as const,
      title: '음질이 더 좋은 헤드셋은?',
    },
  },
  {
    user: {
      image: { src: '/images/dummy/@sample_people_01.png' },
      name: 'bebeyul',
      type: 'normal' as const,
    },
    content:
      '간만에 정말 마음에 드는 원피스를 찾았어요! 간만에 정말 마음에 드는 원피스를 찾았어요! 간만에 정말 마음에 드는 원피스를 찾았어요!',
    href: '#',
    barData: {
      type: 'collection' as const,
      title: '음질이 더 좋은 헤드셋은?',
    },
  },
  {
    user: {
      image: { src: '/images/dummy/@sample_people_01.png' },
      name: 'bebeyul',
      type: 'normal' as const,
    },
    image: { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 1' },
    content: '게시글 내용 게시글 내용 게시글 내용 게시글 내용',
    href: '#',
    barData: {
      type: 'review' as const,
      title: '음질이 더 좋은 헤드셋은?',
    },
  },
];
