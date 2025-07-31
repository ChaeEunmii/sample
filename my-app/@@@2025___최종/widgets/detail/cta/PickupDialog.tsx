import { Button, Calendar, Chip, Dialog, FormArea, FormItem, Stepper } from '@shared/ui';
import { useState } from 'react';

interface PickupDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// 달력 설정(임시)
const today = new Date();
const minDate = new Date(today);
const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 1);

// 시간 옵션(임시)
const timeOptions = [
  { value: 'time1', label: '11:00' },
  { value: 'time2', label: '12:00' },
  { value: 'time3', label: '13:00' },
  { value: 'time4', label: '14:00' },
  { value: 'time5', label: '15:00' },
  { value: 'time6', label: '16:00' },
];

// 수량 옵션(임시)
const quantityOptions = {
  min: 1,
  max: 10,
  default: 1,
};

export default function PickupDialog({ isOpen, onClose }: PickupDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(quantityOptions.default);

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handlePurchase = () => {
    console.log('Purchase data:', {
      date: selectedDate,
      time: selectedTime,
      quantity,
    });
  };

  return (
    <Dialog
      title="방문픽업"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large" onClick={handlePurchase}>
          바로구매
        </Button>
      }
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
        <FormItem label="시간 선택">
          <Chip
            name="time"
            type="swiper"
            selected={selectedTime}
            data={timeOptions}
            onChange={handleTimeChange}
            variant="buttons"
          />
        </FormItem>
        <FormItem label="수량 선택">
          <Stepper
            value={quantity}
            onChange={handleQuantityChange}
            min={quantityOptions.min}
            max={quantityOptions.max}
            className="ncp-w-full"
          />
        </FormItem>
      </FormArea>
    </Dialog>
  );
}
