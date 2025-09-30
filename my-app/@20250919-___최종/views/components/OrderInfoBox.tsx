import React from 'react';
import { Box, IconButton, Heading, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './OrderInfoBox.module.scss';

export type OrderInfoRow = {
  title?: string;
  content?: React.ReactNode;
  isCopy?: boolean;
  sideSlot?: React.ReactNode;
  disabled?: boolean;
};

interface OrderInfoBoxProps {
  /** title */
  title?: string;
  /** content */
  content?: React.ReactNode;
  /** 복사 버튼 유무 */
  isCopy?: boolean;
  /** sideSlot */
  sideSlot?: React.ReactNode;
  /** 복사 시 실행되는 콜백 */
  onCopy?: (copiedText: string) => void;
  /** gray 컬러 여부 */
  isGray?: boolean;
  /** 비활성화 상태 여부 */
  disabled?: boolean;
  /** 여러 줄 케이스 */
  rows?: OrderInfoRow[];
}

export const OrderInfoBox = ({
  title,
  content,
  isCopy,
  sideSlot,
  onCopy,
  isGray = false,
  disabled = false,
  rows,
}: OrderInfoBoxProps) => {
  // 문자열일 경우에만 복사 실행
  const tryCopy = (val: React.ReactNode) => {
    if (typeof val === 'string') onCopy?.(val);
  };

  // 단일/복수 케이스 배열로 통일
  const list: OrderInfoRow[] =
    Array.isArray(rows) && rows.length ? rows : [{ title, content, isCopy, sideSlot, disabled }];

  return (
    <Box
      margin="0"
      className={clsx(styles.root, disabled && styles.disabled, isGray && styles.isGray)}
    >
      <dl className={styles.list}>
        {list.map((row, idx) => {
          const rowDisabled = row.disabled ?? disabled;
          const color = rowDisabled ? 'gray3' : isGray ? 'gray1' : 'point';
          const hasTitle = !!row.title; // 타이틀 존재 여부

          return (
            <React.Fragment key={idx}>
              {hasTitle && (
                <dt className={styles.title}>
                  <Heading as="strong" className={styles.tit}>
                    {row.title}
                  </Heading>
                </dt>
              )}
              <dd className={clsx(styles.cont, !hasTitle && styles.full)}>
                <div className={styles.main}>
                  <Text color={color}>{row.content}</Text>
                  {row.isCopy && (
                    <IconButton
                      name="copy"
                      size="small"
                      className={styles.copy}
                      aria-label="복사"
                      onClick={() => tryCopy(row.content)}
                    />
                  )}
                </div>
                {/* dd 내부 우측으로 붙는 사이드 영역 */}
                {row.sideSlot && <span className={styles.side}>{row.sideSlot}</span>}
              </dd>
            </React.Fragment>
          );
        })}
      </dl>
    </Box>
  );
};
