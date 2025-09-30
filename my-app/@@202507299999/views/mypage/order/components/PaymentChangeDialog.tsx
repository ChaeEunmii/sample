import { Dialog, Button } from '@shared/ui';
import styles from './PaymentChange.module.scss';
import { PaymentMethods } from '@/widgets/payment';

interface PaymentChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function PaymentChangeDialog({ isOpen, onClose }: PaymentChangeDialogProps) {
  return (
    <Dialog
      title="결제수단 변경"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large">
          다시 결제하기
        </Button>
      }
    >
      <div className={styles.wrap}>
        {/* 결제수단 - 위젯공통에서 수정 */}
        <PaymentMethods sectionTitle="" sectionSuffix={null} sectionVariant="normal" sectionFlush />
      </div>
    </Dialog>
  );
}
