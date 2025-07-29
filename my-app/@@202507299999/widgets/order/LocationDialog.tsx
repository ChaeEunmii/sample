import { Dialog, InfoItem, InfoList, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './LocationDialog.module.scss';

interface LocationDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const LocationDialog = ({ isOpen = false, onClose, className }: LocationDialogProps) => {
  return (
    <Dialog
      title="목동점"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <div className={styles.locationArea}>
            <Text size="8" weight="bold">
              목동점
            </Text>
            <Text>서울 양천구 목동 916 현대백화점 목동점</Text>
            <InfoList variant="line" gridColumns="auto" className={styles.telInfo}>
              <InfoItem title="대표전화" content="02-2163-2233" />
            </InfoList>
          </div>
        </>
      }
      className={clsx(styles.locationDialog, className)}
      maximize
      showClose
    >
      <div className={styles.content}>지도가 들어갑니다.</div>
    </Dialog>
  );
};

LocationDialog.displayName = 'LocationDialog';
