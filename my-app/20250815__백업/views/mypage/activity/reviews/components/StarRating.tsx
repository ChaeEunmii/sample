'use client';

import React, { useState } from 'react';
import { Text, Icon, TitleBar, Box } from '@shared/ui';
import styles from './StarRating.module.scss';
import clsx from 'clsx';

// 별점 라벨
const ratingLabels = ['별로예요', '그저 그래요', '괜찮네요', '맘에 들어요', '최고예요!'];

/** 컴포넌트 Props 정의 */
export type StarRatingProps = {
  /** 타이틀 변경 시  */
  title?: string;
  /** margin top 설정 (0, 24, 32, 40) : 기본 3 */
  margin?: '0' | '1' | '2' | '3';
  /** 추가 클래스명 */
  className?: string;
  /** 별 개수 (기본 5) */
  starCount?: number;
  /** 외부 제어 값(제어 컴포넌트). 0~5 */
  value?: number;
  /** 초기값(비제어 컴포넌트). 0~5 */
  defaultValue?: number;
  /** 값 변경 콜백 */
  onChange?: (next: number) => void;
};

export const StarRating = ({
  title = '상품은 어떠셨나요?',
  margin = '3',
  className,
  starCount = 5,
  value,
  defaultValue = 0,
  onChange,
}: StarRatingProps) => {
  // 1~5 숫자 배열 생성 (별 개수)
  const stars = Array.from({ length: starCount }, (_, i) => i + 1);

  // 제어/비제어 판단
  const isControlled = value !== undefined;
  const clamp = (n: number) => Math.max(0, Math.min(5, n));

  // 비제어용 내부 상태
  const [internal, setInternal] = useState<number>(clamp(defaultValue));

  // 현재 표시 값
  const rating = isControlled ? clamp(value!) : internal;

  const handleSelect = (star: number) => {
    // 첫 번째 별 다시 누르면 0으로 리셋(기존 동작 유지)
    const next = rating === 1 && star === 1 ? 0 : star;

    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  // 표시할 라벨 텍스트
  const labelText = rating ? ratingLabels[rating - 1] : '선택해주세요';

  return (
    <div className={clsx(styles.wrap, margin && styles[`mt${margin}`], className)}>
      <TitleBar
        type="docs"
        title={title}
        level="2"
        side={
          <Text as="span" size="5" weight="medium" color={rating > 0 ? 'point' : 'gray3'}>
            {labelText}
          </Text>
        }
      />
      <Box margin="0" className={styles.box}>
        {stars.map((star) => (
          <button
            type="button"
            key={star}
            className={clsx(styles.star, rating >= star && styles.active)}
            onClick={() => handleSelect(star)}
            aria-label={`${star}점`}
          >
            <Icon name="rating" size="large" className={styles.icon} />
          </button>
        ))}
      </Box>
    </div>
  );
};
