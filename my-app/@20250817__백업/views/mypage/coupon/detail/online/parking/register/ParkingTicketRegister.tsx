import { useState } from 'react';
import { Button, FormArea, FormItem, Input, Line, Stack } from '@/shared/ui';
import { CAR_NUMBER_REGISTRATION_AGREEMENTS } from '@/views/policy/agreements-data';
import { AgreementGroup } from '@/widgets/form';

interface ParkingTicketRegisterProps {
  carNumber: string;
  onChange: (val: string) => void;
  onFocus: () => void;
  showError: boolean;
}

export const ParkingTicketRegister = ({
  carNumber,
  onChange,
  onFocus,
  showError,
}: ParkingTicketRegisterProps) => {
  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>({});

  // 약관동의 체크
  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <>
      <FormArea type="vertical">
        <FormItem label="차량번호 등록" error={showError ? '차량번호를 입력해주세요.' : undefined}>
          <Stack type="field">
            <Input
              value={carNumber}
              onFocus={onFocus}
              onChange={(e) => onChange(e.target.value)}
              size="large"
              placeholder="차량번호 입력"
              invalid={showError ? true : false}
            />
            <Button size="large" variant="primary">
              등록
            </Button>
          </Stack>
        </FormItem>
      </FormArea>
      <AgreementGroup
        variant="type1"
        data={CAR_NUMBER_REGISTRATION_AGREEMENTS}
        checked={agreeStates[CAR_NUMBER_REGISTRATION_AGREEMENTS.id]}
        onChange={handleCheckChange}
        allStates={agreeStates}
        disabledStates={disabledStates}
      />
      <Line className="" margin="3" variant="bold" />
    </>
  );
};

ParkingTicketRegister.displayName = 'ParkingTicketRegister';
