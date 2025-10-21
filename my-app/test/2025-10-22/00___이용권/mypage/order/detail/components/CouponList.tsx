'use client';

import clsx from 'clsx';
import { Text, IconButton, Checkbox, Flag, ButtonArea, Button } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import styles from './CouponList.module.scss';

// 쿠폰상태, 플래그설정
export type CouponStatus = 'waiting' | 'used' | 'expired' | 'cancel_apply' | 'cancel_completed';
export const couponStatusLabelMap: Record<CouponStatus, string> = {
  waiting: '사용대기',
  used: '사용완료',
  expired: '기간만료',
  cancel_apply: '취소요청',
  cancel_completed: '취소완료',
};
const couponStatusColorMap: Record<CouponStatus, 'gray4' | 'dark2'> = {
  waiting: 'gray4',
  used: 'dark2',
  expired: 'dark2',
  cancel_apply: 'gray4',
  cancel_completed: 'dark2',
};
// 선택불가한 상태(체크박스 사용시 비활성화 설정)
export const isUnselectableStatus = (status?: CouponStatus, due?: string) => {
  if (status === 'used' || status === 'cancel_apply' || status === 'cancel_completed') return true;
  // '기간만료' 샘플로직입니다.
  if (status === 'expired') {
    if (!due) return true;
    // 'YYYYMMDD' -> 'YYYY-MM-DD'
    const formattedDue =
      due.length === 8 ? `${due.slice(0, 4)}-${due.slice(4, 6)}-${due.slice(6, 8)}` : due;

    const diff = Date.now() - new Date(formattedDue).getTime();
    const fiveYears = 5 * 365 * 24 * 60 * 60 * 1000;
    // 5년 초과면 true (비활성화)
    return diff > fiveYears || isNaN(diff);
  }

  return false;
};

export interface CouponsData {
  id: string;
  number: string;
  start?: string;
  due?: string;
  status?: CouponStatus;
  sentRemain?: number;
}

interface CouponListProps {
  /** 모드 설정 (기본목록, 체크박스선택) */
  mode?: 'default' | 'select';
  /** 데이터 */
  coupons: CouponsData[];
  /** 체크박스 상태 관리 */
  selection?: {
    selectedIds: (string | number)[];
    onChange: (id: string | number, isSelected: boolean) => void;
    disabledIds?: (string | number)[];
  };
  /** 추가적인 클래스 */
  className?: string;
  /** 버튼 클릭핸들러 */
  onResendClick?: (coupon: CouponsData, index: number) => void;
  onExtendClick?: (coupon: CouponsData, index: number) => void;
  onCancelDetailClick?: (coupon: CouponsData, index: number) => void;
}

export function CouponList({
  mode = 'default',
  coupons,
  className,
  selection,
  onResendClick,
  onExtendClick,
  onCancelDetailClick,
}: CouponListProps) {
  // 리스트여부
  const asList = coupons.length > 1;

  // 체크박스 상태 관리
  const getCheckProps = (couponId: string, status?: CouponStatus, due?: string) => {
    if (!selection) return undefined;

    const isUnselectable = isUnselectableStatus(status, due);

    const isSelected = selection.selectedIds.includes(couponId);
    const disabled = isUnselectable || !!selection.disabledIds?.includes(couponId);

    return {
      isSelected: !isUnselectable && isSelected,
      disabled,
      onChange: (id: string, checked: boolean) => selection.onChange(id, checked),
    };
  };

  // 쿠폰 아이템 렌더
  const renderConponItem = (cp: CouponsData, cIdx: number) => {
    // 상태, 플래그
    const status: CouponStatus = cp.status ?? 'waiting';
    const flagMeta = {
      color: couponStatusColorMap[status],
      label: couponStatusLabelMap[status],
    };

    // 비활성 스타일조건
    const isDisabled = cp.status === 'cancel_completed';

    // 버튼 노출 조건들
    const showCancelDetailBtn = status === 'cancel_apply' || status === 'cancel_completed';
    const canResend = typeof cp.sentRemain === 'number' && cp.sentRemain > 0;
    const showCouponResentBtns = !showCancelDetailBtn && status !== 'expired' && canResend;
    const showRangeBtns = status === 'expired';
    const showActions = mode !== 'select';

    // 체크박스 상태 설정
    const id = cp.id ?? cp.number;
    const check = getCheckProps(id, status, cp.due);

    return (
      <>
        <div className={styles.conponItem}>
          <div className={styles.topInfo}>
            <div className={styles.title}>
              {mode === 'select' ? (
                <Checkbox
                  label={<span className={styles.checkLabel}>쿠폰 {cIdx + 1}</span>}
                  checked={check?.isSelected}
                  disabled={check?.disabled}
                  onChange={(e) => check?.onChange(id, e.target.checked)}
                  className={clsx(styles.check, isDisabled && styles.checkDisabled)}
                />
              ) : (
                <Text
                  as="span"
                  indent
                  className={clsx(styles.label, isDisabled && styles.disabled)}
                >
                  쿠폰 {cIdx + 1}
                </Text>
              )}
            </div>
            <Flag data={flagMeta} />
          </div>
          <div className={clsx(styles.number, isDisabled && styles.disabled)}>
            <Text as="span" size="5" indent>
              {cp.number}
            </Text>
            <IconButton
              name="copy"
              size="small"
              onClick={() => navigator.clipboard?.writeText(cp.number)}
              aria-label="쿠폰번호 복사"
            >
              복사하기
            </IconButton>
          </div>
          {(cp.start || cp.due) && (
            <div className={clsx(styles.range, isDisabled && styles.disabled)}>
              <Text as="span" size="4" color="gray2">
                유효기간
              </Text>
              <Text as="span" size="4" color="gray2">
                {formatDate(cp.start, 'dot')}~{formatDate(cp.due, 'dot')}
              </Text>
            </div>
          )}
        </div>
        {showActions && (
          <ButtonArea className={styles.btns}>
            {showCouponResentBtns && (
              <Button variant="tertiary" onClick={() => onResendClick?.(cp, cIdx)}>
                {`쿠폰 재발송(${cp.sentRemain}회 남음)`}
              </Button>
            )}
            {showRangeBtns && (
              <Button variant="tertiary" onClick={() => onExtendClick?.(cp, cIdx)}>
                기간연장
              </Button>
            )}
            {showCancelDetailBtn && (
              <Button variant="tertiary" onClick={() => onCancelDetailClick?.(cp, cIdx)}>
                취소 상세
              </Button>
            )}
          </ButtonArea>
        )}
      </>
    );
  };
  // 1개일 때: div
  if (!asList) {
    const cp = coupons[0];
    return (
      <div className={clsx(styles.coupons, className)}>
        <div className={styles.numberItem}>{renderConponItem(cp, 0)}</div>
      </div>
    );
  }
  // 2개 이상: ul
  return (
    <ul className={clsx(styles.coupons, className)}>
      {coupons.map((cp, cIdx) => (
        <li key={`${cp.number}-${cIdx}`} className={styles.numberItem}>
          {renderConponItem(cp, cIdx)}
        </li>
      ))}
    </ul>
  );
}
