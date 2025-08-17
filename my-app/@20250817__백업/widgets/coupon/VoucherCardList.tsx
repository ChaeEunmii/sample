import { Grid } from '@shared/ui';
import { VoucherCard, VoucherCardProps } from './VoucherCard';
import styles from './VoucherCardList.module.scss';

interface VoucherCardListProps {
  /** 바우처 데이터 배열 (id 포함 필수) */
  data: VoucherCardProps[];
  /** 클릭 이벤트 핸들러 */
  onCardClick?: (card: VoucherCardProps) => void;
}

export const VoucherCardList = ({ data, onCardClick }: VoucherCardListProps) => {
  const renderCard = (item: VoucherCardProps, idx: number) => (
    <VoucherCard
      key={item.id || idx}
      {...item}
      onClick={() => {
        onCardClick?.(item);
      }}
    />
  );

  return (
    <Grid gutter="16px" className={styles.root}>
      {data.map(renderCard)}
    </Grid>
  );
};
