'use client';

import { FormArea, FormItem, Stack, Input, Button } from '@shared/ui';
import clsx from 'clsx';
import styles from './HbssAuthForm.module.scss';

interface HbssAuthFormProps {
  /** 이름 */
  name: string;
  /** 휴대폰 번호 */
  phone: string;
  /** 인증번호 */
  code: string;
  /** 인증 여부 */
  isAuth: boolean;
  /** 값 변경 핸들러 */
  onChange: (field: 'name' | 'phone' | 'code', value: string) => void;
  /** 인증 버튼 클릭 핸들러 */
  onSendAuth: () => void;
  /** placeholder 텍스트 */
  placeholders?: {
    name?: string;
    phone?: string;
    code?: string;
  };
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function HbssAuthForm({
  name,
  phone,
  code,
  isAuth,
  onChange,
  onSendAuth,
  placeholders = {},
  className,
}: HbssAuthFormProps) {
  return (
    <FormArea className={clsx(styles.root, className)}>
      <FormItem label="이름">
        <Input
          value={name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder={placeholders.name || '이름을 입력해 주세요.'}
          clearable={false}
          size="large"
        />
      </FormItem>
      <FormItem label="휴대폰 번호">
        <Stack type="field" className={styles.stack}>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder={placeholders.phone || '휴대폰 번호 입력 (01012345678)'}
            clearable={false}
            size="large"
          />
          <Button
            variant={isAuth ? 'secondary' : 'primary'}
            size="large"
            className={styles.btn}
            onClick={onSendAuth}
          >
            {isAuth ? '재발송' : '인증번호 발송'}
          </Button>
        </Stack>
      </FormItem>

      <FormItem label="인증번호">
        <Input
          type="number"
          value={code}
          onChange={(e) => onChange('code', e.target.value)}
          placeholder={placeholders.code || '인증번호 입력'}
          clearable={false}
          size="large"
        />
      </FormItem>
    </FormArea>
  );
}
