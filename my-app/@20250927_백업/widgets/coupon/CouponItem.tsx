import clsx from 'clsx';
import { Flag, Text, TextButton } from '@shared/ui';
import { formatDate, formatNumber, formatPrice } from '@/shared/utils/ui';
import styles from './CouponItem.module.scss';

export type CouponType =
  | 'discount'
  | 'parking'
  | 'order'
  | 'tier'
  | 'barcode'
  | 'authKey'
  | 'eyeCheck'
  | 'gift'
  | 'cafe'
  | 'cis';
export interface CouponData {
  /** 쿠폰 타입
   * - 온라인: 할인(discount), 주차(parking), 주문서(order), 등급(tier)
   * - 오프라인: 바코드 회수(barcode), 인증키(authKey), 직원 확인/아이체크 방식(eyeCheck), 사은품 교환권(gift), 카페H 이용권(cafe), 온오프공용(cis) */
  type?: CouponType;
  /** 쿠폰 카테고리 */
  category?: string;
  /** 쿠폰명 */
  title: string;
  /** 정률 쿠폰값 */
  rate?: number;
  /** 정액 쿠폰값 */
  value?: number;
  /** 포인트 */
  point?: number;
  /** 정률, 정액, 포인트 제외한 할인 방식 사용(무료주차 시간, 카페이용권 등) */
  perk?: string;
  /** 등급 */
  tier?: string;
  /** 쿠폰 수량(수량이 9999면 무제한) */
  count?: number;
  /** 쿠폰 사용 조건 */
  require?: string;
  /** 사용 기한(시작일) */
  start?: string;
  /** 사용 기한(만료일) */
  due?: string;
  /** 사용 지점 */
  store?: string;
  /** 그룹핑 쿠폰 */
  group?: {
    /** id (같은 id면 그룹핑 쿠폰) */
    id: string;
    /** 쿠폰명 */
    title: string;
  };
  /** 쿠폰 소유 여부 */
  hasCoupon?: boolean;
}

export interface CouponItemProps {
  /** 쿠폰 데이터 */
  data: CouponData;
  /** 쿠폰 스타일(기본, 쿠폰 모듈) */
  variant?: 'default' | 'module';
  /** 쿠폰 다운로드 여부 */
  isDownload?: boolean;
  /** 쿠폰 모양인 컨텐츠 여부(다운로드 불가) */
  isContent?: boolean;
  /** 그룹핑 쿠폰인지 체크 */
  isGroup?: boolean;
  /** 쿠폰 다운로드 후 실행 함수 */
  onDownload?: () => void;
  /** 추가 클래스명 */
  className?: string;
}

export default function CouponItem({
  data,
  variant = 'default',
  isDownload,
  isContent = false,
  isGroup = false,
  onDownload,
  className,
}: CouponItemProps) {
  // 쿠폰 남은 기간 체크
  const getDueText = (due: string | undefined): string | null => {
    if (!due || due.length !== 8) return null;

    // 현재 받아오는 '20250715' 형식은 Date에서 인식 못함 → '2025-07-15'로 바꿔야 함
    const parsedDue = `${due.slice(0, 4)}-${due.slice(4, 6)}-${due.slice(6, 8)}`;
    const dueDate = new Date(parsedDue);

    if (isNaN(dueDate.getTime())) return null;

    const today = new Date();
    // 시간 제거(날짜만 비교)
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const diffInMs = dueDate.getTime() - today.getTime();
    const daysLeft = Math.floor(diffInMs / MS_PER_DAY);

    // 유효기간이 30일 이상 남았거나 이미 만료된 경우는 표시하지 않음
    if (daysLeft > 30 || daysLeft < 0) return null;
    // 유효기간 0일 남은 경우
    if (daysLeft === 0) return '(오늘까지)';
    // 유효기간 만료 30일부터 d-day
    return `(${daysLeft}일 남음)`;
  };

  // 유효기간 만료일
  const dueText = getDueText(data.due);

  return (
    <div className={clsx(styles.root, isContent && styles.contentCoupon, className)}>
      <div className={styles.info}>
        <div className={styles.buttonWrap}>
          {/* 정률,정액, 시간, 포인트 값 */}
          {(data.value || data.rate || data.point || data.perk) && (
            <Text size="8" weight="bold" className={styles.value}>
              {data.value
                ? formatPrice(data.value)
                : data.rate
                  ? `${data.rate}%`
                  : data.point
                    ? `${formatNumber(data.point)}P`
                    : data.perk}
            </Text>
          )}

          {/* 등급 */}
          {data.type === 'tier' && (
            <Flag
              data={[
                {
                  color: 'gray5', // 디자인 확정 - 250905
                  label: data.tier,
                },
              ]}
              size="medium"
              className={styles.tier}
            />
          )}

          {/* 버튼: 그룹핑 쿠폰이면 전체 다운로드 후에 노출 */}
          {(!isGroup || (isGroup && isDownload)) && !isContent && (
            <TextButton
              size="1"
              suffixIcon={isDownload ? (variant === 'module' ? 'arrowRight' : 'check') : 'download'}
              className={styles.btn}
              color={isDownload && variant === 'default' ? 'gray3' : 'gray1'}
              disabled={isDownload && variant === 'default'}
              onClick={onDownload}
            >
              {!isDownload
                ? '다운로드'
                : variant === 'module' && ['discount', 'order', 'tier'].includes(data.type ?? '')
                  ? '적용 상품'
                  : variant === 'module'
                    ? '사용하기'
                    : '다운 완료'}
            </TextButton>
          )}
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
        {data.due && (variant !== 'module' || isDownload) && (
          <Text size="3" color="gray3" className={styles.due}>
            ~ {formatDate(data.due, 'dot')}
            {variant === 'default' && '까지'}
            {variant === 'module' && dueText && ` ${dueText}`}
          </Text>
        )}

        {/* 사용 지점 */}
        {data.store && (
          <>
            {data.type === 'cis' ? (
              <div className={styles.storeWrap}>
                <Flag
                  data={[
                    {
                      color: 'gray',
                      label: '온오프공용',
                    },
                  ]}
                  size="medium"
                />
                <Text size="3" className={styles.store}>
                  {data.store}
                </Text>
              </div>
            ) : (
              <Text size="3" className={styles.store}>
                {data.store}
              </Text>
            )}
          </>
        )}
      </div>

      {/* 쿠폰 수량 */}
      {data.count && data.count > 1 && (
        <Text size="3" className={styles.count}>
          {data.count === 9999 ? '무제한' : `${data.count}장`}
        </Text>
      )}
    </div>
  );
}
