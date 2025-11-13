'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Steps,
  ButtonArea,
  Button,
  FormArea,
  FormItem,
  RadioGroup,
  Select,
  Input,
  TextList,
  Text,
  Checkbox,
  IconButton,
} from '@shared/ui';
import { DeliveryStep } from './MobileCheckStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoProd,
  TitleWithInfoAddr,
  InformationBox,
  DateSelectField,
  AgreeDrawer,
} from '@views/hbss/components';
import styles from './MobileCheckStep.module.scss';

export default function MobileCheckStep2() {
  const [isAgreeDrawer, setIsAgreeDrawer] = useState(false); //약관동의 (D)

  const currentStep = 1;

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
              선물 상품을 받으실
              <br />
              배송지를 입력해 주세요
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
            nameLine={2}
          />
          <TitleWithInfoAddr type="free" onClick={() => console.log('배송지 입력')} />
          <TitleWithInfoAddr
            type="filled"
            data={{
              defaultAddress: '서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            }}
            showEdit
            onClick={() => console.log('배송지 수정')}
          />
        </TitleWithInfoStack>
        {/* 입력 폼 */}
        <FormArea type="vertical" gap="3" className="ncp-mt-l">
          <FormItem label="배송 유형">
            <RadioGroup
              name="method-option"
              defaultValue=""
              options={[
                {
                  value: 'method-1',
                  label: (
                    <>
                      새벽 배송<Text color="point">(12월 25일(목))</Text>
                    </>
                  ),
                },
                { value: 'method-2', label: '주간 배송' },
              ]}
              vertical
              className={styles.rdo}
            />
          </FormItem>
          <FormItem label="배송 예정일">
            <DateSelectField type="expectDate" />
            <TextList
              data={[
                '배송일자 변경은 기존 예정일 이후로만 변경 가능합니다.',
                '명절기간 많은 배송 물량으로 인하여 예정일보다 늦게 배송될 수 있다는 점 양해 부탁드립니다.',
              ]}
              variant="info"
              margin="2"
            />
          </FormItem>
          <FormItem label="배송 요청 사항">
            <Select
              onChange={() => {}}
              options={[
                { value: 'door-1', label: '배송 요청 사항 1' },
                { value: 'door-2', label: '배송 요청 사항 2' },
              ]}
              placeholder="위탁 장소를 선택해 주세요."
              value=""
              size="large"
            />
          </FormItem>
          <FormItem label="공동현관 비밀번호">
            <Input size="large" placeholder="정확한 공동현관 비밀번호를 입력해 주세요." />
          </FormItem>
        </FormArea>
        {/* 안내드립니다 */}
        <InformationBox
          content={[
            '새벽 배송으로 받기를 선택하셨다면, 정확한 공동현관 비밀번호를 입력해 주세요.',
            '입력하신 방법으로 출입이 불가할 경우, 부득이하게 1층 공동현관 앞에 배송될 수 있습니다.',
          ]}
          margin="1"
        />
        {/* TIS 명함 이미지 노출영역 */}
        <div className={styles.imgZone} style={{ backgroundColor: `#F7F7F7` }}>
          TIS - 배송접수, 파일접수 화면을 통해 등록된
          <br />
          명함 이미지 노출(없을 시 숨김)
        </div>
        {/* 이용동의 */}
        <TitleWithInfoStack gap="3">
          <TitleWithInfo
            type="free"
            title="이용약관 동의"
            content={
              <div className={styles.agreeCheck}>
                <Checkbox label="마케팅 활용을 위한 개인정보 수집 · 이용 동의 (선택)" />
                <IconButton
                  name="arrowRight"
                  size="medium"
                  color="gray3"
                  aria-label="약관 자세히 보기"
                  onClick={() => setIsAgreeDrawer(true)}
                  className={styles.agreeDetail}
                />
              </div>
            }
          />
        </TitleWithInfoStack>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          다음
        </Button>
      </ButtonArea>
      {/* 마케팅 활용을 위한 개인정보 수집·이용 동의 (D)*/}
      <AgreeDrawer isOpen={isAgreeDrawer} onClose={() => setIsAgreeDrawer(false)} />
    </Container>
  );
}
