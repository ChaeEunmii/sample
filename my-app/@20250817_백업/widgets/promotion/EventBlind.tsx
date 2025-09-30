import React from 'react';

import styles from './EventBlind.module.scss';
import clsx from 'clsx';

interface EventBlindProps {
  /** 배경 투명도 */
  opacity?: number;
  /** 자식 노드 */
  children: React.ReactNode;
  className?: string;
}

export default function EventBlind({ children, opacity = 7, className }: EventBlindProps) {
  return (
    <div className={clsx(styles.root, opacity && styles[`opacity${opacity}`], className)}>
      {children}
    </div>
  );
}
