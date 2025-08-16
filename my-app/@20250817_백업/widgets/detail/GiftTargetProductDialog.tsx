import { useState } from 'react';
import { Dialog } from '@shared/ui';
import { ProdCardList } from '../product';
import { CrossDiscountInfo } from './CrossDiscountInfo';
import { mockPromoGift } from '@/mocks/detail';
import { mockProdCrossDiscountCase } from '@/mocks/product';

import styles from './CrossDiscount.module.scss';

interface GiftTargetProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function GiftTargetProductDialog({ isOpen, onClose }: GiftTargetProductDialogProps) {
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
      title="사은품 대상 상품"
      isOpen={isOpen}
      onClose={onClose}
      bodyClassName={styles.dialog}
      showClose
      maximize
    >
      <CrossDiscountInfo giftData={mockPromoGift} useDialog />
      <ProdCardList
        data={mockProdCrossDiscountCase}
        columns={2}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Dialog>
  );
}
