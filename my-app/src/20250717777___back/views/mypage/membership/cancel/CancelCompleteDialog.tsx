import { Dialog, Button, Text, ButtonArea } from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import styles from './CancelCompleteDialog.module.scss';

interface CancelCompleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CancelCompleteDialog({ isOpen, onClose }: CancelCompleteDialogProps) {
  const { showAlert } = useAlert();

  return (
    <Dialog
      title="HiHi 멤버십 해지 완료"
      footer={
        <>
          <ButtonArea className={styles.btnArea}>
            <Button size="large">신청내역 보기</Button>
            <Button variant="primary" size="large">
              홈으로 가기
            </Button>
          </ButtonArea>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <div className={styles.layout}>
        <div className={styles.msgBox}>
          <Text size="5" weight="medium" reading>
            해지 신청 완료!
            <br />
            7월 4일까지는 혜택을 이용할 수 있어요.
          </Text>
          <Button
            variant="primary"
            className={styles.btn}
            onClick={() => {
              showAlert({
                title: '다음달에도 계속 이용하시겠어요?',
                message: (
                  <>
                    다음달 결제 예정일은 <span className="ncp-color-point">2025.05.03</span>이에요.
                  </>
                ),
                onConfirm: () => console.log('이용 유지 클릭'),
                showCancel: true,
                labelProps: { confirm: '이용 유지', cancel: '아니요' },
              });
            }}
          >
            혜택 계속 이용하기
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
