'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleBar, Text, Box, InfoList, InfoItem } from '@shared/ui';
// 프로모션 이벤트 모듈
import EventCalendar from '@/widgets/promotion/EventCalendar';
import GiftList from '@widgets/promotion/GiftList';
import { mockAttendanceCheck } from '@/mocks/event';
// 화면 컴퍼넌트
import { AttendanceRewardList } from '@/views/mypage/activity/event/components/AttendanceRewardList';
import { BenefitInfo } from '@views/mypage/activity/event/components/BenefitInfo';
import { mockGiftListData, mockEventRewardList } from '@mocks/myactivity';
import styles from './AttendanceHistory.module.scss';

export default function AttendanceHistory() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isCase1 = searchParams.has('case1'); // [CASE1] 누적 당첨 경품 {있는} 출석체크 유형 참여한 경우
  const isCase2 = searchParams.has('case2'); // [CASE2] 누적 당첨 경품 {없는} 출석체크 유형 참여한 경우
  const isCase3 = searchParams.has('case3'); // [CASE3] 전월 출석체크 {참여안한} 경우

  // mock 데이터 가져오기
  const RewardListData = isCase2 || isCase3 ? [] : mockEventRewardList;
  const giftListData = !isCase1 ? [] : mockGiftListData;

  // 캘린더 타이틀 노출 조건
  const showCalendadrTitle = isCase3;
  // 경품달성 목록 노출 조건
  const showRewardList = RewardListData.length > 0;
  // 전월혜택 보기 노출 조건
  const showBenefitInfo = giftListData.length > 0;

  // 달력날짜샘플
  /** 출첵 임시 데이터 (AttendanceCheck.tsx 참고) */
  const attendanceData = mockAttendanceCheck;
  /** 출석한 날짜 */
  const [checkedDays] = useState<number[]>([1, 3, 8, 9]);
  /** 더블데이 */
  const doubleDays = attendanceData.doubleDays;

  return (
    <Container showBack title="출석체크 전월 기록 확인하기">
      <Contents className={styles.layout}>
        <TitleBar
          type="docs"
          title="2월 출석체크"
          description={isCase3 && <>지난달은 한 번도 출석체크를 하지않았어요.</>}
          side={
            !isCase3 && (
              <Text as="span" weight="semibold" color="primary">
                총 <em className="ncp-color-point">30일</em> 출석 체크 달성!
              </Text>
            )
          }
        />
        {/* 경품 달성 목록 */}
        {showRewardList && <AttendanceRewardList data={RewardListData} />}
        {/* 달력 영역 */}
        <div className={styles.calendar}>
          {showCalendadrTitle && (
            <TitleBar type="docs" title="매일 출첵하고 경품 받으세요!" level="2" />
          )}
          <EventCalendar checkedDays={checkedDays} doubleDays={doubleDays} />
        </div>
        {/* 전월 혜택보기 */}
        {showBenefitInfo && (
          <BenefitInfo>
            <TitleBar
              type="docs"
              title="누적 출석 선물"
              level="3"
              description={
                <Text as="span" size="4">
                  누적 출석일 달성 시 선물에 자동 응모돼요
                </Text>
              }
              className="ncp-mt-x0"
            />
            <div className="ncp-mt-m">
              {/* <GiftList data={mockGiftListData} flagColor="black" /> */}
              <GiftList data={mockGiftListData} flagColor="black" />
            </div>
            <Box className="ncp-mt-m">
              <InfoList variant="stacked" gridColumns="auto">
                <InfoItem
                  title={<Text size="4">당첨자 발표일</Text>}
                  content={<Text size="4">2025.12.15(월)</Text>}
                />
                <InfoItem
                  title={<Text size="4">기프트콘 지급일</Text>}
                  content={<Text size="4">2025.12.15(월)</Text>}
                />
              </InfoList>
            </Box>
          </BenefitInfo>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          이번달 출석체크 하러가기
        </Button>
      </ButtonArea>
    </Container>
  );
}
