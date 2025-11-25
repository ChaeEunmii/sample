'use client';

import { FormArea, FormItem, Input } from '@shared/ui';

interface ProdGroupFormProps {
  name: string;
  desc: string;
  onChangeName: (value: string) => void;
  onChangeDesc: (value: string) => void;
}

export default function ProdGroupForm({
  name,
  desc,
  onChangeName,
  onChangeDesc,
}: ProdGroupFormProps) {
  return (
    <FormArea type="vertical">
      <FormItem label="상품 그룹 제목" required>
        <Input
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="상품그룹명 입력 (15자 이내)"
          size="large"
        />
      </FormItem>
      <FormItem label="상품 그룹 설명">
        <Input
          value={desc}
          onChange={(e) => onChangeDesc(e.target.value)}
          placeholder="상품 그룹 설명 입력 (20자 이내)"
          size="large"
        />
      </FormItem>
    </FormArea>
  );
}
