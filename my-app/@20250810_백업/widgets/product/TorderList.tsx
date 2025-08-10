'use client';

import React from 'react';
import { TorderItem } from '@/widgets/product';
import { TableOrderItem, TableOrderItemVriant } from './TorderItem';
import clsx from 'clsx';
import styles from './TorderList.module.scss';

export interface ExtendedTableOrderItem extends TableOrderItem {
  /** prodTitle과 가격 사이에 들어가는 영역 */
  infos?: string[];
}

interface TorderListProps {
  data?: ExtendedTableOrderItem[];
  /** 목록 내 아이템 스타일 */
  variant?: TableOrderItemVriant;
  /** 상품의 옵션 정보를 렌더링 하는 함수(ProdTitle과 ProdPrice 사이에 렌더링) */
  ordeOptions?: (item: TableOrderItem) => React.ReactNode;
  /** 상품의 추가적인 콘텐츠를 렌더링 하는 함수(ProdPrice 하단에 렌더링) */
  orderData?: (item: TableOrderItem) => React.ReactNode;
  /** 아이템 내에 추가적인 콘텐츠를 렌더링하는 함수 */
  orderSlot?: (item: TableOrderItem) => React.ReactNode;
  /** 목록 아이템 상단에 추가적인 콘텐츠를 렌더링 하는 함수 */
  topSlot?: (item: ExtendedTableOrderItem) => React.ReactNode;
  /** 목록 아이템 하단에 추가적인 콘텐츠를 렌더링 하는 함수 */
  bottomSlot?: (item: ExtendedTableOrderItem) => React.ReactNode;
  /** 목록 내 아이템 선택 가능 여부 */
  selectable?: boolean;
  /** 선택 불가 여부(기본: false) */
  disabled?: boolean;
  /** 가격 노출 여부(기본: false) */
  hidePrice?: boolean;
  /** 삭제 버튼 사용 여부(기본: false) */
  isDelete?: boolean;
  /** 현재 체크된 아이템 상태를 담고 있는 객체 (key: item.id, value: 체크 여부) */
  checkedItems?: Record<string, boolean>;
  /** 개별 아이템 체크 상태 변경 시 호출되는 핸들러 (아이템 id와 체크 여부 전달) */
  onSelectItem?: (id: string, checked: boolean) => void;
  /** 상품간 간격(32px(default), 8px, 16px) */
  gap?: '8' | '16' | '32';
  /** 추가 클래스명 */
  className?: string;
}

export const TorderList = ({
  data,
  variant,
  ordeOptions,
  orderData,
  orderSlot,
  topSlot,
  bottomSlot,
  selectable,
  disabled,
  hidePrice,
  isDelete,
  checkedItems,
  onSelectItem,
  gap = '32',
  className,
}: TorderListProps) => {
  return (
    <div className={clsx(styles.root, gap && styles[`gap${gap}`], className)}>
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          {topSlot && topSlot(item)}

          <TorderItem
            item={item}
            variant={variant}
            selectable={selectable}
            disabled={disabled || item.disabled}
            selectedItems={checkedItems}
            onSelectItem={onSelectItem}
            hidePrice={hidePrice}
            isDelete={isDelete}
            ordeOptions={ordeOptions}
            orderData={orderData}
            orderSlot={orderSlot}
          />

          {bottomSlot && bottomSlot(item)}
        </React.Fragment>
      ))}
    </div>
  );
};

TorderList.displayName = 'TorderList';
