'use client';

import React from 'react';
import clsx from 'clsx';
import { InfoList, InfoItem, Text } from '@shared/ui';

export interface VoucherDetailInfoItem {
  label: string;
  value: React.ReactNode;
}

export interface VoucherDetailInfoProps {
  /** 표시할 항목 리스트 */
  items: VoucherDetailInfoItem[];
  /** 커스텀 클래스 */
  className?: string;
}

export const VoucherDetailInfo = ({ items, className }: VoucherDetailInfoProps) => {
  return (
    <>
      <InfoList variant="stacked" gridColumns="auto" className={clsx(className)}>
        {items.map(({ label, value }, index) => (
          <InfoItem
            key={index}
            title={
              <Text size="4" color="gray3">
                {label}
              </Text>
            }
            content={<Text size="4">{value}</Text>}
          />
        ))}
      </InfoList>
    </>
  );
};
