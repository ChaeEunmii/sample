'use client';

import { Flag, IconName, Image, Link, Text, Heading } from '@shared/ui';
import clsx from 'clsx';
import styles from './VoucherCard.module.scss';

//'바우처' | '방문 쿠폰' | '방문 예약' | '체험/신청'
export type VoucherType = 'voucher' | 'coupon' | 'reservation' | 'trialApplied';

export interface VoucherCardProps {
  /** 바우처 고유 ID */
  id: string;
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 상단서브타이틀 */
  subTitle?: string;
  /** 바우처명 */
  title: string;
  /** 바우처 정보 */
  infos?: {
    amount: number;
    useData?: string;
    useTime?: string;
    endData?: string;
    endInfo?: string;
    badge?: string;
  };
  /** 뱃지 텍스트 */
  badge?: string | null;
  /** 버튼 정보 */
  button?: {
    icon: IconName;
    label: string;
    onClick: () => void;
  };
  /** 이용완료 여부 */
  isUsed?: boolean;
  /** 기간만료 여부 */
  isExpired?: boolean;
  /** 취소 여부 */
  isCancelled?: boolean;
  /** 타입 */
  type?: VoucherType;
  /** 슬롯 */
  Bottomslot?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
}

export const VoucherCard = ({
  id,
  href,
  image,
  subTitle,
  title,
  infos,
  badge,
  button,
  isUsed = false,
  isExpired = false,
  isCancelled = false,
  type,
  Bottomslot,
  className,
  ...props
}: VoucherCardProps) => {
  // 썸네일 상단 플래그
  const topFlagItems = [];
  if (badge) {
    topFlagItems.push({ color: 'black' as const, label: <>{badge}</> });
  }
  // CardTag 컴포넌트 : href 여부에 따라 감싸는 태그 변경
  type CardTagProps = Pick<VoucherCardProps, 'href'> & {
    className?: string;
    children: React.ReactNode;
  };
  const CardTag = ({ href, className, children }: CardTagProps) => {
    // href 있는경우 Link로 감싸기
    if (href) {
      return (
        <Link href={href} type="block" className={className}>
          {children}
        </Link>
      );
    }
    // href 없으면 div
    return <div className={className}>{children}</div>;
  };

  // 썸네일 하단에 상태표시할 UI 여부
  const stateBgTextMark = isUsed || isExpired || isCancelled;

  return (
    <>
      <div id={id} className={clsx(styles.root, styles.horizontal, className)} {...props}>
        <CardTag href={href} className={styles.thumb}>
          {topFlagItems.length > 0 && <Flag data={topFlagItems} className={styles.flagTop} />}
          <Image src={image.src} alt={image.alt} />
          {stateBgTextMark && (
            <Text size="3" className={styles.pause}>
              {isUsed && '이용완료'}
              {isExpired && '기간만료'}
              {isCancelled && '주문취소'}
            </Text>
          )}
        </CardTag>
        <CardTag href={href} className={styles.detail}>
          <div className={styles.top}>
            <Text as="span" className={styles.subTit}>
              {subTitle}
            </Text>
            <Heading as="strong" className={styles.title}>
              {title} : 이것은 타입 : {type}
            </Heading>
          </div>
          <div className={styles.bottom}>
            <span className={styles.amount}>{infos?.amount}매</span>
            <ul className={styles.infos}>
              <li>{infos?.useData}</li>
              <li>{infos?.useTime}</li>
              {infos?.endInfo && (
                <li>
                  <Text>{infos?.endInfo}</Text>
                </li>
              )}
            </ul>
          </div>
        </CardTag>
        {Bottomslot && (
          <>
            <div className={styles.bottomSlot}>{Bottomslot}</div>
          </>
        )}
      </div>
    </>
  );
};
