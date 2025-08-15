// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { TitleBar, Progress, Box, Icon, TextButton, Text } from '@shared/ui';
// 스타일
import styles from './ReviewSummary.module.scss';
import clsx from 'clsx';

interface Trait {
  title: string;
  items: { label: string; value: number }[];
}

interface ReviewSummaryProps {
  rating?: number;
  data: Trait[];
}

export const ReviewSummary = ({ rating, data }: ReviewSummaryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <article>
      <TitleBar
        level="2"
        title="상품리뷰"
        side={
          <div className={styles.rating}>
            <Icon name="rating" label="별점" />
            <Text as="strong" size="7" weight="bold">
              {rating ?? 0}
            </Text>
          </div>
        }
      />

      <Box size="3">
        {data.map((trait, idx) => {
          const total = trait.items.reduce((sum, item) => sum + item.value, 0);
          const max = Math.max(...trait.items.map((i) => i.value));
          const isHidden = (val: number) => !isExpanded && val !== max;

          return (
            <dl className={styles.trait} key={idx}>
              <dt className={styles.label}>{trait.title}</dt>

              <dd className={styles.group}>
                {trait.items.map((item, itemIdx) => (
                  <Progress
                    key={itemIdx}
                    label={item.label}
                    value={item.value}
                    max={total}
                    color={item.value !== max ? 'gray' : undefined}
                    className={clsx(isHidden(item.value) && styles.hidden)}
                  />
                ))}
              </dd>
            </dl>
          );
        })}
      </Box>
      <div className={styles.more}>
        <TextButton
          suffixIcon={isExpanded ? 'arrowUp' : 'arrowDown'}
          iconSize="xsmall"
          color="gray3"
          onClick={handleExpand}
        >
          {isExpanded ? '접기' : '더보기'}
        </TextButton>
      </div>
    </article>
  );
};
