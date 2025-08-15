import { Image } from '@shared/ui';
import styles from './BrandBadge.module.scss';
import clsx from 'clsx';

export const BrandBadge = ({
  brandType,
  size = 'medium',
  className,
}: {
  brandType?: 'official';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}) => {
  if (!brandType) return null;

  const getBadgeImage = () => {
    const baseUrl = '/images/badge/';
    const sizeStr = size === 'small' ? 'small' : 'large';
    return `${baseUrl}badge_${brandType}_${sizeStr}.png`;
  };

  const getBadgeLabel = (type: string) => {
    const labels = {
      official: '공식',
      normal: '일반',
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <Image
      src={getBadgeImage()}
      alt={`${getBadgeLabel(brandType)} 뱃지`}
      className={clsx(styles.root, className)}
      as="span"
      data-badge-size={size}
    />
  );
};

BrandBadge.displayName = 'BrandBadge';
