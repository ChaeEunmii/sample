// 컴포넌트
import { Image, Flag, Link, Video } from '@shared/ui';
// 스타일
import styles from './Banner.module.scss';
import clsx from 'clsx';

export interface BannerProps {
  /** 배너 이미지 */
  image: {
    src: string;
    alt?: string;
    figure?: boolean;
  };
  /** 배너 링크 */
  href: string;
  /** 배너 이미지 비율 */
  ratio: 'square' | 'landscape' | 'portrait';
  /** 좌우 여백 제거 */
  flush?: boolean;
  /** ad 사용 여부 */
  ad?: boolean;
  /** 추가 문구 */
  caption?: string;
  /** 콘텐츠 분류 */
  category?: string;
  /** 태그 */
  tag?: string;
  /** 배너 플래그 */
  flag?: string[];
  className?: string;
}

export const ThumbSlideItem = ({
  image,
  href,
  ratio,
  flush,
  ad,
  flag = [],
  className,
  ...props
}: BannerProps) => {
  // 동영상 확장자 체크
  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  return (
    <div
      className={clsx(styles.root, flush && styles.flush, className)}
      data-ratio={ratio}
      {...props}
    >
      <Link href={href} className={styles.link} type="block">
        <div className={styles.thumb}>
          {isVideoFile(image.src) ? (
            <Video src={image.src} label={image.alt} autoPlay loop className={styles.image} />
          ) : (
            <Image {...image} className={styles.image} />
          )}
          {ad && (
            <Flag data={{ label: 'AD', color: 'black70' }} radius="bl" className={styles.ad} />
          )}
        </div>
      </Link>
    </div>
  );
};

ThumbSlideItem.displayName = 'ThumbSlideItem';
