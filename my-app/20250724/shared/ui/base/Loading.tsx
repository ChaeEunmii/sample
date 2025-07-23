'use client';

import { useScrollLock } from '@shared/hooks';
import styles from './Loading.module.scss';
import clsx from 'clsx';

interface LoadingProps {
  /** 로딩 여부 */
  isLoading: boolean;
  /** 로딩 스타일 */
  variant?: 'default' | 'page' | 'spinner';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const Loading = ({ isLoading, variant = 'default', className }: LoadingProps) => {
  const shouldLock = isLoading && variant !== 'spinner';
  useScrollLock(shouldLock);

  if (!isLoading) return null;

  const renderLoading = (variant: string | null) => {
    switch (variant) {
      case 'spinner':
        return <div className={styles.spinnerSpin}></div>;
      default:
        return <div className={styles.spin}>처리중</div>;
    }
  };

  return (
    <div className={clsx(styles.root, variant && styles[variant], className)}>
      {/* variant 렌더링 */}
      {renderLoading(variant)}
    </div>
  );
};

Loading.displayName = 'Loading';
