import { Drawer, Icon, Text } from '@shared/ui';
import styles from './UploadMethod.module.scss';

interface UploadMethodDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function UploadMethodDrawer({ isOpen, onClose }: UploadMethodDrawerProps) {
  return (
    <Drawer title="작업선택" isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrap}>
        <ul className={styles.btns}>
          <button type="button" className={styles.btn}>
            <span className={styles.icon}>
              <Icon name="camera" size="large" />
            </span>
            <Text as="span" size="3">
              카메라
            </Text>
          </button>
          <button type="button" className={styles.btn}>
            <span className={styles.icon}>
              <Icon name="album" size="large" />
            </span>
            <Text as="span" size="3">
              앨범
            </Text>
          </button>
        </ul>
      </div>
    </Drawer>
  );
}
