'use client';

import { useState } from 'react';
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
import { DeliveryStep, MethodOptions, DoorOptions, UrlOptions, WeekOptions } from './DeliveryStep';
import {
  HbssStepTitle,
  HbssOrderItem,
  DateSelectField,
  TitleWithInfoStack,
  TitleWithInfoAddr,
} from '@views/hbss/components';
import styles from './DeliveryStep.module.scss';
import { mockHbssGiftOrder } from '@mocks/hbss';

export default function DeliveryStep2() {
  const currentStep = 1;

  // 받은선물정보 + 주문 데이터
  const giftOrderData = { ...mockHbssGiftOrder, orderDate: undefined, orderNumber: undefined };

  // 상태 관리
  const [methodValue, setMethodValue] = useState('dawn'); // 배송방법 상태
  const [requestValue, setRequestValue] = useState(''); // 주간배송 요청사항 상태
  const [accessValue, setAccessValue] = useState('door-pw'); // 공동현관 출입방법 상태
  const [urlValue, setUrlValue] = useState('url-yes'); // URL 동의 상태

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
              현대백화점 명절 선물
              <br />
              배송지 입력
            </>
          }
        />
        {/* 받은 선물 + 주문 아이템 */}
        <HbssOrderItem data={giftOrderData} />
        {/* 배송지 영역  */}
        <TitleWithInfoStack gap="3">
          <TitleWithInfoAddr
            type="free"
            data={{
              name: '김현대',
            }}
            className="ncp-mt-l"
          />
          <TitleWithInfoAddr
            type="filled"
            data={{
              name: '김현대',
              defaultAddress: '서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            }}
            showEdit
          />
        </TitleWithInfoStack>
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
              defaultValue={methodValue}
              value={methodValue}
              onChange={(e) => setMethodValue(e.target.value)}
              options={MethodOptions}
              className={styles.rdo}
            />
            {/* 주간배송 선택시 */}
            {methodValue === 'week' && (
              <>
                <Select
                  onChange={setRequestValue}
                  options={WeekOptions}
                  placeholder="배송요청사항을 선택해 주세요."
                  value={requestValue}
                  size="large"
                  className="ncp-mt-s"
                />
                {/* 직접입력 일 때 항상 노출 */}
                {requestValue === 'direct' && (
                  <Input
                    size="large"
                    placeholder="요청사항을 입력해 주세요."
                    className="ncp-mt-xs"
                  />
                )}
              </>
            )}
          </FormItem>
          <FormItem
            label="공동현관 출입방법"
            desc={
              accessValue === 'door-pw' &&
              '입력하신 방법으로 출입이 불가할 경우, 부득이하게 1층 공동현관 앞에 배송될 수 있습니다.'
            }
          >
            <RadioGroup
              name="door-option"
              defaultValue={accessValue}
              value={accessValue}
              onChange={(e) => setAccessValue(e.target.value)}
              options={DoorOptions}
              className={styles.rdo}
            />
            {/* 공동현관 비밀번호 선택시 */}
            {accessValue === 'door-pw' && (
              <Input size="large" placeholder="예) #1234" className="ncp-mt-s" />
            )}
            {/* 직접입력 선택시 */}
            {accessValue === 'direct' && (
              <Input size="large" placeholder="요청사항을 입력해 주세요." className="ncp-mt-s" />
            )}
          </FormItem>
          <FormItem label="NCP 간편가입 URL을 보내드릴까요?">
            <RadioGroup
              name="url-option"
              defaultValue={urlValue}
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
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
