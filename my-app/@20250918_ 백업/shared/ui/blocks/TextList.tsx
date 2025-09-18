import React from 'react';
import { Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './TextList.module.scss';

// Text 컴퍼넌트 props 공유
type TextSize = React.ComponentProps<typeof Text>['size'];
type TextWeight = React.ComponentProps<typeof Text>['weight'];
type TextColor = React.ComponentProps<typeof Text>['color'];
type TextReading = React.ComponentProps<typeof Text>['reading'];

type CommonProps = {
  className?: string;
  /** clear : dot 등이 없는 깨끗한 형태의 리스트
   *          ex-상품상세 > 배송안내 > 각 배송항목 내부 리스트*/
  variant?: 'default' | 'info' | 'level2' | 'level3' | 'caution' | 'clear';
};

type TextItem = {
  text: React.ReactNode;
  children?: (TextItem | React.ReactNode | string)[];
  childrenProps?: CommonProps;
  /** 텍스트 개별 스타일 props */
  textProps?: {
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    reading?: TextReading;
  };
};

interface TextListProps extends CommonProps {
  /** 데이터 배열 */
  data: (TextItem | React.ReactNode | string)[];
  depth?: number;
  /** margin top 설정 기본 var(--ncp-spacing-x3) (6px, 12px, 16px) */
  margin?: '1' | '2' | '3';
  /** li에 flex 설정 */
  liFlex?: boolean;
}

export const TextList = ({
  variant = 'default',
  data,
  className,
  depth = 0, // Default depth
  margin,
  liFlex,
  ...props
}: TextListProps) => {
  const Tag = 'ul';

  const isSimpleItem = (item: any): item is string | React.ReactElement =>
    typeof item === 'string' || React.isValidElement(item);

  const renderItems = (items: (TextItem | React.ReactNode | string)[]) => {
    return items.map((item, index) => {
      // 문자열 또는 React 노드인 경우
      if (isSimpleItem(item)) {
        return (
          <Text as="li" key={index}>
            {item}
          </Text>
        );
      }

      // 중첩 항목이 있는 경우
      const { text, children, childrenProps, textProps } = item as TextItem;

      return (
        <Text
          as="li"
          key={index}
          size={textProps?.size}
          weight={textProps?.weight}
          color={textProps?.color}
          reading={textProps?.reading}
        >
          {text}
          {children && children.length > 0 && (
            <TextList
              data={
                Array.isArray(children)
                  ? children.map((child) => isSimpleItem(child) && child)
                  : children
              }
              variant={childrenProps?.variant}
              className={clsx(styles.sub, childrenProps?.className)}
              depth={depth + 1}
            />
          )}
        </Text>
      );
    });
  };

  return (
    <Tag
      className={clsx(
        depth === 0 && styles.root,
        variant && styles[variant],
        margin && styles[`mt${margin}`],
        liFlex && styles.liFlex,
        className
      )}
      {...props}
    >
      {renderItems(data)}
    </Tag>
  );
};

TextList.displayName = 'TextList';
