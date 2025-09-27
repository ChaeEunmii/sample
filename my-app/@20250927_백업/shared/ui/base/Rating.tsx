'use client';

import { Text, Icon } from '@/shared/ui';
import clsx from 'clsx';
import styles from './Rating.module.scss';

interface RatingProps {
  /** 사이즈(기본: xsmall)
   * - xsmall: icon 12px, text 12px
   * - small: icon 16px, text 13px
   */
  size?: 'xsmall' | 'small';
  /** 별점 점수 */
  rating: string | number;
  /** 구분선 위치(기본: right) */
  separator?: 'left' | 'right' | 'none';
  /** 추가 클래스명 */
  className?: string;
}

const sizeMap = {
  xsmall: {
    iconSize: 'xsmall',
    textSize: '3',
  },
  small: {
    iconSize: 'small',
    textSize: '4',
  },
} as const;

export const Rating = ({
  size = 'xsmall',
  separator = 'right',
  rating,
  className,
}: RatingProps) => {
  const { iconSize, textSize } = sizeMap[size];

  return (
    <span
      className={clsx(
        styles.root,
        separator !== 'none' && styles[`${separator}Separator`],
        className
      )}
    >
      <Icon name="rating" size={iconSize} label="별점" />
      <Text as="strong" size={textSize}>
        {rating}
      </Text>
    </span>
  );
};

Rating.displayName = 'Rating';
