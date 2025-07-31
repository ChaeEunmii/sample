'use client';

import { useState, useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Checkbox, Select, Icon, Text } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './PaymentMethodSwiper.module.scss';
import { CardSwiper } from './CardSwiper';

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

export const PaymentMethodSwiper = ({
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
  const selectedMethod = selectedIndex >= 0 ? methods[selectedIndex] : null;
  const selectedValues = (selectedCardId && cardSelections[selectedCardId]) || {};
  const isLastSlide = showAddCard && currentIndex === methods.length;

  if (!selectedMethod) {
    return (
      <div className={clsx(styles.root, styles.shape, styles.noCard)} onClick={onEmptyClick}>
        <Icon name="addCircle" size="large" />
        <Text weight="medium" size="4">
          H.pay 추가하고 빠르게 결제하세요
        </Text>
      </div>
    );
  }

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

  const handleCheckboxChange = (checked: boolean) => {
    onDefaultChange(checked ? selectedCardId : null);
  };

  const handleSelectChange = (key: keyof CardSelection, value: string) => {
    if (!selectedCardId) return;
    onOptionChange(selectedCardId, { ...selectedValues, [key]: value });
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

      {selectedMethod && !selectedMethod.disabled && !isLastSlide && (
        <div className={styles.shapeBottom}>
          <Checkbox
            label="기본결제수단으로 지정"
            checked={selectedCardId === defaultCardId}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
            size="small"
          />

          {selectedMethod.options.coupons && (
            <div className={styles.coponsBox}>
              <Text
                as="span"
                size="4"
                weight={selectedValues.coupon ? 'semibold' : 'regular'}
                color={selectedValues.coupon ? 'point' : 'gray3'}
                align="right"
                indent
              >
                {selectedValues.coupon ? formatPrice(-10000) : formatPrice(0)}
                {/* 예시용 표시 금액 */}
              </Text>
              <Select
                placeholder="할인 쿠폰 선택해 주세요"
                options={selectedMethod.options.coupons.map((v) => ({ label: v, value: v }))}
                value={selectedValues.coupon || ''}
                onChange={(v) => handleSelectChange('coupon', v)}
              />
            </div>
          )}

          {selectedMethod.options.noInterestCoupons && (
            <Select
              placeholder="무이자 쿠폰 선택해 주세요"
              options={selectedMethod.options.noInterestCoupons.map((v) => ({
                label: v,
                value: v,
              }))}
              value={selectedValues.noInterestCoupon || ''}
              onChange={(v) => handleSelectChange('noInterestCoupon', v)}
            />
          )}

          {selectedMethod.options.installments && (
            <Select
              placeholder="할부 선택해 주세요"
              options={selectedMethod.options.installments.map((v) => ({ label: v, value: v }))}
              value={selectedValues.installment || ''}
              onChange={(v) => handleSelectChange('installment', v)}
            />
          )}
        </div>
      )}
    </div>
  );
};
PaymentMethodSwiper.displayName = 'PaymentMethodSwiper';
