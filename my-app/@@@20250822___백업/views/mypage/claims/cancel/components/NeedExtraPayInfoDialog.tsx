import { Dialog, Button, Empty } from '@shared/ui';

interface NeedExtraPayInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NeedExtraPayInfoDialog({ isOpen, onClose }: NeedExtraPayInfoDialogProps) {
  return (
    <Dialog title="" isOpen={isOpen} onClose={onClose} showClose maximize>
      <Empty
        title="추가 결제가 필요합니다."
        desc={
          <>
            추가 결제 화면에서 결제를 마쳐주세요.
            <br />
            결제를 모두 마치셨다면 취소 확인을 선택해 주세요.
          </>
        }
        buttons={
          <>
            <Button variant="primary">취소 확인</Button>
          </>
        }
      />
    </Dialog>
  );
}
