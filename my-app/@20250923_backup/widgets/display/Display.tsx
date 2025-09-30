// 컴포넌트
import { TitleBar, TitleBarBaseProps } from '@shared/ui/blocks/TitleBar';
// 스타일
import styles from './Display.module.scss';
import clsx from 'clsx';
import { Bubble } from '@/shared/ui';

type DisplayTitleProps = Omit<TitleBarBaseProps, 'title'> & {
  title?: TitleBarBaseProps['title'];
  tip?: React.ReactNode;
};

export interface DisplayProps extends DisplayTitleProps {
  /** 상단 여백 (16px, 24px, 32px, 40px, 48px, 60px)
   * BO 설정 시 number로 받음 (자율조정)
   */
  margin?: '1' | '2' | '3' | '4' | '5' | '6' | number;
  titleType?: 'default' | 'bubble';
  titleAlign?: 'left' | 'right' | 'center';
}
export const Display = ({
  margin,
  children,
  title,
  subtitle,
  moreUrl,
  tip,
  titleType = 'default',
  titleAlign,
}: DisplayProps & { children?: React.ReactNode }) => {
  const titleProps = {
    title,
    subtitle,
    moreUrl,
    tip,
  };

  return (
    <div
      className={clsx(styles.root, margin && typeof margin !== 'number' && styles[`mt${margin}`])}
      style={
        typeof margin === 'number'
          ? ({ '--display-margin-top': `${margin}px` } as React.CSSProperties)
          : undefined
      }
    >
      {title &&
        (titleType === 'default' ? (
          <TitleBar type="module" {...titleProps} align={titleAlign} />
        ) : (
          <Bubble className={clsx(styles.title)}>{title}</Bubble>
        ))}
      {children}
    </div>
  );
};

Display.displayName = 'Display';
