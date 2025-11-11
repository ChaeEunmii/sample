'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Steps, ButtonArea, Button } from '@shared/ui';
import { DeliverySteps } from './MobileCheckStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfoAddr,
  TitleWithInfoProd,
} from '@views/hbss/components';
import styles from './MobileCheckStep.module.scss';

export default function MobileCheckStep2() {
  const currentStep = 1;

  return (
    <Container title="현대백화점 명절선물 배송지 입력">
      <Contents className={styles.layout}>
        <Steps
          steps={DeliverySteps}
          activeStep={currentStep}
          title="현대백화점 명절선물 배송지 입력 진행단계"
        />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label="정보확인"
          title={
            <>
              고객님께서 입력한 정보를
              <br />
              확인해 주세요
            </>
          }
        />
        <TitleWithInfoStack gap="3">
          <TitleWithInfoProd
            title="상품 정보"
            data={{
              brand: '브랜드명',
              name: '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
              quantity: 2,
            }}
          />
          <TitleWithInfoAddr
            type="filled"
            data={{
              defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            }}
            showEdit
          />
        </TitleWithInfoStack>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">이전</Button>
        <Button variant="primary" size="large">
          입력 완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
