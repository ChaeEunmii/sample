"use client";

import { formatNumber } from "@shared/utils/ui";
import {
  Button,
  Flag,
  Icon,
  IconName,
  Image,
  Link,
  Text,
  Checkbox,
} from "@shared/ui";
import { ProdTitle, ProdPrice, ProdGem } from "@widgets/product";
import clsx from "clsx";
import styles from "./ProdCard.module.scss";

// Flag 컴포넌트에서 선별
type FlagColorType = "black" | "black30" | "green" | "gray" | "dark";

export interface ProdCardProps {
  /** 상품 고유 ID */
  id: string;
  /** 카드 가로형, 세로형 설정 */
  type?: "horizontal" | "vertical";
  /** 스타일 변형 */
  variant?: "default" | "boxed" | "inverse";
  /** 카드 사이즈 (가로형에서만 사용) */
  size?: "small" | "medium" | "large";
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 캡션: string이면 Text 태그, ReactNode면 div 안에 렌더 */
  caption?: string | React.ReactNode;
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  title: string;
  /** 상품명 줄 수 */
  titleLine?: number;
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
  /** 성인 상품 노출 상태 */
  adult?: "open" | "blur" | "hide";
  /** ad상품 여부 */
  ad?: boolean;
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
  /** 상단 플래그 정보 (SOLD OUT/성인 인증 앞에 표시됨) */
  topFlags?: { color: FlagColorType; label: string }[];
  /** 썸네일 영역 슬롯 */
  flagSlot?: React.ReactNode;
  /** 버튼 영역 슬롯 */
  buttonSlot?: React.ReactNode;
  /** 컨텐츠영역 추가 슬롯 */
  contSlot?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
  /** 내용 정렬 */
  align?: "left" | "center";
}

// CardTag 컴포넌트 : href 여부에 따라 감싸는 태그 변경
type CardTagProps = Pick<ProdCardProps, "id" | "href" | "check"> & {
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
  caption,
  type = "vertical",
  variant = "default",
  size = "medium",
  href,
  image,
  brand,
  title,
  titleLine = 1,
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
  adult,
  ad = false,
  topFlags,
  flagSlot,
  buttonSlot,
  contSlot,
  className,
  align = "left",
  ...props
}: ProdCardProps) => {
  // horizontal일 때 특정 데이터 제거
  const normalized = {
    tag,
    delivery: type === "horizontal" ? null : delivery,
    benefits: type === "horizontal" ? [] : benefits,
    review: type === "horizontal" ? null : review,
  };

  // 썸네일 상단 플래그 (topFlags + soldout, 성인인증)
  const topFlagItems = [...(topFlags || [])];

  if (isSoldOut) {
    topFlagItems.push({ color: "dark" as FlagColorType, label: "SOLD OUT" });
  }
  if (adult) {
    topFlagItems.push({ color: "dark" as FlagColorType, label: "성인인증" });
  }

  // 썸네일 하단 플래그 (엠블럼, 뱃지)
  const bottomFlagItems = [];
  if (!isSoldOut && !isPaused && size !== "small") {
    if (emblem) {
      bottomFlagItems.push({ color: "green" as FlagColorType, label: emblem });
    }
    if (badge) {
      bottomFlagItems.push({ color: "black" as FlagColorType, label: badge });
    }
  }

  // 버튼 정보 처리: isSoldOut일 때 재입고 알림 버튼으로 고정
  const buttonInfo =
    button && isSoldOut
      ? {
          ...button,
          icon: "notice" as IconName,
          label: "재입고 알림신청",
          onClick: () => {
            // 재입고 알림 로직
            console.log("재입고 알림신청 클릭");
          },
        }
      : button;

  return (
    <div
      className={clsx(
        styles.root,
        type && styles[type],
        variant && styles[variant],
        size !== "medium" && type === "horizontal" && styles[size],
        (isPaused || isSoldOut) && styles.disabled,
        adult === "blur" && styles.blur,
        align !== "left" && styles[align],
        className
      )}
      style={{
        ...({
          "--product-title-truncate": titleLine,
        } as React.CSSProperties),
      }}
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
        <Image
          src={adult === "hide" ? "/images/img_adult_hide.png" : image.src}
          alt={image.alt}
        />
        {flagSlot}
        {topFlagItems.length > 0 && (
          <Flag data={topFlagItems} className={styles.flagTop} />
        )}
        {bottomFlagItems.length > 0 && (
          <Flag data={bottomFlagItems} className={styles.flagBottom} />
        )}
        {isPaused && (
          <Text size="3" className={styles.pause}>
            일시중단
          </Text>
        )}
        {ad && (
          <Flag
            data={{ color: "black30", label: "AD" }}
            radius="tl"
            className={styles.ad}
          />
        )}
      </CardTag>
      {gem && !isSoldOut && !isPaused && (
        <ProdGem
          isActive={gem.isActive}
          onChange={(isActive) => gem.onChange(id, isActive)}
          className={styles.gem}
        />
      )}
      {buttonInfo && (
        <div className={styles.ctrl}>
          {type === "vertical" ? (
            <Button
              variant="tertiary"
              size="small"
              prefixIcon={buttonInfo.icon}
              onClick={buttonInfo.onClick}
              disabled={isPaused ? true : undefined}
            >
              {buttonInfo.label}
            </Button>
          ) : (
            <Button
              variant="tertiary"
              size="xsmall"
              iconOnly={buttonInfo.icon}
              onClick={buttonInfo.onClick}
              disabled={isPaused ? true : undefined}
            >
              {buttonInfo.label}
            </Button>
          )}
        </div>
      )}
      <div className={styles.content}>
        <CardTag href={href} className={styles.detail} id={id} check={check}>
          {caption &&
            (typeof caption === "string" ? (
              <Text size="3" className={styles.caption}>
                {caption}
              </Text>
            ) : (
              <div className={styles.captionNode}>{caption}</div>
            ))}
          <ProdTitle brand={brand} title={title} />

          {contSlot}

          {price && (
            <ProdPrice
              className={styles.price}
              currentPrice={price.current}
              originalPrice={price.original}
              discountRate={price.discountRate}
              subPriceText={price.subPriceText}
            />
          )}
          {(normalized.tag || normalized.delivery) && (
            <div className={styles.info}>
              {normalized.tag && (
                <Text size="3" className={styles.tag}>
                  {normalized.tag}
                </Text>
              )}
              {normalized.delivery && (
                <Text size="2" className={styles.delivery}>
                  <em>{normalized.delivery.type}</em>
                  {normalized.delivery.time && ` ${normalized.delivery.time}`}
                </Text>
              )}
            </div>
          )}
          {normalized.benefits.length > 0 && (
            <Flag
              data={normalized.benefits}
              color="gray"
              className={styles.benefit}
            />
          )}
          {normalized.review && (
            <Text size="3" className={styles.review}>
              <Icon name="rating" size="xsmall" />
              <b>{normalized.review.rating}</b> (
              {formatNumber(normalized.review.count)})
            </Text>
          )}
        </CardTag>
        {buttonSlot && buttonSlot}
      </div>
    </div>
  );
};

ProdCard.displayName = "ProdCard";
