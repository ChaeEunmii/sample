'use client';

import { useScrollLock } from '@shared/hooks';
import styles from './Loading.module.scss';
import clsx from 'clsx';

interface LoadingProps {
  isLoading: boolean;
  variant?: 'default' | 'page';
}

export const Loading = ({ isLoading, variant = 'default' }: LoadingProps) => {
  useScrollLock(isLoading);
  if (!isLoading) return null;

  return (
    <div className={clsx(styles.root, variant && styles[variant])}>
      <div className={styles.spin}>처리중</div>
    </div>
  );
};

Loading.displayName = 'Loading';
