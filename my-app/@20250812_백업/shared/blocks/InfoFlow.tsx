'use client';

import clsx from 'clsx';
import React from 'react';
import { Icon, Text } from '@shared/ui';
import styles from './InfoFlow.module.scss';

export interface InfoFlowItem {
  /** 고유 ID */
  id: string | number;
  /** 이미지 */
  image?: {
    src: string;
    alt: string;
  };
  /** 프로세스명 */
  content: React.ReactNode;
}

interface InfoFlowProps {
  /** 아이템 개수(기본: 4) */
  columns?: '3' | '4';
  /** 아이템 목록 */
  data: InfoFlowItem[];
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const InfoFlow = ({ columns = '4', data, className }: InfoFlowProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <ul className={clsx(styles.iconProcess, columns && styles[`columns${columns}`])}>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <li className={styles.item}>
              <span className={styles.iconBox}>
                <img src={item.image?.src} alt={item.image?.src} />
              </span>
              <Text size="3" weight="medium" align="center">
                {item.content}
              </Text>
            </li>
            <li className={styles.arrow} aria-hidden="true">
              <Icon name="arrow" size="small" className={styles.icon} />
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

InfoFlow.displayName = 'InfoFlow';
