// CheckableProdCardList.tsx
import { Grid, Checkbox } from "@shared/ui";
import { ProdCard, ProdCardProps } from "@widgets/product/ProdCard";

export interface ProdCardItemProps extends Omit<ProdCardProps, "gem"> {
  id: string | number;
}

interface CheckableProdCardListProps {
  data: ProdCardItemProps[];
  selectedIds: (string | number)[];
  onSelectItem: (id: string | number) => void;
  columns?: number;
  variant?: "grid";
  cardType?: "horizontal" | "vertical";
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
  className?: string;
}

export const CheckableProdCardList = ({
  data,
  selectedIds,
  onSelectItem,
  columns,
  variant = "grid",
  cardType,
  wishlist,
  className,
  ...props
}: CheckableProdCardListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (productId: string | number) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(productId);
    return {
      isActive,
      onChange: (newIsActive: boolean) =>
        wishlist.onToggle(productId, newIsActive),
    };
  };

  const renderCard = (product: ProdCardItemProps) => {
    const isChecked = selectedIds.includes(product.id);

    return (
      <div key={product.id} style={{ position: "relative" }}>
        <div
          style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1 }}
        >
          <Checkbox
            checked={isChecked}
            onChange={() => onSelectItem(product.id)}
            className="checkbox-overlay"
            label="체크박스"
            hideLabel
          />
        </div>
        <ProdCard
          type={cardType}
          {...product}
          gem={getWishlistProps(product.id)}
        />
      </div>
    );
  };

  if (variant === "grid") {
    return (
      <Grid
        columns={columns}
        className={className}
        gutter="8px 24px"
        {...props}
      >
        {data.map(renderCard)}
      </Grid>
    );
  }

  return null;
};
