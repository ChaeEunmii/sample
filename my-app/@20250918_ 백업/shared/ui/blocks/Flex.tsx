import styles from './Flex.module.scss';
import clsx from 'clsx';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 컬럼 간격 (숫자: px, 문자열: css 단위) */
  gutter?: number | string;
  /** 줄바꿈 금지 여부 */
  nowrap?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 내용 */
  children: React.ReactNode;
}
export const Flex = ({ gutter, nowrap = false, className, children }: FlexProps) => {
  const getGutterStyles = () => {
    if (gutter == null) return {};

    if (typeof gutter === 'number') {
      return { '--flex-gutter': `${gutter}px` };
    }
    const [col, row] = gutter.split(' ');
    return {
      '--flex-gutter': col,
      ...(row && { '--flex-row-gap': row }),
    };
  };

  const flexStyles = {
    ...(nowrap && { '--flex-wrap': 'nowrap' }),
    ...getGutterStyles(),
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.root, className)} style={flexStyles}>
      {children}
    </div>
  );
};

Flex.displayName = 'Flex';
