'use client';

import { useState } from 'react';
import {
  TitleBar,
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
import { CardSwiper } from '@widgets/payment/CardSwiper';
import { formatNumber } from '@/shared/utils/ui';
import styles from './MembershipPayMethod.module.scss';

interface MembershipPayMethodProps {
  /** 추가 클래스명 */
  className?: string;
}

export const MembershipPayMethod = ({ className }: MembershipPayMethodProps) => {
  // 라디오 상태
  const [value, setValue] = useState('1');

  // H.Point 포인트 우선 사용 상태
  const [isPointUse, setIsPointUse] = useState(true);
  // 나의 포인트
  const [myPoint, setMyPoint] = useState(102000);
  const myPointConvert = formatNumber(myPoint);

  return (
    <>
      <TitleBar type="docs" title="결제수단을 선택해 주세요" />
      <div className={styles.usePoint}>
        <Box>
          <Stack type="between">
            <Heading as="strong" size="3" weight="semibold">
              H.Point 포인트 우선 사용
            </Heading>
            <Switch
              variant="point"
              checked={isPointUse}
              onChange={(e) => setIsPointUse(e.target.checked)}
            />
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
          여기에 카드슬라이더~~~예
          <Text size="3" color="gray3">
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
                value: '1',
              },
              {
                label: '선택 안 함',
                value: '2',
              },
            ]}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          여기도 예~~~~
          <Text size="3" color="gray3">
            1순위 결제수단에 실패할 경우, 자동으로 2순위 수단으로 시도됩니다.
          </Text>
        </Collapse.Content>
      </Collapse>
      {/* <CardSwiper
        methods={methods}
        selectedCardId={selectedCardId}
        selectedIndex={selectedIndex >= 0 ? selectedIndex : 0}
        swiperRef={swiperRef}
        onSlideChange={(swiper, index) => handleSlideChange(swiper, index)}
        onCardClick={(index) => {
          const id = methods[index]?.id;
          if (id) onSelect(id);
          swiperRef.current?.slideTo(index);
          setCurrentIndex(index); // currentIndex 업데이트 추가
          onSlideIndexChange?.(index);
        }}
        showAddCard={showAddCard}
      /> */}
    </>
  );
};
