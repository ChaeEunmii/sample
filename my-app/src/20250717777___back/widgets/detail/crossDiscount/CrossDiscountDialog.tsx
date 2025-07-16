import { Dialog, Text } from '@shared/ui';
import { mockProdDetailItem } from '@/mocks/detail';
import { CrossDiscountInfo } from './CrossDiscountInfo';

import styles from './CrossDiscountDialog.module.scss';

interface CrossDiscountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CrossDiscountDialog({ isOpen, onClose }: CrossDiscountDialogProps) {
  // 교차 할인 데이터
  const crossDiscountData = mockProdDetailItem.crossDiscount;

  return (
    <Dialog
      title="함께 구매 가능 한 상품"
      isOpen={isOpen}
      onClose={onClose}
      bodyClassName={styles.root}
      showClose
      maximize
    >
      <div className={styles.info}>
        <CrossDiscountInfo data={crossDiscountData} useDialog />
      </div>
      {/* TODO: 상품 리스트 넣기 */}
      <div className={styles.note}>
        <Text size="4" align="center">
          장바구니에 상품을 담아 함께 주문 하셔야 혜택이 적용 됩니다.
        </Text>
      </div>
    </Dialog>
  );
}
