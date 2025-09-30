'use client';

import React from 'react';
import { Section } from '@/shared/ui/blocks/Section';
import { AddressInfoBox } from '@/widgets/form';

interface OrdererDetailProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
}

export const OrdererDetail = ({ hideCollapse = false, isComplete = false }: OrdererDetailProps) => {
  return (
    <>
      <Section title="주문자 정보" variant={hideCollapse ? 'normal' : 'collapse'} flush defaultOpen>
        <AddressInfoBox
          isChangeButton={!isComplete}
          changeButtonText="마스킹 해제" // 변경 버튼 텍스트 수정
          hideAddress
          showMail
        />
      </Section>
    </>
  );
};
OrdererDetail.displayName = 'OrdererDetail';
