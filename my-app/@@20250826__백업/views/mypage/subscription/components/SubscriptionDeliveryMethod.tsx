'use client';

import { Section, TextList, Box, Text } from '@/shared/ui';
import clsx from 'clsx';
import styles from './SubscriptionDeliveryMethod.module.scss';

/**
 * 정기구독 배송방법 영역
 *
 *
 */

// 배송타입 : 택배배송 | 새벽배송 | 당일배송
type DeliveryType = 'courier' | 'dawn' | 'today';

// 배송타입별 라벨 + 안내문구
export const DELIVERY_INFO: Record<DeliveryType, { label: string; notes: string[] }> = {
  courier: {
    label: '택배배송',
    notes: [
      '택배배송의 경우, 택배사의 사정과 상황에 따라 희망 배송요일 보다 하루에서 이틀 정도 먼저 도착할 수 있습니다.',
      '결제완료되어 주문서가 등록된 이후에는 주문서에서 배송지와 요청사항 등을 변경해 주세요.',
    ],
  },
  dawn: {
    label: '새벽배송',
    notes: [
      '원활한 새벽 배송을 위해 공공현관 비밀번호를 등록 부탁드려요.',
      '결제완료되어 주문서가 등록된 이후에는 주문서에서 배송지와 요청사항 등을 변경해 주세요.',
    ],
  },
  today: {
    label: '당일배송',
    notes: [
      '당일배송의 도착 시간은 당일 교통 상황에 따라 차이가 있을 수 있는 점 양해 부탁드려요.',
      '결제완료되어 주문서가 등록된 이후에는 주문서에서 배송지와 요청사항 등을 변경해 주세요.',
    ],
  },
};

interface SubscriptionDeliveryMethodProps {
  /** 섹션 타이틀 */
  title?: string;
  /** 배송방법 */
  data: {
    method?: DeliveryType;
    expect?: string;
  };
  /** 추가 클래스 */
  className?: string;
}

export const SubscriptionDeliveryMethod = ({
  title = '배송방법',
  data,
  className,
}: SubscriptionDeliveryMethodProps) => {
  // 라벨 구하기
  const info = DELIVERY_INFO[data.method as DeliveryType];
  const label = info?.label ?? '';

  // 안내문구 렌더 구하기
  const renderTextList = DELIVERY_INFO[data.method as DeliveryType]?.notes ?? [];

  return (
    <Section
      title={title}
      variant="collapse"
      level="1"
      flush
      borderTop
      defaultOpen
      className={clsx(styles.section, className)}
    >
      {data && (
        <Box size="3" margin="0">
          <Text as="span" color="gray1" weight="medium">
            {label}
          </Text>{' '}
          {data.method === 'today' && (
            <Text as="span" color="point" weight="medium">
              {data.expect}
            </Text>
          )}
        </Box>
      )}
      <TextList data={renderTextList} variant="info" className="ncp-mt-x6" />
    </Section>
  );
};
