'use client';

import { Section, InfoList, InfoItem, Text, Stack } from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './ExpectedPoint.module.scss';

/** 적립 예정 포인트 항목 타입 */
export interface ExpectedPointItem {
  /** 포인트 종류 (ex. H.Point, 명품 마일리지 등) */
  label: string;
  /** 포인트 적립 출처 (ex. 주문적립, 리뷰적립 등) */
  field?: string;
  /** 포인트 */
  point: number;
}

export interface ExpectedPointProps {
  /** 항목 리스트 */
  data: ExpectedPointItem[];
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** 적립 예정 포인트 영역 컴포넌트 */
export const ExpectedPoint = ({ data, className }: ExpectedPointProps) => {
  return (
    <Section
      title="적립 예정 포인트"
      variant="collapse"
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      <InfoList variant="between" gap="row8">
        {data.map((item, idx) => (
          <InfoItem
            key={idx}
            title={
              <Stack>
                <Text as="strong" size="5" weight="regular" color="gray2">
                  {item.label}
                </Text>
                {item.field && (
                  <Text as="em" size="3" weight="regular" color="gray3">
                    {item.field}
                  </Text>
                )}
              </Stack>
            }
            content={
              <Text size="5" weight="medium">
                {formatNumber(item.point)}P
              </Text>
            }
          />
        ))}
      </InfoList>

      <Text size="3" color="gray3" className="ncp-mt-s">
        클럽포인트 적립은 클럽회원 유지 시에만 포인트 적립이 가능합니다.
      </Text>
    </Section>
  );
};
