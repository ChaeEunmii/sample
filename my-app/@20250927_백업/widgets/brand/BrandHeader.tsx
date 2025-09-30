'use client';

import { Image, Link } from '@shared/ui';
import styles from './BrandHeader.module.scss';
import clsx from 'clsx';

interface BrandImage {
  src: string;
  alt: string;
}

interface BrandHeaderProps {
  /** 스페셜배너 변형 스타일 */
  variant?: 'style1' | 'style2' | 'chanel' | string;
  /** 하단부 위치하는지 여부 */
  isBottom?: boolean;
  /** 브랜드 이미지 */
  brandImage: BrandImage;
  /** 하단 브랜드 이미지 */
  brandBottomImage?: BrandImage;
  /** 브랜드 링크 URL */
  brandLink: string;
}

export const BrandHeader = ({
  isBottom = false,
  variant,
  brandImage,
  brandBottomImage,
  brandLink,
}: BrandHeaderProps) => {
  const currentImage = isBottom ? (brandBottomImage ?? brandImage) : brandImage;

  return (
    <Link
      className={clsx(styles.root, variant && styles[variant], isBottom && styles.isBottom)}
      href={brandLink}
    >
      <Image className={clsx(styles.image)} src={currentImage.src} alt={currentImage.alt} />
    </Link>
  );
};

BrandHeader.displayName = 'BrandHeader';
