import { Dialog, Button } from '@shared/ui';
import styles from './DeliveryChange.module.scss';

interface DeliveryChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function DeliveryChangeDialog({ isOpen, onClose }: DeliveryChangeDialogProps) {
  return (
    <Dialog
      title="배송지 변경"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large">
          변경하기
        </Button>
      }
    >
      <div className={styles.wrap}></div>
    </Dialog>
  );
}
