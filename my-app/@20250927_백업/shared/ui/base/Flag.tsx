import clsx from 'clsx';
import styles from './Flag.module.scss';

type FlagColorType =
  | 'dark'
  | 'dark2' /** c: #FFFFFF, bg: #222222 */
  | 'red'
  | 'red2' /** c: #F12E2D, bg: #FFEEEE */
  | 'pink'
  | 'green'
  | 'green2'
  | 'green3' /** c: #FFF, bg: #05B15B */
  | 'green4' /** c: #05B15B, bg: #FFF, border: #05B15B */
  | 'black'
  | 'gray' /** c: #8c8c8c, bg: #f7f7f7 */
  | 'gray2' /** c: #333, bg: #efefef */
  | 'gray3' /** c: #222222, bg: #F2F2F2 */
  | 'gray4' /** c: #FFFFFF, bg: #8C8C8C */
  | 'gray5' /** c: #222, bg: #f7f7f7 */
  | 'white'
  | 'black70'
  | 'black30'
  | 'black05'
  | 'ad'; // 광고 플래그

interface FlagItem {
  label: React.ReactNode;
  color?: FlagColorType;
  className?: string;
}

export type FlagItemType = FlagItem | React.ReactNode;

interface FlagProps {
  data: FlagItemType | FlagItemType[];
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  radius?: 'tl' | 'tr' | 'bl' | 'br' | 'all';
  color?: FlagColorType;
  className?: string;
  type?: 'block' | 'inline';
}

export const Flag: React.FC<FlagProps> = ({
  size = 'medium',
  data,
  radius,
  color,
  className,
  type = 'block',
}) => {
  const flags = Array.isArray(data) ? data : [data];

  return (
    <div
      className={clsx(
        styles.root,
        size && styles[size],
        radius && styles[`radius-${radius}`],
        type !== 'block' && styles[type],
        className
      )}
    >
      {flags.map((item, index) => {
        const isObject = typeof item === 'object' && item !== null && 'label' in item;
        const itemLabel = isObject ? (item as FlagItem).label : item;
        const itemColor = isObject ? ((item as FlagItem).color ?? color) : color;
        const itemClassName = isObject ? (item as FlagItem).className : undefined;

        return (
          <span
            key={index}
            className={clsx(styles.item, itemColor && styles[itemColor], itemClassName)}
          >
            {itemLabel}
          </span>
        );
      })}
    </div>
  );
};
