'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, FormArea, FormItem, Heading, Input, RadioGroup, Select, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { AddressInfoBox, DeliveryOptions } from '@/widgets/form';
import { DeliveryZoneDialog } from './DeliveryZoneDialog';
import styles from './OrderAddress.module.scss';
import { mockAddressItem } from '@/mocks/address';

export const OrderAddressInfo = () => {
  // 임시 데이터
  const address = mockAddressItem;
  // 화면상태
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const isStatus1 = status === 'status1'; // 국외
  const isStatus2 = status === 'status2'; // 국내

  // 배송 요청사항 상태
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('');
  const [customDeliveryOption, setCustomDeliveryOption] = useState('');
  // 공동현관 출입방법 상태
  const [value, setValue] = useState('code');
  const [isDeliveryZoneOpen, setIsDeliveryZoneOpen] = useState(false);

  const [selected, setSelected] = useState('');

  return (
    <>
      <Section
        title={isStatus1 ? 'Shipping Address' : '배송지 정보'}
        side={isStatus2 ? '기본' : undefined}
        suffix={
          <>
            <Text as="span" size="5" className={styles.slot}>
              {address.defaultAddress} {address.detailedAddress}
            </Text>
          </>
        }
        variant="collapse"
        className={styles.address}
      >
        <AddressInfoBox
          isChangeButton
          className={styles.addrInfo}
          slot={
            <>
              {isStatus1 && (
                <div className={styles.global}>
                  <Text size="5" weight="semibold">
                    shipping method
                  </Text>
                  <Text size="4">EMS (Korea Post Parcel Service)</Text>
                  <Text size="4" weight="semibold" color="point" className={styles.point}>
                    Max ₩214,583 per day and 20 lbs (9 kg).
                  </Text>
                </div>
              )}
            </>
          }
        />
        {isStatus1 ? (
          <>
            <FormArea type="vertical">
              <FormItem
                label="Country/Region"
                // error="에러메시지 필요한 경우 여기에 입력해 주세요."
                required
              >
                {/* 에러인 경우 invalid 속성 추가 */}
                <Select
                  options={[
                    { value: 'usa', label: 'U.S.A' },
                    { value: 'korea', label: 'Korea' },
                  ]}
                  size="large"
                  value={selected}
                  onChange={setSelected}
                  placeholder="Please select"
                  // invalid
                />
              </FormItem>
              <FormItem label="Full Name">
                <Input placeholder="Please enter" size="large" />
              </FormItem>
              <FormItem label="Address Line 1" required>
                <Input placeholder="Please enter" size="large" />
              </FormItem>
              <FormItem label="Address Line 2" required>
                <Input placeholder="Please enter" size="large" />
              </FormItem>
              <FormItem label="Zip/Postal Code" required>
                <Input placeholder="Please enter" size="large" />
              </FormItem>
              <FormItem label="Mobile Number" error="Please enter your shipping address." required>
                <Input placeholder="Please enter" size="large" />
              </FormItem>
            </FormArea>
          </>
        ) : (
          <>
            <FormItem
              label="배송지 입력"
              error="배송지를 입력해 주세요."
              className={styles.addrInput}
            >
              <Button
                size="large"
                suffixIcon="arrowRight"
                variant="tertiary"
                onClick={() => setIsDeliveryZoneOpen(true)}
                className={styles.addrButton}
              >
                배송지를 입력해 주세요.
              </Button>
            </FormItem>
            <DeliveryOptions
              selectedOption={selectedDeliveryOption}
              customOption={customDeliveryOption}
              onOptionChange={setSelectedDeliveryOption}
              onCustomChange={setCustomDeliveryOption}
            />
            <div className={styles.box}>
              <Heading size="5" className={styles.title}>
                공동현관 출입방법
              </Heading>
              <RadioGroup
                name="entry"
                defaultValue="code"
                options={[
                  {
                    label: '공동현관 비밀번호',
                    value: 'code',
                  },
                  {
                    label: '자유 출입 가능',
                    value: 'free',
                  },
                  {
                    label: '직접 입력',
                    value: 'input',
                  },
                ]}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {value !== 'free' && (
                <Input
                  size="large"
                  placeholder={value === 'code' ? '예) #1234' : '공동현관 출입방법을 입력해 주세요'}
                  className={styles.entryInput}
                />
              )}
            </div>
          </>
        )}
      </Section>

      {/* 추가혜택 */}
      <DeliveryZoneDialog
        isOpen={isDeliveryZoneOpen}
        onClose={() => setIsDeliveryZoneOpen(false)}
      />
    </>
  );
};
OrderAddressInfo.displayName = 'OrderAddressInfo';
