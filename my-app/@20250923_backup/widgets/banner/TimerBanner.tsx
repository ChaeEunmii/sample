import { Countdown, Heading, Text, Image, Button, Link } from '@/shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import styles from './TimerBanner.module.scss';
import clsx from 'clsx';

interface DefaultTimerType {
  variant?: 'default';
  title: string;
  subtitle?: string;
}

interface ProductTimerType {
  variant: 'product';
  product: {
    id?: string;
    image: { src: string; alt?: string };
    brand?: string;
    title: string;
    price: number;
    href?: string;
  };
  notification: {
    isActive: boolean;
    onToggle?: (productId?: string) => void;
  };
}
export type TimerBannerProps = (DefaultTimerType | ProductTimerType) & {
  endDate: Date | string;
};

export const TimerBanner = ({ endDate, ...props }: TimerBannerProps) => {
  const { variant } = props;
  const { title, subtitle } = props as DefaultTimerType;
  const { product, notification } = props as ProductTimerType;
  const isProdType = variant === 'product';

  const handleToggle = () => {
    notification?.onToggle?.(product?.id);
  };

  return (
    <div className={clsx(styles.root, isProdType && styles.product)}>
      {!isProdType ? (
        <>
          <Countdown endDate={endDate} showLabel variant="display2" className={styles.timer} />

          <Heading size="5" className={styles.title}>
            {title}
          </Heading>
          {subtitle && (
            <Text as="strong" className={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </>
      ) : (
        <>
          <Link href={product.href || '#'} type="block">
            <div className={styles.thumb}>
              <Image {...product.image} />
              <Countdown endDate={endDate} showLabel className={styles.timer} />
            </div>

            <div className={styles.detail}>
              <div>
                {product.brand && (
                  <Text as="em" size="3" className={styles.brand}>
                    {product.brand}
                  </Text>
                )}
                <Heading weight="regular" ellipsis={1}>
                  {product.title}
                </Heading>
              </div>
              <Text as="strong" weight="bold">
                {formatPrice(product.price)}
              </Text>
            </div>
          </Link>
          <Button
            size="smaller"
            prefixIcon="bell"
            variant={notification.isActive ? 'secondary' : 'primary'}
            className={styles.button}
            onClick={handleToggle}
          >
            {notification?.isActive ? '신청완료' : '오픈 시 알림 받기'}
          </Button>
        </>
      )}
    </div>
  );
};
