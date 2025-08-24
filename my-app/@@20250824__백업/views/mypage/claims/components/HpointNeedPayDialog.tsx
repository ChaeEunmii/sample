import { Dialog, Button, Empty } from '@shared/ui';

interface HpointNeedPayDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HpointNeedPayDialog({ isOpen, onClose }: HpointNeedPayDialogProps) {
  return (
    <Dialog title="" isOpen={isOpen} onClose={onClose} showClose maximize>
      <Empty
        title="H.Point 결제가 필요합니다"
        desc={
          <>
            H.Point 앱에서 부족한 포인트를 충전해 주세요.
            <br />
            모든 충전을 마친 후에 반품이 가능합니다.
          </>
        }
        buttons={
          <>
            <Button variant="primary">반품 확인</Button>
          </>
        }
        variant="minDisplay"
      />
    </Dialog>
  );
}
