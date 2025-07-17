import { Dialog, Button } from '@shared/ui';
import { MembershipPayMethod } from '@/views/mypage/membership/payment/MembershipPayMethod';

interface PaymentChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentChangeDialog({ isOpen, onClose }: PaymentChangeDialogProps) {
  return (
    <Dialog
      title="결제수단 변경"
      footer={
        <Button variant="primary" size="large">
          결제하기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <MembershipPayMethod />
    </Dialog>
  );
}
