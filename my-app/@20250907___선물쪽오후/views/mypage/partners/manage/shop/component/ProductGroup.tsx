import { TitleBar, ButtonArea, Button } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { ProductGroupControl } from '@/views/mypage/partners/manage/shop/component/ProductGroupControl';

import clsx from 'clsx';
import styles from './ProductGroup.module.scss';

interface ProductGroupData {
  /** 고유 ID */
  id: string;
  /** 그룹명 */
  title: React.ReactNode;
  /** 그룹설명 */
  subtitle?: string;
  /** 상품목록 배열 */
  products?: ProdCardItemProps[];
}

interface ProductGroupProps {
  /** 그룹 데이터 */
  data: ProductGroupData;
  /** 처음 보여줄 개수 (없으면 전체 노출, 설정하면 갯수만큼 보여주고 '전체보기' 버튼노출) */
  maxView?: number;
  /** 추가적인 클래스 */
  className?: string;
  /** 전체보기 클릭 핸들러 (선택) */
  onClickMore?: (id: string) => void;
  /** 그룹 우측 메뉴 액션 핸들러 */
  onAction?: (action: string, id: string) => void;
  /** 우측 컨트롤 메뉴 숨김 여부 (기본 false)*/
  hideControl?: boolean;
}

export const ProductGroup = ({
  data,
  maxView,
  className,
  onClickMore,
  onAction,
  hideControl = false,
}: ProductGroupProps) => {
  // 구조분해
  const { id, title, subtitle, products } = data;

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
          !hideControl && (
            <ProductGroupControl
              menuItems={[
                { label: '그룹공유', onClick: () => onAction?.('share', id) },
                { label: '그룹명 수정', onClick: () => onAction?.('edit', id) },
                { label: '항목 변경', onClick: () => onAction?.('change', id) },
                { label: '그룹 삭제', onClick: () => onAction?.('delete', id) },
              ]}
            />
          )
        }
        className={styles.titBar}
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
          <Button variant="tertiary" onClick={() => onClickMore?.(id)}>
            전체보기
          </Button>
        </ButtonArea>
      )}
    </div>
  );
};
