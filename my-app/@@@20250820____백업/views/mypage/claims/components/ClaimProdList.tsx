'use client';

import { useState, useMemo } from 'react';
import { Heading, Stepper, Stack, Input, Button, Box, Text, Checkbox } from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { OrderStatusFlag } from '@widgets/product';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
import { OrderItem, OrderItemType } from '@widgets/product/OrderItem';
import styles from './ClaimProdList.module.scss';
import clsx from 'clsx';

/**
 * 클레임 상품 목록 영역 컴포넌트
 */

interface ProdList {
  id: string;
  items: OrderItemType[];
}

interface ClaimProdListProps {
  /** select = 체크박스 선택, list = 단순 목록 */
  type?: 'select' | 'list';
  /** 상품 데이터 */
  data: ProdList[];
  /** 타이틀 */
  title?: React.ReactNode;
  /** 타이틀 우측 텍스트 */
  sideText?: React.ReactNode;
  /** 하단 slot */
  bottomSlot?: React.ReactNode;
  /** 체크박스 선택 상태 Map (item.id 기준) */
  checkedItems?: Record<string, boolean>;
  /** 아이템 선택 변경 시 호출될 콜백 (itemId, selected 여부) */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 교환상품 여부 (slot에 컨트롤 우측 옵션변경 버튼으로 변경됨) */
  isExchange?: boolean;
  /** 전체선택 체크박스 노출 여부 (기본값: true) */
  showSelectAll?: boolean;
  /** 전체선택 상태가 변경될 때 호출 */
  onToggleAll?: (checked: boolean) => void;
  /** 주문상태 플래그 숨김 여부 */
  hideStatusFlag?: boolean;
  /** 하단 컨트롤 영역 숨김 여부 */
  hideControls?: boolean;
  /** 상하마진 */
  margin?: '1';
  /** Stepper 값이 변경될 때 호출 */
  onQuantityChange?: (itemId: string, quantity: number) => void;
  /** 추가적인 클래스 */
  className?: string;
}

export const ClaimProdList = ({
  type = 'select',
  data,
  title,
  sideText,
  bottomSlot,
  checkedItems = {},
  onSelectItem,
  isExchange,
  showSelectAll = true,
  onToggleAll,
  hideStatusFlag,
  hideControls,
  margin,
  onQuantityChange,
  className,
}: ClaimProdListProps) => {
  const [{ items }] = data;
  // 상태 관리
  const [stepperValues, setStepperValues] = useState<Record<string, number>>({});

  // 선택 가능한 모든 아이템
  const selectableItems = useMemo(() => items.filter((item) => !item.unselectable), [items]);

  // 전체선택 여부
  const isAllChecked = useMemo(
    () => selectableItems.every((item) => checkedItems[item.id]),
    [selectableItems, checkedItems]
  );

  const handleToggleAll = (checked: boolean) => {
    // 개별 onSelectItem 콜백 반복
    if (onSelectItem) {
      items.forEach((item) => {
        if (!item.unselectable) {
          onSelectItem(item.id, checked);
        }
      });
    }
    // 전체체크여부
    if (onToggleAll) {
      onToggleAll(checked);
    }
  };

  // 리스트 방식
  const isList = type === 'list';
  // 컨트롤 영역 노출조건
  const shouldControlArea = !hideControls && !isList;

  // Stepper 핸들러
  const handleQuantityChange = (itemId: string, value: number) => {
    setStepperValues((prev) => ({
      ...prev,
      [itemId]: value,
    }));
    onQuantityChange?.(itemId, value);
  };

  return (
    <div className={clsx(styles.section, margin && styles[`margin${margin}`], className)}>
      {title && (
        <div className={styles.titWrap}>
          <Heading as="strong" className={styles.tit}>
            {title}
          </Heading>
          {sideText && (
            <div className={styles.side}>
              <Text color="point" weight="semibold">
                {sideText}
              </Text>
            </div>
          )}
        </div>
      )}
      {showSelectAll && !isList && (
        <div className={styles.check}>
          <Checkbox
            label="전체선택"
            checked={isAllChecked}
            onChange={(e) => handleToggleAll(e.target.checked)}
          />
        </div>
      )}
      <OrderItem
        items={items}
        showOrderCount
        isCart
        hideThumbLabel
        selectable={type !== 'list'}
        checkedItems={checkedItems}
        onSelectItem={onSelectItem}
        // 주문 오른쪽 상단 슬롯
        orderTopSlot={(item) =>
          item.orderStatus && !hideStatusFlag ? (
            <div className={styles.flags}>
              <OrderStatusFlag
                status={item.orderStatus.status}
                date={item.orderStatus.date || undefined}
              />
            </div>
          ) : null
        }
        // 주문 하단 슬롯
        orderSlot={(item) => {
          const quantityInfo = {
            value: stepperValues[item.id] ?? item.quantity ?? 1,
            min: 1,
            max: item.quantity ?? 99,
          };
          return (
            <>
              {/* 추가 정보 데이터가 있으면 노출 */}
              {item.orderAddInfo && <OrderItemsInfoBox data={item.orderAddInfo} />}
              {/* 컨트롤 영역 렌더링*/}
              {shouldControlArea && (
                <div className={styles.controlWrap}>
                  {/* 상품옵션 변경 박스 영역 */}
                  {isExchange && (
                    <Box className={styles.option}>
                      <Text size="4" weight="semibold">
                        BRONZE / S
                      </Text>
                    </Box>
                  )}
                  <div className={styles.control}>
                    <Stack type="field">
                      <Stepper
                        value={quantityInfo.value}
                        onChange={(val) => handleQuantityChange(item.id, val)}
                        min={quantityInfo.min}
                        max={quantityInfo.max}
                        className={styles.stepper}
                        disabled={item.unselectable}
                      />
                      {!isExchange ? (
                        <Input
                          name="case"
                          value={`${formatNumber(item.price?.current ?? 0)} 원`}
                          readOnly
                          className={styles.text}
                        />
                      ) : (
                        <div className={styles.right}>
                          <Button
                            className="ncp-w-full"
                            variant="tertiary"
                            disabled={item.unselectable}
                          >
                            옵션 변경
                          </Button>
                        </div>
                      )}
                    </Stack>
                  </div>
                </div>
              )}
            </>
          );
        }}
        lineDivider
      />
      {/* 하단 영역슬롯 */}
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </div>
  );
};
