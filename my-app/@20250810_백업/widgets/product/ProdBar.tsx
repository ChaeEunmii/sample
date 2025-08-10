import { Image, Link, Heading, Text } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import styles from './ProdBar.module.scss';
import clsx from 'clsx';

interface ProdBarProps {
  image: string;
  title: string;
  brand?: string;
  price?: number;
  href?: string;
  className?: string;
  /** 스타일 변형 */
  variant?: 'boxed' | 'review';
  /** boxed일때 bg 색상 */
  color?: 'white' | 'gray' | 'black';
}

export const ProdBar = ({
  image,
  title,
  brand,
  price,
  href,
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

        {price && (
          <Text as="strong" className={styles.price}>
            {formatPrice(price)}
          </Text>
        )}
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
