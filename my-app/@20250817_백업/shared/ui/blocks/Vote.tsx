'use client';

// 라이브러리
import { useState, memo, useCallback, useMemo } from 'react';
// 컴포넌트
import { Text, Heading, Grid } from '@shared/ui';
// 유틸
import { formatDate, toDate } from '@shared/utils/ui';
// 스타일
import styles from './Vote.module.scss';
import clsx from 'clsx';

// 타입 정의
interface VoteOption {
  id: string;
  label: string;
  /** 기존 진행된 투표수 */
  count?: number;
}

export interface VoteProps {
  /** 투표주제 */
  title: string;
  /** 투표기간 */
  date?: {
    start: Date | string;
    end: Date | string;
  };
  options: VoteOption[];
  isResult?: boolean;
  onVote?: (optionId: string) => void;
  /** 추가 클래스명 */
  className?: string;
  /** 커스텀 투표 옵션 렌더링 함수 */
  renderOption?: (option: VoteOption, onVote: (optionId: string) => void) => React.ReactNode;
}

// 각 투표 옵션 분리 및 메모이제이션
const VoteOptionItem = memo(
  ({
    option,
    onVote,
    renderOption,
  }: {
    option: VoteOption;
    onVote: (optionId: string) => void;
    renderOption?: (option: VoteOption, onVote: (optionId: string) => void) => React.ReactNode;
  }) => {
    const handleVote = useCallback(() => onVote(option.id), [option.id, onVote]);

    if (renderOption) {
      return <>{renderOption(option, handleVote)}</>;
    }

    // 기본 투표 버튼
    return (
      <button type="button" className={styles.button} onClick={handleVote}>
        {option.label}
      </button>
    );
  }
);

VoteOptionItem.displayName = 'VoteOptionItem';

export const Vote = ({
  title,
  date,
  options,
  isResult = false,
  onVote,
  className,
  renderOption,
}: VoteProps) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleVote = useCallback(
    (optionId: string) => {
      setSelectedOptionId(optionId);
      setHasVoted(true);
      onVote?.(optionId);
    },
    [onVote]
  );

  const totalVotes = options.reduce((sum, option) => sum + (option.count || 0), 0);

  const VoteItems = useMemo(
    () => (
      <Grid gutter={16} margin="2">
        {options.map((option) => (
          <VoteOptionItem
            key={option.id}
            option={option}
            onVote={handleVote}
            renderOption={renderOption}
          />
        ))}
      </Grid>
    ),
    [options, handleVote, renderOption]
  );

  // 결과 화면
  const renderContent = (option: VoteOption, percentage: number) => (
    <>
      <Text as="span" weight="semibold">
        {option.label}
      </Text>
      <div className={styles.stats}>
        <Text as="strong" size="6">
          {percentage}%
        </Text>{' '}
        <Text as="span" size="3" color="gray3">
          ({option.count || 0})
        </Text>
      </div>
    </>
  );

  const VoteResult = useMemo(
    () => (
      <Grid gutter={24} margin="2">
        {options.map((option) => {
          const voteCount = option.count || 0;
          const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
          const maxVotes = Math.max(...options.map((opt) => opt.count || 0));
          const isHighest = voteCount === maxVotes && voteCount > 0;

          return (
            <div key={option.id} className={clsx(styles.result, isHighest && styles.highest)}>
              {/* 기본 텍스트 */}
              <div className={styles.content}>{renderContent(option, percentage)}</div>

              {/* 마스킹용 흰색 텍스트 */}
              {isHighest && (
                <div
                  className={clsx(styles.content, styles.masked)}
                  aria-hidden="true"
                  style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
                >
                  {renderContent(option, percentage)}
                </div>
              )}
              <span className={styles.progress} style={{ width: `${percentage}%` }} />
            </div>
          );
        })}
      </Grid>
    ),
    [options, renderContent]
  );

  return (
    <div className={clsx(styles.root, className)}>
      {/* 투표 제목 */}
      <Heading size="4" weight="bold" className={styles.title} indent>
        {title}
      </Heading>

      {/* 투표 정보 */}
      <ul className={styles.info}>
        {date && (
          <li>
            투표 기간 {formatDate(toDate(date.start), 'dot')} -{' '}
            {formatDate(toDate(date.end), 'dot')}
          </li>
        )}
        <li>{totalVotes}명이 투표했어요</li>
      </ul>

      {/* 투표 버튼들 or 결과 화면 */}
      {hasVoted || isResult ? VoteResult : VoteItems}
    </div>
  );
};

Vote.displayName = 'Vote';
