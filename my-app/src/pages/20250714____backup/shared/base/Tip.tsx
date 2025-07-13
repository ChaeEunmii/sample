import React from 'react';
import clsx from 'clsx';
import styles from './Tip.module.scss';
import { IconButton } from './IconButton';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type ArrowPlace = 'start' | 'center' | 'end';

interface TipProps {
  children: React.ReactNode;
  placement?: Placement;
  /** 툴팁 꼬리 위치 */
  arrowPlace?: ArrowPlace;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

export const Tip = ({
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
