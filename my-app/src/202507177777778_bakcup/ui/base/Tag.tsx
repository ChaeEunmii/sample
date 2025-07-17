'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { IconButton } from './IconButton';
// 스타일
import styles from './Tag.module.scss';
import clsx from 'clsx';

interface TagProps {
  /** */
  id?: string;
  /** */
  children: React.ReactNode;
  /**  */
  selected?: boolean; // 제어
  /**  */
  defaultSelected?: boolean; // 비제어
  /** */
  disabled?: boolean;
  /** */
  onToggle?: (id?: string, selected?: boolean) => void;
  /**  */
  onClose?: (id?: string) => void;
  /** 추가 클래스명 */
  className?: string;
}

export const Tag = ({
  id,
  children,
  selected,
  defaultSelected = false,
  disabled = false,
  onToggle,
  onClose,
  className,
}: TagProps) => {
  const [isSelected, setIsSelected] = useState(defaultSelected);
  const currentSelected = selected !== undefined ? selected : isSelected;

  const handleToggle = (e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    const newSelected = !currentSelected;

    if (selected === undefined) setIsSelected(newSelected);
    onToggle?.(id, newSelected);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.(id);
  };

  const tagClass = clsx(
    styles.root,
    {
      [styles.selected]: currentSelected,
      [styles.disabled]: disabled,
    },
    className
  );

  // 토글 가능한 태그
  if (onToggle) {
    return (
      <button
        type="button"
        className={tagClass}
        onClick={handleToggle}
        disabled={disabled}
        aria-pressed={currentSelected}
      >
        {children}
      </button>
    );
  }

  // 일반 태그
  return (
    <span id={id} className={tagClass}>
      {children}
      {onClose && (
        <IconButton name="close" size="xsmall" onClick={handleClose}>
          삭제
        </IconButton>
      )}
    </span>
  );
};

Tag.displayName = 'Tag';
