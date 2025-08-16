'use client';

import React from 'react';
import { Box, Text } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { formatNumber, formatPrice } from '@/shared/utils/ui';

import styles from './CtaDrawer.module.scss';

export const FixOptionSection = () => {
  const { prodType } = useProdDetail();

  return (
    <Box className={styles['sec-fixOption']}>
      <div className={styles.inner}>
        {prodType === 'rental' && (
          <>
            <Text size="4" color="gray1">
              월렌탈료 : {formatPrice(44000)}
            </Text>
            <Text size="4" color="gray1">
              약정개월수 : {60}개월
            </Text>
            <Text size="4" color="gray1">
              별도약정 / {formatNumber(1, 'count')}
            </Text>
          </>
        )}
      </div>
    </Box>
  );
};
