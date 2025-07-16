'use client';

import { useState, useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
// import 'swiper/css';
import clsx from 'clsx';
import styles from './MembershipPaySwiper.module.scss';
import { CardSwiper, CardSwiperProps } from '@widgets/payment/CardSwiper';

export interface MembershipPaymentMethod {
  id: string;
  label: string;
  cardNumber: string;
  brand: string;
}

// CardSwiperProps에서 내부에서 직접 관리할 props들을 제외하고 가져옴
interface PaymentMethodSwiperProps
  extends Omit<CardSwiperProps, 'selectedIndex' | 'swiperRef' | 'onSlideChange' | 'onCardClick'> {
  /** 카드 선택 시 선택된 카드 ID를 상위로 전달하는 콜백 */
  onSelect: (id: string) => void;
  /** 슬라이드 인덱스 변경 시 호출되는 콜백 (선택된 카드 인덱스) */
  onSlideIndexChange?: (index: number) => void;
  /** 추가적인 클래스 */
  className?: string;
}

export const MembershipPaySwiper = ({
  methods,
  selectedCardId,
  onSelect,
  className,
  showAddCard = false,
  onSlideIndexChange,
}: PaymentMethodSwiperProps) => {
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  // 마운트 후 클라이언트임을 표시
  useEffect(() => {
    setIsClient(true);
  }, []);
  // 클라이언트 환경이 아니면 렌더링하지 않음
  if (!isClient) return null;

  // 선택된 카드 ID에 해당하는 인덱스 계산
  const selectedIndex = methods.findIndex((m) => m.id === selectedCardId);

  // 슬라이드가 변경될 때 호출되는 핸들러
  const handleSlideChange = (swiper: SwiperType, realIndex: number) => {
    const newId = methods[realIndex]?.id;
    if (newId) onSelect(newId);
    onSlideIndexChange?.(realIndex);
  };

  // 카드 클릭 시 호출되는 핸들러
  const handleCardClick = (index: number) => {
    const id = methods[index]?.id;
    if (id) onSelect(id);
    swiperRef.current?.slideTo(index);
    onSlideIndexChange?.(index);
  };

  return (
    <div className={clsx(styles.root, className)}>
      {/* CardSwiper 공통 위젯컴포넌트 호출 */}
      <CardSwiper
        methods={methods}
        selectedCardId={selectedCardId}
        selectedIndex={selectedIndex >= 0 ? selectedIndex : 0} // 선택 인덱스 없으면 0 기본값 (내부에서 계산한 값)
        swiperRef={swiperRef} // useRef로 생성한 인스턴스 참조
        onSlideChange={handleSlideChange} // 내부에서 처리하는 슬라이드 변경 핸들러
        onCardClick={handleCardClick} // 내부에서 처리하는 카드 클릭 핸들러
        showAddCard={showAddCard}
      />
    </div>
  );
};
