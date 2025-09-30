'use client';

import { Image, Link } from '@/shared/ui';
import { mockProdSpecialBrandItem } from '@/mocks/detail';

import styles from './DetailSpecialBrand.module.scss';
import clsx from 'clsx';

interface DetailSpecialBrandProps {
  /** 하단부 위치하는지 여부 */
  isBottom?: boolean;
}

export const DetailSpecialBrand = ({ isBottom = false }: DetailSpecialBrandProps) => {
  const item = mockProdSpecialBrandItem;
  const isChanel = item.brand === 'CHANEL';

  return (
    <Link
      className={clsx(styles.root, isChanel && styles.isChanel, isBottom && styles.isBottom)}
      href={item.brandLink}
    >
      <Image
        className={clsx(styles.image)}
        src={!isBottom ? item.brandImage : item.brandBottomImage}
        alt={!isBottom && !isChanel ? item.brand : '샤넬 공식 판매처'}
      />
    </Link>
  );
};
DetailSpecialBrand.displayName = 'DetailSpecialBrand';
