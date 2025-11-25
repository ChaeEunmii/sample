'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  TitleBar,
  TextButton,
  Text,
  TitleArea,
  TextList,
  Box,
  InfoList,
  InfoItem,
  Stack,
  Icon,
  IconName,
} from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import ActivityEndDialog from '@/views/mypage/partners/manage/components/ActivityEndDialog';
import TermsDetailDialog from '@views/policy/TermsDetailDialog';
import { PARTNERS_USETERMS } from '@views/mypage/partners/manage/components/PartnersTerms';
import styles from './ManagePartners.module.scss';

// 공유하기 버튼 목록
const shareBtns = [
  {
    label: '상품 공유하기',
    desc: '상품 링크 공유하고 수익 받기',
    icon: 'link',
    onClick: () => {
      console.log('상품 공유하기 이동!');
    },
  },
  {
    label: '파트너스샵 관리하기',
    desc: '내 취향으로 상품 큐레이션하고 수익 받기',
    icon: 'shop2',
    onClick: () => {
      console.log('파트너스샵 관리하기 이동!');
    },
  },
];

export default function ManagePartners() {
  const searchParams = useSearchParams();
  // 화면 확인용 경로설정
  const isCase2 = searchParams.has('case2'); // '수익 내역 자세히 보기' 버튼이 있는 화면

  const [isTermsDialog, setIsTermsDialog] = useState(false); // 이용약관 (L)
  const [isActivityEndDialog, setIsActivityEndDialog] = useState(false); // 파트너스 활동종료(L)

  // 안내 문구 설정
  const TEXTLISTS = isCase2
    ? [
        '지급 확정된 주문을 기준으로 지급 금액이 결정돼요.',
        '정산 확정일을 기준으로 취소/반품건에 따라 지급 확정 금액이 달라질 수 있어요.',
      ]
    : [
        '배송 완료 후 일정 기간이 지난 주문 건부터 예상 수익에 반영돼요.',
        '반품, 취소되었거나 부정 실적으로 판단된 건은 제외돼요.',
        '실제 지급 금액은 정산 확정 시점에 따라 달라질 수 있어요.',
      ];

  return (
    <Container showBack title="파트너스 활동 관리">
      <Contents>
        <TitleArea
          topSlot={
            <Text size="4" weight="regular">
              이번달 예상 수익
            </Text>
          }
          title={formatPrice(0)}
          level="3"
          bottomSlot={
            <>
              <TextList
                data={TEXTLISTS.map((item) => ({
                  text: item,
                  textProps: { size: '5', reading: true },
                }))}
                variant="level2"
                className="ncp-mt-x0"
              />
              <ButtonArea margin="0" className="ncp-w-full ncp-mt-xs">
                {isCase2 ? (
                  <Button>수익 내역 자세히 보기</Button>
                ) : (
                  <Button>월별 상세 실적 보기</Button>
                )}
              </ButtonArea>
            </>
          }
        />
        <TitleBar type="docs" title="공유하기" level="1" />
        <div className={styles.btns}>
          {shareBtns.map(({ label, desc, icon, onClick }) => (
            <button key={icon} type="button" className={styles.btn} onClick={onClick}>
              <span className={styles.icon}>
                <Icon name={icon as IconName} size="large" />
              </span>
              <div className={styles.txt}>
                <Text as="strong" size="5" weight="semibold">
                  {label}
                </Text>
                <Text as="span" size="3" color="gray3">
                  {desc}
                </Text>
              </div>
              <Icon name="arrowRight" size="small" className={styles.arrow} />
            </button>
          ))}
        </div>
        <TitleBar type="docs" title="정산 계좌 정보" level="1" />
        <Box size="3" margin="0">
          <Stack type="between">
            <Text as="span" size="5" color="gray2" reading indent>
              정산계좌를 등록해 주세요.
            </Text>
            <TextButton size="1" color="gray3" variant="underline">
              등록
            </TextButton>
          </Stack>
        </Box>
        <Box size="2" margin="0">
          <InfoList variant="stacked" gridColumns="auto" gap="row16">
            <InfoItem
              title={
                <Text size="5" color="gray1">
                  예금주
                </Text>
              }
              content={
                <Text size="5" color="gray2">
                  김*대
                </Text>
              }
            />
            <InfoItem
              title={
                <Text size="5" color="gray1">
                  은행
                </Text>
              }
              content={
                <Text size="5" color="gray2">
                  KEB하나은행
                </Text>
              }
            />
            <InfoItem
              title={
                <Text size="5" color="gray1">
                  계좌번호
                </Text>
              }
              content={
                <Text size="5" color="gray2">
                  20691*********
                </Text>
              }
            />
          </InfoList>
          <ButtonArea margin="3" align="right">
            <TextButton size="1" color="gray3" variant="underline">
              수정
            </TextButton>
            <TextButton size="1" color="gray3" variant="underline">
              삭제
            </TextButton>
          </ButtonArea>
        </Box>
        <ButtonArea margin="1">
          <Button variant="tertiary">활동 가이드</Button>
          <Button variant="tertiary" onClick={() => setIsTermsDialog(true)}>
            이용약관
          </Button>
        </ButtonArea>
        <ButtonArea align="center">
          <TextButton
            variant="underline"
            size="1"
            color="gray3"
            onClick={() => setIsActivityEndDialog(true)}
          >
            파트너스 활동 종료
          </TextButton>
        </ButtonArea>

        {/* 이용약관 (L)*/}
        <TermsDetailDialog
          isOpen={isTermsDialog}
          onClose={() => setIsTermsDialog(false)}
          title={PARTNERS_USETERMS.title}
          content={PARTNERS_USETERMS.content}
        />
        {/* 파트너스 활동 종료 (L)*/}
        <ActivityEndDialog
          isOpen={isActivityEndDialog}
          onClose={() => setIsActivityEndDialog(false)}
        />
      </Contents>
    </Container>
  );
}
