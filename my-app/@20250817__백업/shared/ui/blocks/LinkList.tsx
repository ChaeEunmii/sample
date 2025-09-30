import React from 'react';
import clsx from 'clsx';
import styles from './LinkList.module.scss';
import { Heading, Icon, IconName, Link, Text } from '@/shared/ui';

interface LinkListProps {
  /** 타입 : 텍스트(기본), 이미지 */
  type?: 'image';
  /** 리스트 타이틀 */
  title: string;
  /** 데이터 */
  data: {
    /** 경로 */
    href: string;
    /** 아이콘 */
    icon?: IconName;
    /** 아이템 타이틀 텍스트 */
    title: string;
    /** 설명 텍스트 */
    desc?: string;
  }[];
}

export default function LinkList({ type, title, data }: LinkListProps) {
  return (
    <div className={styles.root}>
      {/* 리스트 타이틀 */}
      <Heading as="h3" size="6">
        {title}
      </Heading>

      <ul className={clsx(styles.list, type && styles[`type-${type}`])}>
        {data.map((item, idx) => (
          <li key={idx} className={styles.item}>
            <Link href={item.href}>
              {/* 아이콘 영역 */}
              {item.icon && (
                <div className={styles.icon}>
                  <Icon name={item.icon} size="large" />
                </div>
              )}

              {/* 텍스트 영역 */}
              <div className={styles.texts}>
                <Text weight="semibold">{item.title}</Text>
                {item.desc && (
                  <Text size="3" color="gray3" className="ncp-mt-xxs">
                    {item.desc}
                  </Text>
                )}
              </div>

              {/* 화살표 */}
              <Icon
                className={styles.arrow}
                name="arrowRight"
                size={type === 'image' ? 'xsmall' : 'small'}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
