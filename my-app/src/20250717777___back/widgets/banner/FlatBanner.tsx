// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Image, Heading, Text, Flag, Link } from '@shared/ui';
// 스타일
import styles from './FlatBanner.module.scss';
import clsx from 'clsx';
// 타입
import { BannerImage, TextWithColor } from './bannerType';

export interface FlatBannerProps {
  /** 배너 타이틀 */
  title?: TextWithColor;
  /** 배너 서브 타이틀 */
  subtitle?: TextWithColor;
  /** 배너 이미지 */
  image?: BannerImage;
  /** 배너 배경 색상(이미지 없을경우) */
  color?: string;
  /** 배너 링크 */
  href: string;
  /** 배너 타입 */
  variant?: 'ribbon' | 'standard';
  /** ad 플래그 사용 여부 */
  ad?: boolean;
  /** 라운드 옵션 */
  round?: boolean;
}
export const FlatBanner = ({
  title,
  subtitle,
  image,
  color,
  href,
  variant = 'standard',
  ad,
  round,
}: FlatBannerProps) => {
  const bannerStyle = color ? { backgroundColor: color } : undefined;
  const flagColor = variant === 'ribbon' ? 'black30' : 'black70';

  return (
    <div
      className={clsx(styles.root, variant && styles[variant], round && styles.round)}
      style={bannerStyle}
    >
      <Link href={href} className={styles.link}>
        {image && <Image {...image} className={styles.image} />}
        {ad && (
          <Flag
            data={{ label: 'AD', color: flagColor }}
            className={styles.flag}
            {...(variant === 'standard' && { radius: 'bl' })}
            {...(variant === 'ribbon' && { size: 'small' })}
          />
        )}

        {title && (
          <Heading className={styles.title} style={textColor(title.color)}>
            {title.text}
          </Heading>
        )}
        {variant !== 'ribbon' && subtitle && (
          <Text as="span" className={styles.subtitle} style={textColor(subtitle.color)}>
            {subtitle.text}
          </Text>
        )}
      </Link>
    </div>
  );
};

FlatBanner.displayName = 'FlatBanner';
