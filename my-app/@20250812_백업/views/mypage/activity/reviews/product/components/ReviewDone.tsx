'use client';

import { useSearchParams } from 'next/navigation';
import { MyReviewList } from '@/views/mypage/activity/reviews/components/MyReviewList';

// 상품 임시데이터
const mockReviewPhotos = [
  { src: '/images/dummy/@sample_review_01.png', alt: '상품 리뷰 사진 1' },
  { src: '/images/dummy/@sample_review_02.png', alt: '상품 리뷰 사진 2' },
];
const productData = {
  id: 'prod-review-1',
  item: {
    id: 'prod-1',
    href: '#',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
    },
    brand: '브랜드명',
    title: '상품명 한줄 말줄임 처리',
    orderOptions: ['150ml', '스킨로션', '건성피부용', '블루'],
  },
  purchasedAt: '20250703',
  review: {
    rating: 4.5,
    userId: 'leeja*****u',
    date: '25.03.25',
    specs: [
      { label: '옵션', value: '네이비/L' },
      { label: '피부타입', value: '건성' },
      { label: '민감도', value: '보통' },
    ],
    flags: ['best', 'gift'],
    review:
      '항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서 항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서',
    photos: mockReviewPhotos,
  },
};

const productDataList = [
  { ...productData, id: 'product-1' },
  { ...productData, id: 'product-2' },
  { ...productData, id: 'product-3' },
  { ...productData, id: 'product-4' },
  { ...productData, id: 'product-5' },
];

export default function ReviewDone() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 가져오기
  const writtenReviewData = isNoData ? [] : productDataList;

  return (
    <>
      <MyReviewList data={writtenReviewData} />
    </>
  );
}
