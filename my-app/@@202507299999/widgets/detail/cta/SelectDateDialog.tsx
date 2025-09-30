import {
  Box,
  Button,
  Calendar,
  Chip,
  Dialog,
  FormArea,
  FormItem,
  Text,
  TextList,
} from '@shared/ui';
import { useState } from 'react';
import { selectDateType } from './drawer/SelectDateSection';
import { formatDate } from '@/shared/utils/ui';
import styles from './DetailCTA.module.scss';

interface SelectDateDialogProps {
  type: selectDateType;
  isOpen: boolean;
  onClose: () => void;
}

// 달력 설정(임시)
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const minDate = new Date(today);
const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 1);

// 시간 옵션(임시)
const timeOptions = [
  { value: 'time1', label: '11:00' },
  { value: 'time2', label: '12:00', disabled: true },
  { value: 'time3', label: '13:00' },
  { value: 'time4', label: '14:00' },
  { value: 'time5', label: '15:00' },
  { value: 'time6', label: '16:00' },
  { value: 'time7', label: '17:00' },
  { value: 'time8', label: '18:00' },
  { value: 'time9', label: '19:00' },
  { value: 'time10', label: '20:00' },
];

export default function SelectDateDialog({ type, isOpen, onClose }: SelectDateDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  const handlePurchase = () => {
    console.log('Purchase data:', {
      date: selectedDate,
      time: selectedTime,
    });
    onClose();
  };

  function getTitle() {
    switch (type) {
      case 'delivery':
        return '배송 희망일 선택';
      case 'install':
        return '설치 희망일 선택';
      case 'visit':
      default:
        return '방문픽업';
    }
  }

  return (
    <Dialog
      title={getTitle()}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button size="large" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary" size="large" onClick={handlePurchase}>
            저장
          </Button>
        </>
      }
      className={styles['dialog-selectDate']}
    >
      <FormArea type="vertical">
        <FormItem>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        </FormItem>
        {type === 'visit' && (
          <FormItem label="시간 선택">
            <Chip
              name="time"
              type={timeOptions.length > 6 ? 'grid' : 'swiper'}
              columns="auto"
              selected={selectedTime}
              data={timeOptions}
              onChange={handleTimeChange}
              variant="outlined"
              className={styles.timeChip}
            />
          </FormItem>
        )}
      </FormArea>
      <Box size="3" className={styles.box}>
        <Text>{type === 'delivery' ? '배송' : '설치'} 희망일</Text>
        <Text size="7" weight="bold">
          {formatDate(selectedDate ?? today, 'kor')}
        </Text>
      </Box>
      <TextList
        margin="2"
        variant="level2"
        data={[
          `${type === 'delivery' ? '배송일' : '설치'} 전 담당자가 해피콜을 드립니다.`,
          `해피콜 시 정확한 ${type === 'delivery' ? '배송' : '방문'}일을 안내 해 드립니다.`,
        ]}
      />
    </Dialog>
  );
}
