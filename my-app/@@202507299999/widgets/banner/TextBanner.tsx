// 컴포넌트
import { Heading, Text, Link } from '@shared/ui';
// 스타일
import styles from './TextBanner.module.scss';
import clsx from 'clsx';

export interface TextBannerProps {
  data: {
    /** 배너 타이틀 */
    title: string;
    subtitle?: string;
    /** 배너 링크 */
    href: string;
  }[];
}
export const TextBanner = ({ data }: TextBannerProps) => {
  return (
    <ul className={clsx(styles.root)}>
      {data.map(({ title, subtitle, href }, idx) => (
        <li key={idx}>
          <Link href={href} className={styles.link}>
            <Heading weight="medium" className={styles.title}>
              {title}
            </Heading>
            <Text as="span" size="3" className={styles.subtitle}>
              {subtitle}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};

TextBanner.displayName = 'TextBanner';
