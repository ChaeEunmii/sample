// 컴포넌트
import { Grid } from '@shared/ui';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard';

// ProdCard의 Props에서 gem을 제외하고 id를 추가한 타입
export interface ProdCardItemProps extends Omit<ProdCardProps, 'gem'> {
  /** 상품 고유 ID */
  id: string | number;
}

interface CheckableProdCardListProps {
  /** 상품 데이터 배열 */
  data: ProdCardItemProps[];
  /** 그리드 열 수 */
  columns?: number;
  /** 카드 리스트 스타일 변형 */
  variant?: 'grid';
  /** 카드 타입 */
  cardType?: 'horizontal' | 'vertical';
  /** 추가 클래스 */
  className?: string;
}

export const CheckableProdCardList = ({
  data,
  columns,
  variant = 'grid',
  cardType,
  className,
  ...props
}: CheckableProdCardListProps) => {
  const renderCard = (product: ProdCardItemProps, idx: number) => (
    <ProdCard key={product.id || idx} type={cardType} {...product} />
  );

  if (variant === 'grid') {
    return (
      <Grid columns={columns} className={className} gutter="8px 24px" {...props}>
        {data.map(renderCard)}
      </Grid>
    );
  }
};
