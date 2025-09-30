import React from 'react';
import clsx from 'clsx';
import styles from './FreeFlag.module.scss';
import { FreeText } from './FreeText';

interface FreeFlagItem extends FreeText {
  text: string;
  backgroundColor?: string;
  className?: string;
}
export type FreeFlagItemType = FreeFlagItem | React.ReactNode;

interface FreeFlagProps {
  data: FreeFlagItemType | FreeFlagItemType[];
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  radius?: 'tl' | 'tr' | 'bl' | 'br' | 'all';
  color?: string;
  className?: string;
}

export const FreeFlag: React.FC<FreeFlagProps> = ({
  size = 'medium',
  data,
  radius,
  color,
  className,
}) => {
  const flags = Array.isArray(data) ? data : [data];

  return (
    <div
      className={clsx(
        styles.root,
        size && styles[size],
        radius && styles[`radius-${radius}`],
        className
      )}
    >
      {flags.map((item, index) => {
        // FreeFlagItem 객체인 경우
        const isObject = typeof item === 'object' && item !== null && 'text' in item;
        const itemBackgroundColor = isObject
          ? ((item as FreeFlagItem).backgroundColor ?? color)
          : color;
        const itemClassName = isObject ? (item as FreeFlagItem).className : undefined;
        if (isObject) {
          return (
            <FreeText
              as="span"
              key={index}
              weight={item.weight}
              size={item.size}
              color={item.color}
              className={clsx(styles.item, itemClassName)}
              style={{
                ...(itemBackgroundColor && { backgroundColor: itemBackgroundColor }),
              }}
            >
              {item.text}
            </FreeText>
          );
        }
        // ReactNode or string 등
        return (
          <span key={index} className={styles.item}>
            {item}
          </span>
        );
      })}
    </div>
  );
};
