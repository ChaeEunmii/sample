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
  options,
}: {
  lang?: string;
  onChange?: (lang: string) => void;
  options?: string[];
}) {
  // props로 받은 옵션에 해당하는 언어만 필터링
  const filteredLanguages =
    options && options.length > 0
      ? SUPPORTED_LANGUAGES.filter((langItem) => options.includes(langItem.value))
      : SUPPORTED_LANGUAGES;

  const [selected, setSelected] = useState(lang);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <Select
      options={filteredLanguages}
      value={selected}
      onChange={handleChange}
      variant="ghost"
      prefix={<Icon name="global" size="large" />}
    />
  );
}

LangSelector.displayName = 'LangSelector';
