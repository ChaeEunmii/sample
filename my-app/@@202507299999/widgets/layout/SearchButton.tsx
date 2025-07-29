import { useRouter } from 'next/navigation';
import { Icon } from '@shared/ui';
import styles from './SearchButton.module.scss';

interface SearchButtonProps {
  label: string;
}

export const SearchButton = ({ label }: SearchButtonProps) => {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/search');
  };

  return (
    <button type="button" className={styles.root} onClick={handleSearchClick}>
      <span className={styles.label}>{label}</span>
      <Icon name="search" size="large" />
    </button>
  );
};
SearchButton.displayName = 'SearchButton';
