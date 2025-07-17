import { Text, TextButton } from '@shared/ui';
import { formatDate, formatPrice } from '@/shared/utils/ui';

import styles from './CouponItem.module.scss';

interface CouponItemProps {
  data: {
    /** 쿠폰 카테고리 */
    category?: string;
    /** 쿠폰명 */
    title: string;
    /** 정률 쿠폰값 */
    rate?: number;
    /** 정액 쿠폰값 */
    value?: number;
    /** 쿠폰 수량 */
    count?: number;
    /** 쿠폰 사용 조건 */
    require?: string;
    /** 사용 기한 */
    due?: string;
  };
  isDownload: boolean;
  onDownload: () => void;
}

export default function CouponItem({ data, isDownload, onDownload }: CouponItemProps) {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.buttonWrap}>
          {/* 정률,정액 값 */}
          {(data.value || data.rate) && (
            <Text size="8" weight="bold" className={styles.value}>
              {data.value ? formatPrice(data.value) : `${data.rate}%`}
            </Text>
          )}

          {/* 버튼 */}
          <TextButton
            size="1"
            suffixIcon={isDownload ? 'check' : 'download'}
            className={styles.btn}
            color={isDownload ? 'gray3' : 'gray1'}
            disabled={isDownload ? true : false}
            onClick={onDownload}
          >
            {isDownload ? '다운 완료' : '다운로드'}
          </TextButton>
        </div>

        {/* 카테고리 & 쿠폰명 */}
        <Text size="5" weight="semibold" className={styles.title}>
          {data.category && `[${data.category}] `}
          {data.title}
        </Text>

        {/* 사용 조건 */}
        <Text size="3" color="gray3" className={styles.require}>
          {data.require}
        </Text>

        {/* 사용 기한 */}
        <Text size="3" color="gray3" className={styles.due}>
          ~ {formatDate(data.due, 'dot')}까지
        </Text>
      </div>

      {/* 쿠폰 수량 */}
      {data.count && data.count > 1 && (
        <Text size="3" className={styles.count}>
          {data.count}장
        </Text>
      )}
    </div>
  );
}
