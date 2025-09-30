export const mockReviewPhotos = [
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 1' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 2' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 3' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 4' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 5' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 6' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 7' },
  { src: '/images/dummy/@sample_product_01.png', alt: '상품 리뷰 사진 8' },
];

export const mockReviews = [
  {
    id: 'review-1',
    rating: 4.8,
    userId: 'kimhy*****i',
    date: new Date('2025-03-25'),
    specs: [
      { label: '옵션', value: '아이보리/m' },
      { label: '피부타입', value: '지성' },
      { label: '민감도', value: '민감피부' },
    ],
    flags: ['gift', 'monthly'],
    review: `항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 해서 함께 주문해요. 
    항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 해서 함께 주문해요.
    항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 해서 함께 주문해요.`,
    likes: 16,
  },
  {
    id: 'review-2',
    rating: 4.5,
    userId: 'leeja*****u',
    date: new Date('2025-03-22'),
    specs: [
      { label: '옵션', value: '네이비/L' },
      { label: '피부타입', value: '건성' },
      { label: '민감도', value: '보통' },
    ],
    flags: ['best', 'experience'],
    review:
      '제품 향이 은은하고 좋네요. 흡수도 빠르고 번들거리지 않아서 만족합니다. 배송도 빨랐어요.',
    photos: mockReviewPhotos,
    likes: 29,
  },
  {
    id: 'review-3',
    rating: 5.0,
    userId: 'parkmi*****n',
    date: new Date('2025-03-18'),
    specs: [
      { label: '옵션', value: '블랙/S' },
      { label: '피부타입', value: '복합성' },
      { label: '민감도', value: '민감피부' },
    ],
    review:
      '선물용으로 구매했는데 포장도 깔끔하고 좋았어요. 상대방도 매우 만족해해서 다음에도 재구매할 예정입니다.',
  },
];

export const mockReviewTraits = [
  {
    title: '보습력',
    items: [
      { label: '촉촉해요', value: 3243 },
      { label: '보통이에요', value: 7260 },
      { label: '건조해요', value: 3243 },
    ],
  },
  {
    title: '발림성',
    items: [
      { label: '잘발려요', value: 5243 },
      { label: '보통이에요', value: 2260 },
      { label: '아쉬워요', value: 3243 },
    ],
  },
  {
    title: '쿨링감',
    items: [
      { label: '청량해요', value: 5243 },
      { label: '보통이에요', value: 2260 },
      { label: '아쉬워요', value: 3243 },
    ],
  },
];

export const mockReviewPhotoAll = (() => {
  const photoReviews = mockReviews.filter((review) => review.photos && review.photos.length > 0);

  if (photoReviews.length === 0) return [];

  // 첫 번째 사진 리뷰를 기준으로 6개 복사
  const baseReview = photoReviews[0];

  return Array.from({ length: 6 }, () => ({
    ...baseReview,
  }));
})();

export const mockReviewAi = [
  { value: '1', label: '컨템포러리 패션' },
  { value: '2', label: '품질이 좋아요' },
  { value: '3', label: '워치 쥬얼리' },
  { value: '4', label: '모빌리니' },
  { value: '5', label: '월니스' },
  { value: '6', label: '에듀' },
  { value: '7', label: '색상이 예뻐요' },
  { value: '8', label: '내구성이 좋아요' },
  { value: '9', label: '사용하기 편해요' },
  { value: '10', label: '가성비가 좋아요' },
  { value: '11', label: '배송이 빨라요' },
  { value: '12', label: '포장이 꼼꼼해요' },
  { value: '13', label: '사이즈가 정확해요' },
  { value: '14', label: '디자인이 세련돼요' },
  { value: '15', label: '재구매 의사 있어요' },
];

export const mockTorderReviewPhotos = [
  { src: '/images/dummy/@sample_torder_01.png', alt: '상품 리뷰 사진 1' },
  { src: '/images/dummy/@sample_torder_01.png', alt: '상품 리뷰 사진 2' },
  { src: '/images/dummy/@sample_torder_01.png', alt: '상품 리뷰 사진 3' },
  { src: '/images/dummy/@sample_torder_01.png', alt: '상품 리뷰 사진 4' },
  { src: '/images/dummy/@sample_torder_01.png', alt: '상품 리뷰 사진 5' },
];

export const mockTorderReviews = [
  {
    id: 'review-1',
    rating: 4.8,
    date: '25.03.25',
    usage: '테이블오더',
    userName: '김*대',
    specs: [
      { label: '주문 상품1', value: '천일고다 로제소스 감자 뇨끼', hideLabel: true },
      { label: '주문 상품2', value: '어향동고', hideLabel: true },
    ],
    review: `이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!! 이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!!`,
    photos: mockTorderReviewPhotos,
  },
  {
    id: 'review-2',
    rating: 5,
    date: '25.03.25',
    usage: '예약',
    userName: '김*대',
    review: `이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!! 이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!!`,
    photos: mockTorderReviewPhotos,
  },
  {
    id: 'review-3',
    rating: 4.8,
    date: '25.03.25',
    usage: '테이블오더',
    userName: '김*대',
    specs: [
      { label: '주문 상품1', value: '천일고다 로제소스 감자 뇨끼', hideLabel: true },
      { label: '주문 상품2', value: '어향동고', hideLabel: true },
    ],
    review: `이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!! 이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!!`,
    photos: mockTorderReviewPhotos,
  },
  {
    id: 'review-4',
    rating: 4.7,
    date: '25.03.25',
    usage: '테이블오더',
    userName: '김*대',
    specs: [
      { label: '주문 상품1', value: '천일고다 로제소스 감자 뇨끼', hideLabel: true },
      { label: '주문 상품2', value: '어향동고', hideLabel: true },
    ],
    review: `맛있어요. 이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!! 이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!!`,
    photos: mockTorderReviewPhotos,
  },
];

export const mockTorderEmptyReviews = [];
