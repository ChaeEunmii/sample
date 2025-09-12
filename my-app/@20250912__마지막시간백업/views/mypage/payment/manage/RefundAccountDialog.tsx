'use client';

import { useState } from 'react';
import { Dialog, Button, Select, Input, FormArea, FormItem, TextList, TitleBar } from '@shared/ui';

interface RefundAccountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RefundAccountDialog({ isOpen, onClose }: RefundAccountDialogProps) {
  const [selected, setSelected] = useState('');

  return (
    <Dialog
      title="환불계좌 정보"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button size="large">취소</Button>
          <Button variant="primary" size="large">
            계좌인증
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem label="예금주" error="계좌번호를 입력해 주세요." required>
          <Input value="김*대" size="large" readOnly />
          <Select
            options={[
              { value: 'option1', label: '은행 1' },
              { value: 'option2', label: '은행 2' },
            ]}
            value={selected}
            onChange={setSelected}
            size="large"
            placeholder="은행을 선택해 주세요"
            className="ncp-mt-xs"
          />
          <Input
            type="number"
            size="large"
            placeholder="계좌번호를 입력해 주세요"
            className="ncp-mt-xs"
            invalid
          />
        </FormItem>
      </FormArea>
      <TitleBar type="docs" title="환불계좌 등록 안내" level="3" className="ncp-mt-l" />
      <TextList
        variant="info"
        data={[
          '환불계좌는 본인 명의의 계좌번호만 등록/변경 가능합니다.',
          '인증번호가 도착하지 않을 시에는 재발송을 해주세요',
          '아래의 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 처리하는데 최선을 다하고 있습니다. 아래의 내용을 확인 후 동의해 주세요.',
        ]}
        className="ncp-mt-xs"
      />
    </Dialog>
  );
}
