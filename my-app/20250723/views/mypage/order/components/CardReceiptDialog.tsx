import { Dialog, Button } from '@shared/ui';
import styles from './CardReceipt.module.scss';

interface CardReceiptDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CardReceiptDialog({ isOpen, onClose }: CardReceiptDialogProps) {
  return (
    <Dialog
      title="카드 영수증"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      flush
      mode="gray"
      footer={
        <Button variant="primary" size="large">
          인쇄하기
        </Button>
      }
    >
      <div className={styles.wrap}>API 호출영역</div>
    </Dialog>
  );
}
