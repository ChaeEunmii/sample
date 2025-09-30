'use client';

import { useScrollLock } from '@shared/hooks';
import styles from './Loading.module.scss';
import clsx from 'clsx';

interface LoadingProps {
  /** 로딩 여부 */
  isLoading: boolean;
  /** 로딩 스타일 (default: 컨텐츠에서 로딩형태)*/
  variant?: 'default' | 'page';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const Loading = ({ isLoading, variant = 'default', className }: LoadingProps) => {
  // page 의 경우 ScrollLock
  const shouldLock = isLoading && variant === 'page';
  useScrollLock(shouldLock);

  if (!isLoading) return null;

  return (
    <div className={clsx(styles.root, variant && styles[variant], className)}>
      <div className={styles.spin}>처리중</div>
    </div>
  );
};

Loading.displayName = 'Loading';
