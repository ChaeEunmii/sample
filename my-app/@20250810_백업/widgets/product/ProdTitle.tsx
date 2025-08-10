import { Text, Heading, Stack } from '@shared/ui';
import styles from './ProdTitle.module.scss';

interface ProdTitleProps {
  brand?: string;
  title: string;
  description?: string;
  weight?: string;
  size?: string;
  /** title 컬러 #8c8c8c 적용 여부(기본: false) */
  disabled?: boolean;
}

export const ProdTitle = ({
  brand,
  title,
  description,
  weight,
  size,
  disabled = false,
}: ProdTitleProps) => {
  return (
    <div className={styles.root}>
      {brand && (
        <Text as="em" size="3" className={styles.brand}>
          {brand}
        </Text>
      )}

      <Heading size="2" className={styles.title} color={disabled ? 'gray3' : 'gray1'}>
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
