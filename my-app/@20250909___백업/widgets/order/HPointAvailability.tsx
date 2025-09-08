'use client';

import React, { useState } from 'react';
import { Text, TextList } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { DiscountSwitchBox } from '../form';

interface HPointAvailabilityProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
}

export const HPointAvailability = ({
  hideCollapse = false,
  isComplete = false,
  borderTop = false,
  level = '2',
  defaultOpen = true,
}: HPointAvailabilityProps) => {
  // 상태 관리
  const [discountChecked, setDiscountChecked] = useState(true); // 매 결제 시 H.Point 우선 차감 SwitchBox

  // TextList 데이터
  const textList = isComplete
    ? [
        '결제수단으로 자동 결제 시 보유 중인 H.Point를 모두 사용하여 결제금액에서 차감됩니다.',
        '포인트가 모두 소진된 경우, 전체 주문금액을 결제합니다.',
        'H.Point 우선 차감 선택은 모든 정기 결제 주문에 동일하게 적용됩니다.',
      ]
    : [
        '사용에 ON 하면, 결제수단으로 자동 결제 시 보유 중인 H.Point를 모두 사용하여 결제금액에서 차감됩니다.',
        '포인트가 모두 소진된 경우, 전체 주문금액을 결제합니다.',
        'H.Point 우선 차감 선택은 모든 정기 결제 주문에 동일하게 적용됩니다.',
      ];

  return (
    <>
      <Section
        title="H.Point 사용"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        borderTop={borderTop}
        level={level}
        defaultOpen={defaultOpen}
      >
        {isComplete ? (
          <Text weight="semibold" color="point">
            매 결제 시 H.Point를 우선 차감합니다.
          </Text>
        ) : (
          <DiscountSwitchBox
            label="매 결제 시 H.Point 우선 차감"
            checked={discountChecked}
            onChange={setDiscountChecked}
            margin="0"
          />
        )}
        <TextList data={textList} variant="info" margin="2" />
      </Section>
    </>
  );
};
HPointAvailability.displayName = 'HPointAvailability';
