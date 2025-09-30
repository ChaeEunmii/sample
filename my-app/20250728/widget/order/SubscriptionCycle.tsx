'use client';

import React from 'react';
import { Text, Box, InfoList, InfoItem, Checkbox } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';

interface SubscriptionCycleProps {
  /** 정기구독 주기 데이터 */
  data: {
    /** 이용기간 */
    period: string;
    /** 배송주기 */
    cycle: string;
    /** 희망 배송요일 */
    day: string;
  };
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
}

export const SubscriptionCycle = ({
  data,
  hideCollapse = false,
  isComplete = false,
}: SubscriptionCycleProps) => {
  return (
    <>
      <Section
        title="정기구독 주기"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        defaultOpen
      >
        <Box size="3" margin="0">
          <InfoList variant="stacked" gap="row8" indent>
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
      </Section>
    </>
  );
};
SubscriptionCycle.displayName = 'SubscriptionCycle';
