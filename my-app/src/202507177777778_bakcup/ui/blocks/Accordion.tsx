'use client';
import React, { useState } from 'react';
import { Icon, IconName } from '@shared/ui';
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
  id?: string;
  labelAs?: React.ElementType;
}

// AccordionItem
const AccordionItem = ({
  label,
  content,
  isOpen,
  onToggle,
  iconSet = 'default',
  id,
  labelAs: LabelTag = 'span',
}: AccordionItemProps) => {
  return (
    <div className={styles.item} id={id}>
      <button type="button" className={styles.control} aria-expanded={isOpen} onClick={onToggle}>
        <LabelTag className={styles.label}>{label}</LabelTag>
        <Icon name={getIconBySet(iconSet, isOpen)} size="medium" className={styles.icon} />
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
  /** 기본적으로 열린 아코디언 아이디 */
  defaultId?: number | number[];
  /** 추가 클래스명 */
  className?: string;
  /** 아코디언 스타일 변형 */
  variant?: 'default' | 'terms' | 'board' | 'faq' | string;
  /** 아이콘 세트 (아이콘 스타일 변형) */
  iconSet?: 'default' | string;
  /** 아코디언 컨테이너 여백 변경 */
  paddingProps?: { x?: number | string; y?: number | string };
  /** 라벨 태그 커스터마이징 */
  labelAs?: React.ElementType;
}

// Accordion 컴포넌트
export const Accordion = ({
  data,
  isMultiple = false,
  defaultId = [],
  className,
  variant = 'default',
  iconSet = 'default',
  paddingProps,
  labelAs = 'span',
  ...props
}: AccordionProps) => {
  const initialOpen = Array.isArray(defaultId)
    ? isMultiple
      ? defaultId
      : [defaultId[0]]
    : [defaultId];
  const [openItems, setOpenItems] = useState<number[]>(initialOpen);

  const toggleItem = (idx: number) => {
    setOpenItems((prevState) =>
      isMultiple
        ? prevState.includes(idx)
          ? prevState.filter((item) => item !== idx)
          : [...prevState, idx]
        : prevState.includes(idx)
          ? []
          : [idx]
    );
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
          isOpen={openItems.includes(idx)}
          onToggle={() => toggleItem(idx)}
          iconSet={iconSet}
          id={item.id}
          labelAs={labelAs}
        />
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';
