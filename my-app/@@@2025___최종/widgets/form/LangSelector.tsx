'use client';

// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Icon, Select } from '@shared/ui';

// 지원하는 언어 목록 정의
const SUPPORTED_LANGUAGES = [
  { value: 'ko', label: '한국어', nativeName: '한국어' },
  { value: 'en', label: 'English', nativeName: 'English' },
  { value: 'zh', label: '中文', nativeName: '中文' },
  { value: 'ja', label: '日本語', nativeName: '日本語' },
];

export function LangSelector({
  lang = 'ko',
  onChange,
}: {
  lang?: string;
  onChange?: (lang: string) => void;
}) {
  const [selected, setSelected] = useState(lang);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <Select
      options={SUPPORTED_LANGUAGES}
      value={selected}
      onChange={handleChange}
      variant="ghost"
      prefix={<Icon name="global" size="large" />}
    />
  );
}

LangSelector.displayName = 'LangSelector';
