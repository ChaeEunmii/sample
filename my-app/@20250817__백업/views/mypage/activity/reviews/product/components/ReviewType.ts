// 상품 리뷰 타입 ( 일반 | 한달사용 | 선물 | 체험단 )
export type OrderReviewType = 'general' | 'monthly' | 'gift' | 'experience';

// 리뷰 타입별 플래그 지정
export const reviewFlagMap: Partial<Record<OrderReviewType, { label: string; color: 'green2' }>> = {
  experience: { label: '체험단', color: 'green2' },
};
