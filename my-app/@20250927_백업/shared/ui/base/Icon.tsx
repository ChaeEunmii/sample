import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Icon.module.scss';

// prettier-ignore
export const ICON_NAMES = [
  'notice', 'cart', 'gift', 'subscribe', 'search', 'check', 'plus', 'minus',
  'filter', 'refresh', 'close', 'delete', 'deleteBg', 'eyeOff', 'eyeOn',
  'arrowDown', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrow', 'rating',
  'back', 'chat', 'menu', 'setting', 'share', 'home', 'qrcode', 'qrcode2', 'global', 'more',
  'shop', 'shop2', 'homefeed', 'gem', 'mypage', 'pin', 'pinFilled', 'bell', 'bellOn', 'asterisk', 'map', 'gemPlus', 'camera', 'contact', 'top', 'link',
  'history', 'album', 'call', 'callFill', 'gps', 'faceid', 'fingerprint', 'info', 'shopHome',
  'gpsCircle', 'callCircle', 'kakao', 'naver', 'phone', 'email', 'email2', 'toss', 'facebook', 'apple',
  'coupon', 'point', 'event', 'sound', 'multiply', 'pause', 'play', 'mute', 'unmute', 'download', 'addCircle',
  'gemOn', 'gemOff', 'collectionOn', 'collectionOff', 'lock', 'time', 'highfiveOff', 'highfiveOn', 'hpoint', 'package', 'copy', 'caution',
  'reply', 'review', 'reviewFill', 'bookmark', 'bookmarkFill', 'vote', 'voteFill',
  'dash', 'edit', 'openNew', 'live', 'waiting', 'reservation', 'grade1', 'grade2', 'grade3', 'grade4', 'sorting', 'swap', 'caretRight',
  'list', 'event2', 'heydi', 'club', 'flight', 'hotel', 'breakfast', 'transfer', 'tripInsurance', 'calendar', 'user', 'write', 'send', 'complete'
] as const;
export const ICON_SIZES = ['xsmall', 'small', 'medium', 'large'] as const; //(12, 16, 20, 24)

export type IconName = (typeof ICON_NAMES)[number];
export type IconSize = (typeof ICON_SIZES)[number];

interface IconProps {
  /** 아이콘 이름 */
  name: IconName;
  /** 아이콘 사이즈 (12, 16, 20, 24) */
  size?: IconSize;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 접근성을 위한 라벨 (필요한 경우에만 사용) */
  label?: string;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ name, size, className, label, ...props }, ref) => {
    return (
      <i
        ref={ref}
        className={clsx(
          styles.root,
          styles[name],
          size && size !== 'medium' && styles[size],
          className
        )}
        aria-label={label}
        aria-hidden={!label}
        {...props}
      ></i>
    );
  }
);

Icon.displayName = 'Icon';
