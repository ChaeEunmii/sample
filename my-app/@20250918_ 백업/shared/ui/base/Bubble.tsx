// 컴포넌트
import { Text } from './Text';
// 스타일
import styles from './Bubble.module.scss';
import clsx from 'clsx';

export type BubbleTextColor =
  | 'gradient1'
  | 'gradient2'
  | 'gradient3'
  | 'gradient4'
  | 'gradient5'
  | React.CSSProperties['color'];

interface BubbleProps {
  children: React.ReactNode;
  textColor?: BubbleTextColor;
  bgColor?: React.CSSProperties['backgroundColor'];
  tail?: boolean;
  className?: string;
}

export const Bubble = ({ children, textColor, bgColor, tail = true, className }: BubbleProps) => {
  // 그라데이션 색상인지 확인
  const isGradient = textColor?.startsWith('gradient');

  // 커스텀 색상 적용
  const rootStyle = bgColor ? { backgroundColor: bgColor } : undefined;
  const textStyle = !isGradient && textColor ? { color: textColor } : undefined;

  return (
    <div className={clsx(styles.root, tail && styles.tail, className)} style={rootStyle}>
      <Text
        as="span"
        size="6"
        className={clsx(styles.text, isGradient && textColor && styles[textColor])}
        style={textStyle}
      >
        {children}
      </Text>
    </div>
  );
};

Bubble.displayName = 'Bubble';
