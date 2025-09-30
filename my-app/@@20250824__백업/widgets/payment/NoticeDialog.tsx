import { Dialog, Button } from '@shared/ui';

interface NoticeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NoticeDialog = ({ isOpen, onClose }: NoticeDialogProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      showClose
      footer={
        <Button variant="primary" onClick={onClose}>
          확인
        </Button>
      }
    >
      <p>통 이미지 - 제목포함</p>
    </Dialog>
  );
};
NoticeDialog.displayName = 'NoticeDialog';
