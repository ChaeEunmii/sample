import { Text } from '@shared/ui';
import { BRAND_INFO } from '@widgets/payment/CardSwiper';
import type { SubscriptionPayment } from '@widgets/order/SubscriptionPaymentMethod';
import styles from './PaymentMethodCard.module.scss';
import clsx from 'clsx';

export interface PaymentMethodCardProps {
  /** 정기구독 결제 수단 */
  data: SubscriptionPayment;
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
}

export function PaymentMethodCard({
  data,
  sideSlot,
  as = 'div',
  disabled,
  onClick,
  isSelected,
}: PaymentMethodCardProps) {
  const brandInfo = BRAND_INFO[data.brand] || {
    displayName: data.brand,
    logoSrc: '/images/card/logo_hyundai_card.svg',
  };

  const Tag = as;
  const isButton = Tag === 'button';

  const handleClick = () => {
    onClick?.(data.id);
  };

  return (
    <Tag
      className={clsx(styles.root, disabled && styles.disabled, isSelected && styles.isSelected)}
      {...(isButton ? { type: 'button' as const, 'aria-pressed': isSelected } : {})}
      onClick={handleClick}
    >
      <div className={styles.cont}>
        <div className={clsx(styles.card, data.brand && styles[data.brand])}>
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
