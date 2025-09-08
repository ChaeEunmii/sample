import clsx from 'clsx';
import { Dialog, Text } from '@shared/ui';
import styles from './MessageCardDialog.module.scss';

interface MessageCardDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const MessageCardDialog = ({
  isOpen = false,
  onClose,
  className,
}: MessageCardDialogProps) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} className={clsx(className)} showClose>
      <div className={styles.content}>
        <div className={clsx(styles.cardArea, styles.bg1)}>
          <img src="/images/message/img_message_01.png" alt="생일 축하해!" />

          <div className={styles.messageArea}>
            <Text weight="medium" align="center" className={styles.message}>
              감사의 마음을 담아 보냅니다.
            </Text>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

MessageCardDialog.displayName = 'MessageCardDialog';
