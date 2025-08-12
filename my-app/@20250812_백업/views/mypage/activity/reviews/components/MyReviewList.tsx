import {
  MyReviewItem,
  MyReviewData,
} from '@/views/mypage/activity/reviews/components/MyReviewItem';
import clsx from 'clsx';
import styles from './MyReviewList.module.scss';

interface MyReviewListProps {
  data: MyReviewData[];
  className?: string;
}

export function MyReviewList({ data, className }: MyReviewListProps) {
  if (!data || data.length === 0) return null;

  return (
    <>
      <div className={clsx(styles.list, className)}>
        {data.map((row) => (
          <MyReviewItem key={row.id} data={row} className={styles.item} />
        ))}
      </div>
    </>
  );
}
