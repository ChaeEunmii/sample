'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Steps, FormArea, FormItem, Input, Text, Checkbox } from '@shared/ui';
import { DeliveryStep } from './MobileRemoteStep';
import { HbssStepTitle, TitleWithInfoAddr } from '@views/hbss/components';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteStep1() {
  const currentStep = 0;

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
              입력해 주세요
            </>
          }
        />
        {/* 입력 폼 */}
        <FormArea type="vertical" gap="3" className="ncp-mt-l">
          <FormItem label="보내시는 분" required>
            <Input size="large" placeholder="보내시는 분의 이름을 입력해주세요." />
          </FormItem>
          <FormItem label="보내시는 분의 회사명">
            <Input size="large" placeholder="보내시는 분의 회사명을 입력해주세요." />
          </FormItem>
          <FormItem
            label="보내시는 분의 휴대폰 번호"
            required
            desc="보내시는 분의 이름, 휴대폰 번호는 필수 입력 사항입니다."
          >
            <Input type="number" size="large" placeholder="숫자만 입력해주세요." />
            <FormItem.Slot>
              <Checkbox
                label={
                  <Text size="4" color="gray2">
                    대리인 접수
                  </Text>
                }
                className="ncp-mt-xs"
              />
              <Text size="3" color="gray3" indent>
                기업(법인) 고객과 같이 대리인이 접수하는 경우 체크해주세요.
              </Text>
            </FormItem.Slot>
          </FormItem>
          <FormItem label="배송지" error="배송지를 입력해주세요">
            <TitleWithInfoAddr type="free" hideTitle />
          </FormItem>
          <FormItem label="배송지">
            <TitleWithInfoAddr
              type="filled"
              data={{
                defaultAddress: '서울특별시 강남구 테헤란로 32-1',
                detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
              }}
              showEdit
              hideTitle
            />
          </FormItem>
          <FormItem label="구매한 점포">
            <Input size="large" value="본점" disabled />
          </FormItem>
        </FormArea>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          입력 완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
