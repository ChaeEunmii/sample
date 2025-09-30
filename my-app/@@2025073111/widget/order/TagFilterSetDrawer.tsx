'use client';

import { useState } from 'react';
import { Drawer, IconButton, Button, FormArea, FormItem, Input, Chip, Text } from '@shared/ui';
import styles from './TagFilterSet.module.scss';
import { DateRangePicker, DateRange } from '@/widgets/form';

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

interface TagFilterSetDrawerProps {
  /** 타이틀 설정 */
  title?: string;
  /** 캘린더만 사용여부 */
  onlyCalendar?: boolean;
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  onApplyFilters?: () => void;
}

export default function TagFilterSetDrawer({
  title = '어떤 주문을 찾으세요?',
  onlyCalendar = false,
  isOpen,
  onClose,
  onApplyFilters,
}: TagFilterSetDrawerProps) {
  const [serviceSelect, setServiceSelect] = useState<string>('all');
  const [deliverySelect, setDeliverySelect] = useState<string>('all');

  // 기간선택
  const [range, setRange] = useState<DateRange>({
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    to: new Date(),
  });

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
      title={title}
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
        {!onlyCalendar && (
          <Input
            title="주문한 상품명"
            placeholder="주문한 상품명으로 검색하세요"
            suffix={<IconButton name="search">검색</IconButton>}
          />
        )}
        <div className={styles.rangeCal}>
          <DateRangePicker
            mode="ym"
            value={range}
            onChange={setRange}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date()}
          />
        </div>
        <Text size="3" color="gray3" className="ncp-mt-x0">
          최대 5년간의 구매 이력을 확인할 수 있습니다.
        </Text>
      </div>
      {!onlyCalendar && (
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
      )}
    </Drawer>
  );
}
