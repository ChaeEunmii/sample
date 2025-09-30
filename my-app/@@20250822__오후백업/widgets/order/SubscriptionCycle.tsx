'use client';

import React from 'react';
import { Text, Box, InfoList, InfoItem, Checkbox, ButtonArea, Button } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';

interface SubscriptionCycleProps {
  /** 타이틀 */
  title?: string;
  /** 정기구독 주기 데이터 */
  data: {
    /** 이용기간 */
    period: string;
    /** 배송주기 */
    cycle: string;
    /** 희망 배송요일 */
    day: string;
    /** 횟수 정보 */
    roundInfo?: {
      /** 현재 회차 */
      currentRound?: number;
      /** 이용 횟수 */
      useCount?: number;
    };
  };
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 사이간격 넓은 경우 사용 */
  wideGap?: boolean;
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /**  일정 확인 버튼 노출 여부 (전체|지난)*/
  showScheduleCheckBtn?: boolean;
  /**  일정 확인 버튼 텍스트 설정 (전체|지난)*/
  ScheduleCheckBtnLabel?: string;
  /**  일정 확인 버튼 클릭 시 실행되는 함수 (전체|지난) */
  onScheduleCheck?: () => void;
}

export const SubscriptionCycle = ({
  title = '정기구독 주기',
  data,
  hideCollapse = false,
  isComplete = false,
  borderTop = false,
  level = '2',
  wideGap = false,
  defaultOpen = true,
  showScheduleCheckBtn = false,
  ScheduleCheckBtnLabel = '전체 일정 확인',
  onScheduleCheck,
}: SubscriptionCycleProps) => {
  return (
    <>
      <Section
        title={title}
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        borderTop={borderTop}
        level={level}
        defaultOpen={defaultOpen}
      >
        <Box size="3" margin="0">
          <InfoList variant="stacked" indent gap={!wideGap ? 'row8' : 'row16'}>
            {data.roundInfo && (
              <InfoItem
                title={<Text color="gray2">현재회차/이용횟수</Text>}
                content={
                  <>
                    {data.roundInfo.currentRound}회차 / 총 {data.roundInfo.useCount}회
                  </>
                }
              />
            )}
            <InfoItem title={<Text color="gray2">이용기간</Text>} content={data.period} />
            <InfoItem title={<Text color="gray2">배송주기</Text>} content={data.cycle} />
            <InfoItem title={<Text color="gray2">희망 배송요일</Text>} content={data.day} />
          </InfoList>
        </Box>
        <Checkbox
          label="이용기간 만료 후 자동연장"
          size="small"
          disabled={isComplete}
          className="ncp-mt-s"
        />
        {showScheduleCheckBtn && (
          <ButtonArea margin="3">
            <Button variant="tertiary" size="small" onClick={onScheduleCheck}>
              {ScheduleCheckBtnLabel}
            </Button>
          </ButtonArea>
        )}
      </Section>
    </>
  );
};
SubscriptionCycle.displayName = 'SubscriptionCycle';
