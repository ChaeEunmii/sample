'use client';

import { useState } from 'react';
import { useToast } from '@shared/contexts/ToastContext';
import { Drawer, Button, Text, Chip } from '@shared/ui';

interface InterestCategoryDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

// 관심 카테고리 선택 옵션
const interestOptions = [
  { label: '아트&굿즈', value: 'option-1' },
  { label: '악기', value: 'option-2' },
  { label: '오브제', value: 'option-3' },
  { label: '라이딩', value: 'option-4' },
  { label: '액티브', value: 'option-5' },
  { label: '색다른 취미', value: 'option-6' },
  { label: '리빙', value: 'option-7' },
  { label: '뷰티', value: 'option-8' },
  { label: '패션', value: 'option-9' },
  { label: '백&슈즈', value: 'option-10' },
  { label: '워치&쥬얼리', value: 'option-11' },
];

export default function InterestCategoryDrawer({ isOpen, onClose }: InterestCategoryDrawerProps) {
  const { showToast } = useToast();
  // 관심 카테고리 선택 상태 (다중 선택 → 배열)
  const [interestSelect, setInterestSelect] = useState<string[]>([]);

  // 관심 카테고리 선택 핸들러
  const MIN = 3;
  const MAX = 5;

  const handleInterestSelect = (next: string[] | string) => {
    const arr = Array.isArray(next)
      ? next
      : interestSelect.includes(next)
        ? interestSelect.filter((v) => v !== next)
        : [...interestSelect, next];

    if (arr.length > MAX) {
      showToast(`카테고리는 최대 ${MAX}개까지 선택가능 합니다.`);
      setInterestSelect(Array.isArray(next) ? arr.slice(0, MAX) : interestSelect);
    } else {
      setInterestSelect(arr);
    }
  };

  return (
    <Drawer
      title="관심 카테고리"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Button
          variant="primary"
          size="large"
          onClick={() => {
            if (interestSelect.length < MIN) {
              showToast(`카테고리를 ${MIN}개 이상 선택해주세요.`);
            } else {
              console.log('관심 설정 완료');
            }
          }}
        >
          관심 설정 완료
        </Button>
      }
    >
      <Text size="5" weight="medium" indent>
        고객님의 관심 카테고리를 선택해주세요. ({MIN}개-{MAX}개 선택가능)
      </Text>
      <Chip
        variant="filled"
        size="small"
        columns={'auto'}
        multiple
        name="category-select"
        data={interestOptions}
        selected={interestSelect}
        onChange={handleInterestSelect}
        className="ncp-mt-m ncp-mb-s"
      />
    </Drawer>
  );
}
