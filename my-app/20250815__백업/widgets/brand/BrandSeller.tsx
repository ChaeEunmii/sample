import { Avatar, Heading, Text } from '@shared/ui';
import styles from './BrandSeller.module.scss';
import clsx from 'clsx';

interface BrandSellerProps {
  image: { src: string; alt?: string };
  name: string;
  desc?: React.ReactNode;
}
export const BrandSeller = ({ image, name, desc }: BrandSellerProps) => {
  return (
    <div className={clsx(styles.root)}>
      <Avatar {...image} className={styles.avatar} />
      <div className={styles.seller}>
        <Heading size="4">{name}</Heading>
        {desc && <Text className={styles.desc}>{desc}</Text>}
      </div>
    </div>
  );
};

BrandSeller.displayName = 'BrandSeller';
