'use client';

import React from 'react';
import { Button, ButtonArea } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { RoundProductItem } from './RoundProductItem';
import { mockProductInfoItem } from '@/mocks/subscription';

interface SubscriptionCurrentProductInfoProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
}

export const SubscriptionCurrentProductInfo = ({
  hideCollapse = false,
}: SubscriptionCurrentProductInfoProps) => {
  // 임시 데이터
  const product = mockProductInfoItem;
  return (
    <>
      <Section
        title="이번 회차 상품 정보"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        defaultOpen
      >
        <RoundProductItem data={product} className="ncp-mt-x0" />
        <ButtonArea margin="3">
          <Button variant="tertiary">전체보기</Button>
        </ButtonArea>
      </Section>
    </>
  );
};
SubscriptionCurrentProductInfo.displayName = 'SubscriptionCurrentProductInfo';
