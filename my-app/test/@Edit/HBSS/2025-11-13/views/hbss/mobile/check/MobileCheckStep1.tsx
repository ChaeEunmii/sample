'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Steps, Input } from '@shared/ui';
import { DeliveryStep } from './MobileCheckStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoProd,
} from '@views/hbss/components';
import styles from './MobileCheckStep.module.scss';

export default function MobileCheckStep1() {
  const currentStep = 0;

  return (
    <Container title="현대백화점 명절선물 배송지 입력">
      <Contents className={styles.layout}>
        <Steps steps={DeliveryStep.steps} activeStep={currentStep} title={DeliveryStep.title} />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label={DeliveryStep.steps[currentStep]}
          title={
            <>
              고객님의 소중한 선물이
              <br />
              도착했어요!
            </>
          }
          description="안전한 배송을 위해, 고객님의 정보를 입력해 주세요."
        />
        <TitleWithInfoStack gap="3">
          <TitleWithInfo title="보내시는 분" content="정현대[현대백화점]" />
          <TitleWithInfoProd
            data={{
              brand: '브랜드명',
              name: '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
              quantity: 2,
            }}
            nameLine={2}
          />
          <TitleWithInfo
            type="free"
            title="본인 확인을 위해 고객님의 이름을 입력해 주세요."
            content={
              <>
                <Input title="이름" placeholder="이름 입력" size="large" />
              </>
            }
          />
        </TitleWithInfoStack>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          본인 인증
        </Button>
      </ButtonArea>
    </Container>
  );
}
