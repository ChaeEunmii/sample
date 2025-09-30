// 컴포넌트
import { Link } from '@shared/ui';
// 스타일
import styles from './PhotoCard.module.scss';
import clsx from 'clsx';

interface PhotoCardProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

export const PhotoCard = ({ src, alt, className, onClick, ...props }: PhotoCardProps) => {
  return (
    <Link
      className={clsx(styles.root, className)}
      href="#"
      type="block"
      {...props}
      onClick={onClick}
    >
      <img src={src} alt={alt || ''} className={styles.image} />
    </Link>
  );
};
