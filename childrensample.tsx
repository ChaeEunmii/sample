// StatList.tsx
import styles from './StatList.module.scss';

interface StatListProps {
  children: React.ReactNode;
}

interface StatItemProps {
  label: string;
  count: number;
}

const StatList = ({ children }: StatListProps) => {
  return <ul className={styles.statList}>{children}</ul>;
};

const Item = ({ label, count }: StatItemProps) => {
  return (
    <li className={styles.statItem}>
      <strong className={styles.count}>{count}</strong>
      <span className={styles.label}>{label}</span>
    </li>
  );
};

// 하위 컴포넌트로 등록
StatList.Item = Item;

export default StatList;





import StatList from './StatList';

<StatList>
  <StatList.Item label="상품" count={120} />
  <StatList.Item label="브랜드" count={8} />
</StatList>

