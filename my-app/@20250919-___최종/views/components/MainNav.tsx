'use client';

import React from 'react';
import { Heading, Link, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './MainNav.module.scss';

/**
 * 마이페이지 메인 하단 네비게이션 컴포넌트
 */

export interface MainNavItem {
  /** ID */
  id: string;
  /** 링크 라벨 */
  label: React.ReactNode;
  /** 이동 경로 */
  href: string;
  /** 라벨 우측 녹색 강조 갯수 */
  count?: number;
  /** 클릭 핸들러(선택) */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface MainNavGroup {
  /** 섹션 타이틀 (string 이면 Heading으로 감싸고, ReactNode면 그대로 출력) */
  title: React.ReactNode;
  /** 하위 메뉴 */
  items: MainNavItem[];
}

export interface MainNavProps {
  /** 그룹 데이터 */
  groups: MainNavGroup[];
  /** 추가 클래스 */
  className?: string;
  /** 내비게이션 접근성 레이블 (기본: "mypage navigation") */
  ariaLabel?: string;
}

const isString = (val: React.ReactNode): val is string => typeof val === 'string';

export function MainNav({ groups, className, ariaLabel = 'mypage navigation' }: MainNavProps) {
  return (
    <nav className={clsx(styles.nav, className)} aria-label={ariaLabel}>
      <ul className={styles.list}>
        {groups.map((group, gi) => (
          <li className={styles.item} key={gi}>
            {isString(group.title) ? (
              <Heading size="3" weight="medium" color="gray3" indent>
                {group.title}
              </Heading>
            ) : (
              group.title
            )}

            <ul className={styles.depth}>
              {group.items.map((item, ii) => (
                <li key={ii}>
                  <Link href={item.href} as="route" onClick={item.onClick}>
                    {item.label}
                    {item.count !== undefined &&
                      (typeof item.count === 'number' ? (
                        <Text as="em" weight="medium" color="point">
                          {item.count}
                        </Text>
                      ) : (
                        item.count
                      ))}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
