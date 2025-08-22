'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Checkbox, Heading, Text, IconButton, Tip } from '@shared/ui';
import clsx from 'clsx';
import styles from './InstantDiscountSwiper.module.scss';

// Tip 메시지
const TIP_MESSAGE = '더 큰 혜택! 현대백화점 전용 쿠폰도 확인해 보세요.';

// 즉시할인 항목
interface DiscountItem {
  id: string;
  label: string;
  amount: number;
  tip?: boolean;
}

interface InstantDiscountSwiperProps {
  /** 할인 아이템 배열 */
  items: DiscountItem[];
  /** 선택 변경 시 호출되는 콜백 (선택된 id 또는 null) */
  onSelect: (id: string | null) => void;
  /** 추가 스타일용 클래스명 */
  className?: string;
}

export const InstantDiscountSwiper = ({
  items,
  onSelect,
  className,
}: InstantDiscountSwiperProps) => {
  // 클라이언트 렌더링 여부 관리
  const [isClient, setIsClient] = useState(false);

  // Swiper 인스턴스 참조용 ref
  const swiperRef = useRef<SwiperType | null>(null);

  // 초기 선택된 아이템 ID 상태
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // selectedId 변경 시 부모 콜백 호출
  useEffect(() => {
    onSelect(selectedId);
  }, [selectedId, onSelect]);

  // 팁 보임 여부 상태: tip이 true인 항목만 true로 초기화
  const [tipStates, setTipStates] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.filter((item) => item.tip).map((item) => [item.id, true]))
  );

  // 특정 아이템 팁 닫기 처리
  const handleTipClose = (id: string) => {
    setTipStates((prev) => ({ ...prev, [id]: false }));
  };

  // 아이템 클릭 시 선택 토글 및 해당 슬라이드로 이동
  const handleClick = (id: string, index: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
    swiperRef.current?.slideTo(index);
  };

  // 컴포넌트 마운트 후 클라이언트 렌더링 상태 true로 설정
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <div className={styles.className}>
      <Swiper
        wrapperClass={styles.wrapper} // swiper-wrapper 대신
        className={clsx(styles.root, styles.swiper)}
        slidesPerView={2.4}
        spaceBetween={8}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        observer={true}
        observeParents={true}
      >
        {items.map((item, index) => {
          // 현재 아이템이 선택된 상태인지 여부 판단
          const isChecked = selectedId === item.id;

          return (
            <SwiperSlide
              key={item.id}
              className={clsx(styles.item, item.tip && styles.hasTip)}
              onClick={() => handleClick(item.id, index)}
            >
              {item.tip && tipStates[item.id] && (
                <Tip placement="top" onClose={() => handleTipClose(item.id)} className={styles.tip}>
                  {TIP_MESSAGE}
                </Tip>
              )}
              <div className={clsx(styles.card, isChecked && styles.isChecked)}>
                <div className={styles.cardCont}>
                  <Checkbox
                    label="체크박스"
                    hideLabel
                    checked={isChecked}
                    onChange={(e) => {
                      e.stopPropagation(); // 이벤트 전파 방지
                      handleClick(item.id, index);
                    }}
                  />
                  <div className={styles.info}>
                    <Heading as="h4" weight="semibold">
                      {item.label}
                    </Heading>
                    <div className={styles.bottom}>
                      <Text weight="semibold">- {item.amount.toLocaleString()}원</Text>
                      <IconButton
                        name="arrowRight"
                        size="xsmall"
                        onClick={(e) => {
                          e.stopPropagation(); // SwiperSlide로 버블링 방지
                          alert('아이콘 버튼 클릭!');
                        }}
                      >
                        자세히
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
InstantDiscountSwiper.displayName = 'InstantDiscountSwiper';
