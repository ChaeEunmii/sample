import React from 'react';
import clsx from 'clsx';
import styles from './LinkList.module.scss';
import { Heading, Icon, IconName, Link, Text } from '@/shared/ui';

type listGap = 'row32';

interface LinkListProps {
  /** 타입 : 텍스트(기본), 이미지 */
  type?: 'image';
  /** 리스트 타이틀 */
  title?: string;
  /** 데이터 */
  data: {
    /** 경로 */
    href?: string;
    /** 아이콘 */
    icon?: IconName;
    /** 아이템 타이틀 텍스트 */
    title: string;
    /** 설명 텍스트 */
    desc?: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
  }[];
  /** 링크 옵션 */
  linkProps?: {
    /** 타이틀 사이즈 (14px, 16px) */
    size?: '1' | '2';
    /** 타이틀 컬러 (#22, #00, 상속) */
    color?: 'gray1' | 'black' | 'inherit';
    /** 아이콘 컬러 (#22, #8c, 상속)  */
    iconColor?: 'gray1' | 'gray3' | 'inherit';
  };
  /** 구분선 숨김 여부 */
  hideLine?: boolean;
  /** gap 설정 (flex + gap 설정) */
  flexGap?: listGap;
  /** 추가 클래스명 */
  className?: string;
}

export default function LinkList({
  type,
  title,
  data,
  linkProps = { size: '1', color: 'inherit', iconColor: 'inherit' },
  flexGap,
  hideLine = false,
  className,
}: LinkListProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {/* 리스트 타이틀 */}
      {title && (
        <Heading as="h3" size="6">
          {title}
        </Heading>
      )}

      <ul
        className={clsx(
          styles.list,
          type && styles[`type-${type}`],
          hideLine && styles.hideLine,
          flexGap && [styles.flexGap, styles[flexGap]]
        )}
      >
        {data.map((item, idx) => (
          <li key={idx} className={styles.item}>
            <Link href={item.href ?? '#'} onClick={item.onClick}>
              {/* 아이콘 영역 */}
              {item.icon && (
                <div className={styles.icon}>
                  <Icon name={item.icon} size="large" />
                </div>
              )}

              {/* 텍스트 영역 */}
              <div className={styles.texts}>
                <Text
                  weight="semibold"
                  className={clsx(
                    linkProps?.size && styles[`size-${linkProps.size}`],
                    linkProps?.color &&
                      linkProps?.color !== 'inherit' &&
                      `ncp-color-${linkProps?.color}`
                  )}
                >
                  {item.title}
                </Text>
                {item.desc && (
                  <Text size="3" color="gray3" className="ncp-mt-xxs">
                    {item.desc}
                  </Text>
                )}
              </div>

              {/* 화살표 */}
              <Icon
                className={clsx(
                  styles.arrow,
                  linkProps?.iconColor &&
                    linkProps?.iconColor !== 'inherit' &&
                    `ncp-color-${linkProps?.iconColor}`
                )}
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
