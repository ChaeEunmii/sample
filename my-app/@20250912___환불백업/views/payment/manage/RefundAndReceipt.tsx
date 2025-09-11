'use client';

// import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleBar,
  Box,
  TextList,
  Stack,
  InfoList,
  InfoItem,
  Text,
  TextButton,
  Heading,
  ButtonArea,
} from '@shared/ui';
import styles from './RefundAndReceipt.module.scss';

export default function RefundAndReceipt() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  return (
    <Container title="환불계좌 관리/현금영수증" showBack>
      <Contents className={styles.layout}>
        {/* 환불계좌 정보 */}
        <TitleBar
          type="docs"
          level="2"
          title="환불계좌 정보"
          side={
            !isNoData && (
              <div className={styles.btns}>
                <TextButton variant="underline" size="1" color="gray3">
                  수정
                </TextButton>
                <TextButton variant="underline" size="1" color="gray3">
                  삭제
                </TextButton>
              </div>
            )
          }
          className="ncp-mt-s"
        />
        <Box size="3">
          {!isNoData ? (
            <InfoList variant="stacked" gap="row16">
              <InfoItem title="예금주" content="김*대" />
              <InfoItem title="은행" content="KEB하나은행" />
              <InfoItem title="계좌번호" content="20691*********" />
            </InfoList>
          ) : (
            <Stack type="between">
              <Text as="span" size="4" color="gray2">
                환불계좌를 등록해 주세요.
              </Text>
              <TextButton variant="underline" size="1" color="gray3">
                등록
              </TextButton>
            </Stack>
          )}
        </Box>
        <TextList
          data={[
            '환불계좌는 본인 명의의 계좌번호만 등록/변경 가능합니다.',
            '한 번 등록한 계좌는 변경 전까지 계속 이용하실 수 있습니다.',
            '정보 입력 또는 변경일로부터 1년간 환불 기록이 없는 경우, 금융정보 보호 정책에 따라 환불계좌 정보는 삭제됩니다.',
          ]}
          variant="info"
          className="ncp-mt-x6"
        />
        {/* 소득공제 / 지출증빙 신청 */}
        <TitleBar type="docs" level="2" title="소득공제 / 지출증빙 신청" />
        <Box size="3">
          <Stack type="between">
            <Heading size="3" color="black">
              소득공제용 현금영수증
            </Heading>
            <div className={styles.btns}>
              {!isNoData ? (
                <>
                  <TextButton variant="underline" size="1" color="gray3">
                    수정
                  </TextButton>
                  <TextButton variant="underline" size="1" color="gray3">
                    삭제
                  </TextButton>
                </>
              ) : (
                <TextButton variant="underline" size="1" color="gray3">
                  등록
                </TextButton>
              )}
            </div>
          </Stack>
          {!isNoData ? (
            <InfoList variant="stacked" gap="row16" className="ncp-mt-xs">
              <InfoItem title="휴대폰 번호" content="010-****-5678" />
            </InfoList>
          ) : (
            <Text size="4" color="gray2" className="ncp-mt-xs">
              소득공제용 현금영수증 정보를 등록해 주세요.
            </Text>
          )}
        </Box>
        <Box size="3">
          <Stack type="between">
            <Heading size="3" color="black">
              지출증빙용 현금영수증
            </Heading>
            <div className={styles.btns}>
              {!isNoData ? (
                <>
                  <TextButton variant="underline" size="1" color="gray3">
                    수정
                  </TextButton>
                  <TextButton variant="underline" size="1" color="gray3">
                    삭제
                  </TextButton>
                </>
              ) : (
                <TextButton variant="underline" size="1" color="gray3">
                  등록
                </TextButton>
              )}
            </div>
          </Stack>
          {!isNoData ? (
            <InfoList variant="stacked" gap="row16" className="ncp-mt-xs">
              <InfoItem title="사업자등록번호" content="211-87-21455" />
            </InfoList>
          ) : (
            <Text size="4" color="gray2" className="ncp-mt-xs">
              지출증빙용 현금영수증 정보를 등록해 주세요.
            </Text>
          )}
        </Box>
        {!isNoData && (
          <ButtonArea align="center" margin="1">
            <TextButton variant="underline" size="1" color="gray3">
              마스킹 해제
            </TextButton>
          </ButtonArea>
        )}
      </Contents>
    </Container>
  );
}
