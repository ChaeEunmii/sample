import React from 'react';
import clsx from 'clsx';
import styles from './TextList.module.scss';
import { CustomText, Text } from './Text';

export type CustomTextItem = CustomText & {
  /** 텍스트(내용) */
  text: string;
};

interface TextListProps {
  /** 데이터 배열 */
  data: (CustomTextItem | string | React.ReactElement)[];
  className?: string;
}

export const TextList = ({ data, className, ...props }: TextListProps) => {
  const Tag = 'ul';

  const isSimpleItem = (item: any): item is string | React.ReactElement =>
    typeof item === 'string' || React.isValidElement(item);

  const renderItems = (items: (CustomTextItem | string | React.ReactElement)[]) => {
    return items.map((item, index) => {
      // 문자열 또는 React 노드인 경우
      if (isSimpleItem(item)) {
        return (
          <Text as="li" key={index}>
            {item}
          </Text>
        );
      }

      // CustomTextItem일 경우
      const { weight, size, color, text } = item as CustomTextItem;
      return (
        <Text as="li" key={index} weight={weight} size={size} color={color}>
          {text}
        </Text>
      );
    });
  };

  return (
    <Tag className={clsx(styles.root, className)} {...props}>
      {renderItems(data)}
    </Tag>
  );
};

TextList.displayName = 'TextList';
