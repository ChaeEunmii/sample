'use client';

import { Text, TextButton } from '@/shared/ui';
import styles from './UnmaskInfoBlock.module.scss';

// ko: 한국어, en: 영어, zh: 중국어, ja: 일본어
type Lang = 'ko' | 'en' | 'zh' | 'ja';

type UnmaskLabels = { title?: string; btn?: string };

interface UnmaskInfoBlockProps {
  /** 타이틀 텍스트 */
  title?: string;
  /** 주입이 없을 때 사용할 기본 라벨 언어 */
  lang?: Lang;
  /** 외부에서 라벨 주입 (최우선) */
  labels?: Partial<UnmaskLabels>;
  /** 마스크해제 버튼 이벤트 */
  onUnmaskClick?: () => void;
}

// 언어별 라벨 모음 임시
const DEFAULT_LABELS: Record<Lang, { title: string; btn: string }> = {
  ko: {
    title: '본인인증 후 가려진 정보를 확인하세요.',
    btn: '마스킹 해제',
  },
  en: {
    title: 'Check the hidden information after self-identification.',
    btn: 'Unmasking',
  },
  zh: {
    title: 'Check the hidden information after self-identification.',
    btn: 'Unmasking',
  },
  ja: {
    title: 'Check the hidden information after self-identification.',
    btn: 'Unmasking',
  },
};

export const UnmaskInfoBlock = ({
  title,
  lang = 'ko',
  labels,
  onUnmaskClick,
}: UnmaskInfoBlockProps) => {
  // 마스크해제 클릭 핸들러
  const handleUnmask = () => {
    onUnmaskClick?.();
  };

  // 최종 라벨: 주입 > 기본
  const base = DEFAULT_LABELS[lang] ?? DEFAULT_LABELS.ko;
  const L: UnmaskLabels = { ...base, ...(labels ?? {}) };

  return (
    <div className={styles.wrap}>
      <Text size="4" indent>
        {title || L.title}
      </Text>
      <TextButton variant="underline" size="1" color="gray3" onClick={handleUnmask}>
        {L.btn}
      </TextButton>
    </div>
  );
};
