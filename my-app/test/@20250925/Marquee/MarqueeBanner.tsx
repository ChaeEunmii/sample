// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Heading, Text, Link, Image, Icon } from '@shared/ui';
import { Marquee } from './Marquee';
// 스타일
import styles from './MarqueeBanner.module.scss';
import clsx from 'clsx';
// 타입
import { BannerImage, TextWithColor } from './bannerType';

export interface MarqueeBannerProps {
  /** 배너 타이틀 */
  title?: TextWithColor;
  /** 배너 서브 타이틀 */
  subtitle?: TextWithColor;
  /** 단일 배너 이미지  */
  image?: BannerImage;
  /** 여러 장 배너 이미지 */
  images?: BannerImage[];
  /** 배너 링크 */
  href?: string;
  /** 배너 배경 색상 지정시 */
  color?: string;
}

export const MarqueeBanner = ({
  title,
  subtitle,
  image,
  images,
  href,
  color = '#000000',
}: MarqueeBannerProps) => {
  const bannerStyle = color ? { backgroundColor: color } : undefined;

  // 이미지 여부
  const hasImage = !!(images?.length || image);
  // images가 있으면 그대로, 없으면 단일 image를 배열로, 둘 다 없으면 빈 배열
  const imageList: BannerImage[] = images?.length ? images : image ? [image] : [];

  // 감싸는 태그 선택 (이미지+링크 있으면 Link, 없으면 div)
  const BannerTag: React.ElementType = hasImage && href ? Link : 'div';
  // 감싸는 태그 props
  const bannerProps = {
    className: clsx(styles.banner, styles.inline, hasImage && styles.hasImg),
    ...(hasImage ? { href: href ?? '#' } : {}),
  };

  // 마퀴에 넣을 "한 번치" 콘텐츠
  const OnePass = (
    <BannerTag {...bannerProps}>
      {/* 이미지 */}
      {hasImage && (
        <>
          {imageList.map((img, idx) => (
            <Image key={idx} {...img} className={styles.image} />
          ))}
        </>
      )}
      {/* 텍스트 */}
      {!hasImage && (title || subtitle) && (
        <div className={styles.texts}>
          {title && (
            <Heading className={styles.title} style={textColor(title.color)}>
              {title.text}
            </Heading>
          )}
          {subtitle && (
            <Text as="span" className={styles.subtitle} style={textColor(subtitle.color)}>
              {subtitle.text}
            </Text>
          )}
        </div>
      )}
    </BannerTag>
  );

  return (
    <div
      className={clsx(styles.root)}
      style={{ ...bannerStyle, '--marquee-banner-bg': color } as React.CSSProperties}
    >
      <Marquee direction="right" height={hasImage ? 80 : undefined}>
        {OnePass}
      </Marquee>
      {/* 이미지형이 아니면서, 링크있는 경우 나타나는 아이콘 영역 */}
      {!hasImage && href && (
        <Link href={href} className={styles.arrow} aria-label="배너 바로가기" role="button">
          <Icon name="arrowRight" size="medium" className={styles.icon} />
        </Link>
      )}
    </div>
  );
};

MarqueeBanner.displayName = 'MarqueeBanner';
