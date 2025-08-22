'use client';
import { useState } from 'react';
import {
  Button,
  ButtonArea,
  FormArea,
  FormItem,
  Input,
  Link,
  RadioGroup,
  Select,
  Text,
  TitleBar,
} from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';

export const ReservationGuestOrderForm = () => {
  // ✅ 상태 관리
  const [value, setValue] = useState('korean');
  const [selected, setSelected] = useState('');

  return (
    <Container
      title="Reservation"
      showBack
      actions={[{ type: 'lang' as const, value: 'en', options: ['en', 'zh'] }]}
    >
      <Contents>
        <Text weight="medium" indent reading className="ncp-mt-m">
          We've sent verification information to the email you provided when you made your
          reservation. Please check your email and enter the information below.
        </Text>
        <TitleBar title="Enter the phone number you entered when you made the reservation." />
        <RadioGroup
          name="nationality"
          options={[
            {
              label: 'Korean',
              value: 'korean',
            },
            {
              label: 'Foreign',
              value: 'foreign',
            },
          ]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <FormArea>
          {value === 'foreign' && (
            <FormItem label="Country code">
              <Select
                options={[
                  { value: 'option1', label: '옵션 1' },
                  { value: 'option2', label: '옵션 2' },
                  { value: 'option3', label: '옵션 3' },
                ]}
                value={selected}
                onChange={setSelected}
                placeholder="Country code"
                size="large"
              />
            </FormItem>
          )}
          <FormItem label="Phone Number (Digital only)">
            <Input title="Phone Number (Digital only)" size="large" />
          </FormItem>
        </FormArea>
        <ButtonArea margin="3">
          <Button variant="primary" size="large">
            Check My Reservation
          </Button>
        </ButtonArea>
        <Text size="3" color="gray3" indent className="ncp-mt-l">
          If you've forgotten or can't retrieve the information you entered during your reservation,
          please call our customer service number at{' '}
          <Link href="tel:+8218009549" variant="underline" type="inline">
            +82-1800-9549
          </Link>
          .
        </Text>
      </Contents>
    </Container>
  );
};

ReservationGuestOrderForm.displayName = 'ReservationGuestOrderForm';
