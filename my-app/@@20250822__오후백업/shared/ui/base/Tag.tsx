'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { IconButton } from './IconButton';
// 스타일
import styles from './Tag.module.scss';
import clsx from 'clsx';

interface TagProps {
  /** variant
   * outlined: 테두리 있는 형태
   */
  variant?: 'outlined';
  /** id 설정 */
  id?: string;
  /** 내용 */
  children: React.ReactNode;
  /** 선택 상태(외부 제어) */
  selected?: boolean; // 제어
  /** 선택 상태 초기값 */
  defaultSelected?: boolean; // 비제어
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 선택 상태 변경 시 호출되는 콜백 */
  onToggle?: (id?: string, selected?: boolean) => void;
  /** 태그 닫기 호출 (id 필요) */
  onClose?: (id?: string) => void;
  /** 추가 클래스명 */
  className?: string;
  /** 태그 크기 */
  size?: 'small' | 'medium' | 'large';
}

export const Tag = ({
  variant,
  id,
  children,
  selected,
  defaultSelected = false,
  disabled = false,
  onToggle,
  onClose,
  className,
  size = 'medium',
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
      [styles[size]]: size !== 'medium',
    },
    variant && styles[variant],
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
        <IconButton name="close" size={size !== 'large' ? 'xsmall' : 'small'} onClick={handleClose}>
          삭제
        </IconButton>
      )}
    </span>
  );
};

Tag.displayName = 'Tag';
