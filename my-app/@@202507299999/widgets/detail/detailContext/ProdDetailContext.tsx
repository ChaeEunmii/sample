'use client';

import { createContext, useContext } from 'react';

// 상품 유형 타입
export type ProdType =
  | 'general' // 기본
  | 'showroom' // 쇼룸
  | 'live' // 라이브
  | 'storepick' // 스토어픽
  | 'auction' // 옥션
  | 'raffle' // 래플
  | 'hamper' // 햄퍼
  | 'deal' // 딜
  | 'freegift' // 사은품
  | 'rental' // 렌탈
  | 'cultureCenter' // 문화센터
  | 'serviceReserve' // 서비스예약
  | 'visitCoupon' // 방문쿠폰
  | 'visitReserve'; // 방문예약

export type ProdDetailType =
  | 'rsvp' // RSVP
  | 'specialBrand' // 스페셜브랜드
  | 'preLive' // 라이브 > 라이브 상품 미리구매
  | 'storePickOnly' // 스토어픽 > 스토어픽 전용
  | 'visitPick' // 방문픽업
  | 'eCoupon' // e쿠폰&이용권
  | 'holidayOnly' // 명절상품
  | 'subscription' // 정기구독
  | 'preOrder' // 예약배송
  | undefined;

// 상품 판매 상태 타입
export type ProdStateType =
  | 'onSale' // 기본
  | 'soldout' // 품절
  | 'paused' // 일시중단
  | 'outOfStock' // 일시품절 (현재 품절이나, 재입고 예정)
  | 'preRelease'; // 선공개

export interface ItemType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// START --- 상품 공통 정보 ContextAPI
interface ProdDetailContextProps {
  item: ItemType;
  prodType: ProdType;
  prodDetailType?: ProdDetailType;
  prodState: ProdStateType;
  prodCateData?: ItemType;
}
export const ProdDetailContext = createContext<ProdDetailContextProps | undefined>(undefined);

export const useProdDetail = () => {
  const context = useContext(ProdDetailContext);
  if (!context)
    throw new Error('useProdDetail은 반드시 ProdDetailProvider의 하위에서 사용해야 합니다.');
  return context;
};

export const ProdDetailProvider = ({
  item,
  prodType,
  prodDetailType,
  prodState,
  prodCateData,
  children,
}: ProdDetailContextProps & { children: React.ReactNode }) => (
  <ProdDetailContext.Provider value={{ item, prodType, prodDetailType, prodState, prodCateData }}>
    {children}
  </ProdDetailContext.Provider>
);
// END --- 상품 공통 정보 ContextAPI
