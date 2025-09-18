import React from 'react';
import clsx from 'clsx';
import styles from './Tip.module.scss';
import { IconButton } from './IconButton';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type ArrowPlace = 'start' | 'center' | 'end';

interface TipProps {
  /** variant
   * marker : 이벤트(적립금리워드프로모션,등급혜택)의 그래프(progress bar)에 현재 level이나 등급을 표시하는 마커 스타일
   */
  variant?: 'marker';
  children: React.ReactNode;
  placement?: Placement;
  /** 툴팁 꼬리 위치 */
  arrowPlace?: ArrowPlace;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Tip = ({
  variant,
  placement = 'bottom',
  arrowPlace = 'center',
  children,
  className,
  onClose,
}: TipProps) => {
  return (
    <div
      className={clsx(
        styles.root,
        styles[placement],
        arrowPlace && styles[`${arrowPlace}Arrow`],
        variant && styles[variant],
        className
      )}
    >
      {children}
      {onClose && (
        <IconButton name="close" size="xsmall" onClick={onClose}>
          닫기
        </IconButton>
      )}
    </div>
  );
};

Tip.displayName = 'Tip';
