'use client';

import {
  Checkbox,
  Link,
  Radio,
  Image,
  Text,
  IconButton,
  Flag,
  IconName,
  Button,
  Heading,
} from '@/shared/ui';
import { ProdPrice } from '@/widgets/product';
import clsx from 'clsx';
import styles from './O4OItem.module.scss';
import { formatDate, formatNumber } from '@/shared/utils/ui';

/** 테이블 오더 스타일 */
export type O4OItemVriant = 'default' | 'store' | null | undefined | (string & {});

export interface O4OItemType {
  /** 아이템 ID */
  id: string;
  /** 아이템 링크 */
  href?: string;
  /** 이미지 정보 */
  image?: {
    src: string;
    alt?: string;
  };
  /** 날짜(예: 20251224): 방문완료, 방문취소, 예약일, 주문일 텍스트 옆 노출 */
  date?: string;
  /** 날짜, 시간(예: 202512241530): 예약일시, 방문일시 */
  dateTime?: string;
  /** 타이틀 왼쪽 배지 */
  badge?: string;
  /** 상품명/매장명 */
  title: string;
  /** 아이템 정보 */
  info?: string[];
  /** 가격 정보 */
  price?: {
    current?: number;
    original?: number;
    discount?: number;
  };
  /** 인원 */
  guestCount?: number;
  /** 위치 */
  location?: string;
  /** 상품 주문 수량 */
  quantity?: number;
  /** 선택 불가 여부(기본: false) */
  disabled?: boolean;
  /** rsvp 여부 */
  rsvp?: boolean;
  /** 버튼 정보 */
  button?: {
    icon: IconName;
    label: string;
    onClick: () => void;
  };
}

// order 아이템
export interface O4OItemProps {
  /** 테이블 오더 스타일
   * - default: 왼쪽 이미지 + ProdTitle, ProdPrice간 간격 4px(orderItem과 같은 스타일, 주로 메뉴에 사용)
   * - store: heading 스타일 다름(14px, semibold, #000)
   */
  variant?: O4OItemVriant;
  /** 테이블 오더 데이터 */
  item: O4OItemType;
  /** 타이틀 영역 내에(prodTitle) 추가적인 콘텐츠를 렌더링하는 함수 */
  titleSlot?: (item: O4OItemType) => React.ReactNode;
  /** 아이템의 옵션 정보를 ProdTitle과 ProdPrice 사이에 렌더링 하는 함수 */
  itemOptions?: (item: O4OItemType) => React.ReactNode;
  /** 아이템의 추가적인 콘텐츠를 ProdPrice 하단에 렌더링 하는 함수 */
  itemData?: (item: O4OItemType) => React.ReactNode;
  /** 아이템 내에 추가적인 콘텐츠를 렌더링하는 함수 */
  itemSlot?: (item: O4OItemType) => React.ReactNode;
  /** 상품 링크 비활성화 옵션 */
  disableLink?: boolean;
  /** 목록 내 아이템 선택 가능 여부 */
  selectable?: boolean;
  /** 선택 모드 설정 */
  selectMode?: 'single' | 'multiple';
  /** 개별 아이템 선택 시 호출되는 콜백 함수 */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 현재 선택된 아이템 ID (단일 선택 모드) */
  selectedItem?: string;
  /** 현재 선택된 아이템 ID 목록 (다중 선택 모드) */
  selectedItems?: Record<string, boolean>;
  /** 아이템 선택 상태를 업데이트하는 함수 */
  setSelectedItems?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  /** 선택 불가 여부(기본: false) */
  disabled?: boolean;
  /** 주문 개수 노출 여부(기본: false) */
  showQuantity?: boolean;
  /** 가격 노출 여부(기본: false) */
  hidePrice?: boolean;
  /** 삭제 버튼 사용 여부(기본: false) */
  isDelete?: boolean;
  /** 추가 클래스명 */
  className?: string;
}

export const O4OItem = ({
  variant,
  item,
  titleSlot,
  itemOptions,
  itemData,
  itemSlot,
  disableLink,
  selectable,
  selectMode,
  onSelectItem,
  selectedItem,
  selectedItems,
  disabled,
  showQuantity = false,
  hidePrice = false,
  isDelete = false,
  className,
}: O4OItemProps) => {
  //썸네일 좌측 상단 플래그 설정
  const getThumbFlag = (item: O4OItemType) => {
    if (!item.rsvp) return;
    const baseFlags = [];
    if (item.rsvp)
      baseFlags.push({
        color: 'black' as const,
        label: 'RSVP',
      });
    return baseFlags;
  };

  // 썸네일 플래그
  const thumbFlags = getThumbFlag(item);

  // 상품 이미지에 dimed 적용되는 조건
  const dimed = item.disabled;

  // 아이템이 선택 가능한지 여부 확인
  const isSelectable = (item: O4OItemType) => {
    // 기본적으로 selectable이 false가 아니어야 함
    const baseSelectability = selectable;

    // disabled가 true면 선택 불가
    if (item.disabled) {
      return false;
    }

    return baseSelectability;
  };

  return (
    <div className={clsx(styles.root, variant && styles[variant], className)}>
      {selectable && (
        <>
          {selectMode === 'single' ? (
            <Radio
              name="selectProdItem"
              label={`${item.title} 선택`}
              hideLabel
              value={item.id}
              checked={selectedItem === item.id}
              onChange={() => onSelectItem?.(item.id, true)}
              className={styles.selector}
              disabled={!isSelectable(item) || item.disabled}
            />
          ) : (
            <Checkbox
              label={`${item.title} 선택`}
              hideLabel
              size="medium"
              checked={!!selectedItems?.[item.id]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onSelectItem?.(item.id, e.target.checked)
              }
              className={styles.selector}
              disabled={!isSelectable(item) || item.disabled}
            />
          )}
        </>
      )}
      <div className={clsx(styles.itemWrap)}>
        {/* 왼쪽: 이미지 + 옵션변경 버튼 */}
        {item.image && (
          <div className={clsx(styles.left)}>
            {/* 상품상세 진입 불가 */}
            {!item.href ? (
              <div className={clsx(styles.thumb, dimed && styles.opacity)}>
                <Image src={item.image?.src} alt={item.image?.alt} />
                {item.disabled && (
                  <div className={styles.thumbLabel}>
                    <Text as="span" size="3">
                      주문불가
                    </Text>
                  </div>
                )}
              </div>
            ) : (
              <Link
                as="route"
                href={item.href ?? '#'}
                type="block"
                className={clsx(styles.thumb, dimed && styles.opacity)}
              >
                {/* 썸네일 좌상단 플래그 */}
                {thumbFlags && <Flag data={thumbFlags} className={styles.thumbflag} radius="br" />}
                <Image src={item.image.src} alt={item.image.alt} />
              </Link>
            )}
          </div>
        )}

        {/* 오른쪽: 상품 상세 내용 등 */}
        <div className={clsx(styles.right, !item.image && styles.textMode)}>
          <div className={clsx(styles.rightWrap, item.disabled && styles.disabled)}>
            <div className={styles.detail}>
              {!item.href ? (
                <div className={styles.prodTitle}>
                  <div className={styles.titleBox}>
                    {item.badge && (
                      <Flag
                        data={[
                          {
                            color: 'gray3',
                            label: item.badge,
                          },
                        ]}
                      />
                    )}
                    <Heading
                      size={variant === 'store' ? '3' : '2'}
                      weight={variant === 'store' ? 'semibold' : 'regular'}
                      className={styles.title}
                    >
                      {item.title}
                    </Heading>
                  </div>
                  {titleSlot && titleSlot(item)}
                </div>
              ) : (
                <Link as="route" href={item.href ?? '#'} type="block" className={styles.prodTitle}>
                  <div className={styles.titleBox}>
                    {item.badge && (
                      <Flag
                        data={[
                          {
                            color: 'gray3',
                            label: item.badge,
                          },
                        ]}
                      />
                    )}
                    <Heading
                      size={variant === 'store' ? '3' : '2'}
                      weight={variant === 'store' ? 'semibold' : 'regular'}
                      className={styles.title}
                    >
                      {item.title}
                    </Heading>
                  </div>
                  {titleSlot && titleSlot(item)}
                </Link>
              )}

              {itemOptions && itemOptions(item)}
            </div>

            {!hidePrice && item.price && item.price?.current !== undefined && (
              <ProdPrice
                className={styles.price}
                currentPrice={item.price.current}
                originalPrice={item.price.original}
                variant={variant === 'default' ? 'default' : 'order'}
              />
            )}
          </div>

          {itemData && itemData(item)}
        </div>

        {itemSlot && itemSlot(item)}

        {item.button && (
          <Button
            variant="tertiary"
            size="small"
            prefixIcon={item.button.icon}
            onClick={item.button.onClick}
            disabled={item.disabled}
            className={styles.torderButton}
          >
            {item.button.label}
          </Button>
        )}
      </div>

      {isDelete && (
        <IconButton name="close" className={styles.closeButton}>
          삭제
        </IconButton>
      )}
    </div>
  );
};

O4OItem.displayName = 'O4OItem';
