import { Flag } from '@shared/ui';
import {
  reviewFlagMap,
  OrderReviewType,
} from '@views/mypage/activity/reviews/product/components/ReviewType';

// 리뷰 타입(없을 수도 있음)
type ReviewProdFlagProps = { type?: OrderReviewType | null };

// 리뷰 타입에 맞는 플래그 표시
export function ReviewProdFlag({ type }: ReviewProdFlagProps) {
  if (!type) return null; // 타입이 없으면 렌더링하지 않음

  const flagData = reviewFlagMap[type];
  if (!flagData) return null; // 매핑에 없는 타입이면 렌더링하지 않음

  // 매핑된 플래그 데이터를 기반으로 Flag 컴포넌트 렌더링
  return <Flag data={{ label: flagData.label, color: flagData.color }} />;
}
