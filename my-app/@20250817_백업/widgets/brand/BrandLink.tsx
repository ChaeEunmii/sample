import { Avatar, Heading, Text, Link, Icon } from '@/shared/ui';
import { BrandBadge } from './BrandBadge';
import styles from './BrandLink.module.scss';
import clsx from 'clsx';

export interface BrandLinkProps {
  image?: { src: string; alt?: string };
  name: string;
  subName?: string;
  href: string;
  brandType?: 'official';
  className?: string;
}

export const BrandLink = ({ image, name, subName, href, brandType, className }: BrandLinkProps) => {
  if (!name) return;
  return (
    <div className={clsx(styles.root, className)}>
      <Link href={href} className={styles.link} type="flex">
        {image && <Avatar className={styles.image} type="brand" {...image} />}
        <div className={styles.title}>
          <Heading size="5" className={styles.name}>
            {name}
            {brandType && <BrandBadge brandType="official" size="small" />}
          </Heading>
          {subName && (
            <Text as="span" size="4" color="gray3" className={styles.subName}>
              {subName}
            </Text>
          )}
        </div>
        <div className={styles.side}>
          <Text as="span" size="4">
            브랜드관
          </Text>
          <Icon name="arrowRight" size="xsmall" />
        </div>
      </Link>
    </div>
  );
};
