'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TextButton, ButtonArea, Section, Tooltip, Collapse, Heading } from '@shared/ui';
import { SubscriptionTopInfo, ScheduleBoxList } from '@/views/mypage/subscription/components';
import { mockTotalSubsScheduleList, mockWaitSubsScheduleList } from '@mocks/subscription';
import styles from './ScheduleTotal.module.scss';

export default function ScheduleTotal() {
  // mock 데이터 가져오기
  const topInfo = {
    date: '20251225',
    orderNumber: '25122512345678',
  };
  // 진행된 일정
  const activeScheduleData = mockTotalSubsScheduleList;
  // 기다리는 일정
  const waitScheduleData = mockWaitSubsScheduleList;

  // 각 타이틀 설정
  const activeScheduleTitle = `진행된 일정 (${activeScheduleData.length}회)`;
  const waitScheduleTitle = `기다리는 일정 (${waitScheduleData.length}회)`;

  return (
    <Container showBack title="전체 구독 일정">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <SubscriptionTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 진행된 일정 */}
        <Section title={activeScheduleTitle} variant="normal" level="1" flush>
          <ScheduleBoxList data={activeScheduleData} />
        </Section>
        {/* 기다리는 일정 */}
        <Section
          title={waitScheduleTitle}
          variant="collapse"
          level="1"
          flush
          suffix={<div>sdfsdf</div>}
        >
          <ScheduleBoxList data={waitScheduleData} />
        </Section>
        <div>------------- 테스트 -------------</div>
        <div>------------- 테스트 -------------</div>
        <div>------------- 테스트 -------------</div>
        {/* 기다리는 일정 */}
        <Collapse variant="normal" defaultOpen marginTop="1">
          <Collapse.Control>
            <div className={styles.title}>
              <Heading as="h2" size="5" weight="bold">
                {waitScheduleTitle}
              </Heading>
              <Tooltip placement="top" className={styles.tip}>
                기다리는 일정은 최대 10회차까지
                <br />
                확인할 수 있어요.
              </Tooltip>
            </div>
          </Collapse.Control>
          <Collapse.Content>
            <ScheduleBoxList data={waitScheduleData} />
          </Collapse.Content>
        </Collapse>
        <ButtonArea margin="2" align="center">
          <TextButton variant="bold" size="1" suffixIcon="top" iconSize="small">
            일정표 맨 위로
          </TextButton>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
