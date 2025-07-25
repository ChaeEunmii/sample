import styles from './Badge.module.scss';
import clsx from 'clsx';

// 사용자 유형 뱃지 : 브랜드 매니저, 인플루언서, 셀러의 경우 노출 (녹색 별모양: special)
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 타입*/
  type?: 'special';
}

export const Badge = ({ type = 'special' }: BadgeProps) => {
  return (
    <span className={clsx(styles.root, type && styles[type])}>
      <img src="/images/icon_badge.svg" alt="뱃지" className={styles.image} />
    </span>
  );
};
