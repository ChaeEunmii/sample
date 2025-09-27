import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Line.module.scss';

interface LineProps {
  /** 스타일 */
  variant?: 'bold';
  /** 상하여백 (0px, 10px, 16px, 24px, 40px, 32px, 20px) */
  margin?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
  /** line 높이값 */
  height?: number;
  /** line 컬러
   *  black: #000, bg1: #f7f7f7, bg2: #efefef, bg3:#e3e3e3 */
  color?: 'black' | 'bg1' | 'bg2' | 'bg3';
  /** 추가 클래스 */
  className?: string;
}

export const Line = ({ variant, margin, height, color, className }: LineProps) => (
  <hr
    className={clsx(
      styles.root,
      variant && styles[variant],
      margin && styles[`margin${margin}`],
      height && styles[`height${height}`],
      color && styles[color],
      className
    )}
  />
);

Line.displayName = 'Line';
