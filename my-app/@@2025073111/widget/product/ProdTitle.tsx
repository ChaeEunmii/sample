import { Text, Heading, Stack } from '@shared/ui';
import styles from './ProdTitle.module.scss';

interface ProdTitleProps {
  brand?: string;
  title: string;
  description?: string;
  weight?: string;
  size?: string;
}

export const ProdTitle = ({ brand, title, description, weight, size }: ProdTitleProps) => {
  return (
    <div className={styles.root}>
      {brand && (
        <Text as="em" size="3" className={styles.brand}>
          {brand}
        </Text>
      )}

      <Heading size="2" className={styles.title}>
        {title}
      </Heading>

      {(size || weight) && (
        <div className={styles.size}>
          <Text as="span" size="4">
            {weight}
          </Text>
          <Text as="span" size="4">
            {size}
          </Text>
        </div>
      )}

      {description && (
        <Text as="p" size="3" className={styles.description}>
          {description}
        </Text>
      )}
    </div>
  );
};

ProdTitle.displayName = 'ProdTitle';
