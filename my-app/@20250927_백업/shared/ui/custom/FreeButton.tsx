import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './FreeButton.module.scss';
import clsx from 'clsx';

interface FreeButtonProps {
  textColor?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
  children: React.ReactNode;
  href?: string;
  className?: string;
}
export const FreeButton = ({ textColor, bgColor, children, className, href }: FreeButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={clsx(styles.root, className)}
      style={{
        ...(textColor && { color: textColor }),
        ...(bgColor && { backgroundColor: bgColor }),
      }}
      onClick={() => href && router.push(href)}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
};
FreeButton.displayName = 'FreeButton';
