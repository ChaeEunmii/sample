'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleBar, Select } from '@shared/ui';

// 약관옵션
const policyOptions = [
  {
    label: 'v5.0 2025년 04월 16일',
    value: 'option1',
  },
  {
    label: 'v4.9 2025년 04월 15일',
    value: 'option2',
  },
];

export default function PrivacyInfoOutsourcing() {
  const [val, setVal] = useState('option1');

  return (
    <Container showBack title="개인정보 처리 위탁">
      <Contents>
        <TitleBar type="docs" title="시행일자 별 이용약관" />
        <Select
          title="시행일자 별 이용약관"
          onChange={setVal}
          options={policyOptions}
          value={val}
          size="large"
          useNative
        />
        {/* 약관 내용 */}
        <div className="ncp-mt-m">
          개인정보 처리 위탁
          <br />
          약관 내용 출력
        </div>
      </Contents>
    </Container>
  );
}
