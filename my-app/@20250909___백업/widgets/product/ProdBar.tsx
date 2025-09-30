import { Image, Link, Heading, Text } from '@shared/ui';
import { ProdPrice } from './ProdPrice';
import { formatPrice } from '@/shared/utils/ui';
import styles from './ProdBar.module.scss';
import clsx from 'clsx';

interface ProdBarProps {
  image: string;
  title: string;
  brand?: string;
  price?: number | { current: number | string; original?: number; discountRate?: number };
  href?: string;
  orderNum?: string;
  className?: string;
  /** 스타일 변형 */
  variant?: 'boxed' | 'review' | 'qna';
  /** boxed일때 bg 색상 */
  color?: 'white' | 'gray' | 'black';
}

export const ProdBar = ({
  image,
  title,
  brand,
  price,
  href,
  orderNum,
  className,
  variant,
  color = 'black',
}: ProdBarProps) => {
  const content = (
    <>
      <Image className={styles.image} src={image} alt="" />
      <div className={styles.detail}>
        <div className={styles.title}>
          {brand && (
            <Text as="strong" className={styles.brand}>
              {brand}
            </Text>
          )}
          <Heading size="2" className={styles.name}>
            {title}
          </Heading>
        </div>
        {/* 주문번호 */}
        {orderNum && (
          <dl className={styles.orderNum}>
            <dt>주문번호</dt>
            <dd>{orderNum}</dd>
          </dl>
        )}

        {price &&
          (typeof price === 'object' ? (
            <ProdPrice
              currentPrice={price.current}
              originalPrice={price.original}
              discountRate={price.discountRate}
            />
          ) : (
            <Text as="strong" className={styles.price}>
              {formatPrice(price)}
            </Text>
          ))}
      </div>
    </>
  );

  return (
    <div
      className={clsx(
        styles.root,
        variant && styles[variant],
        variant && color && styles[color],
        className
      )}
    >
      {href ? (
        <Link href={href} className={styles.link}>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

ProdBar.displayName = 'ProdBar';
