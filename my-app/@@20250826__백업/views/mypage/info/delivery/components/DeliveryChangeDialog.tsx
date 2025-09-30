'use client';

import { useState, useEffect } from 'react';
import { Dialog, Button } from '@shared/ui';
import { DeliveryAddressData } from '@views/mypage/info/delivery/components/DeliveryAddressItem';
import { DeliveryAddressList } from '@views/mypage/info/delivery/components/DeliveryAddressList';

interface DeliveryChangeDialogProps {
  /** 주소 데이터 */
  data?: DeliveryAddressData[];
  isOpen: boolean;
  onClose: () => void;
}

export default function DeliveryChangeDialog({ data, isOpen, onClose }: DeliveryChangeDialogProps) {
  const [selectedIds, setSelectedIds] = useState<Array<string | number>>([]);
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
}
