'use client';

import { FormItem, Select, Input, Button, Stack } from '@shared/ui';
import styles from './AccountAuth.module.scss';

// 은행 선택 옵션
const bankOptions = [
  { value: 'bank1', label: '은행 1' },
  { value: 'bank2', label: '은행 2' },
];

interface AccountAuthProps {
  /** 선택된 은행 */
  bankSelected: string;
  /** 입력된 계좌번호 */
  accountNum: string;
  /** 계좌 인증 완료 여부 */
  isAccountAuth: boolean;
  /** 예금주 이름 */
  holderName?: string;
  /** 은행 선택 변경 핸들러 */
  onChangeBank: (value: string) => void;
  /** 계좌번호 입력 변경 핸들러 */
  onChangeAccountNum: (value: string) => void;
  /** 계좌 인증 버튼 클릭 핸들러 */
  onAuth: () => void;
  /** 계좌 변경(리셋) 버튼 핸들러 */
  onReset: () => void;
}

export function AccountAuth({
  bankSelected,
  accountNum,
  isAccountAuth,
  holderName,
  onChangeBank,
  onChangeAccountNum,
  onAuth,
  onReset,
}: AccountAuthProps) {
  return (
    <>
      <FormItem
        label="계좌번호"
        required
        desc="반드시 예금주와 실명이 일치하는 입출금 계좌를 입력하세요."
      >
        <Select
          options={bankOptions}
          size="large"
          placeholder="은행 선택"
          value={bankSelected}
          onChange={onChangeBank}
          disabled={isAccountAuth}
        />

        <Stack type="field" className={styles.stack}>
          <Input
            type="number"
            size="large"
            placeholder="계좌번호 입력"
            value={accountNum}
            onChange={(e) => onChangeAccountNum(e.target.value)}
            readOnly={isAccountAuth}
          />

          {!isAccountAuth && (
            <Button variant="primary" size="large" className={styles.btn} onClick={onAuth}>
              계좌 인증하기
            </Button>
          )}
        </Stack>
      </FormItem>

      {isAccountAuth && (
        <FormItem label="예금주">
          <Stack type="field" className={styles.stack}>
            <Input size="large" value={holderName} readOnly />
            <Button size="large" className={styles.btn} onClick={onReset}>
              계좌 변경하기
            </Button>
          </Stack>
        </FormItem>
      )}
    </>
  );
}
