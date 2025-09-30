import { Grid, Image, Video, Link } from '@/shared/ui';
import { BannerMedia } from './bannerType';
import { isVideoFile } from '@shared/utils/ui';
import styles from './FullBanner.module.scss';

interface FullBannerProps {
  data: {
    image: BannerMedia;
    href?: string;
  }[];
}

export const FullBanner = ({ data }: FullBannerProps) => {
  return (
    <Grid gutter={8}>
      {data.map((item, index) => {
        const isVideo = isVideoFile(item.image.src);

        const Wrapper = ({ children }: { children: React.ReactNode }) =>
          item.href ? (
            <Link type="block" href={item.href}>
              {children}
            </Link>
          ) : (
            <>{children}</>
          );

        return (
          <Wrapper key={index}>
            {isVideo ? (
              <Video
                src={item.image.src}
                label={item.image.alt}
                poster={item.image.poster}
                loop
                autoPlay
                className={styles.image}
              />
            ) : (
              <Image {...item.image} className={styles.image} />
            )}
          </Wrapper>
        );
      })}
    </Grid>
  );
};
