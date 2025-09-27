import { Grid } from '@shared/ui';
import { VoucherCard, VoucherCardProps } from './VoucherCard';

interface VoucherCardListProps {
  /** 바우처 데이터 배열 (id 포함 필수) */
  data: VoucherCardProps[];
  /** 카드 스타일 */
  cardVariant?: 'default' | 'boxed';
  /** 클릭 이벤트 핸들러 */
  onCardClick?: (card: VoucherCardProps) => void;
  /** 위시리스트 정보 */
  wishlist?: {
    activeIds: (string | number)[];
    onToggle: (id: string | number, isActive: boolean) => void;
  };
  /** 기간 타이틀 노출여부 (ex: 방문기간,신청기간)*/
  showDateTitle?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const VoucherCardList = ({
  data,
  cardVariant,
  onCardClick,
  wishlist,
  showDateTitle = false,
  className,
}: VoucherCardListProps) => {
  const renderCard = (item: VoucherCardProps, idx: number) => {
    const gem = wishlist
      ? {
          isActive: wishlist.activeIds.includes(item.id),
          onChange: (id: string, isActive: boolean) => wishlist.onToggle(id, isActive),
        }
      : undefined;

    return (
      <VoucherCard
        key={item.id || idx}
        {...item}
        variant={cardVariant}
        gem={gem}
        onClick={() => onCardClick?.(item)}
        showDateTitle={showDateTitle}
      />
    );
  };

  return (
    <Grid gutter={cardVariant === 'boxed' ? '8px' : '16px'} className={className}>
      {data.map(renderCard)}
    </Grid>
  );
};
