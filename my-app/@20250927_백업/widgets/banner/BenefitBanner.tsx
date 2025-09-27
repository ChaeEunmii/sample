import { Image, Heading, Text, Box, TextList } from '@shared/ui';
import { BannerImage } from './bannerType';
import styles from './BenefitBanner.module.scss';
import clsx from 'clsx';

interface BenefitBannerProps {
  image?: BannerImage;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode[];
  align?: 'left' | 'center';
}

export const BenefitBanner = ({
  image,
  title,
  subtitle,
  description,
  align = 'center',
}: BenefitBannerProps) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (title && subtitle)
      return (
        <div className={clsx(styles.title, align !== 'center' && styles[align])}>{children}</div>
      );
    return children;
  };

  return (
    <div className={clsx(styles.root)}>
      {image && <Image {...image} className={styles.image} />}

      <Wrapper>
        {title && (
          <Heading weight="regular" indent>
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading size="8" weight="bold" indent>
            {subtitle}
          </Heading>
        )}
      </Wrapper>

      {description && description.length > 0 && <TextList variant="info" data={description} />}
    </div>
  );
};
