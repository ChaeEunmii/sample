import clsx from 'clsx';
import styles from './Grid.module.scss';

interface GridItemProps {
  span?: number;
  className?: string;
  align?: 'top' | 'bottom' | 'center';
  children?: React.ReactNode;
}

const GridItem = ({ span, className, align, children }: GridItemProps) => {
  const gridItemStyles = span ? ({ '--grid-span': span } as React.CSSProperties) : {};

  return (
    <div className={clsx(styles.item, align && styles[align], className)} style={gridItemStyles}>
      {children}
    </div>
  );
};

interface GridProps {
  /** 열 갯수 */
  columns?: number;
  /** 사이간격 */
  gutter?: number | string;
  children?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 사이즈 늘어났을 경우 자동 갯수 맞춤 */
  autofit?: boolean;
  /** 좌우 기본여백 제거  */
  flush?: boolean;
  /** 상단 여백 (16px, 24px, 32px, 40px, 48px, 60px) */
  margin?: '1' | '2' | '3' | '4' | '5' | '6';
  /** 그리드 아이템 정렬 */
  align?: 'left' | 'center' | 'right';
}

const Grid = ({
  columns,
  gutter,
  children,
  className,
  autofit,
  flush,
  margin,
  align,
  ...props
}: GridProps) => {
  const getGutterStyles = () => {
    if (gutter == null) return {};

    if (typeof gutter === 'number') {
      return { '--grid-gutter': `${gutter}px` };
    }
    const [col, row] = gutter.split(' ');
    return {
      '--grid-gutter': col,
      ...(row && { '--grid-row-gap': row }),
    };
  };

  const gridStyles = {
    ...(columns && { '--grid-columns': columns }),
    ...getGutterStyles(),
  } as React.CSSProperties;

  return (
    <div
      className={clsx(
        styles.root,
        autofit && styles.autofit,
        flush && styles.flush,
        margin && styles[`mt${margin}`],
        align && styles[align],
        className
      )}
      style={gridStyles}
      {...props}
    >
      {children}
    </div>
  );
};
// Compound Component
Grid.Item = GridItem;

// displayName
GridItem.displayName = 'Grid.Item';
Grid.displayName = 'Grid';

export { Grid };
