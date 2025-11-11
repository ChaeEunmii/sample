'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  Steps,
  FormArea,
  FormItem,
  Input,
  TextButton,
  Select,
} from '@shared/ui';
import { DeliverySteps } from './SpecialStep';
import { HbssStepTitle, DateSelectField, TitleWithInfoAddr } from '@views/hbss/components';
import styles from './SpecialStep.module.scss';

export default function SpecialStep1() {
  const currentStep = 0;

  return (
    <Container title="DB손해보험 VIP 감사선물 접수">
      <Contents className={styles.layout}>
        <Steps steps={DeliverySteps} activeStep={currentStep} title="특별판매행사접수 진행단계" />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label="정보입력"
          title={
            <>
              받으시는 분의 정보를
              <br />
              입력해 주세요
            </>
          }
        />
        {/* 입력 폼 */}
        <FormArea type="vertical" gap="3" className="ncp-mt-l">
          <FormItem label="받으시는 분" required>
            <Input size="large" placeholder="받으시는 분의 이름을 입력해 주세요." />
          </FormItem>
          <FormItem
            label="받으시는 분 휴대폰 번호"
            required
            desc="받으시는 분의 이름, 휴대폰 번호는 필수 입력 사항입니다."
          >
            <Input type="number" size="large" placeholder="숫자만 입력해 주세요." />
          </FormItem>
          <FormItem label="배송지" required error="배송지를 입력해주세요">
            <TitleWithInfoAddr type="free" hideTitle />
          </FormItem>
          <FormItem label="배송지" required>
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
          <FormItem
            label="상품 선택"
            side={
              <TextButton size="1" variant="underline" color="gray3">
                자세히 보기
              </TextButton>
            }
          >
            <Select
              onChange={() => {}}
              options={[
                {
                  label: '상품 선택1',
                  value: 'option1',
                },
                {
                  label: '상품 선택2',
                  value: 'option2',
                },
              ]}
              placeholder="상품을 선택해 주세요."
              value=""
              size="large"
            />
          </FormItem>
          <FormItem label="택배 발송일" desc="8/28 ~ 9/15 행사 기간 내 발송일을 선택해 주세요.">
            <DateSelectField type="shipDate" />
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
