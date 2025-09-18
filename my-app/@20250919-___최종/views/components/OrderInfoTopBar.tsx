'use client';

import { Heading, TextButton, Stack } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import styles from './OrderInfoTopBar.module.scss';

type OrderInfoTopBarProps = {
  /** 스타일 */
  variant?: 'default' | 'small';
  /** 날짜 */
  date: string;
  /** 주문상세 버튼 텍스트 (기본값: '주문상세') */
  detailLabel?: string;
  /** 타이틀 상단 슬롯 (날짜 왼쪽) */
  titleSlot?: React.ReactNode;
  /** 우측영역 슬롯 */
  sideAreaSlot?: React.ReactNode;
  /** 주문상세 버튼 클릭 핸들러 */
  onClickDetail?: () => void;
};

export function OrderInfoTopBar({
  variant = 'default',
  date,
  detailLabel,
  titleSlot,
  sideAreaSlot,
  onClickDetail,
}: OrderInfoTopBarProps) {
  // 스타일 small일 때
  const isVariantSmall = variant === 'small';

  // 타이틀 우측 노출조건
  const showSideArea = detailLabel || sideAreaSlot;
  return (
    <div className={styles.infoTop}>
      <Stack type="between">
        <div className={styles.titWrap}>
          {titleSlot && titleSlot}
          <Heading
            size={isVariantSmall ? '3' : '6'}
            weight={isVariantSmall ? 'semibold' : 'bold'}
            className={styles.tit}
          >
            {formatDate(date, 'dot')}
          </Heading>
        </div>
        {showSideArea && (
          <div className={styles.side}>
            {detailLabel && (
              <TextButton
                size="1"
                suffixIcon="arrowRight"
                iconSize="xsmall"
                onClick={onClickDetail}
              >
                {detailLabel}
              </TextButton>
            )}
            {sideAreaSlot && sideAreaSlot}
          </div>
        )}
      </Stack>
    </div>
  );
}
