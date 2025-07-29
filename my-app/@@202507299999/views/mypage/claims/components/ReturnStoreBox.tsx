'use client';

import { useState } from 'react';
import { Box, Text, Button } from '@shared/ui';
import { LocationDialog } from '@/widgets/order/LocationDialog';
import styles from './ReturnStoreBox.module.scss';
import clsx from 'clsx';

/**
 * 반품매장 정보 박스
 */

interface ReturnStoreBoxProps {
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const ReturnStoreBox = ({ className }: ReturnStoreBoxProps) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <>
      <Box className={clsx(styles.root, className)}>
        <div className={styles.info}>
          <div className={styles.store}>
            <strong className={styles.name}>현대백화점 압구정본점</strong>
            <div className={styles.time}>
              <Text as="span" size="3" className={styles.titleLine}>
                오늘의 영업시간
              </Text>
              <Text as="span" size="3">
                10:30 ~ 20:00
              </Text>
            </div>
          </div>
          <div className={styles.btns}>
            <Button
              iconOnly="map"
              round
              size="xsmall"
              variant="tertiary"
              onClick={() => setIsLocationOpen(true)}
            >
              위치보기
            </Button>
            <Button iconOnly="callFill" round size="xsmall" variant="tertiary">
              전화걸기
            </Button>
          </div>
        </div>
      </Box>
      {/* 위치보기 다이얼로그 */}
      <LocationDialog isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
    </>
  );
};
