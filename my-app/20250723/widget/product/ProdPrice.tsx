import { formatPrice } from '@/shared/utils/ui';
import { Stack, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './ProdPrice.module.scss';

interface ProdPriceProps {
  discount?: number;
  discountRate?: number;
  currentPrice: number | string;
  originalPrice?: number;
  subPriceText?: string;
  className?: string;
}

export const ProdPrice = ({
  discount,
  discountRate,
  currentPrice,
  originalPrice,
  subPriceText,
  className,
}: ProdPriceProps) => {
  return (
    <div className={clsx(styles.root, className)}>
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
      <Text as="strong" className={styles.current}>
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
