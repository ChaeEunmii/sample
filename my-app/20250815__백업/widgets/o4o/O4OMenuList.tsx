'use client';

import React from 'react';
import { Box, Text, Section, TextButton, Icon } from '@/shared/ui';
import { O4OList } from '@/widgets/product';
import { ExtendedO4OItem } from '@/widgets/product/O4OList';
import clsx from 'clsx';
import styles from './O4OMenuList.module.scss';

interface O4OMenuListProps {
  title?: string;
  /** 주문 메뉴 데이터 */
  data?: ExtendedO4OItem[];
  /** 텍스트배너 슬롯 */
  textBanner?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

export const O4OMenuList = ({ title = '메뉴', data, textBanner, className }: O4OMenuListProps) => {
  return (
    <Section
      title={title}
      variant="section"
      suffix={
        <TextButton
          size="1"
          color="gray3"
          suffixIcon="arrowRight"
          iconSize="xsmall"
          onClick={() => {}}
        >
          원산지 정보
        </TextButton>
      }
      className={className}
    >
      {textBanner && (
        <Box size="3">
          <div className={styles.textBanner}>
            <Icon name="caution" size="small" />
            <Text size="4" className="ncp-mt-x0">
              {textBanner}
            </Text>
          </div>
        </Box>
      )}
      <O4OList data={data} variant="default" gap="16" className={clsx(textBanner && 'ncp-mt-m')} />
    </Section>
  );
};

O4OMenuList.displayName = 'O4OMenuList';
