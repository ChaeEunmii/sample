import { Button, Text, Dialog, TextList } from '@shared/ui';
import clsx from 'clsx';
import styles from './DeliveryZoneDialog.module.scss';

interface DeliveryZoneDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const DeliveryZoneDialog = ({
  isOpen = false,
  onClose,
  className,
}: DeliveryZoneDialogProps) => {
  return (
    <Dialog
      title="배송 가능 지역 확인"
      isOpen={isOpen}
      onClose={onClose}
      className={clsx(styles.root, className)}
      maximize
      showClose
    >
      <div className={styles.content}>
        <Text size="8" weight="bold" align="center">
          해당 주소는
          <br />
          배송 가능 지역이 아닙니다.
        </Text>
        <Text variant="error" size="4" align="center" className={styles.error}>
          배송 불가 지역 : 제주
        </Text>
        <div className={styles.graybox}>
          <Text size="4" weight="medium" color="gray2">
            배송 가능 지역
          </Text>
          <TextList
            data={['새벽배송 압구정 본점 인근', '당일배송 서울 및 수도권']}
            className={styles.textList}
          />
        </div>
        <Button size="medium" variant="secondary">
          배송지 다시 입력하기
        </Button>
      </div>
    </Dialog>
  );
};
DeliveryZoneDialog.displayName = 'DeliveryZoneDialog';
