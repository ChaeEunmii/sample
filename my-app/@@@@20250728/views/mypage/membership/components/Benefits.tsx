import { Text, Icon } from '@shared/ui';
import styles from './Benefits.module.scss';
import clsx from 'clsx';

interface BenefitsProps {
  /** 추가 클래스명 */
  className?: string;
}

export const Benefits = ({ className }: BenefitsProps) => {
  return (
    <ul className={clsx(styles.root, styles.benefits, className)}>
      <li>
        <span className={styles.icon}>
          <Icon name="hpoint" />
        </span>
        <Text size="3" weight="medium" className={styles.name}>
          H.Point적립
        </Text>
      </li>
      <li className={styles.plus}>
        <Icon name="plus" size="medium" />
      </li>
      <li>
        <span className={styles.icon}>
          <Icon name="package" />
        </span>
        <Text size="3" weight="medium" className={styles.name}>
          무료반품
        </Text>
      </li>
      <li className={styles.plus}>
        <Icon name="plus" size="medium" />
      </li>
      <li>
        <span className={styles.icon}>
          <Icon name="gift" />
        </span>
        <Text size="3" weight="medium" className={styles.name}>
          생필품
          <br />
          정기 배송
        </Text>
      </li>
    </ul>
  );
};
