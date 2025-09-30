import { Image } from '@shared/ui';
import styles from './MeBadge.module.scss';
import clsx from 'clsx';

export const MeBadge = ({
  userType,
  size = 'medium',
  className,
}: {
  userType?: 'influencer' | 'manager' | 'normal';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}) => {
  if (!userType || userType === 'normal') return null;

  const getBadgeImage = () => {
    const baseUrl = '/images/badge/';
    const sizeStr = size === 'small' ? 'small' : 'large';
    return `${baseUrl}badge_manager_${sizeStr}.png`;
  };

  const getBadgeLabel = (type: string) => {
    const labels = {
      influencer: '인플루언서',
      manager: '매니저',
      normal: '일반',
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <Image
      src={getBadgeImage()}
      alt={`${getBadgeLabel(userType)} 뱃지`}
      className={clsx(styles.root, className)}
      as="span"
      data-badge-size={size}
    />
  );
};
