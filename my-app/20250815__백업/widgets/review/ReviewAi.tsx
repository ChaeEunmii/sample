// 라이브러리
import { useState, useRef, useEffect } from 'react';
// 컴포넌트
import { TextButton, TitleBar, Tag } from '@shared/ui';
// 스타일
import styles from './ReviewAi.module.scss';
import clsx from 'clsx';

interface TagItem {
  value: string;
  label: string;
  selected?: boolean;
}

interface ReviewAiProps {
  tags: TagItem[];
}

export const ReviewAi = ({ tags }: ReviewAiProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tagsRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(!isExpanded);

  const handleTagToggle = (tagId?: string, selected?: boolean) => {
    if (!tagId) return;

    setSelectedTags((prev) => (selected ? [...prev, tagId] : prev.filter((id) => id !== tagId)));
  };

  useEffect(() => {
    if (!tagsRef.current) return;

    const checkOverflow = () => {
      const el = tagsRef.current;
      if (!el) return;

      // 스크롤 높이가 클라이언트 높이보다 크면 더보기 버튼 노출
      const hasOverflow = el.scrollHeight > el.clientHeight;
      setShowButton(hasOverflow);
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <article className={styles.root}>
      <TitleBar
        level="2"
        title="AI 상품평"
        tip="AI 상품평은 생성형 A I기술을 활용해 상품평의 키워드를 분석하고, 상품평 수 및 상품
              특성을 반영하여 제공되는 서비스 입니다."
      />
      <div className={clsx(styles.tags, !isExpanded && styles.collapse)} ref={tagsRef}>
        {tags.map((tag) => (
          <Tag
            key={tag.value}
            id={tag.value}
            selected={selectedTags.includes(tag.value)}
            onToggle={handleTagToggle}
          >
            {tag.label}
          </Tag>
        ))}
      </div>
      {showButton && (
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
      )}
    </article>
  );
};
