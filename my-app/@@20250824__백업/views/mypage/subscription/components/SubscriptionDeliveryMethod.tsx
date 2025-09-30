'use client';

import { Section, TextList, Box, Text } from '@/shared/ui';
import clsx from 'clsx';
import styles from './SubscriptionDeliveryMethod.module.scss';

/**
 * 정기구독 배송방법 영역
 *
 */

interface SubscriptionDeliveryMethodProps {
  /** 섹션 타이틀 */
  title?: string;
  /** 배송방법 */
  data?: {
    method?: string;
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
            {data.method}
          </Text>{' '}
          <Text as="span" color="point" weight="medium">
            {data.expect}
          </Text>
        </Box>
      )}
      <TextList
        data={[
          '택배배송의 경우, 택배사의 사정과 상황에 따라 희망 배송요일보다 하루에서 이틀 정도 먼저 도착할 수 있습니다.',
          '당일배송의 도착 시간은 당일 교통 상황에 따라 차이가 있을 수 SubscriptionCycle있는 점 양해 부탁드려요.',
        ]}
        variant="info"
        className="ncp-mt-x6"
      />
    </Section>
  );
};
