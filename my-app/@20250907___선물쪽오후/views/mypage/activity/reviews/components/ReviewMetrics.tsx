'use client';

import { useState } from 'react';
import { FormArea, FormItem, Chip, Section, TextButton } from '@shared/ui';
import styles from './ReviewMetrics.module.scss';
import clsx from 'clsx';

export type MetricField = {
  key: string;
  title: string;
  options: { label: string; value: string }[];
};

type ReviewMetricsProps = {
  data: MetricField[];
  value: Record<string, string>; // 선택값 맵
  onChange: (next: Record<string, string>) => void; // 전체 맵 반환
  gap?: '2' | '3' | '4';
  className?: string;
};

export function ReviewMetrics({ data, value, onChange, gap = '3', className }: ReviewMetricsProps) {
  // 펼치기 상태
  const [isExpanded, setIsExpanded] = useState(false);

  // 펼치기/접기 토글 핸들러
  const handleExpand = () => setIsExpanded(!isExpanded);

  const handleChange = (key: string) => (nextVal: string) => {
    onChange({ ...value, [key]: nextVal });
  };

  // 5개 이상일 때 접기/펼치기 적용
  const visibleData = data.length > 5 && !isExpanded ? data.slice(0, 5) : data;

  return (
    <Section
      variant="section"
      title="각 항목별로 상품을 평가해 주세요 (필수)"
      marginTop="4"
      className={clsx(styles.wrap, className)}
    >
      <FormArea type="vertical" gap={gap}>
        {visibleData.map(({ key, title, options }) => (
          <FormItem key={key} title={title}>
            <Chip
              variant="filled"
              columns="auto"
              size="small"
              name={`review-${key}`}
              data={options}
              selected={value[key] ?? ''}
              onChange={handleChange(key)}
            />
          </FormItem>
        ))}
      </FormArea>
      {/* 5개 이상일 때만 버튼 표시 */}
      {data.length > 5 && (
        <div className={styles.more}>
          <TextButton
            suffixIcon={isExpanded ? 'arrowUp' : 'arrowDown'}
            iconSize="xsmall"
            onClick={handleExpand}
          >
            {isExpanded ? '접기' : '펼치기'}
          </TextButton>
        </div>
      )}
    </Section>
  );
}
