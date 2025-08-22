'use client';

import { useState } from 'react';
import {
  Dialog,
  ButtonArea,
  Button,
  RadioGroup,
  Input,
  FormArea,
  FormItem,
  Stack,
  Select,
  Checkbox,
} from '@shared/ui';

interface DeliveryAddDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// 배송지 이름 옵션
const deliveryNameOptions = [
  {
    label: '직접입력',
    value: '1',
  },
  {
    label: '우리집',
    value: '2',
  },
  {
    label: '회사',
    value: '3',
  },
  {
    label: '학교',
    value: '4',
  },
];
// 공동현관 출입방법 옵션
const deliveryMathodOptions = [
  {
    label: '공동현관 비밀번호',
    value: '1',
  },
  {
    label: '자유 출입 가능',
    value: '2',
  },
  {
    label: '직접입력',
    value: '3',
  },
];

// 새벽배송 알림 시점 옵션
const deliveryAlertOptions = [
  {
    label: '오전 7시 이후',
    value: '1',
  },
  {
    label: '배송직후',
    value: '2',
  },
  {
    label: '수신거부',
    value: '3',
  },
];

export default function DeliveryAddDialog({ isOpen, onClose }: DeliveryAddDialogProps) {
  // 라디오 그룹 상태
  const [deliveryNameValue, setDeliveryNameValue] = useState('1'); // 배송지 이름
  const [deliveryMathodValue, setDeliveryMathodValue] = useState('1'); // 공동현관 출입방법
  const [deliveryAlertValue, setDeliveryAlertValue] = useState('1'); // 새벽배송 알림 시점

  // 인풋에 표시될 실제 '배송지 이름'
  const [deliveryName, setDeliveryName] = useState('');

  const isCustomName = deliveryNameValue === '1'; // '직접입력' 선택 여부

  const getLabelByValue = (value: string) =>
    deliveryNameOptions.find((opt) => opt.value === value)?.label ?? '';

  const handleChangeDeliveryNameRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setDeliveryNameValue(next);
    // 직접입력이 아니면 해당 label을 인풋 값으로 세팅
    if (next !== '1') setDeliveryName(getLabelByValue(next));
    else setDeliveryName(''); // 직접입력일 때는 비워두고 사용자가 타이핑
  };

  return (
    <Dialog title="배송지 추가" isOpen={isOpen} onClose={onClose} showClose maximize>
      <FormArea type="vertical">
        <FormItem label="배송지 이름">
          <RadioGroup
            name="delivery-name"
            options={deliveryNameOptions}
            value={deliveryNameValue}
            onChange={handleChangeDeliveryNameRadio}
          />
          <FormItem.Slot>
            <Input
              size="large"
              value={deliveryName}
              onChange={(e) => setDeliveryName(e.target.value)}
              placeholder="최대 10자까지 입력"
              maxLength={10}
              className="ncp-mt-x6"
              readOnly={!isCustomName} // 직접입력이 아닐 땐 읽기전용(추후제거)
            />
          </FormItem.Slot>
        </FormItem>
        <FormItem label="받는사람" required>
          <Input size="large" placeholder="이름 입력" />
        </FormItem>
        <FormItem label="휴대폰 번호" required>
          <Input size="large" placeholder="-없이 숫자만 입력" />
        </FormItem>
        <FormItem label="주소" required>
          <Stack type="field">
            <Input size="large" placeholder="우편번호 찾기" />
            <Button variant="primary" size="large">
              주소찾기
            </Button>
          </Stack>
        </FormItem>
        <FormItem label="배송 요청사항">
          <Select
            onChange={() => {}}
            options={[
              {
                label: '옵션 1',
                value: 'option1',
              },
            ]}
            value=""
            placeholder="배송요청사항을 선택해 주세요."
            size="large"
          />
        </FormItem>
        <FormItem label="공동현관 출입방법">
          <RadioGroup
            name="delivery-method"
            options={deliveryMathodOptions}
            value={deliveryMathodValue}
            onChange={(e) => setDeliveryMathodValue(e.target.value)}
          />
          {deliveryMathodValue === '3' && (
            <FormItem.Slot>
              <Input size="large" placeholder="예) #1234" className="ncp-mt-x6" />
            </FormItem.Slot>
          )}
        </FormItem>
        <FormItem
          label="새벽배송 알림 시점"
          desc="정보를 입력하면 새벽배송으로 이용하실 수 있습니다."
        >
          <RadioGroup
            name="delivery-alert"
            options={deliveryAlertOptions}
            value={deliveryAlertValue}
            onChange={(e) => setDeliveryAlertValue(e.target.value)}
          />
        </FormItem>
      </FormArea>
      <div className="ncp-mt-xl">
        <Checkbox label="기본 배송지로 선택" />
      </div>
      <ButtonArea>
        <Button variant="primary" size="large">
          배송지 저장
        </Button>
      </ButtonArea>
    </Dialog>
  );
}
