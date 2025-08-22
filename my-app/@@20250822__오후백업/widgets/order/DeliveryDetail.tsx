'use client';

import React from 'react';
import { useState } from 'react';
import { Box, Button, Empty, InfoItem, InfoList, Stack, TextButton } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { formatDate } from '@/shared/utils/ui';
import { AddressInfoBox } from '@/widgets/form';
import DeliveryRequestEditDialog from '@/widgets/order/DeliveryRequestEditDialog';

export interface DeliveryDetails {
  /** 배송 희망일 */
  hopeDate?: string;
  /** 공동현관 비밀번호 */
  gatePw?: string;
  /** 새벽배송 완료 알림 시점 */
  notifyAt?: string;
  /** 요청사항 */
  note?: string;
}

interface DeliveryDetailProps {
  /** 타이틀 */
  title?: string;
  /** 배송 희망일, 공동현관 비밀번호, 새벽배송 완료 알림 시점, 요청사항 데이터 */
  infoData?: DeliveryDetails;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 배송지 등록이 필요한 경우 */
  isEmpty?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /** 하단 슬롯 */
  bottomSlot?: React.ReactNode;
}

export const DeliveryDetail = ({
  title = '배송지',
  infoData,
  hideCollapse = false,
  isEmpty = false,
  borderTop = false,
  level = '2',
  defaultOpen = true,
  bottomSlot,
}: DeliveryDetailProps) => {
  // 배송요청사항 변경 Dialog 상태
  const [isDeliveryNoteChangeDialog, setIsDeliveryNoteChangeDialog] = useState(false);

  // 배송 정보 항목 리스트 (값이 있을 때만 InfoItem으로 렌더링됨)
  const infoItems = [
    { key: 'hopeDate', title: '배송 희망일', content: formatDate(infoData?.hopeDate, 'dot') },
    { key: 'gatePw', title: '공동현관 비밀번호', content: infoData?.gatePw },
    {
      key: 'notifyAt',
      title: '새벽배송 완료 알림 시점',
      content: infoData?.notifyAt,
    },
    {
      key: 'note',
      title: '요청사항',
      content: infoData?.note?.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      )),
    },
  ];

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
        {isEmpty ? (
          <Empty
            title="배송지를 등록해 주세요."
            buttons={
              <>
                <Button variant="primary">배송지 등록하기</Button>
              </>
            }
            variant="minDisplay"
          />
        ) : (
          <>
            <Box size="3" margin="0">
              <AddressInfoBox
                isChangeButton
                changeButtonText="배송지 정보 변경" // 변경 버튼 텍스트 수정
                isDefaultAddress // 기본 배송지 여부
                disablePosition // 변경 버튼 positoin 해제
                removePadding // 내부 패딩 삭제
              />
              {Object.values(infoData ?? '').some(Boolean) && (
                <>
                  <InfoList>
                    {infoItems.map(
                      ({ key, title, content }) =>
                        content && <InfoItem key={key} title={title} content={content} />
                    )}
                  </InfoList>
                  <Stack type="end" className="ncp-mt-s">
                    <TextButton
                      color="gray3"
                      size="1"
                      variant="underline"
                      onClick={() => setIsDeliveryNoteChangeDialog(true)}
                    >
                      배송요청 정보 변경
                    </TextButton>
                  </Stack>
                </>
              )}
            </Box>
            {bottomSlot && <div className="ncp-mt-m">{bottomSlot}</div>}
          </>
        )}
      </Section>
      {/* 배송지 요청 사항 변경 (L)*/}
      <DeliveryRequestEditDialog
        isOpen={isDeliveryNoteChangeDialog}
        onClose={() => setIsDeliveryNoteChangeDialog(false)}
      />
    </>
  );
};
DeliveryDetail.displayName = 'DeliveryDetail';
