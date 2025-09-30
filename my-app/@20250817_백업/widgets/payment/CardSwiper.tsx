import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import clsx from 'clsx';
import styles from './CardSwiper.module.scss';
import { Icon, Text } from '@/shared/ui';

interface BrandInfo {
  displayName: string;
  logoSrc: string;
}

const BRAND_INFO: Record<string, BrandInfo> = {
  hyundai: {
    displayName: '현대카드',
    logoSrc: '/images/card/logo_hyundai_card.svg',
  },
  hyundaiDepartment: {
    displayName: '현대백화점카드',
    logoSrc: '/images/card/logo_thehyundai_card.svg',
  },
  woori: {
    displayName: '우리카드',
    logoSrc: '/images/card/logo_woori_card.svg',
  },
};

export interface PaymentMethod {
  id: string;
  label: string;
  cardNumber: string;
  brand: string;
  disabled?: boolean;
  disabledMessage?: React.ReactNode;
}
export interface CardSwiperProps {
  type?: 'torder';
  /** 결제수단 목록 배열 */
  methods: PaymentMethod[];
  /** 현재 선택된 카드 ID (null 가능) */
  selectedCardId: string | null;
  /** 현재 선택된 카드 인덱스 (Swiper 초기 위치) */
  selectedIndex: number;
  /** Swiper 인스턴스 참조용 React ref */
  swiperRef: React.MutableRefObject<SwiperType | null>;
  /** 슬라이드 변경 시 호출되는 콜백 (swiper, realIndex) */
  onSlideChange: (swiper: SwiperType, realIndex: number) => void;
  /** 카드 클릭 시 호출되는 콜백 (클릭한 카드 인덱스) */
  onCardClick: (index: number) => void;
  /** 카드 추가 버튼 표시 여부 (기본 false) */
  showAddCard?: boolean;
}

export const CardSwiper = ({
  type,
  methods,
  selectedCardId,
  selectedIndex,
  swiperRef,
  onSlideChange,
  onCardClick,
  showAddCard = false,
}: CardSwiperProps) => {
  return (
    <Swiper
      wrapperClass={styles.wrapper} // swiper-wrapper 대신
      className={clsx(styles.root, styles.swiper)}
      slidesPerView="auto"
      spaceBetween={16}
      centeredSlides
      initialSlide={selectedIndex}
      onSlideChange={(swiper) => onSlideChange(swiper, swiper.realIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      observer
      observeParents
    >
      {methods.map((method, index) => {
        const brandInfo = BRAND_INFO[method.brand] || {
          displayName: method.brand,
          logoSrc: '/images/card/logo_hyundai_card.svg',
        };

        return (
          <SwiperSlide
            key={method.id}
            className={clsx(styles.item, method.id === selectedCardId && styles.active)}
          >
            <div className={clsx(styles.card)} onClick={() => onCardClick(index)} role="button">
              <div
                className={clsx(
                  styles.shape,
                  method.brand && styles[method.brand],
                  method.disabled && styles.disabled
                )}
              >
                {/* 데이터 disabledMessage 설정시 해당메세지 | disabled만 설정시 '결제불가' 메세지 | 테이블오더일 경우, 백화점 카드 사용 불가 메세지 */}
                {(method.disabled ||
                  (method.brand === 'hyundaiDepartment' && type === 'torder')) && (
                  <em
                    className={clsx(
                      method.disabledMessage && styles.msgType,
                      method.brand === 'hyundaiDepartment' && type === 'torder' && styles.torderMsg
                    )}
                  >
                    {method.disabledMessage ||
                      (method.brand === 'hyundaiDepartment' && type === 'torder' ? (
                        <>
                          백화점 카드는
                          <br />
                          테이블오더 주문 시 사용할 수 없습니다.
                          <br />
                          양해부탁드립니다.
                        </>
                      ) : (
                        '결제불가'
                      ))}
                  </em>
                )}
                <div className={styles.logo}>
                  <img src={brandInfo.logoSrc} alt={`${brandInfo.displayName} 카드 로고`} />
                </div>
                <div className={styles.cardInfo}>
                  <div>{brandInfo.displayName}</div>
                  <div>{method.cardNumber}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {showAddCard && (
        <SwiperSlide className={clsx(styles.item)}>
          <div
            className={clsx(styles.root, styles.shape, styles.noCard)}
            onClick={() => onCardClick(methods.length)}
          >
            <Icon name="addCircle" size="large" />
            <Text weight="medium" size="4">
              H.pay 추가하고 빠르게 결제하세요
            </Text>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
CardSwiper.displayName = 'CardSwiper';
