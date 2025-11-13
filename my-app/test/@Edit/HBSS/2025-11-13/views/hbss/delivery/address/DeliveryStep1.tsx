'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Steps, ButtonArea, Button, FormArea, FormItem, Input } from '@shared/ui';
import { DeliveryStep } from './DeliveryStep';
import { HbssStepTitle, HbssOrderItem } from '@views/hbss/components';
import styles from './DeliveryStep.module.scss';
import { mockHbssGiftOrder } from '@mocks/hbss';

export default function DeliveryStep1() {
  const currentStep = 0;

  // 받은선물정보 + 주문 데이터
  const giftOrderData = { ...mockHbssGiftOrder, orderDate: undefined, orderNumber: undefined };

  return (
    <Container showBack title="">
      <Contents className={styles.layout}>
        <Steps steps={DeliveryStep.steps} activeStep={currentStep} title={DeliveryStep.title} />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label={DeliveryStep.steps[currentStep]}
          title={
            <>
              고객님의 소중한
              <br />
              선물이 도착했어요!
            </>
          }
          description="안전한 배송을 위해, 고객님의 정보를 입력해 주세요."
        />
        {/* 받은 선물 + 주문 아이템 */}
        <HbssOrderItem data={giftOrderData} titleLined />
        <FormArea type="vertical" className="ncp-mt-xl">
          <FormItem
            label="본인 확인을 위해 고객님의 이름을 입력해 주세요."
            // error="실명을 정확히 입력해 주세요."
          >
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input size="large" placeholder="이름 입력" />
          </FormItem>
        </FormArea>
        <ButtonArea>
          <Button variant="primary" size="large">
            본인 인증
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
