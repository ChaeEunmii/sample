import clsx from 'clsx';
import styles from './Flag.module.scss';

type FlagColorType =
  | 'dark'
  | 'red'
  | 'pink'
  | 'green'
  | 'black'
  | 'gray' /** c: 8c8c8c, bg: f7f7f7 */
  | 'gray2' /** c: 333, bg: efefef */
  | 'white'
  | 'black70'
  | 'black30';

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
