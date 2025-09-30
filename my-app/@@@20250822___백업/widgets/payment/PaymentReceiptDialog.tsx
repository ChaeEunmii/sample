import { Dialog, Text } from '@/shared/ui';

interface PaymentReceiptDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export const PaymentReceiptDialog = ({ isOpen, onClose }: PaymentReceiptDialogProps) => {
  return (
    <Dialog title="영수증 보기" mode="gray" isOpen={isOpen} onClose={onClose} showClose maximize>
      <Text align="center" className="ncp-mt-x10">
        API 호출 영역
      </Text>
    </Dialog>
  );
};

PaymentReceiptDialog.displayName = 'PaymentReceiptDialog';
