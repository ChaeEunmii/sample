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
  variant?: 'default' | 'boxed';
  color?: 'white' | 'gray';
}
export const TextBanner = ({ data, variant = 'default', color }: TextBannerProps) => {
  return (
    <ul
      className={clsx(styles.root, styles[variant], color && variant === 'boxed' && styles[color])}
    >
      {data.map(({ title, subtitle, href }, idx) => (
        <li key={idx}>
          <Link href={href} className={styles.link}>
            <Heading className={styles.title}>{title}</Heading>
            {subtitle && (
              <Text as="span" size="3" className={styles.subtitle}>
                {subtitle}
              </Text>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TextBanner.displayName = 'TextBanner';
