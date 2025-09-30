'use client';

import { Image, Link } from '@shared/ui';
import styles from './BrandHeader.module.scss';
import clsx from 'clsx';

interface BrandImage {
  src: string;
  alt: string;
}

interface BrandHeaderProps {
  /** 스페셜 브랜드 추가 클래스명 */
  specialClass?: 'chanel' | string;
  /** 하단부 위치하는지 여부 */
  isBottom?: boolean;
  /** 브랜드 이미지 */
  brandImage: BrandImage;
  /** 하단 브랜드 이미지 */
  brandBottomImage: BrandImage;
  /** 브랜드 링크 URL */
  brandLink: string;
}

export const BrandHeader = ({
  isBottom = false,
  specialClass,
  brandImage,
  brandBottomImage,
  brandLink,
}: BrandHeaderProps) => {
  const currentImage = !isBottom ? brandImage : brandBottomImage;

  return (
    <Link
      className={clsx(
        styles.root,
        specialClass && styles[specialClass],
        isBottom && styles.isBottom
      )}
      href={brandLink}
    >
      <Image className={clsx(styles.image)} src={currentImage.src} alt={currentImage.alt} />
    </Link>
  );
};

BrandHeader.displayName = 'BrandHeader';
