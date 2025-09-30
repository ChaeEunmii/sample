import { Dialog, Button, Box, Text, Heading } from '@shared/ui';
import styles from './JoinFail.module.scss';

interface JoinFailDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinFailDialog({ isOpen, onClose }: JoinFailDialogProps) {
  return (
    <Dialog
      title="HIHI 멤버십 가입실패"
      footer={
        <Button variant="primary" size="large">
          다시 시도하기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <div className={styles.layout}>
        <div className={styles.failMsg}>
          <Heading as="strong" weight="medium">
            결제가 완료되지 않았습니다.
          </Heading>
          <Text color="gray3" size="4" reading>
            계속해서 문제가 발생할 경우
            <br />
            고객지원센터 1800-2233로 문의해 주세요.
          </Text>
          <Box className={styles.info}>
            <Text color="gray2">계좌 잔액 부족 등 사유 노출 영역</Text>
          </Box>
        </div>
      </div>
    </Dialog>
  );
}
