import clsx from 'clsx';
import styles from './HbssFooter.module.scss';

interface HbssFooterProps {
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function HbssFooter({ className }: HbssFooterProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <img src="/images/logo_thehyundai_gray.png" alt="THE HYUNDAI 로고" className={styles.logo} />
    </div>
  );
}
