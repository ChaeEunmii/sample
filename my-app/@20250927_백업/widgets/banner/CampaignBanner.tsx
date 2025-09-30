// 컴포넌트
import { Image, Heading, Link, Icon } from '@shared/ui';
// 스타일
import styles from './CampaignBanner.module.scss';
import clsx from 'clsx';
// 타입
import { BannerImage } from './bannerType';

interface CampaignBannerProps {
  image: BannerImage;
  title: React.ReactNode;
  href: string;
  className?: string;
}
export const CampaignBanner = ({ image, title, href, className }: CampaignBannerProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Link href={href} type="block">
        <Image {...image} className={styles.image} />
        <div className={styles.title}>
          <Heading size="5" weight="medium" ellipsis={1}>
            {title}
          </Heading>
          <Icon name="arrowRight" />
        </div>
      </Link>
    </div>
  );
};
