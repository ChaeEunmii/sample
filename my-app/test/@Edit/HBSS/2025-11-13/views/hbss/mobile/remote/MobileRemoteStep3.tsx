'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  Steps,
  FormArea,
  FormItem,
  Input,
  Checkbox,
  Text,
  TitleBar,
  TextList,
  Select,
  Line,
  IconButton,
} from '@shared/ui';
import { DeliveryStep } from './MobileRemoteStep';
import { HbssStepTitle, TitleWithInfoAddr } from '@views/hbss/components';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteStep3() {
  const currentStep = 2;

  // 받으시는 분 (갯수로만 샘플)
  const [receiverCount, setReceiverCount] = useState(2);

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
              입력해 주세요
            </>
          }
        />
        {/* 받으시는 분 블럭 반복 */}
        {Array.from({ length: receiverCount }).map((_, index) => {
          const isFirst = index === 0; // 첫번째 분
          return (
            <div key={index} className={styles.receiver}>
              {/* 두 번째부터 구분라인 */}
              {index > 0 && <Line variant="bold" margin="5" />}
              {/* 타이틀 */}
              <TitleBar
                type="docs"
                title={`받으시는 분 ${index + 1}`}
                side={!isFirst && <IconButton name="close">삭제</IconButton>}
                className="ncp-mt-x0"
              />
              {!isFirst && (
                <Checkbox
                  label={
                    <Text size="4" color="gray2">
                      위 배송지와 동일하게 설정
                    </Text>
                  }
                />
              )}
              <FormArea type="vertical" gap="1">
                <FormItem label="이름" required>
                  <Input size="large" placeholder="보내시는 분의 이름을 입력해주세요." />
                  <FormItem.Slot>
                    <Checkbox
                      label={
                        <Text size="4" color="gray2">
                          받으시는 분과 해피콜 진행
                        </Text>
                      }
                      className="ncp-mt-xxs"
                    />
                    <TextList
                      data={[
                        '해피콜을 통해 주소와 배송일을 확인합니다.',
                        '체크 해제 시 해피콜 없이 입력하신 주소로 상품이 발송됩니다.',
                      ]}
                      variant="info"
                      margin="3"
                    />
                  </FormItem.Slot>
                </FormItem>
                <FormItem
                  label="받으시는 분의 휴대폰 번호"
                  required
                  desc="받으시는 분의 이름, 휴대폰 번호는 필수 입력 사항입니다."
                >
                  <Input type="number" size="large" placeholder="숫자만 입력해주세요." />
                </FormItem>
                <FormItem
                  label="배송지"
                  desc="주소를 입력하지 않아도 해피콜을 통해 확인이 가능합니다."
                >
                  {isFirst ? (
                    // 첫 번째는 free 상태 예시
                    <TitleWithInfoAddr
                      type="free"
                      hideTitle
                      onClick={() => console.log('배송지 입력')}
                    />
                  ) : (
                    // 두 번째부터는 filled 예시 (원래 쓰던 값 그대로)
                    <TitleWithInfoAddr
                      type="filled"
                      data={{
                        defaultAddress: '서울특별시 강남구 테헤란로 32-1',
                        detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
                      }}
                      showDelete
                      hideTitle
                    />
                  )}
                </FormItem>
                <FormItem
                  label="상품선택"
                  desc="배송지 당 한 개의 상품만 선택이 가능합니다."
                  required
                >
                  <Select
                    onChange={() => {}}
                    options={[
                      { label: '상품 선택1', value: 'option1' },
                      { label: '상품 선택2', value: 'option2' },
                    ]}
                    placeholder="상품을 선택해 주세요."
                    value=""
                    size="large"
                  />
                </FormItem>
                <FormItem label="수량">
                  <Select
                    onChange={() => {}}
                    options={[
                      { label: '1', value: 'quantity-1' },
                      { label: '2', value: 'quantity-2' },
                    ]}
                    placeholder="상품을 선택해 주세요."
                    value="quantity-1"
                    size="large"
                  />
                </FormItem>
              </FormArea>
            </div>
          );
        })}
        {/* 추가하기 버튼 영역 */}
        <ButtonArea align="center" margin="1">
          <Button round onClick={() => setReceiverCount((prev) => prev + 1)}>
            받는 분 추가하기
          </Button>
        </ButtonArea>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          입력완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
