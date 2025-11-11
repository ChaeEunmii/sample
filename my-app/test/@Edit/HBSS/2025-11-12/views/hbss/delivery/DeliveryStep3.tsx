'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Steps, ButtonArea, Button, RadioGroup, Radio } from '@shared/ui';
import { DeliverySteps, UrlOptions } from './DeliveryStep';
import {
  HbssStepTitle,
  HbssOrderItem,
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoAddr,
} from '@views/hbss/components';
import styles from './DeliveryStep.module.scss';
import { mockHbssGiftOrder } from '@mocks/hbss';

export default function DeliveryStep3() {
  const currentStep = 2;

  // 받은선물정보 + 주문 데이터
  const giftOrderData = { ...mockHbssGiftOrder, orderDate: undefined, orderNumber: undefined };

  return (
    <Container showBack title="">
      <Contents className={styles.layout}>
        <Steps steps={DeliverySteps} activeStep={currentStep} title="배송지 입력 진행단계" />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label="정보확인"
          title={
            <>
              현대백화점 명절 선물
              <br />
              배송지 입력
            </>
          }
          description="안전한 배송을 위해, 고객님의 정보를 입력해 주세요."
        />
        {/* 받은 선물 + 주문 아이템 */}
        <HbssOrderItem data={giftOrderData} />
        {/* 내용 항목 */}
        <TitleWithInfoStack gap="3" margin="3">
          <TitleWithInfoAddr
            type="filled"
            data={{
              name: '김현대',
              defaultAddress: '서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
              note: '부재 시 경비실에 맡겨 주세요.',
            }}
          />
          <TitleWithInfo
            title="배송 예정일"
            content="2025년 10월 31일"
            infoText="명절기간 많은 배송물량으로 인해 예정일보다 늦게 배송될 수 있는 점 양해 부탁드립니다."
          />
          <TitleWithInfo title="배송 방법" content="새벽 배송" />
          <TitleWithInfo
            title="공동현관 출입방법"
            contTopSlot={
              <>
                <Radio
                  label="공동현관 비밀번호"
                  name="door"
                  value="option1"
                  disabled
                  checked
                  className="ncp-mt-xs"
                />
              </>
            }
            content={'#123553*'}
            infoText="입력하신 방법으로 출입이 불가할 경우, 부득이하게 1층 공동현관 앞에 배송될 수 있습니다."
          />
          <TitleWithInfo
            type="free"
            title="NCP 간편가입 URL을 보내드릴까요?"
            content={
              <>
                <RadioGroup
                  name="url-option"
                  defaultValue="url-1"
                  disabled
                  options={UrlOptions}
                  className={styles.rdo}
                />
              </>
            }
            infoText="‘네’ 로 체크해 주신 경우, 고객님께 발송 되는 선물에 대한 해피콜도 1번만 연락 드리고 있습니다. 참고하여 주세요."
          />
        </TitleWithInfoStack>
        <ButtonArea>
          <Button size="large">수정</Button>
          <Button variant="primary" size="large">
            확인
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
