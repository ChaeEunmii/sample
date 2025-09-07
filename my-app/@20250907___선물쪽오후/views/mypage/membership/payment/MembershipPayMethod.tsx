'use client';

import { useState } from 'react';
import {
  Collapse,
  Heading,
  RadioGroup,
  Box,
  Stack,
  Input,
  Button,
  Switch,
  Text,
  FormArea,
  FormItem,
} from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { MembershipPaySwiper, MembershipPaymentMethod } from './MembershipPaySwiper';
import { paymentMethods } from '@widgets/payment/payment';
import clsx from 'clsx';
import styles from './MembershipPayMethod.module.scss';

// 공통 mock 카드목록 disabled 없게 필터링해서 사용
const filteredMethods = paymentMethods.map((method) => ({
  ...method,
  disabled: false, // 결제불가상태 없음으로 보이기위해 기본 카드 데이터 전체에 disabled: false 세팅
}));

export const MembershipPayMethod = ({
  isChange, //결제수단 변경의 경우
  flush,
  className,
}: {
  isChange?: boolean;
  flush?: boolean;
  className?: string;
}) => {
  // H.Point 포인트 우선 사용 상태 (switch)
  const [isPointUse, setIsPointUse] = useState(true);

  // 보유 포인트 (숫자 기준)
  const rawPoint = 10200;
  // 입력창에 표시할 문자열 값
  const [myPoint, setMyPoint] = useState(formatNumber(rawPoint));

  // 전액 사용 버튼 비활성화 상태: 현재 값이 보유 포인트와 같을 경우
  const isAllUsed = Number(myPoint.replace(/,/g, '')) === rawPoint;
  // 전액 사용 버튼 클릭 시
  const handleUseAllPoint = () => {
    setMyPoint(formatNumber(rawPoint));
  };

  // 사용자가 입력값 변경 시
  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNum = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 남김
    // 숫자가 없으면 빈 값 허용
    setMyPoint(onlyNum === '' ? '' : formatNumber(Number(onlyNum)));
  };

  // 2순위 카드 선택 라디오 버튼 값 상태 (기본값 'hpay')
  const [radioValue, setRadioValue] = useState('hpay');

  // 카드 목록 상태 (필터링된 카드 배열, 없으면 빈 배열)
  const [methods] = useState<MembershipPaymentMethod[]>(filteredMethods ?? []);

  // 1순위 카드 ID 상태 (첫번째 카드 ID or 빈 문자열)
  const [primaryCardId, setPrimaryCardId] = useState(filteredMethods[0]?.id ?? '');

  // 2순위 카드 ID 상태 (첫번째 카드 ID or 빈 문자열)
  const [secondaryCardId, setSecondaryCardId] = useState(filteredMethods[0]?.id ?? '');

  // 1순위 카드 선택 핸들러
  const handlePrimarySelect = (id: string) => {
    setPrimaryCardId(id);
    if (id === secondaryCardId) setSecondaryCardId(''); // 중복 해제

    console.log('1순위 선택 카드 ID:', id);
    console.log('현재 2순위 카드 ID:', secondaryCardId);
  };

  // 2순위 카드 선택 핸들러
  const handleSecondarySelect = (id: string) => {
    setSecondaryCardId(id);
    if (id === primaryCardId) setPrimaryCardId(''); // 중복 해제

    console.log('2순위 선택 카드 ID:', id);
    console.log('현재 1순위 카드 ID:', primaryCardId);
  };

  return (
    <>
      <div className={clsx(styles.usePoint, className)}>
        <Box>
          <Stack type="between">
            <Text as="label" htmlFor="hpointUse" size="5" weight="semibold">
              H.Point 포인트 우선 사용
            </Text>
            <Switch
              id="hpointUse"
              checked={isPointUse}
              onChange={(e) => setIsPointUse(e.target.checked)}
            />
          </Stack>
        </Box>
        {!isChange && (
          <FormArea type="vertical" className="ncp-mt-x0">
            <FormItem
              label="H.Point"
              suffix={
                <Text as="span" size="4" color="gray2">
                  {formatNumber(rawPoint) + 'P'}
                </Text>
              }
            >
              <Stack type="field">
                <Input
                  size="large"
                  value={myPoint}
                  onChange={handlePointChange}
                  suffix={
                    <Text as="span" size="5" weight="medium">
                      P
                    </Text>
                  }
                />
                <Button
                  variant="primary"
                  size="large"
                  disabled={isAllUsed}
                  onClick={handleUseAllPoint}
                >
                  전액 사용
                </Button>
              </Stack>
            </FormItem>
          </FormArea>
        )}
      </div>
      <Collapse variant="section" defaultOpen className={styles.container}>
        <Collapse.Control border>
          <Heading size="5" indent>
            1순위 결제수단
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          <Text size="5" weight="bold" className={styles.pay}>
            <img src="/images/logo_hpay.svg" alt="h pay" />
            H.point Pay
          </Text>
          <MembershipPaySwiper
            methods={methods.map((method) => {
              const isDisabled =
                method.id === secondaryCardId &&
                !(primaryCardId === secondaryCardId && method.id === primaryCardId); // 초기 같을땐 disabled 해제

              const showMessage = !(
                primaryCardId === secondaryCardId && method.id === primaryCardId
              );

              return {
                ...method,
                disabled: isDisabled,
                disabledMessage:
                  isDisabled && showMessage ? (
                    <>
                      2순위 결제수단이에요
                      <br />
                      다른 카드를 선택해 주세요
                    </>
                  ) : undefined,
              };
            })}
            selectedCardId={primaryCardId}
            onSelect={handlePrimarySelect}
            className={clsx(styles.cardSlider, flush && styles.flush, className)}
            showAddCard
          />
          <Text size="3" color="gray3" className={styles.info}>
            보유 포인트 우선 사용 후 부족한 금액은 1순위 결제수단으로 결제됩니다.
          </Text>
        </Collapse.Content>
      </Collapse>
      <Collapse variant="section" defaultOpen>
        <Collapse.Control border>
          <Heading size="5" indent>
            2순위 결제수단
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          <RadioGroup
            name="secondaryCardSelect"
            options={[
              { label: '선택', value: 'hpay' },
              { label: '선택 안 함', value: 'noSelect' },
            ]}
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          {radioValue !== 'noSelect' && (
            <MembershipPaySwiper
              methods={methods.map((method) => {
                const isDisabled = method.id === primaryCardId;

                return {
                  ...method,
                  disabled: isDisabled,
                  disabledMessage: isDisabled ? (
                    <>
                      1순위 결제수단이에요
                      <br />
                      다른 카드를 선택해 주세요
                    </>
                  ) : undefined,
                };
              })}
              selectedCardId={secondaryCardId}
              onSelect={handleSecondarySelect}
              className={clsx(styles.cardSlider, flush && styles.flush, className)}
              showAddCard
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
