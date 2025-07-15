import clsx from 'clsx';
import styles from './Mark.module.scss';

interface MarkProps {
  children: React.ReactNode;
  /** 텍스트 굵기 */
  weight?: 'medium' | 'semibold' | 'bold';
  className?: string;
}

export const Mark = ({ children, weight = 'medium', className }: MarkProps) => {
  return (
    <mark className={clsx(weight && weight !== 'medium' && `ncp-weight-${weight}`, className)}>
      {children}
    </mark>
  );
};
