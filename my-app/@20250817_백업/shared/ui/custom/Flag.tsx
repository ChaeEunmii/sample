import React from 'react';
import clsx from 'clsx';
import styles from './Flag.module.scss';
import { Text, CustomText } from './Text';

interface CustomFlagItem extends CustomText {
  text: string;
  backgroundColor?: string;
  className?: string;
}
export type CustomFlagItemType = CustomFlagItem | React.ReactNode;

interface FlagProps {
  data: CustomFlagItemType | CustomFlagItemType[];
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  radius?: 'tl' | 'tr' | 'bl' | 'br' | 'all';
  color?: string;
  className?: string;
}

export const Flag: React.FC<FlagProps> = ({ size = 'medium', data, radius, color, className }) => {
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
        // CustomFlagItem 객체인 경우
        const isObject = typeof item === 'object' && item !== null && 'text' in item;
        const itemBackgroundColor = isObject
          ? ((item as CustomFlagItem).backgroundColor ?? color)
          : color;
        const itemClassName = isObject ? (item as CustomFlagItem).className : undefined;
        if (isObject) {
          return (
            <Text
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
            </Text>
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
