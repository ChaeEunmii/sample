'use client';

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
import { PrivacyConsentDialog } from '@/widgets/agreement/PrivacyDialog';
import ActivityEndDialog from '@/views/mypage/partners/manage/components/ActivityEndDialog';
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
  const [isPrivacyDialog, setIsPrivacyDialog] = useState(false); // 이용약관 (L)
  const [isActivityEndDialog, setIsActivityEndDialog] = useState(false); // 파트너스 활동종료(L)

  return (
    <Container showBack title="파트너스 활동 관리">
      <Contents>
        <TitleArea
          topSlot={
            <Text size="4" weight="semibold">
              이번달 예상 수익
            </Text>
          }
          title={<>0원</>}
          level="1"
          bottomSlot={
            <>
              <TextList
                data={[
                  '배송 완료 후 일정 기간이 지난 주문 건부터 예상 수익에 반영돼요.',
                  '반품, 취소되었더나 부정 실적으로 판단된 건은 제외돼요.',
                  '실제 지급 금액은 정산 확정 시점에 따라 달라질 수 있어요.',
                ]}
                variant="level2"
                className="ncp-mt-x0"
              />
              <ButtonArea margin="0" className="ncp-w-full">
                <Button>월별 상세 실적 보기</Button>
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
        <TitleBar type="docs" title="정산 계좌" level="1" />
        <Stack type="between">
          <Text as="span" size="5" color="gray1" reading indent>
            정산 계좌 등록이 필요합니다.
          </Text>
          <TextButton size="1" color="gray3" variant="underline">
            등록
          </TextButton>
        </Stack>
        <Box size="3" margin="0">
          <InfoList variant="stacked" gridColumns="auto">
            <InfoItem
              title={
                <Text size="4" color="gray2">
                  정산계좌
                </Text>
              }
              content={
                <Stack type="between">
                  <Text size="4" color="gray1">
                    기업은행 110-89-1234567
                  </Text>
                  <TextButton size="1" color="gray3" variant="underline">
                    변경
                  </TextButton>
                </Stack>
              }
            />
            <InfoItem
              title={
                <Text size="4" color="gray2">
                  예금주명
                </Text>
              }
              content={
                <Text size="4" color="gray1">
                  김현대
                </Text>
              }
            />
          </InfoList>
        </Box>
        <ButtonArea margin="2">
          <Button variant="tertiary">활동 가이드</Button>
          <Button variant="tertiary" onClick={() => setIsPrivacyDialog(true)}>
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
        <PrivacyConsentDialog
          type="partners"
          isOpen={isPrivacyDialog}
          onClose={() => setIsPrivacyDialog(false)}
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
