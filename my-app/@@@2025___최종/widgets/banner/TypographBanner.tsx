// 컴포넌트
import { Text, Link, Icon, Image } from '@shared/ui';
// 스타일
import clsx from 'clsx';
import styles from './TypographBanner.module.scss';

export interface TypographBannerProps {
  data: {
    /** 타이포 이미지 */
    image: {
      src: string;
      alt?: string;
    };
    /** 텍스트 */
    text: React.ReactNode;
    /** 배너 링크 */
    href: string;
  }[];
}
export const TypographBanner = ({ data }: TypographBannerProps) => {
  return (
    <ul className={clsx(styles.root)}>
      {data.map(({ image, text, href }, idx) => (
        <li key={idx}>
          <Link href={href} className={styles.link}>
            <Image {...image} className={styles.typo} />
            <Text as="strong" className={styles.text}>
              {text}
            </Text>
            <Icon name="arrowRight" size="xsmall" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

TypographBanner.displayName = 'TypographBanner';
