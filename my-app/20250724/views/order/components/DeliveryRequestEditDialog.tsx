'use client';

import { useState } from 'react';
import {
  Dialog,
  Button,
  TitleBar,
  RadioGroup,
  Input,
  FormArea,
  FormItem,
  Select,
  Box,
  TextList,
} from '@shared/ui';
import styles from './DeliveryRequestEdit.module.scss';

interface DeliveryRequestEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeliveryRequestEditDialog({
  isOpen,
  onClose,
}: DeliveryRequestEditDialogProps) {
  const [accessValue, setAccessValue] = useState('access-1');

  return (
    <Dialog
      title="배송지 요청 사항 변경"
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
      <Box size="3">
        <TextList
          data={[
            '새벽/당일배송 주문 시 문 앞으로 배송됩니다.',
            '공동현관 출입이 어려운경우, 부득이하게 1층 공동현관 앞에 배송될 수 있습니다. ',
          ]}
          variant="level2"
        />
      </Box>
      <TitleBar title="공동현관 출입방법" type="docs" level="2" />
      <RadioGroup
        name="access-default"
        defaultValue={accessValue}
        value={accessValue}
        onChange={(e) => setAccessValue(e.target.value)}
        options={[
          {
            label: '공동현관 비밀번호',
            value: 'access-1',
          },
          {
            label: '자유 출입 가능',
            value: 'access-2',
          },
          {
            label: '직접입력',
            value: 'access-3',
          },
        ]}
      />
      {accessValue === 'access-1' && (
        <div className={styles.accessInput}>
          <Input placeholder="예) #1234" size="large" />
        </div>
      )}
      <TitleBar title="새벽배송 알림 시점" type="docs" level="2" />
      <RadioGroup
        name="time-default"
        options={[
          {
            label: '오전 7시 이후',
            value: 'time-1',
          },
          {
            label: '배송직후',
            value: 'time-2',
          },
          {
            label: '수신거부',
            value: 'time-3',
          },
        ]}
      />
      <TitleBar title="배송요청사항" type="docs" level="2" />
      <FormArea>
        <FormItem title="제목">
          <Select
            onChange={() => {}}
            options={[
              {
                label: '옵션 1',
                value: 'option1',
              },
            ]}
            placeholder="직접 입력하기"
            value=""
          />
        </FormItem>
        <FormItem title="제목">
          <Input placeholder="요청사항을 입력해 주세요." />
        </FormItem>
      </FormArea>
    </Dialog>
  );
}
