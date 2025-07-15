'use client';

import { useState, SetStateAction } from 'react';
import {
  Box,
  Heading,
  Stack,
  Input,
  Button,
  Switch,
  Line,
  Collapse,
  Text,
  RadioGroup,
} from '@shared/ui';
import { MembershipPaySwiper } from './MembershipPaySwiper';
import { formatNumber } from '@/shared/utils/ui';
import styles from './MembershipPayMethod.module.scss';

interface MembershipPayMethodProps {
  /** 추가 클래스명 */
  className?: string;
}

// PaymentMethod 타입 참고
const initialMethods = [
  {
    id: 'card1',
    label: '현대카드',
    cardNumber: '1234 56** **** 7890',
    brand: 'hyundai',
    disabled: false,
    options: {
      coupons: ['10% 할인', '5천원 할인'],
      noInterestCoupons: ['3개월 무이자'],
      installments: ['1개월', '3개월', '6개월'],
    },
  },
  {
    id: 'card2',
    label: '우리카드',
    cardNumber: '4321 98** **** 1234',
    brand: 'woori',
    disabled: false,
    options: {
      coupons: ['15% 할인'],
      installments: ['1개월', '12개월'],
    },
  },
];

export const MembershipPayMethod = ({ className }: MembershipPayMethodProps) => {
  // 결제수단 라디오 상태
  const [radioValue, setRadioValue] = useState('hpay');

  // H.Point 포인트 우선 사용 상태
  const [isPointUse, setIsPointUse] = useState(true);
  // 나의 포인트
  const [myPoint, setMyPoint] = useState(102000);
  const myPointConvert = formatNumber(myPoint);

  //스와이퍼 테스트
  const [methods, setMethods] = useState(initialMethods);
  const [selectedCardId, setSelectedCardId] = useState(methods[0].id);
  const [defaultCardId, setDefaultCardId] = useState(methods[0].id);

  // 카드별 옵션 상태: { 카드ID: { coupon, noInterestCoupon, installment } }
  const [cardSelections, setCardSelections] = useState({
    card1: { coupon: '', noInterestCoupon: '', installment: '' },
    card2: { coupon: '', noInterestCoupon: '', installment: '' },
  });

  // 카드 선택 변경 핸들러
  const handleSelect = (id: string) => {
    setSelectedCardId(id);
  };

  // 옵션 변경 핸들러
  const handleOptionChange = (id: string, selection: unknown) => {
    setCardSelections((prev) => ({ ...prev, [id]: selection }));
  };

  // 기본결제수단 변경 핸들러
  const handleDefaultChange = (id: SetStateAction<string>) => {
    setDefaultCardId(id);
  };

  // 카드가 없을 때 추가 클릭 핸들러 (예: 카드 추가 페이지 이동)
  const handleEmptyClick = () => {
    alert('카드 추가 페이지로 이동');
  };

  return (
    <>
      <div className={styles.usePoint}>
        <Box>
          <Stack type="between">
            <Heading as="strong" size="3" weight="semibold">
              H.Point 포인트 우선 사용
            </Heading>
            <Switch checked={isPointUse} onChange={(e) => setIsPointUse(e.target.checked)} />
          </Stack>
        </Box>
        <Stack type="field">
          <Input placeholder="텍스트를 입력하세요" size="large" value={myPointConvert} />
          <Button variant="primary" size="large" disabled>
            전액 사용
          </Button>
        </Stack>
      </div>
      <Line color="bg2" />
      <Collapse variant="section" defaultOpen>
        <Collapse.Control>
          <Heading size="5" weight="bold">
            1순위 결제수단
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          <Text size="5" weight="bold" className={styles.pay}>
            <img src="/images/logo_hpay.svg" alt="h pay" />
            H.point Pay
          </Text>
          <MembershipPaySwiper
            methods={methods}
            selectedCardId={selectedCardId}
            defaultCardId={defaultCardId}
            cardSelections={cardSelections}
            onSelect={handleSelect}
            onOptionChange={handleOptionChange}
            onDefaultChange={handleDefaultChange}
            onEmptyClick={handleEmptyClick}
            showAddCard={true}
            className={styles.cardSlider}
          />
          <Text size="3" color="gray3" className={styles.info}>
            보유 포인트 우선 사용 후 부족한 금액은 1순위 결제수단으로 결제됩니다.
          </Text>
        </Collapse.Content>
      </Collapse>
      <Line color="bg2" />
      <Collapse variant="section" defaultOpen>
        <Collapse.Control>
          <Heading size="5" weight="bold">
            2순위 결제수단
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          <RadioGroup
            name="example-controlled"
            options={[
              {
                label: (
                  <>
                    <Text size="5" weight="bold" className={styles.pay}>
                      <img src="/images/logo_hpay.svg" alt="h pay" /> H.point Pay
                    </Text>
                  </>
                ),
                value: 'hpay',
              },
              {
                label: '선택 안 함',
                value: 'noSelect',
              },
            ]}
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          {radioValue !== 'noSelect' && (
            <MembershipPaySwiper
              methods={methods}
              selectedCardId={selectedCardId}
              defaultCardId={defaultCardId}
              cardSelections={cardSelections}
              onSelect={handleSelect}
              onOptionChange={handleOptionChange}
              onDefaultChange={handleDefaultChange}
              onEmptyClick={handleEmptyClick}
              showAddCard={true}
              className={styles.cardSlider}
            />
          )}
          <Text size="3" color="gray3" className={styles.info}>
            1순위 결제수단에 실패할 경우, 자동으로 2순위 수단으로 시도됩니다.
          </Text>
        </Collapse.Content>
      </Collapse>
    </>
  );
};
