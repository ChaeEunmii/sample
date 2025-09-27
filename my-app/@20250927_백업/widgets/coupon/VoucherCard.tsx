'use client';

import { Flag, Image, Link, Text, Heading } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './VoucherCard.module.scss';
import { ProdGem } from '../product';

// Voucher 종류 타입 정의 (바우처 | 방문쿠폰 | 방문예약 | 체험/신청)
export type VoucherType = 'voucher' | 'coupon' | 'reservation' | 'experience';

// Voucher 상태 타입 정의 (사용가능 | 이용완료 | 기간만료 | 주문취소)
export type VoucherStatus = 'available' | 'used' | 'expired' | 'cancelled';

// 상태별 표시할 텍스트
const statusLabelMap: Record<VoucherStatus, string> = {
  available: '',
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
  /** 바우처 링크*/
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 상단 서브타이틀*/
  subTitle?: string;
  /** 타이틀 텍스트 */
  title: string;
  /** 상세 정보 (수량, 날짜 등) */
  infos?: {
    /** 주문번호 */
    orderNum?: string;
    /** 수량 */
    amount?: number;
    /** 시작 날짜 */
    startDate?: string;
    /** 종료 날짜 */
    endDate?: string;
    /** 종료 시간 */
    endTime?: string;
    /** 취소 날짜 */
    cancelDate?: string;
    /** 사용 날짜 */
    useDate?: string;
    /** 사용 시간 */
    useTime?: string;
    /** 사용 장소 */
    usePlace?: string;
    /** 픽업 장소 */
    pickupPlace?: string;
    /** 유의 사항 */
    caution?: string;
    /** 생성 날짜 (체험 타입) */
    createDate?: string;
  };
  /** RSVP 여부 */
  rsvp?: boolean;
  /** 바우처 종류 (기본값 'voucher') */
  type?: VoucherType;
  /** 옵션 목록 (체험 타입에서만 표시) */
  options?: string[];
  /** 바우처 상태 */
  status?: VoucherStatus;
  /** 중간 슬롯 (썸네일, 상세정보 사이) */
  middleSlot?: React.ReactNode;
  /** 하단 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 스타일 변형 */
  variant?: 'default' | 'boxed';
  /** 젬 버튼 */
  gem?: {
    isActive: boolean;
    onChange: (productId: string, isActive: boolean) => void;
  };
  /** 기간 타이틀 노출여부 (ex: 방문기간,신청기간)*/
  showDateTitle?: boolean;
}

// 수량 표시 렌더 함수
function renderAmount(type: VoucherType, amount?: number): React.ReactNode | null {
  if (type === 'experience' || amount === undefined) return null;
  return (
    <div className={styles.meta}>
      <span className={styles.amount}>{amount}매</span>
    </div>
  );
}

// 옵션 리스트 렌더 함수
function renderOptions(type: VoucherType, options?: string[]): React.ReactNode | null {
  if (type !== 'experience' || !Array.isArray(options) || options.length === 0) return null;

  return (
    <ul className={styles.options}>
      {options.map((opt, index) => (
        <li key={index} className={styles.optionItem}>
          <Text size="2">{opt}</Text>
        </li>
      ))}
    </ul>
  );
}

// 날짜 및 상태 정보 렌더 함수
function renderInfoText(
  type: VoucherType,
  status: VoucherStatus,
  infos?: VoucherCardProps['infos']
): React.ReactNode | null {
  if (!infos) return null;

  // 날짜 포맷 함수 (YYYY.MM.DD 형식)
  const format = (date?: string) => (date ? formatDate(date, 'dot') : null);
  // 오늘 날짜 문자열 (쿠폰 타입 전용, 'YYYYMMDD' 형식)
  const todayStr =
    type === 'coupon' ? new Date().toISOString().slice(0, 10).replace(/-/g, '') : null;

  // 쿠폰이 '오늘까지'인 경우: 특별 표시 처리
  if (type === 'coupon' && status === 'available' && infos.endDate === todayStr) {
    return (
      <>
        ~{format(infos.endDate)} <span className={styles.today}>오늘까지</span>
      </>
    );
  }

  // startDate와 endDate가 모두 있으면 범위로 표시
  if (infos.startDate && infos.endDate) {
    return `${format(infos.startDate)} - ${format(infos.endDate)}`;
  }

  // 상태별 날짜/시간 표시용 접미사
  const suffixMap: Record<VoucherStatus, string> = {
    available: '',
    used: ' 사용',
    expired: ' 까지',
    cancelled: ' 취소',
  };
  // 날짜 + 시간 + 상태 접미사 조합
  const combineDateTime = (date?: string, time?: string, addSuffix = true) => {
    if (!date) return null;
    const suffix = addSuffix ? suffixMap[status] : '';
    return time ? `${format(date)} / ${time}${suffix}` : `${format(date)}${suffix}`;
  };

  // Voucher 상태에 따라 표시
  // available: 사용가능 | used: 사용완료 | expired: 기간만료 | cancelled: 주문취소
  switch (type) {
    // 바우처
    case 'voucher':
      if (status === 'used')
        return infos.useDate ? `${format(infos.useDate)} / ${infos.useTime} 사용` : null;
      if (status === 'expired')
        return infos.endDate ? `${format(infos.endDate)} / ${infos.endTime} 까지` : null;
      if (status === 'cancelled')
        return infos.cancelDate ? `${format(infos.cancelDate)} 취소` : null;
      return combineDateTime(infos.useDate, infos.useTime);

    // 방문 쿠폰
    case 'coupon':
      if (status === 'available') return infos.endDate ? `~${format(infos.endDate)}` : null;
      if (status === 'used') return infos.useDate ? `${format(infos.useDate)} 사용` : null;
      if (status === 'expired') return infos.endDate ? `~${format(infos.endDate)} 까지` : null;
      return null;

    // 방문 예약
    case 'reservation':
      if (status === 'available') return combineDateTime(infos.endDate, infos.useTime, false);
      if (status === 'used') return combineDateTime(infos.useDate, infos.useTime);
      if (status === 'expired')
        return infos.endDate ? `${format(infos.endDate)} / ${infos.useTime} 까지` : null;
      return null;

    // 체험/전시
    case 'experience':
      return status === 'cancelled'
        ? infos.cancelDate
          ? format(infos.cancelDate)
          : null
        : infos.createDate
          ? format(infos.createDate)
          : null;

    default:
      return null;
  }
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
  status = 'available',
  bottomSlot,
  className,
  onClick,
  variant = 'default',
  gem,
  showDateTitle,
  ...props
}: VoucherCardProps) => {
  //썸네일 좌측 상단 플래그 설정
  const getCardFlag = () => {
    if (!rsvp) return;
    return [
      {
        color: 'black' as const,
        label: 'RSVP',
      },
    ];
  };
  // 썸네일 플래그
  const voucherFlags = getCardFlag();

  // 타이틀 상단 플래그 설정
  const getTitFlag = () => {
    const flags = [];
    // 체험단 플래그
    if (type === 'experience' && variant !== 'boxed')
      flags.push({ color: 'green2' as const, label: '체험단' });

    return flags.length ? flags : undefined;
  };
  // 타이틀 상단 플래그
  const titFlags = getTitFlag();

  // 바우처상태 표시 텍스트 노출 조건
  const showStatusOverlay = status !== 'available';

  // 클릭 이벤트 핸들러
  const handleClick = () => {
    onClick?.();
  };

  // href 없지만 클릭이벤트가 있는경우 체크하여 버튼역할부여
  const isButtonRole = !href && !!onClick;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <div
        id={id}
        className={clsx(styles.root, variant && styles[variant], className)}
        {...props}
        onClick={handleClick}
        role={isButtonRole ? 'button' : undefined}
        tabIndex={isButtonRole ? 0 : undefined}
        onKeyDown={isButtonRole ? handleKeyDown : undefined}
      >
        {/* 썸네일 영역 */}
        <CardTag href={href} className={styles.thumb}>
          {/* 플래그 */}
          {voucherFlags && <Flag data={voucherFlags} className={styles.thumbFlag} radius="br" />}
          {/* 이미지 */}
          <Image src={image.src} alt={image.alt} />
          {/* 상태 오버레이  */}
          {showStatusOverlay && (
            <Text size="3" className={styles.status}>
              {status === 'used' && type === 'voucher' ? '이용완료' : statusLabelMap[status]}
            </Text>
          )}
        </CardTag>
        {gem && (
          <ProdGem
            isActive={gem.isActive}
            onChange={(isActive) => gem.onChange(id, isActive)}
            className={styles.gem}
          />
        )}
        {/* 우측 상세 정보 영역*/}
        <CardTag href={href} className={styles.detail}>
          {/* 상단 정보 */}
          <div className={styles.top}>
            {/* 타이틀 상단 플래그 */}
            {titFlags && <Flag data={titFlags} className={styles.titFlag} />}
            {/* 서브타이틀 (체험 타입일 경우 스타일 변경) */}
            {subTitle && (
              <Text as="span" className={styles.subTit}>
                {subTitle}
              </Text>
            )}
            {/* 타이틀 */}
            <Heading as="strong" className={styles.title}>
              {title}
            </Heading>
            {/* 옵션 리스트 (체험 타입만 렌더링) */}
            {renderOptions(type, options)}
          </div>
          {/* 하단 정보 */}
          <div className={styles.bottom}>
            {/* 수량 표시 (체험 타입 제외) */}
            {renderAmount(type, infos?.amount)}
            {showDateTitle && (
              <Text as="span" size="4" color="gray3">
                {type === 'reservation'
                  ? '방문 기간'
                  : type === 'experience' || type === 'coupon'
                    ? '신청 기간'
                    : ''}
              </Text>
            )}
            {/* 날짜 및 상태 정보 */}
            <ul className={styles.infos}>
              {renderInfoText(type, status, infos) && (
                <li>{renderInfoText(type, status, infos)}</li>
              )}
            </ul>
          </div>
        </CardTag>
      </div>

      {/* 하단 추가 슬롯 */}
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </>
  );
};
