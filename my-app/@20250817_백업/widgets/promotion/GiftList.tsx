import React from 'react';
import { Flag, Image, Text } from '@/shared/ui';
import { formatNumber } from '@/shared/utils/ui';

import styles from './GiftList.module.scss';
import clsx from 'clsx';

export type GiftIconType =
  | 'coupon'
  | 'point'
  | 'coffee'
  | 'pizza'
  | 'donut'
  | 'chicken'
  | 'cake'
  | 'giftbox';

export interface GiftItemType {
  /** 이미지 경로 */
  src?: string;
  /** 아이콘명 */
  icon?: GiftIconType;
  /** 타이틀 */
  title: string;
  /** 서브타이틀 */
  subtitle: string;
  /** 당첨자 수 */
  winner?: number;
}

interface GiftListProps {
  /** variant */
  variant?: 'referral';
  /** 선물 */
  data: GiftItemType | GiftItemType[];
  /** 플래그 색상 추가 (default: green3) */
  flagColor?: 'green3' | 'black';
}

/** 공통 Gift 아이템 렌더 */
function GiftListItem({
  item,
  as,
  flagColor = 'green3',
}: {
  item: GiftItemType;
  as?: 'li' | 'div';
  flagColor?: 'green3' | 'black';
}) {
  const Container = as === 'li' ? 'li' : 'div';
  return (
    <Container className={styles.item}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.image}
          src={item.src ? item.src : `/images/icon/icon_${item.icon}.svg`}
          alt={`${item.subtitle}${item.src ? ' 이미지' : ' 아이콘'}`}
        />
        {item.winner && (
          <Flag
            className={styles.flag}
            data={{ label: formatNumber(item.winner, 'user'), color: flagColor }}
            size="xlarge"
            radius="br"
          />
        )}
      </div>
      <div className={styles.texts}>
        <Text weight="semibold" color="gray1" className={styles.title}>
          {item.title}
        </Text>
        <Text className={styles.subtitle}>{item.subtitle}</Text>
      </div>
    </Container>
  );
}

export default function GiftList({ variant, data, flagColor = 'green3' }: GiftListProps) {
  // 복수 케이스 : ul/li
  if (Array.isArray(data)) {
    return (
      <ul className={clsx(styles.root, variant && styles[variant])}>
        {(data as GiftItemType[]).map((item, idx) => (
          <GiftListItem key={idx} item={item} as="li" flagColor={flagColor} />
        ))}
      </ul>
    );
  }

  // 단일 케이스 : div
  return (
    <div className={clsx(styles.root, variant && styles[variant])}>
      <GiftListItem item={data as GiftItemType} as="div" flagColor={flagColor} />
    </div>
  );
}
