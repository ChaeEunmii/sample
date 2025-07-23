import styles from './Avatar.module.scss';
import { Image } from '@shared/ui';
import clsx from 'clsx';

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 타입 */
  type?: 'user' | 'brand' | string;
  /** 이미지 경로 */
  src?: string;
  /** 이미지 대체텍스트 */
  alt?: string;
  /** 이니셜 */
  initial?: string;
  /** 사이즈 (20, 24, 50, 60)*/
  size?: '1' | '2' | '3' | '4';
  /** 추가 클래스명 */
  className?: string;
}

export const Avatar = ({
  type = 'user',
  src,
  alt,
  initial,
  size = '3',
  className,
}: AvatarProps) => {
  return (
    <span
      className={clsx(
        styles.root,
        type && styles[type],
        size && styles[`size${size}`],
        initial && styles.initial,
        className
      )}
    >
      {src && <Image src={src} alt={alt} className={styles.image} />}
      {/* 이니셜은 첫 글자 1자만 사용 */}
      {initial && initial.charAt(0)}
    </span>
  );
};

Avatar.displayName = 'Avatar';
