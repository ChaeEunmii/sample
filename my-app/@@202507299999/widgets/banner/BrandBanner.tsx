// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Link, Text } from '@shared/ui';
// 스타일
import styles from './BrandBanner.module.scss';
// 타입
import { BannerImage, TextWithColor } from './bannerType';

export interface BrandBannerProps {
  /** 배너 이미지 */
  image: BannerImage;
  /** 배너 링크 */
  href: string;
  /** 배너 타이틀 */
  title?: TextWithColor;
}
export const BrandBanner = ({ image, href, title }: BrandBannerProps) => {
  return (
    <div className={styles.root}>
      <Link href={href} className={styles.link} type="block">
        <img src={image.src} alt={image.alt} className={styles.image} />
        {title && (
          <Text as="strong" className={styles.title} style={textColor(title.color)}>
            {title.text}
          </Text>
        )}
      </Link>
    </div>
  );
};
