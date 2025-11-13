'use client';

import { useState } from 'react';
import { Dialog, Icon, Heading, Button, Calendar, Box, Text, TextList } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import styles from './DeliveryDateSelect.module.scss';

// 배송일선택 타입 (배송 희망일 | 배송 예정일 | 택배 발송일)
export type DeliveryDateType = 'hopeDate' | 'expectDate' | 'shipDate';
// 배송일선택 타입별 라벨 + 안내문구
export const DELIVERY_INFO: Record<DeliveryDateType, { label: string; notes: string[] }> = {
  hopeDate: {
    label: '배송 희망일',
    notes: ['배송일 전 담당자가 해피콜을 드립니다.', '해피콜 시 정확한 배송일을 안내 해 드립니다.'],
  },
  expectDate: {
    label: '배송 예정일',
    notes: [
      '배송일자 변경은 기존 예정일 이후로만 변경 가능합니다.',
      '명절기간 많은 배송 물량으로 인하여 예정일보다 늦게 배송될 수 있다는 점 양해 부탁드립니다.',
    ],
  },
  shipDate: {
    label: '택배 발송일',
    notes: ['8/28 ~ 9/15 행사 기간 내 발송일을 선택해 주세요.'],
  },
};

interface DeliveryDateSelectProps {
  type?: DeliveryDateType;
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryDateSelectDialog({
  type = 'hopeDate',
  isOpen,
  onClose,
}: DeliveryDateSelectProps) {
  // 달력 설정(임시)
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const minDate = new Date(today);
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 1);

  const [selectedDate, setSelectedDate] = useState<Date | null>(today); // 날짜선택 상태

  // 라벨 구하기
  const info = DELIVERY_INFO[type as DeliveryDateType];
  const label = info?.label ?? '';
  // 안내문구 렌더 구하기
  const renderTextList = DELIVERY_INFO[type as DeliveryDateType]?.notes ?? [];

  return (
    <Dialog
      title={`${label} 선택`}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large">
          확인
        </Button>
      }
    >
      <div className={styles.title}>
        <Icon name="calendar" size="large" />
        <Heading size="5" weight="bold">
          {label}을 선택해 주세요.
        </Heading>
      </div>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        minDate={minDate}
        maxDate={maxDate}
        className={styles.calendar}
      />
      <Box size="3" className={styles.box}>
        <Text>{label}</Text>
        <Text size="7" weight="bold">
          {formatDate(selectedDate ?? today, 'kor')}
        </Text>
      </Box>
      {/* 안내문구 (1개면 Text로 렌더링) */}
      <div className={styles.infoText}>
        {renderTextList.length === 1 ? (
          <Text size="4" color="gray2" weight="regular" className="ncp-mt-x0">
            {renderTextList}
          </Text>
        ) : (
          <TextList variant="level2" data={renderTextList} className="ncp-mt-x0" />
        )}
      </div>
    </Dialog>
  );
}
