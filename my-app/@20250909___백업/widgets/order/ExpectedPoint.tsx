'use client';

import React from 'react';
import { Text, Heading, InfoList, InfoItem } from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { formatNumber } from '@/shared/utils/ui';
import styles from './Amount.module.scss';

// 적립예정 아이템
interface PointItem {
  id: string;
  title: string;
  price?: number;
}

// 적립예정 그룹
interface PointGroup {
  id: string;
  title: string;
  items: PointItem[];
}

interface ExpectedPointProps {
  /** 적립예정 데이터 */
  data?: PointGroup[];
}

export const ExpectedPoint = ({ data }: ExpectedPointProps) => {
  return (
    <>
      <Section
        title="적립내역"
        suffix={
          <>
            <div className={styles.slot}>
              <Text size="5" weight="medium">
                H.point 최대 100P
              </Text>
              <Text size="5" weight="medium">
                현대백화점 마일리지 최대 200P
              </Text>
            </div>
          </>
        }
        variant="collapse"
        defaultSuffix
        className={styles.reward}
      >
        {data?.map((group) => (
          <div key={group.id} className={styles.box}>
            <Heading as="h3" size="3" weight="semibold" indent>
              {group.title}
            </Heading>
            <InfoList variant="between" className={styles.payList}>
              {group.items.map(
                (item) =>
                  item.price !== undefined &&
                  item.price !== 0 && (
                    <InfoItem
                      key={item.id}
                      title={item.title}
                      content={formatNumber(item.price ?? 0) + 'p'}
                    />
                  )
              )}
            </InfoList>
          </div>
        ))}
        <div className={styles.graybox}>
          <Text size="4" color="gray2">
            클럽포인트 적립은 클럽회원 유지 시에만 포인트 적립이 가능합니다.{' '}
          </Text>
        </div>
      </Section>
    </>
  );
};
ExpectedPoint.displayName = 'ExpectedPoint';
