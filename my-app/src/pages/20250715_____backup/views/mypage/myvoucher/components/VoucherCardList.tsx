import { VoucherCard, VoucherCardProps } from './VoucherCard';
import styles from './VoucherCardList.module.scss';

interface VoucherCardListProps {
  /** 바우처 데이터 배열 (id 포함 필수) */
  data: VoucherCardProps[];
}

export const VoucherCardList = ({ data }: VoucherCardListProps) => {
  const renderCard = (people: VoucherCardProps, idx: number) => (
    <VoucherCard key={people.id || idx} {...people} />
  );

  return <div className={styles.root}>{data.map(renderCard)}</div>;
};
