'use client';

import { useState } from 'react';
import { ButtonArea, Button, TitleBar, Line, Text, Chip } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { MembershipPayMethod } from '@/views/mypage/membership/payment/MembershipPayMethod';
import { GiftRadioGroup } from '@views/mypage/membership/components/GiftRadioGroup';
import { giftOptions } from '@mocks/mypage';
import { AgreementGroup } from '@widgets/form';
import styles from './MembershipJoin.module.scss';
import { HIHI_AGREEMENTS } from '@views/policy/agreements-data';

export default function MembershipJoin() {
  const [selectedGift, setSelectedGift] = useState<string>('');
  // 이용권 선택 상태
  const [selectedSubscription, setSelectedSubscription] = useState<string>('option1');
  // 이용권 선택 핸들러
  const handleSelectedSubscription = (value: string) => {
    setSelectedSubscription(value);
  };

  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  // 필수요소 체크되엇는지 검사 상태
  //const [validateMode, setValidateMode] = useState(true);
  const validateMode = true;

  // 약관 체크 상태가 바뀌면 해당 id의 상태를 업데이트
  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <Container title="HiHi 멤버십 가입하기" showBack>
      <Contents className={styles.layout}>
        <TitleBar type="docs" title="이용권을 선택해 주세요" />
        <Chip
          selected={selectedSubscription}
          onChange={handleSelectedSubscription}
          columns={1}
          size="large"
          data={[
            {
              label: (
                <dl className={styles.chipCont}>
                  <dt>플러스 정기권</dt>
                  <dd>10,000원</dd>
                </dl>
              ),
              value: 'option1',
            },
            {
              label: (
                <dl className={styles.chipCont}>
                  <dt>프라임 정기권</dt>
                  <dd>20,000원</dd>
                </dl>
              ),
              value: 'option2',
            },
          ]}
          name="subscription"
        />
        <Line variant="bold" margin="3" />
        <TitleBar
          type="docs"
          title="정기 배송 기프트를 선택해 주세요"
          description={
            <>
              <Text as="span" color="gray3" size="3">
                매월 받고 싶은 혜택 한 가지를 미리 고를 수 있어요.
              </Text>
            </>
          }
        />
        <GiftRadioGroup
          options={giftOptions}
          value={selectedGift}
          onChange={(val) => {
            console.log('선택된 기프트 값:', val);
            setSelectedGift(val);
          }}
        />
        <Line variant="bold" margin="3" />
        <TitleBar type="docs" title="결제수단을 선택해 주세요" />
        <MembershipPayMethod />
        {/* 약관동의 */}
        <AgreementGroup
          variant="type3"
          data={HIHI_AGREEMENTS}
          checked={agreeStates[HIHI_AGREEMENTS.id]}
          onChange={handleCheckChange}
          allStates={agreeStates}
          validateMode={validateMode}
          readOnlyMode
          className={styles.agreement}
        />
        <Text color="gray3" size="3">
          유료 멤버십 가입 시 혜택이 즉시 지급되며, 해지는 예약을 통해 가능합니다.
        </Text>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          멤버십 혜택 시작하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
