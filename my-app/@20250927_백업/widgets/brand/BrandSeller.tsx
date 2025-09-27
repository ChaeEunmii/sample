import { Avatar, Heading, Text } from '@shared/ui';
import styles from './BrandSeller.module.scss';
import clsx from 'clsx';

interface BrandSellerProps {
  image?: { src: string; alt?: string };
  name: string;
  desc?: React.ReactNode;
  className?: string;
}
export const BrandSeller = ({ image, name, desc, className, ...props }: BrandSellerProps) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Avatar
        src={image?.src || '/images/no_avatar_white.png'}
        alt={image?.alt}
        className={styles.avatar}
      />
      <div className={styles.seller}>
        <Heading size="4" ellipsis={1}>
          {name}
        </Heading>
        {desc && <Text className={styles.desc}>{desc}</Text>}
      </div>
    </div>
  );
};

BrandSeller.displayName = 'BrandSeller';
