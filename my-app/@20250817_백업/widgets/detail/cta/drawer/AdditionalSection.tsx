'use client';

import React, { useState } from 'react';

import styles from './CtaDrawer.module.scss';
import { FormArea, FormItem, Input, Line, Switch, Text } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

export const AdditionalSection = () => {
  const { item } = useProdDetail();

  // 추가정보 입력 사용 설정 (switch)
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <Line />
      <div className={styles['sec-additional']}>
        <div className={styles.title}>
          <Text as="label" weight="semibold" color="primary" htmlFor="handle-cta-additional">
            추가정보를 입력해주세요
          </Text>
          <Switch
            id="handle-cta-additional"
            checked={isChecked}
            size="small"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        {isChecked && (
          <FormArea type="vertical" gap="4" className={styles.formArea}>
            {item.additionalOptions.map(
              (option: { name: string; placeholder: string }, idx: number) => (
                <FormItem key={`${option.name}-${idx}`} label={option.name}>
                  <Input placeholder={option.placeholder} />
                </FormItem>
              )
            )}
          </FormArea>
        )}
      </div>
    </>
  );
};
