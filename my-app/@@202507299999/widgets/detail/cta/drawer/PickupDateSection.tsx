'use client';

import React, { useState } from 'react';
import { Chip, Text } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './CtaDrawer.module.scss';

const dateOptions = [
  {
    value: 'date1',
    label: '10월 10일\n월요일',
  },
  {
    value: 'date2',
    label: '10월 11일\n화요일',
    disabled: true,
  },
  {
    value: 'date3',
    label: '10월 12일\n수요일',
  },
  {
    value: 'date4',
    label: '10월 13일\n목요일',
  },
  {
    value: 'date5',
    label: '10월 14일\n금요일',
  },
];

export const PickupDateSection = () => {
  const { item } = useProdDetail();
  const { storePickOnly, pickupBranch } = item;

  const [selectedDate, setSelectedDate] = useState<string>(dateOptions[0].value);
  const handleDateChange = (value: string) => {
    setSelectedDate(value);
  };

  return (
    <div className={styles['sec-pickupDate']}>
      <Text weight="medium" color="primary">
        픽업일시 [{pickupBranch}]
      </Text>
      <Chip
        name="time"
        type="swiper"
        selected={selectedDate}
        data={dateOptions}
        onChange={handleDateChange}
        variant="outlined"
        lineBreak
        className={styles.chips}
      />
    </div>
  );
};
