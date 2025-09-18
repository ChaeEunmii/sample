'use client';

import React from 'react';
import { Link, Icon, IconName, IconSize } from '@shared/ui';
import clsx from 'clsx';
import styles from './MainFavMenu.module.scss';

/**
 * 마이페이지 메인 상단/하단 즐겨찾기 메뉴 컴포넌트
 */

export interface MainFavMenuItem {
  /** ID */
  id: string;
  /** 링크 경로 */
  href: string;
  /** 아이콘 이름 */
  icon: IconName;
  /** 아이콘 크기 */
  iconSize?: IconSize;
  /** 라벨 */
  label: string;
  /** 카운트 (동적 값 가능) */
  count?: number;
  /** 클릭 핸들러 */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface MainFavMenuProps {
  items: MainFavMenuItem[];
  className?: string;
}

export function MainFavMenu({ items, className }: MainFavMenuProps) {
  return (
    <div className={clsx(styles.favMenu, className)}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.href} as="route" className={styles.link} onClick={item.onClick}>
              <Icon name={item.icon} size={item.iconSize ?? 'large'} />
              <div className={styles.favItem}>
                {item.label}
                {item.count !== undefined && <strong className={styles.count}>{item.count}</strong>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
