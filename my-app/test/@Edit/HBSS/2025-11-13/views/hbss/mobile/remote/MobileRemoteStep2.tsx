'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Steps, Line, Input, Checkbox, Text } from '@shared/ui';
import { DeliveryStep } from './MobileRemoteStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoAddr,
} from '@views/hbss/components';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteStep2() {
  const currentStep = 1;

  return (
    <Container title="현대백화점 명절 배송 접수">
      <Contents className={styles.layout}>
        <Steps steps={DeliveryStep.steps} activeStep={currentStep} title={DeliveryStep.title} />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label={DeliveryStep.steps[currentStep]}
          title={
            <>
              보내시는 분 정보를
              <br />
              확인해 주세요
            </>
          }
        />
        <TitleWithInfoStack gap="3">
          <TitleWithInfo title="보내시는 분" content="김현대" />
          <TitleWithInfo title="보내시는 분의 회사명" content="현대백화점" />
          <TitleWithInfo
            title="보내시는 분의 휴대폰 번호"
            content="01012345678"
            bottomSlot={
              <Checkbox
                checked
                label={
                  <Text size="4" color="gray2">
                    대리인 접수
                  </Text>
                }
              />
            }
          />
        </TitleWithInfoStack>
        <Line variant="bold" margin="5" />
        <TitleWithInfoStack gap="3">
          <TitleWithInfoAddr
            type="filled"
            data={{
              defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            }}
            showDelete
          />
          <TitleWithInfo
            type="free"
            title="구매한 점포"
            content={<Input size="large" value="본점" disabled />}
          />
        </TitleWithInfoStack>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">수정하기</Button>
        <Button variant="primary" size="large">
          다음단계
        </Button>
      </ButtonArea>
    </Container>
  );
}
