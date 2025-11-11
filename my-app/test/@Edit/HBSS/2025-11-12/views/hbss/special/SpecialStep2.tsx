'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Steps, ButtonArea, Button } from '@shared/ui';
import { DeliverySteps } from './SpecialStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoProd,
  TitleWithInfoAddr,
} from '@views/hbss/components';
import styles from './SpecialStep.module.scss';

export default function SpecialStep2() {
  const currentStep = 1;

  return (
    <Container title="DB손해보험 VIP 감사선물 접수">
      <Contents className={styles.layout}>
        <Steps steps={DeliverySteps} activeStep={currentStep} title="특별판매행사접수 진행단계" />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label="정보확인"
          title={
            <>
              받으시는 분의 정보를
              <br />
              확인해 주세요
            </>
          }
        />
        {/* 내용 항목 */}
        <TitleWithInfoStack gap="3" margin="3">
          <TitleWithInfoAddr
            type="filled"
            data={{
              defaultAddress: '서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            }}
          />
          <TitleWithInfoProd
            data={{
              name: '더 건강한 브런치 슬라이스 닭가슴살 [0000]',
            }}
          />
          <TitleWithInfo title="택배 발송일" content="2025년 12월 25일" />
        </TitleWithInfoStack>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">수정하기</Button>
        <Button variant="primary" size="large">
          접수 완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
