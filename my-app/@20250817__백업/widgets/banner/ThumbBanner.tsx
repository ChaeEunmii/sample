// 컴포넌트
import { Image, Link } from '@shared/ui';
import { BannerTitle } from './BannerTitle';
// 스타일
import styles from './ThumbBanner.module.scss';
import clsx from 'clsx';

export interface ThumbBannerProps {
  /** 배너 타이틀 */
  title?: {
    text?: React.ReactNode;
    color?: string;
  };
  /** 배너 서브 타이틀 */
  subtitle?: {
    text?: React.ReactNode;
    color?: string;
  };
  /** 배너 이미지 */
  image: {
    src: string;
    alt?: string;
    figure?: boolean;
  };
  /** 배너 링크 */
  href: string;
  /** 배너 스타일 */
  boxed?: boolean;
}
export const ThumbBanner = ({ title, subtitle, image, href, boxed }: ThumbBannerProps) => {
  return (
    <div className={clsx(styles.root, boxed && styles.boxed)}>
      <Link href={href} className={styles.link}>
        <Image {...image} className={styles.image} />
        <BannerTitle
          title={{ ...title, size: '2' }}
          subtitle={{ ...subtitle, size: boxed ? '1' : '2' }}
        />
      </Link>
    </div>
  );
};

ThumbBanner.displayName = 'ThumbBanner';
