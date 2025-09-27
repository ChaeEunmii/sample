'use client';
import React, { useState } from 'react';
import { Icon, IconName, IconSize } from '@shared/ui';
import clsx from 'clsx';
import styles from './Accordion.module.scss';

const getIconBySet = (iconSet: string, isOpen: boolean): IconName => {
  const iconMapping: Record<string, [IconName, IconName]> = {
    default: ['arrowUp', 'arrowDown'], // 기본 (화살표)
  };

  const [openIcon, closedIcon] = iconMapping[iconSet] || iconMapping.default;
  return isOpen ? openIcon : closedIcon;
};

// Types
interface AccordionItemProps {
  label: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  iconSet?: string;
  iconSize?: IconSize;
  id?: string;
  labelAs?: React.ElementType;
  variant?: string;
  itemClassName?: string;
}

// AccordionItem
const AccordionItem = ({
  label,
  content,
  isOpen,
  onToggle,
  iconSet = 'default',
  iconSize,
  id,
  labelAs: LabelTag = 'span',
  variant,
  itemClassName,
}: AccordionItemProps) => {
  // 아이콘 사이즈
  const actualIconSize: IconSize = iconSize ?? (variant === 'inner' ? 'xsmall' : 'medium');

  return (
    <div className={clsx(styles.item, itemClassName)} id={id}>
      <button type="button" className={styles.control} aria-expanded={isOpen} onClick={onToggle}>
        <LabelTag className={styles.label}>{label}</LabelTag>
        <Icon name={getIconBySet(iconSet, isOpen)} size={actualIconSize} className={styles.icon} />
      </button>
      <div
        className={clsx(styles.container, isOpen && styles.active)}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

// Types
interface AccordionProps {
  /** 아코디언 데이터 */
  data: { label: React.ReactNode; content: React.ReactNode; id?: string }[];
  /** 여러 개 열기 가능 여부 */
  isMultiple?: boolean;
  /** 기본적으로 열린 아코디언 인덱스 */
  defaultId?: number | number[];
  /** 추가 클래스명 */
  className?: string;
  itemClassName?: string;
  /** 아코디언 스타일 변형 */
  variant?: 'default' | 'terms' | 'board' | 'faq' | 'inner' | 'info' | 'graybox' | string;
  /** 아이콘 세트 (아이콘 스타일 변형) */
  iconSet?: 'default' | string;
  /** 아이콘 사이즈 지정 */
  iconSize?: IconSize;
  /** 아코디언 컨테이너 여백 변경 */
  paddingProps?: { x?: number | string; y?: number | string };
  /** 라벨 태그 커스터마이징 */
  labelAs?: React.ElementType;
  /** 아코디언 열림 상태 관리(제어) */
  openId?: number | number[] | null;
  onOpenChange?: (id: number | number[] | null) => void;
}

// Accordion 컴포넌트
export const Accordion = ({
  data,
  isMultiple = false,
  defaultId = [],
  className,
  itemClassName,
  variant = 'default',
  iconSet = 'default',
  iconSize,
  paddingProps,
  labelAs = 'span',
  openId,
  onOpenChange,
  ...props
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>(() => {
    if (Array.isArray(defaultId)) {
      return isMultiple ? defaultId : defaultId.length > 0 ? [defaultId[0]] : [];
    }
    return defaultId != null ? [defaultId] : [];
  });
  // 제어 모드 확인
  const isControlled = openId !== undefined;
  const currentOpenItems: number[] = isControlled
    ? openId === null
      ? []
      : Array.isArray(openId)
        ? isMultiple
          ? openId
          : [openId[0]]
        : [openId]
    : openItems;

  const toggleItem = (idx: number) => {
    if (isControlled) {
      // 제어
      if (isMultiple) {
        const newOpen = currentOpenItems.includes(idx)
          ? currentOpenItems.filter((item) => item !== idx)
          : [...currentOpenItems, idx];
        onOpenChange?.(newOpen);
      } else {
        const newOpen = currentOpenItems.includes(idx) ? [] : [idx];
        onOpenChange?.(newOpen.length > 0 ? newOpen[0] : null);
      }
    } else {
      // 비제어
      setOpenItems((prevState) =>
        isMultiple
          ? prevState.includes(idx)
            ? prevState.filter((item) => item !== idx)
            : [...prevState, idx]
          : prevState.includes(idx)
            ? []
            : [idx]
      );
    }
  };

  const styleProps = paddingProps
    ? {
        style: {
          ...(paddingProps.x != null && {
            '--accordion-content-padding-x':
              typeof paddingProps.x === 'number' ? `${paddingProps.x}px` : paddingProps.x,
          }),
          ...(paddingProps.y != null && {
            '--accordion-content-padding-y':
              typeof paddingProps.y === 'number' ? `${paddingProps.y}px` : paddingProps.y,
          }),
        } as React.CSSProperties,
      }
    : {};

  return (
    <div
      className={clsx(styles.root, variant && styles[variant], className)}
      {...styleProps}
      {...props}
    >
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          label={item.label}
          content={item.content}
          isOpen={currentOpenItems.includes(idx)}
          onToggle={() => toggleItem(idx)}
          iconSet={iconSet}
          iconSize={iconSize}
          id={item.id}
          labelAs={labelAs}
          variant={variant}
          itemClassName={itemClassName}
        />
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';
