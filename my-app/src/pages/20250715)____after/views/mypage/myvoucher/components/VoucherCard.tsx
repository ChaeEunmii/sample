'use client';

import { Flag, Image, Link, Text, Heading } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './VoucherCard.module.scss';

// Voucher 종류 타입 정의 (바우처 | 방문쿠폰 | 방문예약 | 체험/신청)
export type VoucherType = 'voucher' | 'coupon' | 'reservation' | 'trialApplied';

// Voucher 상태 타입 정의 (사용가능 | 이용완료 | 기간만료 | 주문취소)
export type VoucherStatus = 'available' | 'used' | 'expired' | 'cancelled';

// 상태별 표시할 텍스트
const statusLabelMap: Record<VoucherStatus, string> = {
  available: '', // 사용 가능 상태는 오버레이 텍스트 없음
  used: '사용완료',
  expired: '기간만료',
  cancelled: '주문취소',
};

// 내부 컴포넌트: 링크(href)가 있으면 Link 컴포넌트, 없으면 div로 감싸는 역할
interface CardTagProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}
const CardTag = ({ href, className, children }: CardTagProps) =>
  href ? (
    <Link href={href} type="block" className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );

export interface VoucherCardProps {
  /** 바우처 id */
  id: string;
  /** 바우처 링크 */
  href?: string;
  /** 바우처 이미지 */
  image: {
    src: string;
    alt?: string;
  };
  /** 바우처 부제목 */
  subTitle?: string;
  /** 바우처 제목 */
  title: string;
  /** 바우처 하단 정보 */
  infos?: {
    /** 수량(매수) */
    amount: number;
    /** 사용 날짜 */
    useData?: string;
    /** 사용 시간 */
    useTime?: string;
    /** 종료 관련 */
    endInfo?: string;
    /** (체험 등) 생성일 */
    createDate?: string;
    /** (취소시) 취소일 */
    cancelDate?: string;
  };
  /** rsvp 여부 */
  rsvp?: boolean;
  /** 바우처 종류 (기본값: 'voucher') */
  type?: VoucherType;
  /** '체험/신청'에서 사용할 옵션정보  */
  options?: string[];
  /** 현재 상태 */
  status: VoucherStatus;
  /** 하단 추가 영역 */
  bottomSlot?: React.ReactNode;
  /** 추가 CSS 클래스 */
  className?: string;
}

// 우측 하단 정보 표시 텍스트 생성 함수
function renderInfoText(
  type: VoucherType,
  status: VoucherStatus,
  infos?: VoucherCardProps['infos']
): React.ReactNode | null {
  if (!infos) return null;

  // 오늘 날짜를 YYYYMMDD 형식으로 계산 (예시)
  const today = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const todayStr = `${today.getFullYear()}${pad(today.getMonth() + 1)}${pad(today.getDate())}`;

  switch (type) {
    // 바우처
    case 'voucher':
      switch (status) {
        case 'available':
          if (infos.useData && infos.useTime) {
            return `${formatDate(infos.useData, 'dot')} | ${infos.useTime}`;
          }
          if (infos.useData) {
            return formatDate(infos.useData, 'dot');
          }
          return null;

        case 'used':
          if (infos.useData && infos.useTime) {
            return `${formatDate(infos.useData, 'dot')} | ${infos.useTime} 사용`;
          }
          if (infos.useData) {
            return `${formatDate(infos.useData, 'dot')} 사용`;
          }
          return null;

        case 'expired':
          if (infos.endInfo) {
            return `${formatDate(infos.endInfo, 'dot')} 까지`;
          }
          return null;

        case 'cancelled':
          if (infos.cancelDate) {
            return `${formatDate(infos.cancelDate, 'dot')} 취소`;
          }
          return null;
      }
      break;
    // 방문 쿠폰
    case 'coupon':
      switch (status) {
        case 'available':
          if (infos.endInfo === todayStr) {
            return (
              <>
                {formatDate(infos.endInfo, 'dot')} <span className={styles.today}>오늘까지</span>
              </>
            );
          }
          if (infos.endInfo) {
            return `~${formatDate(infos.endInfo, 'dot')}`;
          }
          return null;

        case 'used':
          if (infos.useData) {
            return `${formatDate(infos.useData, 'dot')} 사용`;
          }
          return null;

        case 'expired':
          if (infos.endInfo) {
            return `~${formatDate(infos.endInfo, 'dot')} 까지`;
          }
          return null;
      }
      break;
    // 방문 예약
    case 'reservation':
      switch (status) {
        case 'available':
          if (infos.endInfo && infos.useTime) {
            return `${formatDate(infos.endInfo, 'dot')} | ${infos.useTime}`;
          }
          if (infos.endInfo) {
            return formatDate(infos.endInfo, 'dot');
          }
          return null;

        case 'used':
          if (infos.useData && infos.useTime) {
            return `${formatDate(infos.useData, 'dot')} | ${infos.useTime} 사용`;
          }
          if (infos.useData) {
            return `${formatDate(infos.useData, 'dot')} 사용`;
          }
          return null;

        case 'expired':
          if (infos.endInfo) {
            return `${formatDate(infos.endInfo, 'dot')} | ${infos.useTime} 까지`;
          }
          return null;

        case 'cancelled':
          if (infos.cancelDate) {
            return formatDate(infos.cancelDate, 'dot');
          }
          return null;
      }
      break;
    // 체험/신청
    case 'trialApplied':
      if (status === 'cancelled') {
        return infos.cancelDate ? formatDate(infos.cancelDate, 'dot') : null;
      } else {
        return infos.createDate ? formatDate(infos.createDate, 'dot') : null;
      }

    default:
      return null;
  }

  return null;
}

export const VoucherCard = ({
  id,
  href,
  image,
  subTitle,
  title,
  rsvp,
  type = 'voucher',
  infos,
  options,
  status,
  bottomSlot,
  className,
  ...props
}: VoucherCardProps) => {
  // 썸네일 상단 플래그
  const getCardFlag = () => {
    if (!rsvp) return;
    const baseFlags = [];

    if (rsvp)
      baseFlags.push({
        color: 'black' as const,
        label: 'RSVP',
      });

    return baseFlags;
  };
  const voucherFlags = getCardFlag();

  // 상태가 'available'이 아닐때 상태 오버레이를 화면노출
  const showStatusOverlay = status !== 'available';

  return (
    <>
      <div id={id} className={clsx(styles.root, styles.horizontal, className)} {...props}>
        {/* 왼쪽 썸네일 영역: 이미지, 배지, 상태 오버레이 */}
        <CardTag href={href} className={styles.thumb}>
          {voucherFlags && <Flag data={voucherFlags} className={styles.flagTop} radius="br" />}
          <Image src={image.src} alt={image.alt} />
          {showStatusOverlay && (
            <Text size="3" className={styles.pause}>
              {statusLabelMap[status]}
            </Text>
          )}
        </CardTag>

        {/* 오른쪽 상세 정보 영역: 부제목, 제목, 정보 목록 */}
        <CardTag href={href} className={styles.detail}>
          {/* 오른쪽 상단 정보들 */}
          <div className={styles.top}>
            {subTitle && (
              <Text
                as="span"
                className={clsx(styles.subTit, type === 'trialApplied' && styles.trialApplied)}
              >
                {subTitle}
              </Text>
            )}
            <Heading as="strong" className={styles.title}>
              {title}
            </Heading>
            {type === 'trialApplied' && Array.isArray(options) && options.length > 0 && (
              <ul className={styles.options}>
                {options.map((opt, index) => (
                  <li key={index} className={styles.optionItem}>
                    <Text size="2">{opt}</Text>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 오른쪽 하단 정보들 */}
          <div className={styles.bottom}>
            {type !== 'trialApplied' && infos?.amount !== undefined && (
              <span className={styles.amount}>{infos.amount}매</span>
            )}
            <ul className={styles.infos}>
              {renderInfoText(type, status, infos) && (
                <li>{renderInfoText(type, status, infos)}</li>
              )}
            </ul>
          </div>
        </CardTag>
      </div>
      {/* 하단 추가 슬롯 (필요시 삽입 가능) */}
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </>
  );
};
