import React from 'react';
import clsx from 'clsx';
import { Marquee } from '@shared/ui/Marquee';
import { Link } from '@shared/ui'; // 공통 Link
import styles from './MarqueeBanner.module.scss';

interface BannerImage {
  src: string;
  alt?: string;
}

interface MarqueeBannerProps {
  title?: string;
  subtitle?: string;
  images?: BannerImage[];
  href?: string;
  color?: string;
  speed?: number;
  direction?: 'left' | 'right';
  duplicate?: number;
  itemCount?: number;
  className?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  title,
  subtitle,
  images,
  href,
  color = '#000',
  speed = 15,
  direction = 'left',
  duplicate = 2,
  itemCount,
  className,
}) => {
  const hasImage = images && images.length > 0;
  const wrapperStyle = { backgroundColor: color };

  const Content = (
    <Marquee
      speed={speed}
      direction={direction}
      duplicate={duplicate}
      itemCount={itemCount}
      className={styles.marquee}
    >
      {hasImage ? (
        images!.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt ?? ''} className={styles.image} />
        ))
      ) : (
        <div className={styles.textWrap}>
          {title && <span className={styles.title}>{title}</span>}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
      )}
    </Marquee>
  );

  const wrapperClass = clsx(
    styles.link,
    { [styles.withImage]: hasImage }, // 이미지 있으면 withImage 클래스 추가
    className,
  );

  return href ? (
    <Link href={href} className={wrapperClass} style={wrapperStyle}>
      {Content}
    </Link>
  ) : (
    <div className={wrapperClass} style={wrapperStyle}>
      {Content}
    </div>
  );
};