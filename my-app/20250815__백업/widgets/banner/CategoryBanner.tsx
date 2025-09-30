// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Image, Heading, Text, Flag, Link } from '@shared/ui';
// 스타일
import clsx from 'clsx';
import styles from './CategoryBanner.module.scss';
// 타입
import { BannerImage, TextWithColor } from './bannerType';

export interface CategoryBannerProps {
  /** 배너 타이틀 */
  title?: TextWithColor;
  /** 배너 서브 타이틀 */
  subtitle?: TextWithColor;
  /** 배너 이미지 */
  image?: BannerImage;
  /** 배너 링크 */
  href: string;
  /** ad 플래그 사용 여부 */
  ad?: boolean;
  /** 라운드 옵션 */
  round?: boolean;
}
export const CategoryBanner = ({ title, subtitle, image, href, ad }: CategoryBannerProps) => {
  const flagColor = 'ad';

  return (
    <div className={clsx(styles.root)}>
      <Link type="block" href={href} className={styles.link}>
        {image && <Image {...image} className={styles.image} />}
        {ad && (
          <Flag data={{ label: 'AD', color: flagColor }} radius="bl" className={styles.flag} />
        )}

        {title && (
          <Heading className={styles.title} style={textColor(title.color)}>
            {title.text}
          </Heading>
        )}
        {subtitle && (
          <Text className={styles.subtitle} style={textColor(subtitle.color)}>
            {subtitle.text}
          </Text>
        )}
      </Link>
    </div>
  );
};

CategoryBanner.displayName = 'CategoryBanner';
