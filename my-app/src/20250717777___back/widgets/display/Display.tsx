// 컴포넌트
import { TitleBar, TitleBarBaseProps } from '@shared/ui/blocks/TitleBar';
// 스타일
import styles from './Display.module.scss';
import clsx from 'clsx';

type DisplayTitleProps = Omit<TitleBarBaseProps, 'title'> & {
  title?: TitleBarBaseProps['title'];
};

export interface DisplayProps extends DisplayTitleProps {
  /** 상단 여백 (16px, 24px, 32px, 40px, 60px) */
  margin?: '1' | '2' | '3' | '4' | '5';
  titleAlign?: 'left' | 'right' | 'center';
}

export const Display = ({
  margin,
  children,
  title,
  subtitle,
  moreUrl,
  titleAlign,
}: DisplayProps & { children?: React.ReactNode }) => {
  const titleProps = {
    title,
    subtitle,
    moreUrl,
  };
  return (
    <div className={clsx(styles.root, margin && styles[`mt${margin}`])}>
      {title && <TitleBar type="module" {...titleProps} align={titleAlign} />}
      {children}
    </div>
  );
};

Display.displayName = 'Display';
