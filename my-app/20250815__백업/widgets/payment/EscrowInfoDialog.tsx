import { Dialog, TextList } from '@shared/ui';

interface EscrowInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EscrowInfoDialog = ({ isOpen, onClose }: EscrowInfoDialogProps) => {
  return (
    <Dialog title="에스크로" isOpen={isOpen} onClose={onClose} showClose maximize>
      <TextList
        data={[
          '안전한 쇼핑 거래를 위해 쇼핑몰 보증보험 서비스를 운영중입니다.',
          '현금결제에 대해 해당 주문 건의 보증기간 동안 결제금액을 보장합니다.',
          '신청 시 에스크로 서비스를 받을 수 있습니다.',
        ]}
        className="ncp-mt-l"
      />
    </Dialog>
  );
};
EscrowInfoDialog.displayName = 'EscrowInfoDialog';
