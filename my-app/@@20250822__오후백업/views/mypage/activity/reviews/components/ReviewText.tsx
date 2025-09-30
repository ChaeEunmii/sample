'use client';

import { useState, useEffect } from 'react';
import { Section, Textarea } from '@shared/ui';

type ReviewTextProps = {
  /** 섹션 제목 */
  title?: string;
  /** 입력창 placeholder 문구 */
  placeholder?: string;
  /** 최대 글자 수 */
  maxLength?: number;
  /** 값 (제어 컴포넌트) */
  value?: string;
  /** 텍스트 변경 시 부모로 전달할 콜백 */
  onChange?: (value: string) => void;
};

export function ReviewText({
  title = '꿀팁 가득! 자세한 리뷰를 작성해 보세요 (필수)',
  placeholder = '본 체험단 리뷰는 1,000자 이상 작성 필수입니다.\n상품 특성, 사용 경험, 꿀팁을 자세히 작성해 주세요.\n정성스러운 리뷰는 다른 고객에게 큰 도움이 됩니다.',
  maxLength = 2000,
  value,
  onChange,
}: ReviewTextProps) {
  // 입력값 상태 — 초기값은 외부 value가 있으면 그걸 사용
  const [text, setText] = useState(value ?? '');

  // 상태를 동기화
  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  // 입력 변경 시 내부 상태 업데이트 + 부모 콜백 호출
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = e.target.value;
    setText(nextValue);
    onChange?.(nextValue);
  };

  return (
    <Section variant="section" title={title} marginTop="4">
      <Textarea
        value={text}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
      />
    </Section>
  );
}
