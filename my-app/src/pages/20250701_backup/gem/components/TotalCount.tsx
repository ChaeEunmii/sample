import { Tooltip } from '@views/gem/components/index';
import styles from './TotalCount.module.scss';

// type 매핑
const typeMap: Record<string, { name: string; counterUnit: string; maxGem: number }> = {
  product: { name: '상품', counterUnit: '개의', maxGem: 999 },
  brand: { name: '브랜드', counterUnit: '개의', maxGem: 300 },
  collection: { name: '컬렉션', counterUnit: '개의', maxGem: 300 },
  people: { name: '피플', counterUnit: '명의', maxGem: 300 },
  mycollection: { name: '컬렉션', counterUnit: '개의', maxGem: 100 },
};

interface TotalCountProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 타입*/
  type?: 'product' | 'brand' | 'collection' | 'people' | 'mycollection';
  /** 갯수 */
  count?: number;
  /** Tip 내용*/
  tip?: React.ReactNode;
}

export const TotalCount = ({ type = 'product', count, tip }: TotalCountProps) => {
  const { name, counterUnit, maxGem } = typeMap[type];
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {count}
        {counterUnit} {name}
        {count !== 0 && (
          <Tooltip className={styles.tip} placement="bottom">
            {tip ? (
              <>{tip}</>
            ) : (
              <>
                최대 {maxGem}개까지{' '}
                {type === 'mycollection' ? '만들 수 있어요.' : 'GEM할 수 있어요.'}
              </>
            )}
          </Tooltip>
        )}
      </div>
    </div>
  );
};
