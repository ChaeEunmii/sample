import { Drawer, Image, Carousel, Text, Link, Heading } from '@/shared/ui';
import { CoordinateType } from './CoordinateBanner';

import styles from './CoordinateBanner.module.scss';

interface CoordinateBannerDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 타이틀 */
  title: string;
  /** 컨텐츠 */
  subtitle: string;
  /** 좌표 데이터 */
  coordinate: CoordinateType[];
}

export default function CoordinateBannerDrawer({
  isOpen = false,
  onClose,
  title,
  subtitle,
  coordinate,
}: CoordinateBannerDrawerProps) {
  return (
    <Drawer title="더보기" isOpen={isOpen} onClose={onClose}>
      <Carousel
        slides={coordinate.map((coord, idx) => (
          <Link key={idx} href={coord.href} className={styles.imageWrap}>
            <Image {...coord.image} />
          </Link>
        ))}
        slidesPerView={3.5}
        spaceBetween={7}
        flush
        className="ncp-mt-s"
      />
      <Heading size="5" className="ncp-mt-l">
        {title}
      </Heading>
      <Text className="ncp-mt-s" reading>
        {subtitle}
      </Text>
    </Drawer>
  );
}
