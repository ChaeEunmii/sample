'use client';

import React, { useState } from 'react';
import { Checkbox, Line, Stack, Stepper, Text, TextButton, TextList } from '@/shared/ui';
import { ExtendedO4OItem, O4OList } from '@/widgets/product/O4OList';
import { StoreTitle } from './StoreTitle';
import styles from './O4OCartList.module.scss';

export interface O4OStore {
  /** ID */
  id: string;
  /** 푸드코드명 */
  courtName?: string;
  /** 매장명 */
  store: string;
  /** 층수 */
  floor: string;
  /** 매장 영업 시간이 아닌 경우 */
  disabled?: boolean;
  /** 주문 메뉴 */
  items: ExtendedO4OItem[];
}

interface O4OCartListProps {
  data?: O4OStore[];
  /** 현재 체크된 아이템 상태를 담고 있는 객체 (key: item.id, value: 체크 여부) */
  checkedItems?: Record<string, boolean>;
  /** 개별 아이템 체크 상태 변경 시 호출되는 핸들러 (아이템 id와 체크 여부 전달) */
  onSelectItem?: (id: string, checked: boolean) => void;
  /** checkedItems 상태를 직접 업데이트할 때 사용하는 setState 함수 */
  setCheckedItems?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export const O4OCartList = ({
  data,
  checkedItems,
  onSelectItem,
  setCheckedItems,
}: O4OCartListProps) => {
  // ✅ 상태 관리
  const [quantities, setQuantities] = useState<{ [id: string]: number }>(() => {
    const allItems = (data ?? []).flatMap((store) =>
      store.items.flatMap((seller) => store.items.map((item) => item))
    );

    return allItems.reduce<{ [id: string]: number }>((acc, item) => {
      acc[item.id] = item.quantity ?? 1;
      return acc;
    }, {});
  }); // 수량 변경 stepper

  // ✅ 상품 수량 변경 핸들러
  const handleChange = (id: string, newValue: number) => {
    setQuantities((prev) => ({ ...prev, [id]: newValue }));
  };

  // ✅ 해당 매장의 모든 선택 가능한 아이템이 체크되어 있는지 여부 판단
  const isStoreChecked = (store: O4OStore) => {
    const selectableItemIds = store.items.filter((item) => !item.disabled).map((item) => item.id);
    if (selectableItemIds.length === 0) return false;

    const allChecked = selectableItemIds.every((id) => checkedItems?.[id]);
    return allChecked;
  };

  // ✅ 매장 체크박스 변경 시, 해당 매장의 모든 선택 가능한 아이템 체크 상태 일괄 변경
  const handleStoreCheck = (store: O4OStore, checked: boolean) => {
    const next = { ...checkedItems };

    // disabled가 아닌 아이템에 대해 체크 상태 업데이트
    store.items.forEach((item) => {
      if (!item.disabled) {
        next[item.id] = checked;
      }
    });

    setCheckedItems?.(next);
  };

  return (
    <>
      {data?.map((item, index) => (
        <React.Fragment key={item.id}>
          <Line className={index !== 0 ? 'ncp-mt-xl' : ''} color="black" margin="2" />
          <Stack type="between">
            <Checkbox
              label={<StoreTitle data={item} variant="cart" />}
              size="medium"
              disabled={item.disabled}
              checked={isStoreChecked(item)}
              onChange={(e) => handleStoreCheck(item, e.target.checked)}
            />
            <TextButton
              color="gray1"
              size="1"
              suffixIcon="arrowRight"
              iconSize="xsmall"
              variant="bold"
              onClick={() => {}}
              disabled={item.disabled}
            >
              더담기
            </TextButton>
          </Stack>
          {item.disabled && (
            <Text size="4" color="alert" className={styles.error}>
              영업시간이 아닙니다.
            </Text>
          )}
          <O4OList
            data={item.items}
            selectable
            isDelete
            checkedItems={checkedItems}
            onSelectItem={onSelectItem}
            disabled={item.disabled}
            itemOptions={(torderItem: ExtendedO4OItem) => (
              <>
                {torderItem.options && (
                  <TextList
                    data={
                      torderItem.options?.map((option) => ({
                        text: option,
                        textProps: { size: '4', color: 'gray3', weight: 'regular' },
                      })) ?? []
                    }
                    variant="clear"
                  />
                )}
              </>
            )}
            itemData={(torderItem: ExtendedO4OItem) => (
              <>
                {!item.disabled && torderItem.disabled && (
                  <Text size="4" color="alert" className="ncp-mt-x0">
                    주문 불가 상품입니다.
                  </Text>
                )}
              </>
            )}
            itemSlot={(torderItem: ExtendedO4OItem) => (
              <div className={styles.orderSlot}>
                <Stepper
                  value={quantities[String(torderItem.id)] ?? 1}
                  onChange={(value) => handleChange(String(torderItem.id), value)}
                  min={1}
                  disabled={torderItem.disabled}
                  className={styles.stepper}
                />
              </div>
            )}
            className="ncp-mt-x10"
          />
        </React.Fragment>
      ))}
    </>
  );
};

O4OCartList.displayName = 'O4OCartList';
