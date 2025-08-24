'use client';

import React from 'react';
import { Section } from '@/shared/ui/blocks/Section';
import { AddressInfoBox } from '@/widgets/form';
import { Collapse, Heading } from '@/shared/ui';

interface OrdererDetailProps {
  /** Section 컴포넌트에서 collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** Collpase 컴포넌트의 variant="graybox" 스타일 사용 여부(기본: Section 컴포넌트) */
  isCollpaseGraybox?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
  /** 추가 클래스명 */
  className?: string;
}

export const OrdererDetail = ({
  hideCollapse = false,
  isCollpaseGraybox = false,
  isComplete = false,
  className,
}: OrdererDetailProps) => {
  const content = (
    <AddressInfoBox
      isChangeButton={!isComplete}
      changeButtonText="마스킹 해제"
      hideAddress
      showMail
      removePadding={isCollpaseGraybox}
    />
  );

  if (isCollpaseGraybox) {
    return (
      <Collapse variant="graybox" className={className}>
        <Collapse.Control>
          <Heading as="h2" size="5" weight="bold" indent>
            주문자 정보
          </Heading>
        </Collapse.Control>
        <Collapse.Content>{content}</Collapse.Content>
      </Collapse>
    );
  }

  return (
    <Section title="주문자 정보" variant={hideCollapse ? 'normal' : 'collapse'} flush defaultOpen>
      {content}
    </Section>
  );
};

OrdererDetail.displayName = 'OrdererDetail';
