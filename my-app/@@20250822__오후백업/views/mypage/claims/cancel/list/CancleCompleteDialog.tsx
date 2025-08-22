import { Dialog, Button, Text } from '@shared/ui';

interface CancleCompleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CancleCompleteDialog({ isOpen, onClose }: CancleCompleteDialogProps) {
  return (
    <Dialog
      title="주문 취소가 완료되었습니다."
      footer={
        <>
          <Button>장바구니 다시 담기</Button>
          <Button variant="primary" onClick={onClose}>
            주문 목록으로
          </Button>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <Text color="gray2" reading indent>
        환불은 결제 수단에 따라 최대 7일 정도 기간이 소요될 수 있습니다. 조금만 기다려주세요
      </Text>
    </Dialog>
  );
}
