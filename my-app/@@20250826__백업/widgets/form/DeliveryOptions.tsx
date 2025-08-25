'use client';

import { useEffect } from 'react';
import { Input, Select } from '@shared/ui';
import styles from './DeliveryOptions.module.scss';

interface DeliveryOptionsProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedOption: string;
  customOption: string;
  onOptionChange: (option: string) => void;
  onCustomChange: (customOption: string) => void;
}

export function DeliveryOptions({
  selectedOption,
  customOption,
  onOptionChange,
  onCustomChange,
  ...props
}: DeliveryOptionsProps) {
  const deliveryOptions = [
    { label: '배송요청사항을 선택하세요', value: '배송요청사항을 선택하세요' },
    { label: '문 앞에 놓아주세요', value: '문 앞에 놓아주세요' },
    { label: '배송 전 연락바랍니다', value: '배송 전 연락 연락바랍니다' },
    { label: '택배함에 넣어주세요', value: '택배함에 넣어주세요' },
    { label: '빠른배송 부탁드립니다', value: '빠른배송 부탁드립니다' },
    { label: '부재시 경비실에 맡겨주세요', value: '부재시 경비실에 맡겨주세요' },
    { label: '핸드폰으로 연락 부탁드립니다', value: '핸드폰으로 연락 부탁드립니다' },
    { label: '직접 입력하기', value: 'custom' },
  ];

  // 디폴트값 설정
  useEffect(() => {
    if (!selectedOption) {
      onOptionChange(deliveryOptions[0].value);
    }
  }, [selectedOption, onOptionChange]);

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCustomChange(e.target.value);
  };

  return (
    <div className={styles.root}>
      <Select
        title="배송시 요청사항 선택"
        options={deliveryOptions}
        value={selectedOption}
        onChange={onOptionChange}
        size="large"
      />
      {selectedOption === 'custom' && (
        <Input
          title="배송시 요청사항 직접입력"
          placeholder="요청사항을 입력해주세요"
          value={customOption}
          onChange={handleCustomInputChange}
          className="ut-w-full"
          size="large"
        />
      )}
    </div>
  );
}
DeliveryOptions.displayName = 'DeliveryOptions';
