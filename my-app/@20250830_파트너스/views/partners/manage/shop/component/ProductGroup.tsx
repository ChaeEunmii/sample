import { TitleBar, IconButton, ButtonArea, Button } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { ProductGroupControl } from '@views/mypage/partners/components/ProductGroupControl';

import clsx from 'clsx';
import styles from './ProductGroup.module.scss';

interface ProductGroupProps {
  /** 고유 ID */
  id?: string;
  /** 그룹명 */
  title: React.ReactNode;
  /** 그룹설명 */
  subtitle?: string;
  /** 상품목록 배열 */
  products?: ProdCardItemProps[];
  /** 처음 보여줄 개수 (없으면 전체 노출, 설정하면 갯수만큼 보여주고 '전체보기' 버튼노출) */
  maxView?: number;
  /** 추가적인 클래스 */
  className?: string;
  /** 전체보기 클릭 핸들러 (선택) */
  onClickMore?: () => void;
}

export const ProductGroup = ({
  title,
  subtitle,
  products,
  maxView,
  className,
  onClickMore,
}: ProductGroupProps) => {
  // products 없으면 []로 처리
  const safeProducts = products ?? [];

  // maxView가 있으면 앞에서부터 maxView개만 잘라서 노출, 없으면 전체 노출
  const visibleProducts =
    typeof maxView === 'number' ? safeProducts.slice(0, Math.max(0, maxView)) : safeProducts;

  // maxView가 설정되어 있고, 실제 상품 개수가 maxView보다 많을 때만 "전체보기" 버튼 표시
  const showMoreButton = typeof maxView === 'number' && safeProducts.length > (maxView ?? 0);

  return (
    <div className={clsx(styles.root, className)}>
      <TitleBar
        type="docs"
        title={title}
        subtitle={subtitle}
        side={
          <IconButton name="more" size="large">
            설정
          </IconButton>
        }
        className={styles.titBar}
      />
      <ProductGroupControl
        menuItems={[
          { label: '항목 추가', onClick: () => console.log('항목 추가') },
          { label: '항목 삭제', onClick: () => console.log('항목 삭제') },
        ]}
      />
      {visibleProducts.length > 0 && (
        <ProdCardList
          data={visibleProducts}
          variant="grid"
          columns={3}
          cardType="vertical"
          autofit
        />
      )}
      {showMoreButton && (
        <ButtonArea margin="1">
          <Button variant="tertiary" onClick={onClickMore}>
            전체보기
          </Button>
        </ButtonArea>
      )}
    </div>
  );
};
