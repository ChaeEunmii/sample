import { Dialog } from '@shared/ui';

interface TermsDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 약관 제목 */
  title?: string;
  /** 약관 내용 */
  content?: React.ReactNode;
  /** 자식노드 */
  children?: React.ReactNode;
}
export default function TermsDetailDialog({
  isOpen,
  onClose,
  title,
  content,
  children,
}: TermsDetailDialogProps) {
  return (
    <Dialog title={title} isOpen={isOpen} onClose={onClose} showClose maximize>
      {content}
      {children}
    </Dialog>
  );
}
