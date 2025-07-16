import styles from './FilterBar.module.scss';

export const FilterBar = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};
