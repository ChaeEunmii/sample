// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Image, Flag, Link, Video, Text } from '@shared/ui';
import { BannerTitle, BannerTitleProps } from './BannerTitle';
// 스타일
import styles from './Banner.module.scss';
import clsx from 'clsx';
// 타입
import { BannerMedia, TextWithColor } from './bannerType';

export interface BannerProps {
  /** 배너 타이틀 */
  title?: TextWithColor;
  /** 배너 서브 타이틀 */
  subtitle?: TextWithColor;
  /** 배너 이미지 */
  image: BannerMedia;
  /** 추가 문구 */
  caption?: {
    text?: React.ReactNode;
    color?: string;
  };
  /** 배너 링크 */
  href: string;
  /** 배너 이미지 비율 */
  ratio?: 'square' | 'landscape' | 'portrait' | 'tall';
  /** 텍스트 정렬 */
  align?: BannerTitleProps['align'];
  /** 타이틀 사이즈 */
  textSize?: NonNullable<BannerTitleProps['title']>['size'];
  /** 텍스트 위치 */
  textInside?: boolean;
  /** 텍스트 영역 여백 */
  textSpacing?: 'in1' | 'out1' | 'out2';
  /** 좌우 여백 제거 */
  flush?: boolean;
  /** ad 사용 여부 */
  ad?: boolean;
  /** 태그 */
  tag?: string;
  /** 배너 플래그 */
  flag?: string[];
  /** 배너 타이틀 옵션 */
  titleProps?: {
    reverse?: boolean;
    titleLine?: number;
    subtitleLine?: number;
  };
  /** 추가 클래스명 */
  className?: string;
  /** 배너이미지가 비디오일 때 자동재생 여부 */
  vdoAutoplay?: boolean;
}

export const Banner = ({
  title,
  subtitle,
  align,
  caption,
  tag,
  textSize = '3',
  textInside,
  textSpacing,
  image,
  href,
  ratio,
  flush,
  ad,
  flag = [],
  titleProps,
  className,
  vdoAutoplay = true,
  ...props
}: BannerProps) => {
  // 동영상 확장자 체크
  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  return (
    <div
      className={clsx(styles.root, flush && styles.flush, textInside && styles.inside, className)}
      data-ratio={ratio}
      {...props}
    >
      <Link href={href} className={styles.link} type="block">
        <div className={styles.thumb}>
          {isVideoFile(image.src) ? (
            <Video
              src={image.src}
              label={image.alt}
              poster={image.poster}
              autoPlay={vdoAutoplay}
              loop
              className={styles.image}
            />
          ) : (
            <Image {...image} className={styles.image} />
          )}
          {ad && <Flag data={{ label: 'AD', color: 'ad' }} radius="bl" className={styles.ad} />}
        </div>

        {(caption?.text || tag || title?.text || subtitle?.text || flag.length > 0) && (
          <div
            className={clsx(
              styles.detail,
              textSpacing && styles[textSpacing],
              align && align !== 'left' && `ncp-text-${align}`
            )}
          >
            {caption && (
              <Text className={styles.caption} size="3" style={textColor(caption.color)}>
                {caption.text}
              </Text>
            )}
            {tag && (
              <Text as="span" size="3" color="gray3">
                {tag}
              </Text>
            )}

            <BannerTitle
              title={{
                ...title,
                size: textSize,
                line: titleProps?.titleLine,
              }}
              subtitle={{ ...subtitle, line: titleProps?.subtitleLine }}
              reverse={titleProps?.reverse}
            />

            {flag.length > 0 && <Flag data={flag} className={styles.flag} color="gray" />}
          </div>
        )}
      </Link>
    </div>
  );
};

Banner.displayName = 'Banner';
