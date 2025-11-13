'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Steps, Line, TitleBar } from '@shared/ui';
import { DeliveryStep } from './MobileRemoteStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoAddr,
  TitleWithInfoProd,
} from '@views/hbss/components';
import styles from './MobileRemote.module.scss';
import { mockReceivers } from '@mocks/hbss';

export default function MobileRemoteStep4() {
  const currentStep = 3;

  // 샘플 데이터
  const receivers = mockReceivers;

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
              받으시는 분 정보를
              <br />
              확인해 주세요
            </>
          }
        />
        {receivers.map((item, index) => (
          <div key={item.id} className={styles.receiver}>
            {/* 구분선 2번째 항목부터 */}
            {index !== 0 && <Line variant="bold" margin="5" />}
            <TitleBar type="docs" title={`받으시는 분 ${index + 1}`} className="ncp-mt-x0" />
            <TitleWithInfoStack gap="2" margin="0">
              <TitleWithInfo content={item.name} />
              <TitleWithInfo title="받으시는 분의 휴대폰 번호" content={item.phone} />
              <TitleWithInfoAddr type="filled" data={item.address} />
              <TitleWithInfoProd data={{ name: item.productName }} />
              <TitleWithInfo title="수량" content={item.quantity} />
              <TitleWithInfo title="해피콜" content={item.happycall} />
            </TitleWithInfoStack>
          </div>
        ))}
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
