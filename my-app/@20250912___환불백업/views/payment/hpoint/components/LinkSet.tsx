'use client';

import React from 'react';
import { Link, Icon, Heading } from '@shared/ui';
import clsx from 'clsx';
import styles from './LinkSet.module.scss';

/**
 * 반복사용되는 텍스트 + 오른쪽방향아이콘 링크버튼 디자인
 * 배열 1개일경우 div로 설정
 */
export interface LinkItem {
  /** 텍스트 라벨 */
  label: string;
  /** 이동시 URL */
  href?: string;
  /** 컴포넌트의 태그 타입 */
  as?: 'route' | 'a';
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 추가 클래스명 */
  className?: string;
}

interface LinkSetProps {
  items: LinkItem[];
  className?: string;
}
export function LinkSet({ items, className }: LinkSetProps) {
  const Tag: React.ElementType = items.length === 1 ? 'div' : 'ul';

  return (
    <Tag className={clsx(styles.wrap, className)}>
      {items.map(({ label, href, as = 'route', onClick }, idx) => {
        const content = (
          <Link href={href ?? '#'} as={as} onClick={onClick} className={styles.link}>
            <Heading size="5" color="black">
              {label}
            </Heading>
            <Icon size="small" name="arrowRight" />
          </Link>
        );

        return items.length === 1 ? content : <li key={idx}>{content}</li>;
      })}
    </Tag>
  );
}
