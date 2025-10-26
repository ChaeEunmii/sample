// types/orderStatus.ts

// '과거주문내역조회' 주문 상태 코드 타입 정의 (OrderFlag, OrderButtons 컴포넌트에서 사용)
export type OrderStatusCode =
  | 'order_completed' // 주문접수
  | 'payment_completed' //결제완료
  | 'delivery_ready' // 배송준비중
  | 'delivering' // 배송중
  | 'delivered' // 배송완료
  | 'pickup_waiting' // 픽업대기
  | 'pickup_available' // 픽업가능
  | 'pickup_completed' // 픽업완료
  | 'order_cancel' // 주문취소
  | 'claim_return' // 클레임(반품)
  | 'claim_exchange' // 클레임(교환)
  | 'accept_pending' // 수락대기
  | 'accepted_gift_ready' // 수락완료,선물준비중
  | 'exchanging' // 교환진행중
  | 'apply_completed'; // 신청완료

// 주문 케이스 타입 정의 (OrderButtons 컴포넌트에서 사용)
export type OrderCase =
  | 'standard' //일반배송
  | 'dawn' //새벽배송
  | 'storePick' //스토어픽
  | 'gift' //선물하기
  | 'pickup' //방문픽업
  | 'holiday' //명절배송
  | 'experience' //체험단
  | 'rental' //렌탈
  | 'gifticon' //기프티콘
  | 'tOrder'; //테이블오더

// 주문 상태 정보
export interface OrderStatusInfo {
  /** 구분 */
  type?: 'thehyundai' | 'tohome';
  /** 상태 코드 */
  status: OrderStatusCode;
  /** 플래그 우측 날짜 텍스트 : detail에서만 보임 */
  date?: string;
  /** date 관련텍스트(ex:도착예정) : detail에서만 보임 */
  dateNote?: string;
  /** 플래그 우측 텍스트 : list/detail 에서 둘다 보임 */
  note?: string;
  /** 플래그 우측 텍스트 : detail에서만 보임 */
  detailNote?: string;
  /** 케이스 타입 */
  orderCase?: OrderCase;
  /** 리뷰없음 여부 (true시 리뷰보기 버튼 렌더안함) */
  noReview?: boolean;
  /** 새벽배송 여부 */
  isDawnDelivery?: boolean;
}
