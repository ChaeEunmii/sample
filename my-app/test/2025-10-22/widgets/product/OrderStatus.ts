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
  | 'cancel_apply_digital' // 취소요청(무형상품)
  | 'pickup_completed' // 픽업완료
  | 'pickup_confirmed' // 픽업완료 & 구매확정
  | 'return_requested' // 반품접수
  | 'return_requested_digital' // 반품접수(무형상품)
  | 'returning' // 반품진행중
  | 'return_completed' // 반품완료
  | 'return_completed_digital' // 반품완료(무형상품)
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
  | 'subscription_canceled' // 정기구독_구독해지
  | 'giftbox_payment_completed' // 선물함_결제완료
  | 'giftbox_product_ready' // 선물함_상품준비중
  | 'giftbox_delivering' // 선물함_배송중
  | 'giftbox_delivered' // 선물함_배송완료
  | 'giftbox_delivered_no_review' // 선물함_배송완료(리뷰작성 전)
  | 'giftbox_delivered_review' // 선물함_배송완료(리뷰작성 완료)
  | 'giftbox_address_completed' // 선물함_배송지입력 완료
  | 'giftbox_address_cancel' // 선물함_배송지미엽력 취소
  | 'giftbox_order_cancel' // 선물함_주문취소
  | 'giftbox_soldout_cancel' // 선물함_품절취소
  | 'giftbox_apply_cancel' // 선물함_접수취소
  | 'giftbox_cancel_refund' // 선물함_취소/환불
  | 'giftbox_used' // 선물함_사용완료
  | 'giftbox_unused' // 선물함_사용안함
  | 'giftbox_pickup_completed' // 선물함_픽업완료
  | 'giftbox_proposal' // 선물함_선물제안
  | 'trip_payment_completed' // 여행_결제완료
  | 'trip_reserve_confirmed' // 여행_예약확정
  | 'trip_cancle_apply' // 여행_취소요청
  | 'trip_cancelled' // 여행_취소완료
  | 'trip_completed' // 여행_여행완료
  | 'trip_completed_no_review' // 여행_여행완료(리뷰작성 전)
  | 'trip_completed_review'; // 여행_여행완료(리뷰작성 완료)

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
  | 'voucher' //이용권
  | 'ecoupon' //e쿠폰
  | 'etc' //기타
  | 'confirmBeforeReview' //구매확정 리뷰작성 전
  | 'cancelable_default' // 취소가능 케이스 (default: 버튼만노출)
  | 'cancelable' // 취소가능 케이스 (시간 노출)
  | 'cancel_limit' // 취소 마감 시간이 존재하는 경우
  | 'cancel_disabled' // 취소 비활성화된 상태 (버튼은 노출되나 클릭 불가)
  | 'culture_cancelable_default' // 문화센터 에외: 취소가능 케이스 (default: 버튼만노출)
  | 'culture_cancelable' // 문화센터 에외: 취소가능 케이스 (시간 노출)
  | 'culture_cancel_limit' // 문화센터 에외: 취소 마감 시간이 존재하는 경우
  | 'culture_cancel_disabled' // 문화센터 에외: 취소 비활성화된 상태 (버튼은 노출되나 클릭 불가)
  | 'subscription' // 정기 구독
  | 'giftbox' // 선물함
  | 'trip'; // 여행

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
    summary?: {
      /** 현재회차 */
      currentRound?: number;
      /** 이용기간 */
      period?: string;
      /** 배송주기 */
      deliveryCycle?: string;
    };
  };
  /** 선물함 */
  gift?: {
    /** 받는 사람 */
    receiverName?: string;
    /**  반품/교환 버튼 노출 여부 */
    isClaimable?: boolean;
    /**  선택완료 여부 */
    isSelectionCompleted?: boolean;
  };
  /** 여행 */
  trip?: {
    /** 여행 타입 */
    type: TripType;
    /** 플래그 우측 정보  */
    tripInfos?: string[];
    /** 여정 */
    segments?: TripSegmentData[];
    /**  여행 확정 여부 (확정 전 취소버튼 노출)*/
    isTripConfirmed?: boolean;
  };
  /** 취소가능 여부 (현재 e쿠폰에서 사용) */
  isCancelable?: boolean;
}

// 여행 타입(여행|항공|asp패키지)
export type TripType = 'trip' | 'air' | 'asp';

// 여행 항공 여정 데이터구조
interface TripSegmentData {
  id?: string; // 여정1, 여정2 …
  from?: string; // "인천(ICN)"
  to?: string; // "도쿄(NRT)"
  airline?: string; // "대한항공"
}
