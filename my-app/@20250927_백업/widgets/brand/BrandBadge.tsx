import { Image } from '@shared/ui';
import styles from './BrandBadge.module.scss';
import clsx from 'clsx';

export const BrandBadge = ({
  brandType,
  size = 'medium',
  className,
  white,
}: {
  brandType?: 'official';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  white?: boolean;
}) => {
  if (!brandType) return null;

  const getBadgeImage = () => {
    const baseUrl = '/images/badge/';
    const sizeStr = size === 'small' ? 'small' : 'large';
    const whiteStr = white ? '_white' : '';
    return `${baseUrl}badge_${brandType}_${sizeStr}${whiteStr}.png`;
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
      className={clsx(styles.root, styles[size], className)}
      as="span"
    />
  );
};

BrandBadge.displayName = 'BrandBadge';
