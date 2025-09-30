'use client';

import React from 'react';

import { Text, RadioGroup } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import styles from './CtaDrawer.module.scss';
import { formatPrice } from '@/shared/utils/ui';

export const PackageSection = () => {
  const { item } = useProdDetail();

  // 선택한 옵션의 값 임시 데이터
  const selectQty = 2;

  return (
    <div className={styles['sec-package']}>
      <Text size="4" weight="medium">
        포장방법 선택
        {item.package.paid && ` (${item.package.paid > 0 && '+'}${formatPrice(item.package.paid)})`}
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
            label: '포장안함',
            value: '1',
          },
          {
            label: '개별포장',
            value: '2',
          },
          {
            label: '하나로포장',
            value: '3',
            disabled: selectQty > 1,
          },
        ]}
      />
    </div>
  );
};
