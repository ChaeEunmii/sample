import { Link, Image, Text } from '@shared/ui';
import styles from './ProdThumbs.module.scss';
import clsx from 'clsx';

export interface ProdThumbsProps {
  data: {
    image: { src: string; alt?: string };
    title?: string;
    href?: string;
  }[];
  onClick?: () => void;
  className?: string;
}

export const ProdThumbs = ({ data, onClick, className }: ProdThumbsProps) => {
  const rootClass = clsx(styles.root, className);

  const renderThumb = (item: any, idx: number) => {
    const content = (
      <>
        <Image {...item.image} className={clsx(idx === 3 && data.length > 4 && styles.overflow)} />
        {idx === 3 && data.length > 4 && (
          <Text as="span" className={styles.rest}>
            +{data.length - 4}
          </Text>
        )}
      </>
    );

    return (
      <li key={idx} className={styles.item}>
        {item.href && !onClick ? (
          <Link href={item.href} type="block" className={styles.link}>
            {content}
          </Link>
        ) : (
          content
        )}
      </li>
    );
  };

  const list = (
    <ul className={styles.thumbs}>
      {data.slice(0, 4).map(renderThumb)}
      {Array.from({ length: Math.max(0, 4 - data.length) }, (_, i) => (
        <li key={`empty-${i}`} className={styles.item} />
      ))}
    </ul>
  );

  if (onClick) {
    return (
      <Link
        href="#"
        type="block"
        aria-label={`상품 ${data.length}개 보기`}
        onClick={() => onClick()}
        className={rootClass}
      >
        {list}
      </Link>
    );
  }

  return <div className={rootClass}>{list}</div>;
};
