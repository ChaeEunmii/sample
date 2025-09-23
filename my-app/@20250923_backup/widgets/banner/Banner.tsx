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
  /** 추가 설명 문구 */
  description?: React.ReactNode;
  /** 배너 링크 */
  href: string;
  /** 배너 이미지 비율 */
  ratio?: 'square' | 'landscape' | 'portrait' | 'portrait2' | 'tall';
  /** 텍스트 정렬 */
  align?: BannerTitleProps['align'];
  /** 타이틀 사이즈 */
  textSize?: NonNullable<BannerTitleProps['title']>['size'];
  /** 텍스트 위치 */
  textInside?: boolean;
  /** 텍스트 위치가 정중앙인 경우 */
  textCentered?: boolean;
  /** 텍스트 영역 여백 */
  textSpacing?: 'in1' | 'in2' | 'out1' | 'out2';
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
    titleLine?: number | 'auto';
    subtitleLine?: number | 'auto';
    titleWeight?: 'medium' | 'bold';
    subtitleWeight?: 'regular' | 'medium' | 'bold';
  };
  /** 추가 클래스명 */
  className?: string;
  /** 배너이미지가 비디오일 때 자동재생 여부 */
  vdoAutoplay?: boolean;
  /** 엠블럼 텍스트 */
  emblem?: string | null;
  /** 브랜드 정보 */
  brand?: {
    image: string;
    name: string;
  };
  /** 좌측 상단 플래그 */
  nametag?: string | null;
  /** 배너 스타일 */
  variant?: 'default' | 'boxed';
  /** 배너 사이즈(small의 경우 무조건 textInside로 처리됨) */
  size?: 'small' | 'medium';
}

export const Banner = ({
  title,
  subtitle,
  align,
  caption,
  description,
  tag,
  textSize = '3',
  textInside,
  textCentered,
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
  emblem,
  brand,
  nametag,
  variant = 'default',
  size = 'medium',
  ...props
}: BannerProps) => {
  // 동영상 확장자 체크
  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  const renderEmblem = () =>
    emblem && (
      <Flag
        data={{ color: 'green', label: emblem }}
        className={clsx(
          styles.emblem,
          align === 'center' && 'ncp-align-center',
          align === 'right' && 'ncp-align-end'
        )}
      />
    );

  const isInside = textInside || textCentered || size === 'small';

  return (
    <div
      className={clsx(
        styles.root,
        flush && styles.flush,
        isInside && styles.inside,
        textCentered && styles.centered,
        !isInside && variant !== 'default' && styles[variant],
        size !== 'medium' && styles[size],
        className
      )}
      data-ratio={ratio}
      {...props}
    >
      <Link href={href} className={styles.link} type="block">
        <div className={styles.thumb}>
          {nametag && (
            <Flag
              data={{ label: nametag, color: 'black' }}
              radius="br"
              className={styles.nametag}
            />
          )}
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
          {!textInside && !textCentered && renderEmblem()}
        </div>

        {(caption?.text || tag || title?.text || subtitle?.text || flag.length > 0) &&
          (size === 'small' ? (
            <BannerTitle
              title={{ text: title?.text }}
              subtitle={{ text: subtitle?.text, size: '1' }}
              className={styles.detail}
            />
          ) : (
            <div
              className={clsx(
                styles.detail,
                textSpacing && styles[textSpacing],
                align && align !== 'left' && `ncp-text-${align}`
              )}
            >
              {(textInside || textCentered) && renderEmblem()}
              {caption && (
                <Text className={styles.caption} size="3" style={textColor(caption.color)}>
                  {caption.text}
                </Text>
              )}
              {tag && (
                <Text as="span" size="3" color="gray3" className={styles.tag}>
                  {tag}
                </Text>
              )}
              {brand && (
                <div className={styles.brand}>
                  <Image className={styles.brandImg} src={brand?.image} />
                  <Text as="span" size="3" weight="medium">
                    {brand.name}
                  </Text>
                </div>
              )}
              <BannerTitle
                title={{
                  ...title,
                  size: textSize,
                  line: titleProps?.titleLine,
                  weight: titleProps?.titleWeight,
                }}
                subtitle={{
                  ...subtitle,
                  line: titleProps?.subtitleLine,
                  weight: titleProps?.subtitleWeight || (description ? 'medium' : undefined),
                }}
                reverse={titleProps?.reverse}
              />
              {description && (
                <Text size="3" className={styles.desc}>
                  {description}
                </Text>
              )}

              {flag.length > 0 && <Flag data={flag} className={styles.flag} color="gray" />}
            </div>
          ))}
      </Link>
    </div>
  );
};

Banner.displayName = 'Banner';
