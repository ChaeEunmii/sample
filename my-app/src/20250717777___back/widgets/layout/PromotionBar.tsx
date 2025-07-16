'use client';

import { useState } from 'react';
import AppDownloadDialog from '@/widgets/etc/AppDownloadDialog';
import { Button, IconButton } from '@shared/ui';
import styles from './PromotionBar.module.scss';

interface PromotionBarProps {
  onClose?: () => void;
}

export const PromotionBar = ({ onClose }: PromotionBarProps) => {
  const [isAppDownloadDialog, setIsAppDownloadDialog] = useState(false);
  const handleClose = onClose;

  return (
    <div className={styles.root}>
      <img src="/favicon.png" className={styles.favicon} />
      <p className={styles.text}>HiHi 앱 설치 후 새로워진 더현대닷컴을 만나보세요.</p>
      <Button variant="primary" size="xsmall" round onClick={() => setIsAppDownloadDialog(true)}>
        앱 다운로드
      </Button>
      {/* <IconButton className={styles.close} name="close" onClick={handleClose}>닫기</IconButton> */}

      {/* 앱다운로드(L) */}
      <AppDownloadDialog
        isOpen={isAppDownloadDialog}
        onClose={() => setIsAppDownloadDialog(false)}
      />
    </div>
  );
};
