import clsx from 'clsx';
import styles from './Flag.module.scss';

type FlagColorType =
  | 'dark'
  | 'red'
  | 'pink'
  | 'green'
  | 'green2'
  | 'black'
  | 'gray' /** c: 8c8c8c, bg: f7f7f7 */
  | 'gray2' /** c: 333, bg: efefef */
  | 'white'
  | 'black70'
  | 'black30'
  | 'ad' // 광고 플래그
  | 'order1' // 주문 플래그 1 (c: #222222, bg: #F2F2F2)
  | 'order2' // 주문 플래그 2 (c: #ffffff, bg: #05B15B)
  | 'order3' // 주문 플래그 3 (c: #ffffff, bg: #8C8C8C)
  | 'order4' // 주문 플래그 4 (c: #ffffff, bg: #222222)
  | 'order5'; // 주문 플래그 5 (c: #F12E2D, bg: #FFEEEE)

interface FlagItem {
  label: React.ReactNode;
  color?: FlagColorType;
  className?: string;
}

type FlagItemType = FlagItem | React.ReactNode;

interface FlagProps {
  data: FlagItemType | FlagItemType[];
  size?: 'small' | 'medium' | 'large';
  radius?: 'tl' | 'tr' | 'bl' | 'br' | 'all';
  color?: FlagColorType;
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
