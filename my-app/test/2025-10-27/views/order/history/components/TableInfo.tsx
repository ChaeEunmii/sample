'use client';

import { Section, Box, Heading, Text, InfoList, InfoItem } from '@/shared/ui';
import clsx from 'clsx';
import styles from './TableOrderStoreInfo.module.scss';

/**
 * 과거주문내역조회 투홈-테이블정보 섹션
 */

export interface BoxInfoDefineData {
  label: string;
  content: string;
}

interface TableInfoProps {
  /** 데이터 */
  data: BoxInfoDefineData;
  /** 타이틀 변경 시 */
  title?: string;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 기본 열림 여부 */
  defaultOpen?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function TableInfo({
  data,
  title = '테이블정보',
  hideCollapse = false,
  defaultOpen = true,
  className,
}: TableInfoProps) {
  return (
    <Section
      title={title}
      variant={hideCollapse ? 'normal' : 'collapse'}
      level="1"
      flush
      borderTop
      defaultOpen={defaultOpen}
      className={clsx(styles.root, className)}
    >
      <Box margin="0" size="3" className={styles.box}>
        <InfoList variant="line" gap="row16" gridColumns="auto">
          <InfoItem
            title={
              <Heading size="3" color="black">
                {data.label}
              </Heading>
            }
            content={
              <Text size="5" color="gray1">
                {data.content}
              </Text>
            }
          />
        </InfoList>
      </Box>
    </Section>
  );
}
