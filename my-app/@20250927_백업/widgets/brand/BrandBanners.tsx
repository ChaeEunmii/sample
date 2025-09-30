// 컴포넌트
import { Carousel, Grid, Image, Link, Text } from '@shared/ui';
import { ProdGem } from '@widgets/product';
// 스타일
import styles from './BrandBanners.module.scss';
// 타입
import { BannerImage } from '../banner/bannerType';

export interface BrandBannersItem {
  /** 배너 이미지 */
  image: BannerImage;
  /** 배너 링크 */
  href: string;
  /** 배너 타이틀 */
  title?: string;
  /** 위시리스트 대상 ID */
  id?: string | number;
}

export interface BrandBannersProps {
  /** 배너 데이터 배열 */
  data: BrandBannersItem[];
  /** 한 화면에 보여줄 배너 개수 */
  columns?: number;
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
}

export const BrandBanners = ({ data, columns = 2.5, wishlist }: BrandBannersProps) => {
  const renderSlide = (item: BrandBannersItem, idx: number) => {
    const isActive = item.id !== undefined && wishlist?.activeIds.includes(item.id);

    return (
      <div className={styles.item}>
        <Link key={idx} href={item.href} className={styles.link} type="block">
          <Image src={item.image.src} alt={item.image.alt} className={styles.image} />
          {item.title && (
            <Text as="strong" className={styles.title}>
              {item.title}
            </Text>
          )}
        </Link>
        {item.id !== undefined && wishlist && (
          <ProdGem
            isActive={Boolean(isActive)}
            onChange={(newIsActive) => wishlist.onToggle(item.id!, newIsActive)}
            className={styles.gem}
          />
        )}
      </div>
    );
  };

  // 2개 이하일 경우 grid 노출
  if (data.length <= 2) {
    return (
      <Grid columns={2} gutter={8}>
        {data.map(renderSlide)}
      </Grid>
    );
  }

  return <Carousel slides={data.map(renderSlide)} slidesPerView={columns} spaceBetween={8} />;
};

BrandBanners.displayName = 'BrandBanners';
