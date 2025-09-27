// 컴포넌트
import { Image, Text, Link, Carousel, Flag } from '@shared/ui';
// 스타일
import styles from './TagBanner.module.scss';
import clsx from 'clsx';
// 타입
import { TextWithColor } from '../banner/bannerType';
// 유틸
import { textColor } from '@shared/utils/ui';

export interface TagBannerProps {
  data: {
    /** 배너 타이틀 */
    title: TextWithColor;
    /** 배너 이미지 */
    image?: string;
    /** 배너 링크 */
    href: string;
    /** ad 사용 여부 */
    ad?: boolean;
  }[];
  multiline?: boolean;
  color?: 'white' | 'gray';
}

export const TagBanner = ({ data, multiline = false, color = 'gray' }: TagBannerProps) => {
  const renderList = (items: typeof data) => (
    <ul className={clsx(styles.list, color !== 'gray' && styles[color])}>
      {items.map(({ title, image, href, ad }, idx) => (
        <li key={idx} className={styles.item}>
          <Link href={href} className={styles.link}>
            {image && <Image src={image} className={styles.image} />}
            <Text
              as="strong"
              weight="medium"
              className={styles.title}
              style={textColor(title.color)}
            >
              {title.text}
            </Text>
            {ad && <Flag data={{ label: 'AD', color: 'black30' }} size="small" />}
          </Link>
        </li>
      ))}
    </ul>
  );

  const slides =
    data.length > 10 || multiline
      ? [data.filter((_, idx) => idx % 2 === 0), data.filter((_, idx) => idx % 2 === 1)]
      : [data];

  return (
    <Carousel
      slides={slides.map(renderList)}
      rows={data.length > 10 || multiline ? 2 : undefined}
      freeMode
    />
  );
};

TagBanner.displayName = 'TagBanner';
