import clsx from 'clsx';
import { Heading, Text, Image } from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';
import styles from './ImageCouponItem.module.scss';

interface ImageCouponItem {
  /** 쿠폰 이미지 */
  couponImg?: {
    src: string;
    alt: string;
  };
  /** 쿠폰명 */
  title: string;
  /** 사용 조건 */
  require?: string;
  /** 이용기간 시작일 */
  start?: string;
  /** 이용기간 종료일 */
  due?: string;
  /** 사용 지점 */
  store?: string;
}

interface ImageCouponItemProps {
  /** 이미지 쿠폰 데이터 */
  data: ImageCouponItem;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const ImageCouponItem = ({ data, className }: ImageCouponItemProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.imgBox}>
        <Image src={data.couponImg?.src ?? ''} alt={data.couponImg?.alt} />
      </div>
      <div className={styles.infoBox}>
        <Heading size="6" weight="bold">
          {data.title}
        </Heading>

        {/* 사용 기한 */}
        <Text size="4" color="gray3" className={styles.due}>
          {formatDate(data.start, 'dot')} ~ {formatDate(data.due, 'dot')}
        </Text>

        {/* 사용 조건 */}
        <Text size="4" color="gray3" className={styles.require}>
          {data.require}
        </Text>

        {/* 사용 지점 */}
        <Text size="4" className={styles.store}>
          {data.store}
        </Text>
      </div>
    </div>
  );
};

ImageCouponItem.displayName = 'ImageCouponItem';
