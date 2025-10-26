import { Dialog, Button, Text, Heading, ButtonArea } from '@shared/ui';
import styles from './OrderHistory.module.scss';

interface OrderHistoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderHistoryDialog({ isOpen, onClose }: OrderHistoryDialogProps) {
  return (
    <Dialog title="" isOpen={isOpen} onClose={onClose}>
      <Heading size="5" weight="semibold">
        리뉴얼 이전 주문은 문의를 통해 취소 및<br />
        반품/교환이 가능합니다
      </Heading>
      <Text color="gray2" reading indent>
        아래에서 문의 방법을 선택해 주세요.
      </Text>
      <ButtonArea className={styles.btns}>
        <Button variant="tertiary">1:1 문의</Button>
        <Button variant="tertiary">전화 문의</Button>
        <Button onClick={onClose}>고객센터 메인으로</Button>
      </ButtonArea>
    </Dialog>
  );
}
