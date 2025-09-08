import { formatPrice } from '@/shared/utils/ui';
import { Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './ProdPrice.module.scss';

type TextSize = React.ComponentProps<typeof Text>['size'];
type TextWeight = React.ComponentProps<typeof Text>['weight'];
type TextColor = React.ComponentProps<typeof Text>['color'];

type TextStyleProps = {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
};

type PriceVariant = 'default' | 'order' | 'secondary' | 'invert';

interface ProdPriceProps {
  discount?: number;
  discountRate?: number;
  currentPrice: number | string;
  /** currentPrice 가격 스타일
   * - default(14px, #222, bold)
   * - order(16px, #000, bold)
   * - secondary(13px, #8c8c8c, semibold)
   */
  variant?: PriceVariant;
  originalPrice?: number;
  subPriceText?: string;
  className?: string;
}

const currentPriceTextStyles: Record<PriceVariant, TextStyleProps> = {
  default: { size: '4', color: 'gray1' }, // prodCard 등 사용
  order: { size: '7', color: 'primary' }, // 장바구니, 주문서 등 사용
  secondary: { size: '4', color: 'gray3', weight: 'semibold' },
  invert: { size: '4', color: 'white' },
};

export const ProdPrice = ({
  discount,
  discountRate,
  currentPrice,
  originalPrice,
  subPriceText,
  variant = 'default',
  className,
}: ProdPriceProps) => {
  const currentPriceProps = currentPriceTextStyles[variant];

  return (
    <div className={clsx(styles.root, variant === 'order' && styles.orderPrice, className)}>
      {discount && (
        <div className={styles.reduction}>
          <Text as="span" size="3" weight="medium">
            가격인하
          </Text>
          <Text as="span" size="3" weight="semibold">
            {formatPrice(discount)}
          </Text>
        </div>
      )}
      {discountRate !== undefined && (
        <Text as="strong" className={styles.discount}>
          {discountRate}%
        </Text>
      )}
      <Text as="strong" className={styles.current} {...currentPriceProps}>
        {typeof currentPrice === 'number' ? formatPrice(currentPrice) : currentPrice}
      </Text>
      {originalPrice && (
        <Text as="del" size="2" className={styles.original}>
          {formatPrice(originalPrice)}
        </Text>
      )}
      {subPriceText && (
        <Text as="span" size="2" className={styles.subtext}>
          {subPriceText}
        </Text>
      )}
    </div>
  );
};

ProdPrice.displayName = 'ProdPrice';
