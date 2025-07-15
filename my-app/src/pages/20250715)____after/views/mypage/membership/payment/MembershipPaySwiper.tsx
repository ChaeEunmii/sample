'use client';

import { useState, useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import clsx from 'clsx';
import styles from './MembershipPaySwiper.module.scss';
import { CardSwiper } from '@widgets/payment/CardSwiper';

interface PaymentMethod {
  id: string;
  label: string;
  cardNumber: string;
  brand: string;
  disabled?: boolean;
  options: {
    coupons?: string[];
    noInterestCoupons?: string[];
    installments?: string[];
  };
}

interface CardSelection {
  coupon?: string;
  noInterestCoupon?: string;
  installment?: string;
}

interface PaymentMethodSwiperProps {
  methods: PaymentMethod[];
  selectedCardId: string | null;
  defaultCardId: string | null;
  cardSelections: Record<string, CardSelection>;
  onSelect: (id: string) => void;
  onOptionChange: (id: string, selection: CardSelection) => void;
  onDefaultChange: (id: string | null) => void;
  className?: string;
  onEmptyClick?: () => void;
  showAddCard?: boolean;
  onSlideIndexChange?: (index: number) => void;
}

export const MembershipPaySwiper = ({
  methods,
  selectedCardId,
  defaultCardId,
  cardSelections,
  onSelect,
  onOptionChange,
  onDefaultChange,
  className,
  onEmptyClick,
  onSlideIndexChange,
  showAddCard = false,
}: PaymentMethodSwiperProps) => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const hasCard = methods.length > 0;
  const selectedIndex = methods.findIndex((m) => m.id === selectedCardId);
  // const selectedValues = (selectedCardId && cardSelections[selectedCardId]) || {};
  // const isLastSlide = showAddCard && currentIndex === methods.length;

  const handleSlideChange = (swiper: SwiperType, realIndex: number) => {
    setCurrentIndex(realIndex); // currentIndex 업데이트 추가
    const newId = methods[realIndex]?.id;
    if (newId) onSelect(newId);
    onSlideIndexChange?.(realIndex);
  };

  const handleCardClick = (index: number) => {
    onSelect(methods[index]?.id || '');
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <CardSwiper
        methods={methods}
        selectedCardId={selectedCardId}
        selectedIndex={selectedIndex >= 0 ? selectedIndex : 0}
        swiperRef={swiperRef}
        onSlideChange={(swiper, index) => handleSlideChange(swiper, index)}
        onCardClick={(index) => {
          const id = methods[index]?.id;
          if (id) onSelect(id);
          swiperRef.current?.slideTo(index);
          setCurrentIndex(index); // currentIndex 업데이트 추가
          onSlideIndexChange?.(index);
        }}
        showAddCard={showAddCard}
      />
    </div>
  );
};
