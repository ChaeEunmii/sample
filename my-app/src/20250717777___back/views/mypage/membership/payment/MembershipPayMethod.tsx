'use client';

import { useState } from 'react';
import { Collapse, Heading, Line, RadioGroup } from '@shared/ui';
import { MembershipPaySwiper, MembershipPaymentMethod } from './MembershipPaySwiper';
import styles from './MembershipPayMethod.module.scss';
import { paymentMethods } from '@widgets/payment/payment';
// 공통 mock 카드목록 disabled 없게 필터링해서 사용
const filteredMethods = paymentMethods.map((method) => ({
  ...method,
  disabled: false, // 결제불가상태 없음으로 보이기위해 기본 카드 데이터 전체에 disabled: false 세팅
}));

export const MembershipPayMethod = ({ className }: { className?: string }) => {
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
    <div className={className}>
      <Collapse variant="section" defaultOpen className={styles.container}>
        <Collapse.Control>
          <Heading size="5" weight="bold">
            1순위 결제수단
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
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
            className={styles.cardSlider}
            showAddCard
          />
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
              className={styles.cardSlider}
              showAddCard
            />
          )}
        </Collapse.Content>
      </Collapse>
    </div>
  );
};
