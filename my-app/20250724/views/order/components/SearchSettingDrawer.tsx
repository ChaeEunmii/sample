'use client';

import { useState } from 'react';
import { Drawer, IconButton, Button, FormArea, FormItem, Input, Chip, Text } from '@shared/ui';
import styles from './SearchSettingDrawer.module.scss';

// 기간 옵션
const monthOptions = [
  { label: '3개월', value: 'month-1' },
  { label: '6개월', value: 'month-2' },
  { label: '9개월', value: 'month-3' },
  { label: '12개월', value: 'month-4' },
];
// 서비스 옵션
const serviceOptions = [
  { label: '전체', value: 'all' },
  { label: '백화점', value: 'service-1' },
  { label: 'e슈퍼', value: 'service-2' },
  { label: '새벽/당일배송', value: 'service-3' },
  { label: '오늘배송', value: 'service-4' },
  { label: '내일배송', value: 'service-5' },
  { label: '택배배송', value: 'service-6' },
  { label: '스토어픽', value: 'service-7' },
  { label: '이용권&쿠폰', value: 'service-8' },
  { label: '퀵배송', value: 'service-9' },
  { label: '렌탈', value: 'service-10' },
  { label: '명절', value: 'service-11' },
  { label: '선물주문', value: 'service-12' },
  { label: '구독', value: 'service-13' },
  { label: '옴니주문', value: 'service-14' },
];
// 배송상태 옵션
const deliveryOptions = [
  { label: '전체', value: 'all' },
  { label: '주문완료', value: 'delivery-1' },
  { label: '결제완료', value: 'delivery-2' },
  { label: '상품준비', value: 'delivery-3' },
  { label: '배송중', value: 'delivery-4' },
  { label: '배송/픽업완료', value: 'delivery-5' },
  { label: '취소', value: 'delivery-6' },
  { label: '반품', value: 'delivery-7' },
  { label: '교환', value: 'delivery-8' },
];

interface SearchSettingDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  onApplyFilters?: () => void;
}

export default function SearchSettingDrawer({
  isOpen,
  onClose,
  onApplyFilters,
}: SearchSettingDrawerProps) {
  const [monthSelect, setMonthSelect] = useState<string>('');
  const [serviceSelect, setServiceSelect] = useState<string>('all');
  const [deliverySelect, setDeliverySelect] = useState<string>('all');

  // 기간 개월수 선택
  const handleMonthSelect = (value: string) => {
    setMonthSelect(value);
  };

  // 서비스 선택
  const handleServiceSelect = (value: string) => {
    setServiceSelect(value);
  };

  // 배송 상태 선택
  const handleDeliverySelect = (value: string) => {
    setDeliverySelect(value);
  };

  return (
    <Drawer
      title="어떤 주문을 찾으세요?"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large">초기화</Button>
          <Button
            size="large"
            variant="primary"
            onClick={() => {
              if (onApplyFilters) onApplyFilters();
              onClose();
            }}
          >
            조회하기
          </Button>
        </>
      }
    >
      <div className={styles.top}>
        <Input
          title="주문한 상품명"
          placeholder="주문한 상품명으로 검색하세요"
          suffix={<IconButton name="search">검색</IconButton>}
        />
        <div className={styles.range}>
          <Chip
            selected={monthSelect}
            onChange={handleMonthSelect}
            variant="filled"
            size="small"
            columns={'auto'}
            data={monthOptions}
            name="month-select"
          />
          <div className={styles.calendar}>
            <Input
              title="캘린더"
              value="2025.05.02"
              clearable={false}
              suffix={
                <IconButton
                  name="subscribe"
                  aria-label="달력"
                  onClick={() => {
                    console.log('기간검색!');
                  }}
                />
              }
            />
            <span className={styles.dash}>-</span>
            <Input
              title="캘린더"
              value="2025.05.02"
              clearable={false}
              suffix={
                <IconButton
                  name="subscribe"
                  aria-label="달력"
                  onClick={() => {
                    console.log('기간검색!');
                  }}
                />
              }
            />
          </div>
          <Text size="3" color="gray3" className="ncp-mt-x0">
            최대 5년간의 구매 이력을 확인할 수 있습니다.
          </Text>
        </div>
      </div>
      <FormArea type="vertical" gap="1">
        <FormItem title="서비스 선택">
          <Chip
            selected={serviceSelect}
            onChange={handleServiceSelect}
            variant="filled"
            size="small"
            columns={'auto'}
            data={serviceOptions}
            name="service-select"
          />
        </FormItem>
        <FormItem title="배송 상태">
          <Chip
            selected={deliverySelect}
            onChange={handleDeliverySelect}
            variant="filled"
            size="small"
            columns={'auto'}
            data={deliveryOptions}
            name="delivery-select"
          />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
