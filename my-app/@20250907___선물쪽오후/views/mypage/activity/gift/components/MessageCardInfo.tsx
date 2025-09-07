'use client';

import React from 'react';
import { TitleBar, Text } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
// 공통 모듈
import { MessageCardForm } from '@/widgets/form';
import type { SentMessageCardData } from '@/widgets/form/MessageCardForm';
import clsx from 'clsx';
import styles from './MessageCardInfo.module.scss';

export interface MessageCardInfoProps {
  /** 타이틀 (기본: 내가 보낸 메세지) */
  title?: string;
  /** 우측 날짜 표시 */
  date?: string;
  /** TitleBar 숨김 여부 */
  hideTitleBar?: boolean;
  /** MessageCardForm에 전달할 데이터 */
  sentData: SentMessageCardData;
  /** 추가적인 클래스 */
  className?: string;
}

export function MessageCardInfo({
  title = '내가 보낸 메세지',
  date,
  hideTitleBar = false,
  sentData,
  className,
}: MessageCardInfoProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {!hideTitleBar && (
        <TitleBar
          type="docs"
          title={title}
          side={
            date && (
              <Text as="span" size="4" color="gray3">
                {formatDate(date, 'dot')}
              </Text>
            )
          }
        />
      )}
      <MessageCardForm isMessageCard disableEdit sentData={sentData} />
    </div>
  );
}
