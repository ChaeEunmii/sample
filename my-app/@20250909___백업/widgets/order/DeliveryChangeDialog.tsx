'use client';

import { useState, useEffect } from 'react';
import { Dialog, Button } from '@shared/ui';
import { DeliveryAddressData } from '@widgets/order/DeliveryAddressItem';
import { DeliveryAddressList } from '@widgets/order';

interface DeliveryChangeDialogProps {
  /** 주소 데이터 */
  data?: DeliveryAddressData[];
  isOpen: boolean;
  onClose: () => void;
}

export const DeliveryChangeDialog = ({ data, isOpen, onClose }: DeliveryChangeDialogProps) => {
  const [selectedIds, setSelectedIds] = useState<Array<string | number>>([]);

  // 최초 첫번째 주소 선택값으로 세팅 (샘플)
  useEffect(() => {
    if (data && data.length > 0 && selectedIds.length === 0) {
      setSelectedIds([data[0].id]);
    }
  }, [data, selectedIds]);

  useEffect(() => {
    console.log('현재 선택된 배송지 ID:', selectedIds);
  }, [selectedIds]);

  return (
    <Dialog
      title="배송지 변경"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large">
          변경하기
        </Button>
      }
    >
      {data && (
        <DeliveryAddressList
          data={data}
          mode="radio"
          selection={{ selectedIds, onChange: setSelectedIds }}
          flush
          onEdit={(item) => {
            console.log(`수정: ${item.id}`);
          }}
          onDelete={(item) => {
            console.log(`삭제: ${item.id}`);
          }}
        />
      )}
    </Dialog>
  );
};
DeliveryChangeDialog.displayName = 'DeliveryChangeDialog';
