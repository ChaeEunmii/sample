// types/orderStatus.ts

// 주문 상태 코드 타입 정의 (OrderFlag, OrderButtons 컴포넌트에서 사용)
export type OrderStatusCode =
  | 'order_completed' // 주문완료
  | 'payment_completed' //결제완료
  | 'apply_completed' // 신청완료
  | 'pickup_available' // 픽업가능
  | 'product_ready' // 상품준비
  | 'delivering' // 배송중
  | 'delivered' // 배송완료
  | 'delivered_pending_review' // 배송완료_리뷰작성전
  | 'delivered_reviewed' // 배송완료_리뷰작성후
  | 'delivered_not_confirmed' // 배송완료_구매확정전
  | 'delivered_confirmed_no_review' // 배송완료_구매확정_리뷰작성전
  | 'delivered_claim_blocked' // 배송완료_클레임_불가상품
  | 'delivered_return_cancelled' // 배송완료_반품신청_클레임_철회상품
  | 'cancelled' // 취소완료
  | 'pickup_completed' // 픽업완료
  | 'pickup_confirmed' // 픽업완료 & 구매확정
  | 'return_requested' // 반품접수
  | 'returning' // 반품진행중
  | 'return_completed' // 반품완료
  | 'return_cancel' // 반품취소
  | 'exchange_apply' // 교환회수 접수
  | 'exchanging' // 교환회수 진행중
  | 'exchange_return_completed' // 교환회수 완료
  | 'exchanging_delivery_requested' // 교환배송 접수
  | 'exchanging_delivery_ready' // 교환배송 준비중
  | 'exchanging_delivering' // 교환배송중
  | 'exchange_delivery_complete' // 교환배송 완료
  | 'participating' // 참여가능
  | 'subscription_payment_completed' // 정기구독_결제완료
  | 'subscription_product_ready_release' // 정기구독_상품준비(출고지시)
  | 'subscription_active' // 정기구독_진행중
  | 'subscription_ended' // 정기구독_구독종료
  | 'subscription_canceled'; // 정기구독_구독해지

// 주문 케이스 타입 정의 (OrderButtons 컴포넌트에서 사용)
export type OrderCase =
  | 'storePick' //스토어픽
  | 'cultureCenter' //문화센터 예외
  | 'gift' //선물하기
  | 'pickup' //방문픽업
  | 'globalExport' //역직구
  | 'globalImport' //직구
  | 'holiday' //명절배송
  | 'experience' //체험단
  | 'purchaseGift' //사은품
  | 'rental' //렌탈
  | 'etc' //기타
  | 'confirmBeforeReview' //구매확정 리뷰작성 전
  | 'cancelable' // 취소가능 케이스 (default)
  | 'cancel_limit' // 취소 마감 시간이 존재하는 경우
  | 'cancel_disabled' // 취소 비활성화된 상태 (버튼은 노출되나 클릭 불가)
  | 'culture_cancelable' // 문화센터 에외: 취소가능 케이스 (default)
  | 'culture_cancel_limit' // 문화센터 에외: 취소 마감 시간이 존재하는 경우
  | 'culture_cancel_disabled' // 문화센터 에외: 취소 비활성화된 상태 (버튼은 노출되나 클릭 불가)
  | 'subscription'; // 정기 구독

// 주문 상태 정보
export interface OrderStatusInfo {
  /** 상태 코드 */
  status: OrderStatusCode;
  /** 플래그 우측 (날짜, 시간까지 표기) */
  date?: string;
  /** 케이스 타입 */
  orderCase?: OrderCase;
  /** 정기 구독 */
  subscription?: {
    /** 도착 안내 텍스트 (ex. "6월 19일(금) 도착") */
    arrivalLabel?: string;
    /** 구독 종료일 */
    endDate?: string;
    /** 구독 해지일 */
    cancelDate?: string;
    /** 요약 정보 */
    summary: {
      /** 현재회차 */
      currentRound?: number;
      /** 이용기간 */
      period?: string;
      /** 배송주기 */
      deliveryCycle?: string;
    };
  };
}
