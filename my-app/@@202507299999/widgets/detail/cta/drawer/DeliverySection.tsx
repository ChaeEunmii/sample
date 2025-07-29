'use client';

import React from 'react';
import { Text, RadioGroup, ButtonArea, Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './CtaDrawer.module.scss';

export const DeliverySection = () => {
  const { prodDetailType } = useProdDetail();
  return (
    <div className={styles['sec-delivery']}>
      {prodDetailType === 'holidayOnly' ? (
        // 명절 상품
        <ButtonArea className={styles.btnGroup}>
          <Button>명절배송</Button>
          <Button>퀵배송</Button>
        </ButtonArea>
      ) : (
        // 스토어픽
        <>
          <Text size="4" weight="medium">
            배송유형
          </Text>
          <RadioGroup
            className={styles.radioGroup}
            radioProps={{
              className: styles.radio,
            }}
            name="package-type"
            defaultValue={'1'}
            options={[
              {
                label: '택배배송',
                value: '1',
              },
              {
                label: '스토어픽',
                value: '2',
              },
            ]}
          />
        </>
      )}
    </div>
  );
};
