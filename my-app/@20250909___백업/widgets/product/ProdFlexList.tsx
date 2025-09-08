import { ProdCard, ProdCardProps } from './ProdCard';
import styles from './ProdFlexList.module.scss';
import clsx from 'clsx';

export type ProdCardItemProps = Pick<ProdCardProps, 'id' | 'href' | 'image' | 'title' | 'price'>;

export interface ProdFlexListProps {
  data: ProdCardItemProps[];
  align?: 'left' | 'center';
  columns?: 1 | 2;
}
export const ProdFlexList = ({ data, align = 'left', columns = 1 }: ProdFlexListProps) => {
  const pickProps = (item: ProdCardItemProps) => {
    const { id, href, image, title, price } = item;
    return { id, href, image, title, price };
  };

  if (!data) return;
  return (
    <div
      className={styles.root}
      style={
        {
          '--prod-flex-list-columns': columns,
        } as React.CSSProperties
      }
    >
      {data.map((item, idx) => (
        <ProdCard
          key={item.id || idx}
          className={clsx(columns === 1 && styles.x1)}
          {...pickProps(item)}
          titleLine={2}
          align={align}
        />
      ))}
    </div>
  );
};
