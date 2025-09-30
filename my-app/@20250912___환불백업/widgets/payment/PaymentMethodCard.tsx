import { Text } from '@shared/ui';
import { BRAND_INFO } from '@widgets/payment/CardBrandInfo'; // 카드브랜드 정보
import styles from './PaymentMethodCard.module.scss';
import clsx from 'clsx';

// 데이터 구조 (SubscriptionPaymentMethod.tsx 동일한 구조)
export type PaymentMethod = {
  /** id */
  id: string;
  /** 카드명(표시용 라벨) */
  label: string;
  /** 카드번호 */
  cardNumber: string;
  /** 카드 브랜드 코드 */
  brand: string;
};

export interface PaymentMethodCardProps {
  /** 결제 수단 */
  data: PaymentMethod;
  /** 사이드 슬롯  */
  sideSlot?: React.ReactNode;
  /** wrapper element 타입 (기본 div, button 가능) */
  as?: 'div' | 'button';
  /** 비활성화 스타일 */
  disabled?: boolean;
  /** 클릭 이벤트 */
  onClick?: (id: string) => void;
  /** 선택 여부 */
  isSelected?: boolean;
  /** 스타일 변형 (기본 boxed) */
  variant?: 'boxed' | 'clear';
}

export function PaymentMethodCard({
  data,
  sideSlot,
  as = 'div',
  disabled,
  onClick,
  isSelected,
  variant = 'boxed',
}: PaymentMethodCardProps) {
  const brandInfo = BRAND_INFO[data.brand] ?? BRAND_INFO.hyundai;

  const Tag = as;
  const isButton = Tag === 'button';

  const handleClick = () => {
    onClick?.(data.id);
  };

  return (
    <Tag
      className={clsx(
        styles.root,
        disabled && styles.disabled,
        isSelected && styles.isSelected,
        variant && styles[variant]
      )}
      {...(isButton ? { type: 'button' as const, 'aria-pressed': isSelected } : {})}
      onClick={handleClick}
    >
      <div className={styles.cont}>
        <div
          className={clsx(styles.card, data.brand && styles[data.brand])}
          style={
            {
              '--brand-bg': brandInfo.bgColor,
              '--brand-text': brandInfo.textColor,
            } as React.CSSProperties
          }
        >
          <img
            src={brandInfo.logoSrc}
            alt={`${brandInfo.displayName} 로고`}
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <Text as="em" size="5" className={styles.tit}>
            {data.label}
          </Text>
          <Text as="span" size="5" weight="regular">
            {data.cardNumber}
          </Text>
        </div>
      </div>
      {sideSlot && <div className={styles.side}>{sideSlot}</div>}
    </Tag>
  );
}
