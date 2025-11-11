'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  Text,
  Steps,
  ButtonArea,
  Button,
  FormArea,
  FormItem,
  Input,
  Heading,
  Box,
  RadioGroup,
  Select,
} from '@shared/ui';
import { DeliverySteps, MethodOptions, DoorOptions, UrlOptions, WeekOptions } from './DeliveryStep';
import {
  HbssStepTitle,
  HbssOrderItem,
  DateSelectField,
  TitleWithInfoAddr,
} from '@views/hbss/components';
import styles from './DeliveryStep.module.scss';
import { mockHbssGiftOrder } from '@mocks/hbss';

export default function DeliveryStep2() {
  const currentStep = 1;

  // 받은선물정보 + 주문 데이터
  const giftOrderData = { ...mockHbssGiftOrder, orderDate: undefined, orderNumber: undefined };

  return (
    <Container showBack title="">
      <Contents className={styles.layout}>
        <Steps steps={DeliverySteps} activeStep={currentStep} title="배송지 입력 진행단계" />
        {/* 스텝 타이틀 */}
        <HbssStepTitle
          step={currentStep + 1}
          label="정보입력"
          title={
            <>
              현대백화점 명절 선물
              <br />
              배송지 입력
            </>
          }
        />
        {/* 받은 선물 + 주문 아이템 */}
        <HbssOrderItem data={giftOrderData} />
        {/* 배송지 영역 */}
        <TitleWithInfoAddr
          type="free"
          data={{
            name: '김현대',
          }}
          className="ncp-mt-l"
        />
        {/* 입력 폼 */}
        <FormArea type="vertical" gap="3" className="ncp-mt-l">
          <FormItem
            label="배송 희망일"
            desc="명절기간 많은 배송물량으로 인해 예정일보다 늦게 배송될 수 있는 점 양해 부탁드립니다."
          >
            <DateSelectField type="hopeDate" />
          </FormItem>
          <FormItem label="배송 방법">
            <RadioGroup
              name="method-option"
              defaultValue="method-1"
              options={MethodOptions}
              className={styles.rdo}
            />
            {/* 주간배송 선택시 */}
            <Select
              onChange={() => {}}
              options={WeekOptions}
              placeholder="배송요청사항을 선택해 주세요."
              value=""
              size="large"
              className="ncp-mt-s"
            />
            <Input size="large" placeholder="요청사항을 입력해 주세요." className="ncp-mt-xs" />
          </FormItem>
          <FormItem label="공동현관 출입방법">
            <RadioGroup
              name="door-option"
              defaultValue="door-1"
              options={DoorOptions}
              className={styles.rdo}
            />
            {/* 공동현관 비밀번호 선택시 */}
            <Input size="large" placeholder="예) #1234" className="ncp-mt-s" />
            {/* 직접입력 선택시 */}
            <Input size="large" placeholder="요청사항을 입력해 주세요." className="ncp-mt-s" />
          </FormItem>
          <FormItem label="NCP 간편가입 URL을 보내드릴까요?">
            <RadioGroup
              name="url-option"
              defaultValue="url-1"
              options={UrlOptions}
              className={styles.rdo}
            />
          </FormItem>
        </FormArea>
        <Box size="3" className="ncp-mt-l">
          <Heading color="black" weight="semibold">
            개인정보 활용 동의 확인
          </Heading>
          <Text size="4" color="gray2" reading>
            입력하신 정보는 배송 목적으로만 사용하며, 배송완료 후 2개월 이내 삭제됩니다.{' '}
          </Text>
        </Box>
        <ButtonArea>
          <Button variant="primary" size="large">
            저장
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
