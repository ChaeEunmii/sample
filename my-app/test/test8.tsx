'use client';
import React, { useId, useMemo, useState, useCallback } from 'react';
import { Icon, type IconName, type IconSize } from '@shared/ui';
import clsx from 'clsx';
import styles from './Accordion.module.scss';

/** 아이콘 세트 타입: 필요 시 여기에 케이스를 추가하세요. */
type IconSet = 'default' | string;

/** 아이콘 매핑 테이블 */
const ICON_MAP: Record<string, [IconName, IconName]> = {
  default: ['arrowUp', 'arrowDown'],
  // plusMinus: ['minus', 'plus'],
};

const getIconBySet = (iconSet: IconSet, isOpen: boolean): IconName => {
  const [openIcon, closedIcon] = ICON_MAP[iconSet] || ICON_MAP.default;
  return isOpen ? openIcon : closedIcon;
};

/** 공통 유틸: number | number[] | null/undefined -> number[] */
const normalizeToArray = (v?: number | number[] | null): number[] =>
  v == null ? [] : Array.isArray(v) ? v : [v];

/** 아이템 단위 props */
export interface AccordionItemProps {
  label: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  iconSet?: IconSet;
  /** (신규) 아이콘 크기: 지정하지 않으면 기존 로직 유지 */
  iconSize?: IconSize;
  id?: string;
  labelAs?: React.ElementType;
  variant?: string;
  itemClassName?: string;
}

/** 단일 아이템 */
const AccordionItem = ({
  label,
  content,
  isOpen,
  onToggle,
  iconSet = 'default',
  iconSize, // 신규
  id,
  labelAs: LabelTag = 'span',
  variant,
  itemClassName,
}: AccordionItemProps) => {
  const localId = useId();
  const regionId = `${id ?? localId}-region`;
  const buttonId = `${id ?? localId}-button`;

  // 기존 동작 보존: iconSize 미지정 시 variant 기준
  const actualIconSize: IconSize =
    iconSize ?? (variant === 'inner' ? 'xsmall' : 'medium');

  return (
    <div className={clsx(styles.item, itemClassName)} id={id}>
      <button
        id={buttonId}
        type="button"
        className={styles.control}
        aria-expanded={isOpen}
        aria-controls={regionId}
        onClick={onToggle}
      >
        <LabelTag className={styles.label}>{label}</LabelTag>
        <Icon
          name={getIconBySet(iconSet, isOpen)}
          size={actualIconSize}
          className={styles.icon}
        />
      </button>

      {/* role="region" + aria-labelledby로 라벨 연결 */}
      <div
        id={regionId}
        className={clsx(styles.container, isOpen && styles.active)}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

/** 루트 컴포넌트 props */
export interface AccordionProps {
  data: { label: React.ReactNode; content: React.ReactNode; id?: string }[];
  isMultiple?: boolean;
  defaultId?: number | number[];
  className?: string;
  itemClassName?: string;
  variant?: 'default' | 'terms' | 'board' | 'faq' | 'inner' | 'info' | string;
  iconSet?: IconSet;
  paddingProps?: { x?: number | string; y?: number | string };
  labelAs?: React.ElementType;
  openId?: number | number[] | null;
  onOpenChange?: (id: number | number[] | null) => void;
  /** (신규) 모든 아이템에 공통 적용할 아이콘 크기(옵션) */
  iconSize?: IconSize;
}

export const Accordion = ({
  data,
  isMultiple = false,
  defaultId = [],
  className,
  itemClassName,
  variant = 'default',
  iconSet = 'default',
  paddingProps,
  labelAs = 'span',
  openId,
  onOpenChange,
  iconSize, // 신규
  ...props
}: AccordionProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<number[]>(() => {
    const init = normalizeToArray(defaultId);
    return isMultiple ? init : init.slice(0, 1);
  });

  const isControlled = openId !== undefined;
  const currentOpen = useMemo(() => {
    if (!isControlled) return uncontrolledOpen;
    const norm = normalizeToArray(openId);
    return isMultiple ? norm : norm.slice(0, 1);
  }, [isControlled, openId, uncontrolledOpen, isMultiple]);

  const setOpen = useCallback(
    (next: number[]) => {
      if (isControlled) {
        if (isMultiple) onOpenChange?.(next);
        else onOpenChange?.(next.length ? next[0] : null);
      } else {
        setUncontrolledOpen(next);
      }
    },
    [isControlled, isMultiple, onOpenChange]
  );

  const toggleItem = useCallback(
    (idx: number) => {
      if (isMultiple) {
        setOpen(currentOpen.includes(idx) ? currentOpen.filter(i => i !== idx) : [...currentOpen, idx]);
      } else {
        setOpen(currentOpen.includes(idx) ? [] : [idx]);
      }
    },
    [currentOpen, isMultiple, setOpen]
  );

  const styleProps =
    paddingProps && (paddingProps.x != null || paddingProps.y != null)
      ? {
          style: {
            ...(paddingProps.x != null && {
              ['--accordion-content-padding-x' as any]:
                typeof paddingProps.x === 'number' ? `${paddingProps.x}px` : paddingProps.x,
            }),
            ...(paddingProps.y != null && {
              ['--accordion-content-padding-y' as any]:
                typeof paddingProps.y === 'number' ? `${paddingProps.y}px` : paddingProps.y,
            }),
          } as React.CSSProperties,
        }
      : {};

  return (
    <div className={clsx(styles.root, variant && styles[variant], className)} {...styleProps} {...props}>
      {data.map((item, idx) => {
        const open = currentOpen.includes(idx);
        return (
          <AccordionItem
            key={item.id ?? idx}
            label={item.label}
            content={item.content}
            isOpen={open}
            onToggle={() => toggleItem(idx)}
            iconSet={iconSet}
            iconSize={iconSize}  // ← 필요 시 전체 적용
            id={item.id}
            labelAs={labelAs}
            variant={variant}
            itemClassName={itemClassName}
          />
        );
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';