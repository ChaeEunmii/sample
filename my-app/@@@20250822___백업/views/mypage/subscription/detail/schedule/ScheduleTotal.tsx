'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  TextButton,
  ButtonArea,
  Flag,
  Box,
  Section,
  InfoList,
  InfoItem,
  Tooltip,
  Collapse,
  Heading,
} from '@shared/ui';
import styles from './ScheduleTotal.module.scss';
import { OrderTopInfo } from '@/views/mypage/order/detail/components';

export default function ScheduleTotal() {
  // mock 데이터
  const topInfo = {
    date: '20251225',
    subscriptionNumber: '25122512345678',
  };

  return (
    <Container showBack title="전체 구독 일정">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} isSubscription />
        <Box margin="0">
          <div className={styles.statusFlag}>
            <Flag
              data={[
                {
                  color: 'gray3',
                  label: '건너뛰기',
                },
                {
                  color: 'red2',
                  label: '취소',
                },
                {
                  color: 'dark',
                  label: '완료',
                },
                {
                  color: 'green3',
                  label: '진행중',
                },
                {
                  color: 'red2',
                  label: '해지',
                },
                {
                  color: 'gray4',
                  label: '대기중',
                },
              ]}
            />
            <ul className={styles.info}>
              <li>5회차</li>
              <li>총 12회</li>
            </ul>
          </div>
        </Box>
        <br />
        <br />
        <Section title="진행된 일정 (5회)" variant="normal" level="1" flush>
          {/* 아이템으로 뺄것 */}
          <Box margin="0">
            <div className={styles.statusFlag}>
              <Flag
                data={[
                  {
                    color: 'green3',
                    label: '진행중',
                  },
                ]}
              />
              <ul className={styles.info}>
                <li>5회차</li>
                <li>총 12회</li>
              </ul>
            </div>
            <InfoList variant="line" gridColumns="auto">
              <InfoItem title="결제 완료" content="2025.12.24 수요일" />
              <InfoItem title="배송 예정" content="2025.12.26 금요일" />
            </InfoList>
          </Box>
        </Section>
        <br />
        <Collapse variant="normal" defaultOpen marginTop="1">
          <Collapse.Control>
            <div className={styles.title}>
              <Heading as="h2" size="5" weight="bold">
                기다리는 일정 (7회)
              </Heading>
              <Tooltip placement="top" className={styles.tip}>
                기다리는 일정은 최대 10회차까지
                <br />
                확인할 수 있어요.
              </Tooltip>
            </div>
          </Collapse.Control>
          <Collapse.Content>내용입니다!</Collapse.Content>
        </Collapse>
        <br />
        <br />
        <ButtonArea margin="2" align="center">
          <TextButton variant="bold" size="1" suffixIcon="top" iconSize="small">
            일정표 맨 위로
          </TextButton>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
