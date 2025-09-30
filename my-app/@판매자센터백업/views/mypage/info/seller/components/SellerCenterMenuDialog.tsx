import { Dialog, ButtonArea, TextButton } from '@shared/ui';
import styles from './SellerCenterMenu.module.scss';

interface SellerCenterMenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellerCenterMenuDialog({ isOpen, onClose }: SellerCenterMenuDialogProps) {
  return (
    <Dialog title="" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.title}>
        <TextButton size="inherit" suffixIcon="arrowRight">
          로그인 해주세요
        </TextButton>
      </div>
      {/* 메뉴목록 */}
      <ul className={styles.list}>
        <li className={styles.item}>
          <strong>입점</strong>
          <ul className={styles.depth}>
            <li>입점안내</li>
            <li>입점안내</li>
          </ul>
        </li>
        <li className={styles.item}>
          <strong>입점</strong>
          <ul className={styles.depth}>
            <li>입점안내</li>
            <li>입점안내</li>
          </ul>
        </li>
        <li className={styles.item}>
          <strong>입점</strong>
          <ul className={styles.depth}>
            <li>입점안내</li>
            <li>입점안내</li>
          </ul>
        </li>
      </ul>
      <ButtonArea align="center">
        <TextButton size="1" color="gray3" variant="underline">
          로그아웃
        </TextButton>
      </ButtonArea>
    </Dialog>
  );
}
