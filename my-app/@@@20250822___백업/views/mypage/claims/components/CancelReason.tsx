'use client';

import { useState } from 'react';
import { Section, Text, Chip, FormArea, FormItem } from '@shared/ui';
import styles from './CancelReason.module.scss';
import clsx from 'clsx';

/**
 * 취소사유를 알려주세요 영역
 */

// 취소 사유 선택 옵션
const reasonOptions = [
  { label: '단순변심', value: 'reason-1' },
  { label: '유사상품 구입', value: 'reason-2' },
  { label: '가격 불만', value: 'reason-3' },
  { label: '기타', value: 'reason-4' },
];

interface CancelReasonProps {
  /** 타이틀 */
  title?: string;
}

export const CancelReason = ({ title = '취소 사유를 알려주세요' }: CancelReasonProps) => {
  const [reasonSelect, setReasonSelect] = useState<string>('reason-1');
  // 취소 사유 선택
  const handleReasonSelect = (value: string) => {
    setReasonSelect(value);
  };

  return (
    <Section variant="normal" title={title} level="1" borderTop flush className={clsx(styles.root)}>
      <FormArea className="ncp-mt-x0">
        <FormItem title="취소 사유 선택">
          <Chip
            selected={reasonSelect}
            onChange={handleReasonSelect}
            variant="filled"
            size="small"
            columns={'auto'}
            data={reasonOptions}
            name="cancel-reason-select"
          />
        </FormItem>
      </FormArea>
      <Text size="3" color="gray3" className={styles.info}>
        부분 취소 시에는 카드사에 취소 정보가 3일 내로 반영될 예정입니다. 이 점 유의해 주세요.
      </Text>
    </Section>
  );
};
