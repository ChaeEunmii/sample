// 컴포넌트
import { Icon, Tag, Image, Carousel } from '@shared/ui';
// 스타일
import styles from './BrandTags.module.scss';
import clsx from 'clsx';

export interface BrandItem {
  id: string;
  name: string;
  image?: string;
}

interface BrandTagsProps {
  variant?: 'list' | 'add';
  data: BrandItem[];
  className?: string;
  onTagClose?: (id: string) => void;
  onAddClick?: () => void;
}

export const BrandTags = ({
  variant = 'list',
  data,
  className,
  onTagClose,
  onAddClick,
}: BrandTagsProps) => {
  const handleTagClose = (id: string) => {
    onTagClose?.(id);
  };

  const renderTags = () => {
    return data.map((tag) => (
      <Tag
        key={tag.id}
        size="large"
        onClose={variant === 'add' ? () => handleTagClose(tag.id) : undefined}
      >
        {tag.image && <Image className={styles.image} src={tag.image} />}
        {tag.name}
      </Tag>
    ));
  };

  if (data.length === 0) return;
  return (
    <>
      {variant === 'list' ? (
        <Carousel
          slides={renderTags()}
          spaceBetween={8}
          freeMode
          className={clsx(styles.list, className)}
        />
      ) : (
        <div className={clsx(styles.root, className)}>
          {renderTags()}
          <button type="button" className={styles.add} onClick={onAddClick}>
            <Icon name="plus" label="브랜드 추가" />
          </button>
        </div>
      )}
    </>
  );
};

BrandTags.displayName = 'BrandTags';
