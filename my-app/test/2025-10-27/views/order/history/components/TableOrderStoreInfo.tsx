'use client';

import { Section, Box, Text, ButtonArea, Button } from '@/shared/ui';
import clsx from 'clsx';
import styles from './TableOrderStoreInfo.module.scss';

/**
 * 과거주문내역조회 상세
 * @description '테이블오더 매장정보' 컴퍼넌트
 */

export interface TableOrderStoreInfoData {
  /** 주소 */
  defaultAddress: string;
  /** 상세주소 */
  detailedAddress?: string;
}

interface TableOrderStoreInfoProps {
  /** 데이터 */
  data: TableOrderStoreInfoData;
  /** 타이틀 변경 시 */
  title?: string;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 기본 열림 여부 */
  defaultOpen?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function TableOrderStoreInfo({
  data,
  title = '테이블오더 매장정보',
  hideCollapse = false,
  defaultOpen = true,
  className,
}: TableOrderStoreInfoProps) {
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
        <div className={styles.info}>
          <Text as="span" size="4" color="gray2">
            {data.defaultAddress}
          </Text>
          <Text as="span" size="4" color="gray2">
            {data.detailedAddress}
          </Text>
        </div>
        <ButtonArea margin="3">
          <Button size="small" variant="tertiary">
            위치보기
          </Button>
          <Button size="small" variant="tertiary">
            전화하기
          </Button>
        </ButtonArea>
      </Box>
    </Section>
  );
}
