import {
  MyReviewItem,
  ProductData,
  StoreData,
} from '@/views/mypage/activity/reviews/components/MyReviewItem';
import clsx from 'clsx';
import styles from './MyReviewList.module.scss';

interface MyReviewListProps {
  type?: 'product' | 'store';
  data: (ProductData | StoreData)[];
  className?: string;
}

export function MyReviewList({ type = 'product', data, className }: MyReviewListProps) {
  if (!data || data.length === 0) return null;

  return (
    <>
      <div className={clsx(styles.list, className)}>
        {type === 'product'
          ? data.map((row) => (
              <MyReviewItem
                key={row.id}
                type="product" // 상품 리뷰
                data={row as ProductData}
                className={styles.item}
              />
            ))
          : data.map((row) => (
              <MyReviewItem
                key={row.id}
                type="store" // 매장 리뷰
                data={row as StoreData}
                className={styles.item}
              />
            ))}
      </div>
    </>
  );
}
