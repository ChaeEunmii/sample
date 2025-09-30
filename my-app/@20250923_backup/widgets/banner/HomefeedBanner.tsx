import { Heading, Image, Video, TextButton, Bubble } from '@/shared/ui';
import { BannerMedia } from './bannerType';
import { isVideoFile } from '@/shared/utils/ui';
import styles from './HomefeedBanner.module.scss';
import clsx from 'clsx';

interface HomefeedBannerProps {
  title?: React.ReactNode;
  image?: BannerMedia;
  href?: string;
  bubbleText?: string;
}
export const HomefeedBanner = ({ title, image, href, bubbleText }: HomefeedBannerProps) => {
  return (
    <div className={clsx(styles.root)}>
      {image &&
        (isVideoFile(image.src) ? (
          <Video src={image.src} label={image.alt} poster={image.poster} className={styles.image} />
        ) : (
          <Image {...image} className={styles.image} />
        ))}

      {title && (
        <Heading size="8" className={styles.title}>
          {title}
        </Heading>
      )}
      {href && (
        <TextButton suffixIcon="arrowRight" size="1" href={href}>
          지금 보러가기
        </TextButton>
      )}
      {bubbleText && <Bubble className={styles.bubble}>{bubbleText}</Bubble>}
    </div>
  );
};
