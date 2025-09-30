'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TextButton, ButtonArea } from '@shared/ui';
import { SubscriptionTopInfo, SubscriptionSchedule } from '@/views/mypage/subscription/components';
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
        <SubscriptionTopInfo
          info={topInfo}
          onCopy={(text) => console.log(text)}
          className={styles.sticky}
        />
        {/* 진행된 일정 */}
        <SubscriptionSchedule
          title={activeScheduleTitle}
          data={activeScheduleData}
          hideCollapse
          onViewOrder={(id) => {
            console.log('주문상세 클릭:', id);
          }}
          onTrackDelivery={(id) => {
            console.log('배송조회 클릭:', id);
          }}
        />
        {/* 기다리는 일정 */}
        <SubscriptionSchedule
          title={waitScheduleTitle}
          data={waitScheduleData}
          tooltip={
            <>
              기다리는 일정은 최대 10회차까지
              <br />
              확인할 수 있어요.
            </>
          }
        />
        <ButtonArea margin="2" align="center">
          <TextButton
            variant="bold"
            size="1"
            suffixIcon="top"
            iconSize="small"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            일정표 맨 위로
          </TextButton>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
