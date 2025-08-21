'use client';

import { useState } from 'react';
import {
  Dialog,
  ButtonArea,
  Button,
  Input,
  FormArea,
  FormItem,
  SelectDrawer,
  Checkbox,
} from '@shared/ui';

interface DeliveryAddGlobalDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// 정렬 옵션
const sortOptions = [
  {
    label: '최신순',
    value: 'option1',
  },
  {
    label: 'GEM한순',
    value: 'option2',
  },
];

export default function DeliveryAddGlobalDialog({ isOpen, onClose }: DeliveryAddGlobalDialogProps) {
  // 정렬 값
  const [sortCollectionValue, setSortCollectionValue] = useState('option1');

  return (
    <Dialog title="해외 배송지 추가" isOpen={isOpen} onClose={onClose} showClose maximize>
      <FormArea type="vertical">
        <FormItem label="Name" required>
          <Input size="large" placeholder="Name" />
        </FormItem>
        <FormItem label="Country">
          {/* 내용 커스텀해야댐 */}
          <SelectDrawer
            title="Please select a country"
            options={sortOptions}
            value={sortCollectionValue}
            onChange={setSortCollectionValue}
            size="large"
          />
        </FormItem>
        <FormItem label="Mobile phone number" required>
          <Input size="large" placeholder="Numbers only, no dashes" />
        </FormItem>
        <FormItem label="Phone number">
          <Input size="large" placeholder="Numbers only, no dashes" />
        </FormItem>
        <FormItem label="City" required>
          <Input size="large" placeholder="Letters and numbers only" />
        </FormItem>
        <FormItem label="Country/State/City" required>
          <Input size="large" placeholder="Letters and numbers only" />
        </FormItem>
        <FormItem label="Postal Code" required>
          <Input size="large" placeholder="Letters and numbers only" />
        </FormItem>
        <FormItem label="Address" required>
          <Input size="large" placeholder="Letters and numbers only" />
        </FormItem>
      </FormArea>
      <div className="ncp-mt-xl">
        <Checkbox label="Default address" />
      </div>
      <ButtonArea>
        <Button variant="primary" size="large">
          Save this address
        </Button>
      </ButtonArea>
    </Dialog>
  );
}
