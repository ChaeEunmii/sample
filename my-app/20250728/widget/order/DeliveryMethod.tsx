'use client';

import React from 'react';
import { RadioGroup, TextList, Text, Box } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';

/** 배송방법 타입
 * - none: 배송지 미입력
 * - default: 배송지가 입력/선택된 상태
 * - courierOnly: 택배 배송만 제한된 경우) */
type DeliveryType = 'none' | 'default' | 'courierOnly';

interface Option {
  label: string;
  value: string;
}

interface DeliveryDetailProps {
  /** 배송방법 타입
   * - none: 배송지 미입력
   * - default: 배송지가 입력/선택된 상태
   * - courierOnly: 택배 배송만 제한된 경우) */
  type?: DeliveryType;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
}

export const DeliveryMethod = ({
  type = 'default',
  hideCollapse = false,
  isComplete = false,
}: DeliveryDetailProps) => {
  const getOptions = (type: DeliveryType): Option[] => {
    if (type === 'courierOnly') {
      return [{ label: '택배 배송', value: 'courier' }];
    }
    return [
      { label: '새벽배송', value: 'dawn' },
      { label: '당일배송 (17:30 출발 예정)', value: 'today' },
    ];
  };

  // 라디오 버튼 옵션
  const options = getOptions(type);

  return (
    <>
      <Section
        title="배송방법 선택"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        defaultOpen
      >
        {type === 'none' ? (
          <Text size="4" color="gray3">
            선택 가능한 배송 방법을 확인하기 위해 배송지를 먼저 등록해 주세요.
          </Text>
        ) : (
          <>
            {isComplete ? (
              <Box size="3" margin="0">
                <Text weight="medium">당일배송 (17:30 출발 예정)</Text>
              </Box>
            ) : (
              <RadioGroup
                name="deliveryMethod"
                options={options}
                defaultValue={type === 'default' ? 'dawn' : 'courier'}
              />
            )}

            <TextList
              data={[
                '택배배송의 경우, 택배사의 사정과 상황에 따라 희망 배송요일보다 하루에서 이틀 정도 먼저 도착할 수 있습니다.',
                '당일배송의 도착 시간은 당일 교통 상황에 따라 차이가 있을 수 있는 점 양해 부탁드려요.',
              ]}
              variant="info"
              margin="3"
            />
          </>
        )}
      </Section>
    </>
  );
};
DeliveryMethod.displayName = 'DeliveryMethod';
