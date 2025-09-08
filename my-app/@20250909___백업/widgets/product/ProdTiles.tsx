import { Heading, Link, Image, Video } from '@shared/ui';
import { ProdGem } from './ProdGem';
import { BannerMedia } from '@widgets/banner/bannerType';
import { isVideoFile } from '@shared/utils/ui';
import styles from './ProdTiles.module.scss';
import clsx from 'clsx';

interface ProdTileProps {
  id: string;
  image: { src: string; alt?: string };
  title?: string;
  href?: string;
  showTitle?: boolean;
  isActive?: boolean;
  onChange?: (productId: string, isActive: boolean) => void;
}

const ProdTile = ({
  id,
  image,
  title,
  href,
  showTitle = true,
  isActive = false,
  onChange,
}: ProdTileProps) => {
  const handleGemChange = (newIsActive: boolean) => {
    onChange?.(id, newIsActive);
  };

  return (
    <div className={styles.tile}>
      <Link type="flex" href={href || '#'} className={styles.link}>
        <Image src={image.src} alt={image.alt} className={styles.image} />
        {showTitle && (
          <Heading size="2" className={styles.name}>
            {title}
          </Heading>
        )}
      </Link>
      <ProdGem isActive={isActive} onChange={handleGemChange} className={styles.gem} />
    </div>
  );
};

interface BannerTileProps {
  image: BannerMedia;
  href?: string;
}

const BannerTile = ({ image, href }: BannerTileProps) => {
  return (
    <Link type="block" href={href || '#'} className={styles.banner}>
      {isVideoFile(image.src) ? (
        <Video
          src={image.src}
          label={image.alt}
          poster={image.poster}
          loop
          autoPlay
          className={styles.image}
        />
      ) : (
        <Image {...image} className={styles.image} />
      )}
    </Link>
  );
};

export interface ProdTilesProps {
  /** 배너 이미지 */
  banner?: BannerTileProps;
  /** 상품 데이터 */
  data?: Omit<ProdTileProps, 'isActive' | 'onChange'>[];
  pattern?: '1' | '2';
  /** 추가 클래스명 */
  className?: string;
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string, isActive: boolean) => void;
  };
}

export const ProdTiles = ({ banner, data = [], pattern, className, wishlist }: ProdTilesProps) => {
  const hasBanner = banner && pattern === '2';

  const handleWishlistToggle = (productId: string, isActive: boolean) => {
    wishlist?.onToggle(productId, isActive);
  };

  // pattern이 '1'일 때 3배수로만 데이터 제한
  const displayData = pattern === '1' ? data.slice(0, Math.floor(data.length / 3) * 3) : data;

  return (
    <div className={clsx(styles.root, pattern && styles[`pattern${pattern}`], className)}>
      {hasBanner && <BannerTile {...banner} />}
      {displayData.length > 0 &&
        displayData.map((item, idx) => {
          const isActive = wishlist?.activeIds.includes(item.id) ?? false;

          return (
            <ProdTile
              {...item}
              key={item.id || idx}
              showTitle={pattern !== '2'}
              isActive={isActive}
              onChange={handleWishlistToggle}
            />
          );
        })}
    </div>
  );
};
