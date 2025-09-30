'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Box,
  Text,
  TitleArea,
  InfoList,
  InfoItem,
  TitleBar,
  TextButton,
  Icon,
  Stack,
  ButtonArea,
  Button,
} from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import styles from './PaymentStatus.module.scss';

export default function PaymentStatus() {
  const { showAlert } = useAlert();
  // 화면상태
  const searchParams = useSearchParams();
  const isCase2 = searchParams.has('case2');
  const isCase3 = searchParams.has('case3');

  // 상태별 화면뷰
  const isCancelScheduled = isCase2; //case2 : 해지 예약중_이용기간 남음
  const isUnavailable = isCase3; //case3 : 이용 중단- 미납 3회차까지

  return (
    <Container showBack title="멤버십 결제 현황">
      <Contents>
        {/* 멤버십 현황 */}
        <TitleArea
          topSlot={
            <>
              <Stack>
                <Text as="span" weight="semibold" color={!isUnavailable ? 'point' : undefined}>
                  {!isUnavailable ? '현재 이용 중' : '현재 이용 중단'}
                </Text>
                {isCase2 && <span className={styles.titInfo}>오늘이 마지막날 이에요</span>}
              </Stack>
            </>
          }
          title={<>HiHi 멤버십 프라임</>}
          level="2"
          className={styles.title}
        />
        {!isUnavailable ? (
          <>
            {/* 이용중 or 해지예약중 */}
            <Box size="3">
              <InfoList variant="stacked" gridColumns="auto" gap="row16">
                <InfoItem
                  title={<Text color="gray2">이용 상태</Text>}
                  content={
                    <div className={styles.state}>
                      <Text>이용중 {isCancelScheduled && '(해지예정)'}</Text>
                      {isCancelScheduled && <Text color="gray3">2025.05.04</Text>}
                    </div>
                  }
                />
                <InfoItem
                  title={<Text color="gray2">이용 기간</Text>}
                  content={<Text>2025.04.04~2025.05.03</Text>}
                />
                <InfoItem
                  title={<Text color="gray2">결제한 금액</Text>}
                  content={
                    <div className={styles.col}>
                      <Text weight="medium">10,000원</Text>
                      <TextButton size="1" variant="underline" color="gray3">
                        영수증보기
                      </TextButton>
                    </div>
                  }
                />
                <InfoItem
                  title={<Text color="gray2">이번달 정기배송</Text>}
                  content={
                    <div className={styles.stack}>
                      <div className={styles.col}>
                        <Text weight="medium">과일 꾸러미</Text>
                        <TextButton size="1" variant="underline" color="gray3">
                          {!isCancelScheduled ? '변경예약' : '변경신청'}
                        </TextButton>
                      </div>
                      {!isCancelScheduled && (
                        <>
                          <div className={styles.col}>
                            <Text color="gray3">배송중</Text>
                            <TextButton size="1" variant="underline" color="gray3">
                              배송조회
                            </TextButton>
                          </div>
                          <div className={styles.col}>
                            <Text color="gray3">상품준비중</Text>
                          </div>
                        </>
                      )}
                    </div>
                  }
                />
              </InfoList>
            </Box>
            {/* 다음달 결제 */}
            <TitleBar
              type="docs"
              side={
                <>
                  <TextButton size="1">
                    이용권 변경예약
                    <Icon name="arrowRight" size="xsmall" />
                  </TextButton>
                </>
              }
              title="다음달 결제"
              level="1"
            />
            {!isCancelScheduled ? (
              <>
                <Box size="3">
                  <InfoList variant="stacked" gridColumns="auto" gap="row16">
                    <InfoItem
                      title={<Text color="gray2">가입 상품</Text>}
                      content={<Text>HiHi 멤버십 플러스</Text>}
                    />
                    <InfoItem
                      title={<Text color="gray2">이용 기간</Text>}
                      content={<Text>2025.04.04~2025.05.03</Text>}
                    />
                    <InfoItem
                      title={<Text color="gray2">결제예정일</Text>}
                      content={<Text>2025.05.03</Text>}
                    />
                    <InfoItem
                      title={<Text color="gray2">결제 예정 금액</Text>}
                      content={<Text weight="medium">10,000원</Text>}
                    />
                    <InfoItem
                      title={<Text color="gray2">결제 수단</Text>}
                      content={<Text weight="medium">123-01-****** [카카오뱅크]</Text>}
                    />
                  </InfoList>
                  <div className={styles.btns}>
                    <TextButton size="1" variant="underline" color="gray3">
                      결제 수단 변경
                    </TextButton>
                  </div>
                </Box>
                <div className={styles.bottom}>
                  <TextButton size="1" variant="underline" color="gray3">
                    해지하기
                  </TextButton>
                </div>
              </>
            ) : (
              <>
                <div className={styles.cancelInfo}>
                  <Text as="span" color="point">
                    2025.04.04
                  </Text>{' '}
                  해지 예약되어
                  <br />
                  다음 달 결제 예정인 내역이 없어요.
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {/* 이용 중단 */}
            <Box size="3">
              <InfoList variant="stacked" gridColumns="auto" gap="row16">
                <InfoItem
                  title={<Text color="gray2">이용 상태</Text>}
                  content={
                    <div className={styles.state}>
                      <Text>이용중단</Text>
                      <Text color="gray3">이용 중단일 2025.04.04</Text>
                    </div>
                  }
                />
                <InfoItem
                  title={<Text color="gray2">결제한 금액</Text>}
                  content={<Text>10,000원</Text>}
                />
                <InfoItem title={<Text color="gray2">미납 회차</Text>} content={<Text>2회</Text>} />
              </InfoList>
            </Box>
          </>
        )}
      </Contents>
      {/* 해지 예약중 */}
      {isCancelScheduled && (
        <ButtonArea vertical type="sticky">
          <Button
            variant="primary"
            size="large"
            onClick={() => {
              showAlert({
                title: '다음달에도 계속 이용하시겠어요?',
                message: (
                  <>
                    다음달 결제 예정일은{' '}
                    <Text as="span" color="point">
                      2025.05.03
                    </Text>
                    이에요.
                  </>
                ),
                onConfirm: () => console.log('확인 클릭'),
                showCancel: true,
                labelProps: { confirm: '이용 유지', cancel: '아니요' },
              });
            }}
          >
            혜택 계속 이용하기
          </Button>
        </ButtonArea>
      )}
      {/* 이용 중단 */}
      {isUnavailable && (
        <ButtonArea vertical type="sticky">
          <Button variant="primary" size="large">
            멤버십 다시 시작하기
          </Button>
        </ButtonArea>
      )}
    </Container>
  );
}
