'use client';

import React from 'react';
import { O4OItem } from '@/widgets/product';
import { O4OItemType, O4OItemVriant } from './O4OItem';
import clsx from 'clsx';
import styles from './O4OList.module.scss';

export interface ExtendedO4OItem extends O4OItemType {
  /** prodTitle과 가격 사이에 들어가는 영역 */
  options?: string[];
}

interface O4OListProps {
  data?: ExtendedO4OItem[];
  /** 목록 내 아이템 스타일 */
  variant?: O4OItemVriant;
  /** 타이틀 영역 내에(prodTitle) 추가적인 콘텐츠를 렌더링하는 함수 */
  titleSlot?: (item: O4OItemType) => React.ReactNode;
  /** 아이템의 옵션 정보를 ProdTitle과 ProdPrice 사이에 렌더링 하는 함수 */
  itemOptions?: (item: O4OItemType) => React.ReactNode;
  /** 아이템의 추가적인 콘텐츠를 ProdPrice 하단에 렌더링 하는 함수 */
  itemData?: (item: O4OItemType) => React.ReactNode;
  /** 아이템 내에 추가적인 콘텐츠를 렌더링하는 함수 */
  itemSlot?: (item: O4OItemType) => React.ReactNode;
  /** 목록 아이템 상단에 추가적인 콘텐츠를 렌더링 하는 함수 */
  topSlot?: (item: O4OItemType) => React.ReactNode;
  /** 목록 아이템 하단에 추가적인 콘텐츠를 렌더링 하는 함수 */
  bottomSlot?: (item: ExtendedO4OItem) => React.ReactNode;
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
  /** 상품간 간격(32px(default), 4px, 8px, 16px) */
  gap?: '4' | '8' | '16' | '32';
  /** 추가 클래스명 */
  className?: string;
}

export const O4OList = ({
  data,
  variant,
  titleSlot,
  itemOptions,
  itemData,
  itemSlot,
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
}: O4OListProps) => {
  return (
    <div className={clsx(styles.root, gap && styles[`gap${gap}`], className)}>
      {data?.map((item, index) => (
        <div key={index} className={styles.item}>
          {topSlot && topSlot(item)}

          <O4OItem
            item={item}
            variant={variant}
            selectable={selectable}
            disabled={disabled || item.disabled}
            selectedItems={checkedItems}
            onSelectItem={onSelectItem}
            hidePrice={hidePrice}
            isDelete={isDelete}
            itemOptions={itemOptions}
            itemData={itemData}
            titleSlot={titleSlot}
            itemSlot={itemSlot}
          />

          {bottomSlot && bottomSlot(item)}
        </div>
      ))}
    </div>
  );
};

O4OList.displayName = 'O4OList';
