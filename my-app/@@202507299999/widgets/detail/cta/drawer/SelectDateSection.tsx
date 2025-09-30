'use client';

import React, { useState } from 'react';
import { Icon, Input, Line, Text } from '@/shared/ui';
import { formatDateWithDay, formatPrice } from '@/shared/utils/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import SelectDateDialog from '../SelectDateDialog';

import styles from './CtaDrawer.module.scss';

export type selectDateType = 'delivery' | 'install' | 'visit';

export const SelectDateSection = () => {
  const { item } = useProdDetail();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 날짜 선택 유형
  const [type] = useState<selectDateType>('visit');

  function getPlaceholder() {
    switch (type) {
      case 'delivery':
        return '배송 희망일을 선택해주세요.';
      case 'install':
        return '설치 희망일을 선택해주세요.';
      case 'visit':
      default:
        return '이용일을 선택해주세요.';
    }
  }

  return (
    <>
      <Line />
      <div className={styles['sec-selectDate']}>
        <Input
          placeholder={getPlaceholder()}
          value={formatDateWithDay('20251031', 'dot')} // 팝업에서 선택한 값 노출
          suffix={<Icon name="subscribe" />}
          clearable={false}
          onClick={() => setIsDialogOpen(true)}
        />
        {type === 'install' && item.installationFee && (
          <div className={styles.fee}>
            <Text size="3" color="gray3">
              설치비 등 추가비용 :
              {item.installationFee.map((list: { title: string; fee: number }, idx: number) => (
                <React.Fragment key={idx}>
                  {idx > 0 && ', '}
                  {list.title} {formatPrice(list.fee)}
                </React.Fragment>
              ))}
            </Text>
          </div>
        )}
      </div>
      <SelectDateDialog type={type} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};
