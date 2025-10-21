'use client';

import { Section, Box, Text } from '@/shared/ui';
import clsx from 'clsx';
import styles from './TableOrderStoreInfo.module.scss';

/**
 * 과거주문내역조회 상세
 * @description 컨텐츠가 박스안에 단일 텍스트 들어가는 레이아웃용 컴퍼넌트
 */

export interface BoxInfoData {
  content: string;
}

export interface BoxInfoDefineData {
  label?: string;
  content: string;
}

interface BoxInfoProps {
  /** 데이터 */
  data: BoxInfoData | BoxInfoDefineData;
  /** 타이틀 변경 시 */
  title?: string;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 기본 열림 여부 */
  defaultOpen?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function BoxInfo({
  data,
  title = '정보',
  hideCollapse = false,
  defaultOpen = true,
  className,
}: BoxInfoProps) {
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
        <Text as="span" size="5" color="gray1">
          {data.content}
        </Text>
      </Box>
    </Section>
  );
}
