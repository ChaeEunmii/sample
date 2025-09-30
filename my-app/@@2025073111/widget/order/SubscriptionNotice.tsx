'use client';

import React from 'react';
import { Section } from '@/shared/ui/blocks/Section';
import { SubscriptionNoticeList } from './SubscriptionNoticeList';

interface SubscriptionNoticeProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
}

export const SubscriptionNotice = ({
  hideCollapse = false,
  isComplete = false,
}: SubscriptionNoticeProps) => {
  return (
    <>
      <Section title="주의사항" variant={hideCollapse ? 'normal' : 'collapse'} flush defaultOpen>
        <SubscriptionNoticeList isComplete={isComplete} />
      </Section>
    </>
  );
};
SubscriptionNotice.displayName = 'SubscriptionNotice';
