'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Steps, ButtonArea, Button } from '@shared/ui';
import { DeliverySteps } from './DeliveryStep';
import { HbssStepTitle } from '@views/hbss/components';
import styles from './DeliveryStep.module.scss';

export default function DeliveryStep4() {
  const currentStep = 3;

  return (
    <Container showBack title="">
      <Contents className={styles.layout}>
        <Steps steps={DeliverySteps} activeStep={currentStep} title="배송지 입력 진행단계" />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label="완료"
          title={
            <>
              고객님의 소중한 선물
              <br />
              안전하게 배송하겠습니다
            </>
          }
          description="행복한 명절 되세요."
        />
        <ButtonArea>
          <Button variant="primary" size="large">
            확인
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
