'use client';

import { useState } from 'react';
import { ButtonArea, Button, TitleBar, Line, Text, Chip } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { MembershipPayMethod } from '@/views/mypage/membership/payment/MembershipPayMethod';
import { GiftRadioGroup } from '@views/mypage/membership/components/GiftRadioGroup';
import { giftOptions } from '@mocks/mypage';
import styles from './MembershipJoin.module.scss';

export default function MembershipJoin() {
  const [selectedGift, setSelectedGift] = useState<string>('');
  const [standardPaySelect, setStandardPaySelect] = useState<string>('option1');

  const handleStandardPaySelect = (value: string) => {
    setStandardPaySelect(value);
  };

  // H.Point 포인트 우선 사용 상태
  // const [isPointUse, setIsPointUse] = useState(false);
  // // 나의 포인트
  // const [myPoint, setMyPoint] = useState(102000);
  // const myPointConvert = formatNumber(myPoint);

  return (
    <Container title="HiHi 멤버십 가입하기" showBack>
      <Contents className={styles.layout}>
        <TitleBar type="docs" title="이용권을 선택해 주세요" />

        <Chip
          selected={standardPaySelect}
          onChange={handleStandardPaySelect}
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
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          멤버십 혜택 시작하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
