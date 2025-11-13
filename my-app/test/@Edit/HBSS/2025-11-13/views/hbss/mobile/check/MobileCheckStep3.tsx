'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Steps, ButtonArea, Button, Checkbox, Text, Flag, Stack } from '@shared/ui';
import { DeliveryStep } from './MobileCheckStep';
import {
  HbssStepTitle,
  TitleWithInfoStack,
  TitleWithInfoAddr,
  TitleWithInfoProd,
  TitleWithInfo,
} from '@views/hbss/components';
import styles from './MobileCheckStep.module.scss';

export default function MobileCheckStep3() {
  const currentStep = 2;

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
            nameLine={2}
          />
          <TitleWithInfoAddr
            type="filled"
            data={{
              defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
              detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            }}
            showEdit
          />
          <TitleWithInfo title="배송 요청 사항" content="부재 시 현관문 앞에 놓아주세요." />
          <TitleWithInfo
            title="배송 예정일"
            content={
              <Stack>
                <Flag data={{ label: '주간배송', color: 'dark2' }} />
                2025년 12월 25일 목요일
              </Stack>
            }
          />
          <TitleWithInfo
            title="배송지 일괄지정 서비스 안내 (선택)"
            content={
              <Text size="4" color="gray2" reading>
                고객님을 대상으로 이번 명절 기간 중 현대백화점에서 추가로 명절 선물이 의뢰될 경우,
                <em className={styles.accentTxt}>
                  주소 및 배송 일정 확인 없이 위 주소로 배송 받으시겠어요?
                </em>{' '}
                동의 하신다면, 주소확인 없이{' '}
                <em className={styles.accentTxt}>가장 빠른 날짜에 자동 배송</em>
                되며, 동의하지 않으신다면 카카오톡이나 유선전화를 통해 주소확인 연락을 드립니다.
              </Text>
            }
            bottomSlot={
              <>
                <Checkbox label="동의합니다." />
              </>
            }
          />
        </TitleWithInfoStack>
        <Text size="5" color="gray2" reading indent className="ncp-mt-xl">
          이상이 없다면, 아래 입력 완료 버튼을 눌러주세요.
        </Text>
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
