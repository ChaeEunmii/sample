import { Tooltip } from '@shared/ui';
import styles from './TotalCount.module.scss';

// type 매핑
const typeMap: Record<string, { name: string; counterUnit: string }> = {
  product: { name: '상품', counterUnit: '개의' },
  brand: { name: '브랜드', counterUnit: '개의' },
  collection: { name: '컬렉션', counterUnit: '개의' },
  people: { name: '피플', counterUnit: '명의' },
};

interface TotalCountProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 타입*/
  type?: 'product' | 'brand' | 'collection' | 'people';
  /** 갯수 */
  count?: number;
  /** Tip 내용*/
  tip?: React.ReactNode;
}

export const TotalCount = ({ type = 'product', count, tip }: TotalCountProps) => {
  const { name, counterUnit } = typeMap[type];
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {count}
        {counterUnit} {name}
        {tip && (
          <>
            <Tooltip className={styles.tip} placement="bottom">
              {tip}
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};
