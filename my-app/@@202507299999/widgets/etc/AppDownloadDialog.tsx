'use client';

import { Dialog, Text } from '@shared/ui';
import styles from './AppDownload.module.scss';

interface AppDownloadDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDownloadDialog({ isOpen, onClose }: AppDownloadDialogProps) {
  return (
    <Dialog showClose isOpen={isOpen} onClose={onClose}>
      <div className={styles.qrcode}>
        <img src="/images/sample_qr.png" alt="qr 스캔 이미지" className={styles.image} />
        <Text weight="medium" reading>
          카메라로 QR코드를 스캔하면
          <br /> 다운로드 페이지로 연결돼요.
        </Text>
      </div>
    </Dialog>
  );
}
