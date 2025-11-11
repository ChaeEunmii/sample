'use client';
import React from 'react';
import clsx from 'clsx';
import styles from './TitleWithInfoStack.module.scss';

interface TitleWithInfoStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /* 자식 */
  children: React.ReactNode;
  /** 사이간격: 0px, 16px, 24px, 32px, 40px) */
  gap?: '0' | '1' | '2' | '3' | '4';
  /** 상단마진: 0px, 16px, 24px, 32px, 40px) */
  margin?: '0' | '1' | '2' | '3' | '4';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function TitleWithInfoStack({
  children,
  gap = '2',
  margin = '2',
  className,
  ...props
}: TitleWithInfoStackProps) {
  return (
    <div
      className={clsx(
        styles.root,
        margin && styles[`mt${margin}`],
        gap && styles[`gap${gap}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
