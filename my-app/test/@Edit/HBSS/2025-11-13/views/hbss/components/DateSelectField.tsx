'use client';

import { useState } from 'react';
import { Input, Icon } from '@shared/ui';
import { DeliveryDateSelectDialog } from '@views/hbss/components';
import { DeliveryDateType } from '@views/hbss/components/DeliveryDateSelectDialog';
import clsx from 'clsx';
import styles from './DateSelectField.module.scss';

/**
 * @description 배송지입력 필드 + 배송일 선택(L) 쎄트
 *
 * 배송일선택 타입 (배송 희망일 | 배송 예정일 | 택배 발송일)
 * export type DeliveryDateType = 'hopeDate' | 'expectDate' | 'shipDate';
 */

interface DateSelectFieldProps {
  /** 배송일 선택 타입 */
  type?: DeliveryDateType;
  /** 추가적인 클래스 */
  className?: string;
}

export function DateSelectField({ type = 'hopeDate', className }: DateSelectFieldProps) {
  // 배송일 선택 (L) 상태
  const [isDeliveryDateSelect, setIsDeliveryDateSelect] = useState(false);
  // placeholder 렌더
  function getPlaceholder() {
    switch (type) {
      case 'hopeDate':
        return '배송 희망일을 선택해주세요.';
      case 'expectDate':
        return '배송 예정일을 선택해주세요.';
      case 'shipDate':
        return '택배 발송일을 선택해주세요.';
      default:
        return '선택해주세요.';
    }
  }

  return (
    <>
      <div className={clsx(styles.root, className)}>
        <Input
          size="large"
          suffix={<Icon name="calendar" />}
          clearable={false}
          placeholder={getPlaceholder()}
          onClick={() => setIsDeliveryDateSelect(true)}
        />
      </div>
      {/* 배송 날짜 선택 (L)*/}
      <DeliveryDateSelectDialog
        type={type}
        isOpen={isDeliveryDateSelect}
        onClose={() => setIsDeliveryDateSelect(false)}
      />
    </>
  );
}
