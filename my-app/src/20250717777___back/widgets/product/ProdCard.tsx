'use client';

import { formatNumber } from '@shared/utils/ui';
import { Button, Flag, Icon, IconName, Image, Link, Text, Checkbox } from '@shared/ui';
import { ProdTitle, ProdPrice, ProdGem } from '@widgets/product';
import clsx from 'clsx';
import styles from './ProdCard.module.scss';

export interface ProdCardProps {
  /** 상품 고유 ID */
  id: string;
  /** 카드 가로형, 세로형 설정 */
  type?: 'horizontal' | 'vertical';
  /** 스타일 변형 */
  variant?: 'default' | 'boxed' | 'inverse';
  /** 카드 사이즈 (가로형에서만 사용) */
  size?: 'small' | 'medium';
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  title: string;
  /** 가격 정보 */
  price?: {
    current: number | string;
    original?: number;
    discountRate?: number;
    subPriceText?: string;
  };
  /** 엠블럼 텍스트 */
  emblem?: string | null;
  /** 뱃지 텍스트 */
  badge?: string | null;
  /** 태그 */
  tag?: string;
  /** 배송 정보 */
  delivery?: {
    type: string;
    time?: string;
  };
  /** 리뷰 정보 */
  review?: {
    rating: number;
    count: number;
  };
  /** 혜택 정보 */
  benefits?: string[];
  /** 일시중단 여부 */
  isPaused?: boolean;
  /** 품절 여부 */
  isSoldOut?: boolean;
  /** 성인 인증 여부 */
  isAdult?: boolean;
  /** 버튼 정보 */
  button?: {
    icon: IconName;
    label: string;
    onClick: () => void;
  };
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (productId: string, isActive: boolean) => void;
  };
  /** 체크 정보 */
  check?: {
    isSelected: boolean;
    onChange: (brandId: string, isSelected: boolean) => void;
  };
  /** 추가 클래스 */
  className?: string;
}

// CardTag 컴포넌트 : href 여부에 따라 감싸는 태그 변경
type CardTagProps = Pick<ProdCardProps, 'id' | 'href' | 'check'> & {
  className?: string;
  children: React.ReactNode;
};
const CardTag = ({ id, href, check, className, children }: CardTagProps) => {
  // href 있는경우 Link로 감싸기
  if (href) {
    return (
      <Link href={href} type="block" className={className}>
        {children}
      </Link>
    );
  }
  // href 없고 check 있으면 버튼 역할 부여 및 접근성 추가
  if (check) {
    return (
      <div
        className={className}
        role="button"
        tabIndex={0}
        aria-pressed={check.isSelected}
        aria-label="상품 선택"
        onClick={() => check.onChange(id, !check.isSelected)}
      >
        {children}
      </div>
    );
  }
  // href 없고 check 없으면 그냥 div
  return <div className={className}>{children}</div>;
};

export const ProdCard = ({
  id,
  type = 'vertical',
  variant = 'default',
  size = 'medium',
  href,
  image,
  brand,
  title,
  price,
  emblem,
  badge,
  tag,
  delivery,
  review,
  benefits = [],
  button,
  gem,
  check,
  isPaused = false,
  isSoldOut = false,
  isAdult = false,
  className,
  ...props
}: ProdCardProps) => {
  // 썸네일 상단 플래그 (soldout, 성인인증)
  const topFlagItems = [];
  if (isSoldOut) {
    topFlagItems.push({ color: 'dark' as const, label: 'SOLD OUT' });
  }
  if (isAdult) {
    topFlagItems.push({ color: 'dark' as const, label: '성인인증' });
  }

  // 썸네일 하단 플래그 (엠블럼, 뱃지)
  const bottomFlagItems = [];
  if (!isSoldOut && !isAdult && !isPaused && size !== 'small') {
    if (emblem) {
      bottomFlagItems.push({ color: 'green' as const, label: emblem });
    }
    if (badge) {
      bottomFlagItems.push({ color: 'black' as const, label: badge });
    }
  }

  // 버튼 정보 처리: isSoldOut일 때 재입고 알림 버튼으로 고정
  const buttonInfo =
    button && isSoldOut
      ? {
          ...button,
          icon: 'notice' as IconName,
          label: '재입고 알림',
          onClick: () => {
            // 재입고 알림 로직
            console.log('재입고 알림 클릭');
          },
        }
      : button;

  return (
    <div
      className={clsx(
        styles.root,
        type && styles[type],
        variant && styles[variant],
        size !== 'medium' && type === 'horizontal' && styles[size],
        (isPaused || isSoldOut) && styles.disabled,
        (isAdult || (isAdult && isSoldOut)) && styles.blur,
        className
      )}
      {...props}
    >
      {check && (
        <Checkbox
          checked={check.isSelected}
          onChange={(e) => check.onChange(id, e.target.checked)}
          onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지
          label="상품 선택"
          hideLabel
          className={styles.checkbox}
        />
      )}
      <CardTag href={href} className={styles.thumb} id={id} check={check}>
        {topFlagItems.length > 0 && <Flag data={topFlagItems} className={styles.flagTop} />}
        <Image src={image.src} alt={image.alt} />
        {bottomFlagItems.length > 0 && (
          <Flag data={bottomFlagItems} radius="tr" className={styles.flagBottom} />
        )}
        {isPaused && (
          <Text size="3" className={styles.pause}>
            일시중단
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
      {buttonInfo && (
        <div className={styles.ctrl}>
          {type === 'vertical' ? (
            <Button
              variant="tertiary"
              size="small"
              prefixIcon={buttonInfo.icon}
              onClick={buttonInfo.onClick}
            >
              {buttonInfo.label}
            </Button>
          ) : (
            <Button
              variant="tertiary"
              size="xsmall"
              iconOnly={buttonInfo.icon}
              onClick={buttonInfo.onClick}
            >
              {buttonInfo.label}
            </Button>
          )}
        </div>
      )}
      <CardTag href={href} className={styles.detail} id={id} check={check}>
        {tag && (
          <Text as="span" size="3" className={styles.tag}>
            {tag}
          </Text>
        )}
        <ProdTitle brand={brand} title={title} />
        {price && (
          <ProdPrice
            className={styles.price}
            currentPrice={price.current}
            originalPrice={price.original}
            discountRate={price.discountRate}
            subPriceText={price.subPriceText}
          />
        )}
        {type === 'vertical' && (
          <>
            {(delivery || benefits.length > 0) && (
              <div className={styles.info}>
                {delivery && (
                  <Text size="2" className={styles.delivery}>
                    <em>{delivery.type}</em>
                    {delivery.time && ` ${delivery.time}`}
                  </Text>
                )}
                {benefits.length > 0 && <Flag data={benefits} color="gray" />}
              </div>
            )}
            {review && (
              <Text size="3" className={styles.review}>
                <Icon name="rating" size="small" />
                <b>{review.rating}</b> ({formatNumber(review.count)})
              </Text>
            )}
          </>
        )}
      </CardTag>
    </div>
  );
};

ProdCard.displayName = 'ProdCard';
