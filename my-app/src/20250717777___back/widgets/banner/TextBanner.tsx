// 컴포넌트
import { Heading, Link, Icon } from '@shared/ui';
// 스타일
import styles from './TextBanner.module.scss';
import clsx from 'clsx';

export interface TextBannerProps {
  data: {
    /** 배너 타이틀 */
    title: string;
    /** 배너 링크 */
    href: string;
  }[];
}
export const TextBanner = ({ data }: TextBannerProps) => {
  return (
    <div className={clsx(styles.root)}>
      {data.map(({ title, href }, idx) => (
        <Link key={idx} href={href} className={styles.link}>
          <Heading weight="semibold">{title}</Heading>
          <Icon name="arrowRight" size="small" />
        </Link>
      ))}
    </div>
  );
};

TextBanner.displayName = 'TextBanner';
