'use client';

import { useState } from 'react';
import { Text, FormArea, FormItem, Input, RadioGroup, Checkbox } from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import clsx from 'clsx';
import styles from './CashReceipt.module.scss';

// 현금영수증 옵션
const CASH_RECEIPT_OPTIONS = [
  { label: '소득공제용', value: 'deduction' },
  { label: '지출증빙용', value: 'proof' },
  { label: '미발행', value: 'none' },
];

interface CashReceiptProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** flush 여부 */
  flush?: boolean;
  /** 기본열림 여부 */
  defaultOpen?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const CashReceipt = ({
  hideCollapse,
  borderTop,
  flush,
  defaultOpen = false,
  className,
}: CashReceiptProps) => {
  // 현금영수증 발행 상태 관리
  const [value, setValue] = useState('deduction');

  // 현재 선택된 옵션 찾기
  const selectedLabel = CASH_RECEIPT_OPTIONS.find((option) => option.value === value)?.label ?? '';

  return (
    <>
      <Section
        title="현금 영수증"
        suffix={
          <Text as="span" size="5" weight="medium">
            {selectedLabel}
          </Text>
        }
        variant={hideCollapse ? 'normal' : 'collapse'}
        borderTop={borderTop}
        flush={flush}
        defaultOpen={defaultOpen}
        className={clsx(styles.section, className)}
      >
        <Text color="gray1" indent>
          선택한 결제수단의 현금결제(계좌) 시 현금영수증이 발급됩니다.
        </Text>
        <RadioGroup
          name="cashReceipt"
          defaultValue="deduction"
          options={CASH_RECEIPT_OPTIONS}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.cashReceipt}
        />
        {value !== 'none' && (
          <>
            <FormArea type="vertical">
              <FormItem
                label={value === 'deduction' ? '휴대폰번호' : '지출증빙용'}
                error={
                  value === 'deduction'
                    ? '연락처를 숫자만 입력해 주세요.'
                    : '사업자등록번호를 숫자만 입력해 주세요.'
                }
              >
                <Input
                  type={value === 'deduction' ? 'tel' : 'text'}
                  size="large"
                  placeholder={'숫자만 입력 (하이픈 제외)'}
                />
              </FormItem>
            </FormArea>
            <Checkbox
              label="현금영수증 정보를 다음에도 사용"
              size="small"
              defaultChecked
              className={styles.useNext}
            />
          </>
        )}
      </Section>
    </>
  );
};
CashReceipt.displayName = 'CashReceipt';
