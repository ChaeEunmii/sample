'use client';

import { FormArea, FormItem, Input } from '@shared/ui';

interface GroupFormProps {
  name: string;
  desc: string;
  onChangeName: (value: string) => void;
  onChangeDesc: (value: string) => void;
}

export default function GroupForm({ name, desc, onChangeName, onChangeDesc }: GroupFormProps) {
  return (
    <FormArea type="vertical">
      <FormItem label="상품 그룹 명" required>
        <Input
          value={name}
          onChange={(e) => onChangeName(e.currentTarget.value)}
          placeholder="상품그룹명 입력 (15자 이내)"
          size="large"
        />
      </FormItem>
      <FormItem label="상품 그룹 설명">
        <Input
          value={desc}
          onChange={(e) => onChangeDesc(e.currentTarget.value)}
          placeholder="상품그룹설명 입력 (20자 이내)"
          size="large"
        />
      </FormItem>
    </FormArea>
  );
}
