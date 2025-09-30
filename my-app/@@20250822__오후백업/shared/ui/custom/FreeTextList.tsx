import React from 'react';
import clsx from 'clsx';
import styles from './FreeTextList.module.scss';
import { FreeText } from './FreeText';
import { Text } from '@/shared/ui';

export type FreeTextItem = FreeText & {
  /** 텍스트(내용) */
  text: string;
};

interface FreeTextListProps {
  /** 데이터 배열 */
  data: (FreeTextItem | string | React.ReactElement)[];
  className?: string;
}

export const FreeTextList = ({ data, className, ...props }: FreeTextListProps) => {
  const Tag = 'ul';

  const isSimpleItem = (item: any): item is string | React.ReactElement =>
    typeof item === 'string' || React.isValidElement(item);

  const renderItems = (items: (FreeTextItem | string | React.ReactElement)[]) => {
    return items.map((item, index) => {
      // 문자열 또는 React 노드인 경우
      if (isSimpleItem(item)) {
        return (
          <Text as="li" key={index}>
            {item}
          </Text>
        );
      }

      // FreeTextItem일 경우
      const { weight, size, color, text } = item as FreeTextItem;
      return (
        <FreeText as="li" key={index} weight={weight} size={size} color={color}>
          {text}
        </FreeText>
      );
    });
  };

  return (
    <Tag className={clsx(styles.root, className)} {...props}>
      {renderItems(data)}
    </Tag>
  );
};

FreeTextList.displayName = 'FreeTextList';
