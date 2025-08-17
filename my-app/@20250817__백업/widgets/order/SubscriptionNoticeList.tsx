'use client';

import React from 'react';
import { TextList } from '@/shared/ui';

interface SubscriptionNoticeListProps {
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
  className?: string;
}

export const SubscriptionNoticeList = ({
  isComplete = false,
  className,
}: SubscriptionNoticeListProps) => {
  // TextList 데이터
  const textList = isComplete
    ? [
        '등록된 정기구독 결제 수단으로 배송완료 예정 2일 전(영업일을 기준) 자동으로 결제됩니다.',
        '정기배송일이 휴무일인 경우 전날 배송됩니다.',
        '1순위 결제 수단으로 결제를 할 수 없는 경우 2순위로 결제 수단으로 결제됩니다. 만약 2순위로도 결제가 불가한 경우, 해당 회차의 주문은 자동으로 건너뛰기(회차 취소)됩니다.',
        '결제 이후에 결제 수단이 변경된 경우, 다음 회차부터 변경된 결제 수단으로 정기결제가 진행됩니다.',
      ]
    : [
        '등록된 결제수단으로 배송 2일 전 자동결제됩니다.',
        '정기배송일이 휴무일인 경우 전날 배송됩니다.',
        '1순위 결제 수단으로 결제를 할 수 없는 경우 2순위로 결제 수단으로 결제됩니다. 만약 2순위로도 결제가 불가한 경우, 해당 회차의 주문은 자동으로 건너뛰기(회차 취소)됩니다.',
        '결제 이후에 결제 수단이 변경된 경우, 다음 회차부터 변경된 결제 수단으로 정기결제가 진행됩니다.',
      ];

  return (
    <>
      <TextList data={textList} className={className} />
    </>
  );
};
SubscriptionNoticeList.displayName = 'SubscriptionNoticeList';
