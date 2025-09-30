'use client';

import React from 'react';
import { Dialog, Image, Text } from '@shared/ui';

import styles from './DetailTop.module.scss';

interface BarcodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BarcodeDialog({ isOpen, onClose }: BarcodeDialogProps) {
  const barcodeNum = 2810000668296;

  return (
    <Dialog
      title="현대백화점 결제용 바코드 조회"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.barCodeDialog}
      bodyClassName={styles['dialogBody']}
      showClose
      maximize
    >
      <div className={styles.wrap}>
        <Text size="3" color="gray3" className={styles.note}>
          매장 계산대에서 바코드를 보여주시면 편리하게 구매가 가능합니다.
        </Text>
        <div className={styles.barcodeArea}>
          <div className={styles.innerArea}>
            <Text as="span" className={styles.number}>
              {barcodeNum}
            </Text>
            <Image
              className={styles.image}
              src="/images/dummy/@sample_barcode.png"
              alt="현대백화점 결제용 바코드 조회"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
