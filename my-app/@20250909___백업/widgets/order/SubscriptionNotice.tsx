'use client';

import React from 'react';
import { Section } from '@/shared/ui/blocks/Section';
import { SubscriptionNoticeList } from './SubscriptionNoticeList';

interface SubscriptionNoticeProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
  /** 마이페이지인지 확인 */
  isMypage?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
}

export const SubscriptionNotice = ({
  hideCollapse = false,
  isComplete = false,
  isMypage = false,
  borderTop = false,
  level = '2',
  defaultOpen = true,
}: SubscriptionNoticeProps) => {
  return (
    <>
      <Section
        title="주의사항"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        borderTop={borderTop}
        level={level}
        defaultOpen={defaultOpen}
      >
        <SubscriptionNoticeList isComplete={isComplete} isMypage={isMypage} />
      </Section>
    </>
  );
};
SubscriptionNotice.displayName = 'SubscriptionNotice';
