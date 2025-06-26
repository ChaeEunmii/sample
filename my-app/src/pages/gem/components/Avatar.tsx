import styles from './Avatar.module.scss';
import { Image } from '@shared/ui';
import clsx from 'clsx';

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 타입 */
  type?: 'user' | 'brand' | string;
  /** 이미지 경로 */
  src: string;
  /** 이미지 대체텍스트 */
  alt?: string;
  /** 사이즈 (20, 50, 60)*/
  size?: '1' | '2' | '3';
  /** 추가 클래스명 */
  className?: string;
}

export const Avatar = ({ type = 'user', src, alt, size = '1', className }: AvatarProps) => {
  return (
    <span
      className={clsx(styles.root, type && styles[type], size && styles[`size${size}`], className)}
    >
      <Image src={src} alt={alt} className={styles.image} />
    </span>
  );
};
