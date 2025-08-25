'use client';

import React from 'react';
import { Button, ButtonArea } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { RoundProductItem } from './RoundProductItem';
import { mockProductInfoItem } from '@/mocks/subscription';

interface SubscriptionCurrentProductInfoProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /** 모드설정  */
  mode?: 'mypage';
}

export const SubscriptionCurrentProductInfo = ({
  hideCollapse = false,
  borderTop = false,
  level = '2',
  defaultOpen = true,
  mode,
}: SubscriptionCurrentProductInfoProps) => {
  // 임시 데이터
  const product = mockProductInfoItem;

  // 마이페이지의 경우
  const isMypage = mode === 'mypage';

  return (
    <>
      <Section
        title="이번 회차 상품 정보"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        borderTop={borderTop}
        level={level}
        defaultOpen={defaultOpen}
      >
        <RoundProductItem data={product} className="ncp-mt-x0" />
        <ButtonArea margin="3">
          <Button variant="tertiary" size={isMypage ? 'small' : undefined}>
            전체보기
          </Button>
        </ButtonArea>
      </Section>
    </>
  );
};
SubscriptionCurrentProductInfo.displayName = 'SubscriptionCurrentProductInfo';
