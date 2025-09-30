'use client';

import React, { useState } from 'react';
import { Text, RadioGroup, ButtonArea, Button, Chip } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './CtaDrawer.module.scss';

export const DeliverySection = () => {
  const { prodDetailType } = useProdDetail();

  const [selectDelivery, setSelectDelivery] = useState('delivery1');
  const handleDeliveryChange = (value: string) => {
    setSelectDelivery(value);
  };

  return (
    <div className={styles['sec-delivery']}>
      {prodDetailType === 'holidayOnly' ? (
        // 명절 상품
        <Chip
          name="holidayDelivery"
          type="swiper"
          selected={selectDelivery}
          data={[
            { value: 'delivery1', label: '명절배송' },
            { value: 'delivery2', label: '퀵배송' },
          ]}
          onChange={handleDeliveryChange}
          variant="outlined"
        />
      ) : (
        // 스토어픽
        <>
          <Text size="4" weight="medium">
            배송유형 선택
          </Text>
          <RadioGroup
            className={styles.radioGroup}
            radioProps={{
              className: styles.radio,
            }}
            name="delivery-type"
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
