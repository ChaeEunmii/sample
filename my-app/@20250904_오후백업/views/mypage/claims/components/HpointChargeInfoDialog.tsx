import { Dialog, Button, Text } from '@shared/ui';

interface HpointChargeInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HpointChargeInfoDialog({ isOpen, onClose }: HpointChargeInfoDialogProps) {
  return (
    <Dialog
      title="H.Point 결제가 필요합니다"
      footer={
        <>
          <Button>그만두기</Button>
          <Button variant="primary" onClick={onClose}>
            H.Point 충전
          </Button>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <Text color="gray2" reading indent>
        상품 구매 시 받은 포인트 중 5,000P를 모두 사용하셨어요. 반품을 위해서는 사용하신 포인트의
        충전이 우선 필요합니다. 지금 충전하시겠어요?
      </Text>
    </Dialog>
  );
}
