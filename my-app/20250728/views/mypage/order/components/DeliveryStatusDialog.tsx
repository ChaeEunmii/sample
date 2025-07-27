import { Dialog, Text, Button, Empty } from '@shared/ui';
import styles from './DeliveryStatus.module.scss';

interface DeliveryStatusDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeliveryStatusDialog({ isOpen, onClose }: DeliveryStatusDialogProps) {
  return (
    <Dialog title="배송조회" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.wrap}>
        {/* <div className={styles.api}>
          <p className="ncp-text-center">API 호출영역</p>
        </div> */}
        <Empty
          title={`지금은 배송 정보를 불러올 수  없어요.\n잠시만 기다려주세요.`}
          buttons={
            <>
              <Button variant="primary">1:1 문의</Button>
            </>
          }
        />
        <Empty
          title={`지금은 배송 정보를 불러올 수 없어요.\n잠시만 기다려주세요.`}
          desc={
            <Text as="span" color="gray1" size="5" weight="medium">
              We are currently unable to retrieve the delivery
              <br />
              information. Please wait a moment.
            </Text>
          }
          buttons={
            <>
              <Button variant="primary">1:1 문의</Button>
            </>
          }
        ></Empty>
      </div>
    </Dialog>
  );
}
