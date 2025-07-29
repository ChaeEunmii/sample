import { Dialog, Text } from '@shared/ui';
import { CrossDiscountInfo } from './CrossDiscountInfo';

import { ProdCardList } from '../product';
import { mockProdCrossDiscountCase } from '@/mocks/product';
import { useState } from 'react';

import styles from './CrossDiscount.module.scss';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

interface CrossDiscountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CrossDiscountDialog({ isOpen, onClose }: CrossDiscountDialogProps) {
  // 교차 할인 데이터
  const { item } = useProdDetail();
  const data = item.crossDiscount;

  // START ---- 상품 리스트 젬 관련 ----
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };
  // END ---- 상품 리스트 젬 관련 ----

  return (
    <Dialog
      title="함께 구매 가능 한 상품"
      isOpen={isOpen}
      onClose={onClose}
      bodyClassName={styles.dialog}
      showClose
      maximize
    >
      <CrossDiscountInfo crossData={data} useDialog />
      <ProdCardList
        data={mockProdCrossDiscountCase}
        columns={2}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
      <div className={styles.note}>
        <Text size="4" align="center">
          장바구니에 상품을 담아 함께 주문 하셔야 혜택이 적용 됩니다.
        </Text>
      </div>
    </Dialog>
  );
}
