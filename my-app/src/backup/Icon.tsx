import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Icon.module.scss';

// prettier-ignore
export const ICON_NAMES = [
  'notice', 'cart', 'gift', 'subscribe', 'search', 'check', 'plus', 'minus',
  'filter', 'refresh', 'close', 'delete', 'checkOn', 'checkOff', 'eyeOff', 'eyeOn',
  'arrowDown', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrow', 'rating',
  'back', 'chat', 'menu', 'setting', 'share', 'home', 'qrcode', 'global', 'more',
  'shop', 'homefeed', 'gem', 'mypage','kakao','naver','phone','toss','facebook', 'apple',
] as const;
export const ICON_SIZES = ['small', 'medium', 'large'] as const; //(16, 20, 24)

export type IconName = (typeof ICON_NAMES)[number];
export type IconSize = (typeof ICON_SIZES)[number];

interface IconProps {
  /** 아이콘 이름 */
  name: IconName;
  /** 아이콘 사이즈 (16, 20, 24) */
  size?: IconSize;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 접근성을 위한 라벨 (필요한 경우에만 사용) */
  label?: string;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ name, size = 'medium', className, label, ...props }, ref) => {
    return (
      <i
        ref={ref}
        className={clsx(styles.root, styles[name], size && styles[size], className)}
        aria-label={label}
        aria-hidden={!label}
        {...props}
      ></i>
    );
  }
);

Icon.displayName = 'Icon';
