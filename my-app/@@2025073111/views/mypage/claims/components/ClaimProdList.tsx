'use client';

import { useState } from 'react';
import { Heading, Stepper, Stack, Input, Button, Box, Text } from '@shared/ui';
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
  /** 상품 데이터 */
  data: ProdList[];
  /** 타이틀 */
  title?: string;
  /** 타이틀 하단 slot */
  topSlot?: React.ReactNode;
  /** 하단 slot */
  bottomSlot?: React.ReactNode;
  /** 체크박스 선택 상태 Map (item.id 기준) */
  checkedItems?: Record<string, boolean>;
  /** 아이템 선택 변경 시 호출될 콜백 (itemId, selected 여부) */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 교환상품 여부 (slot에 컨트롤 우측 옵션변경 버튼으로 변경됨) */
  isExchange?: boolean;
  /** 추가적인 클래스 */
  className?: string;
}

export const ClaimProdList = ({
  data,
  title,
  topSlot,
  bottomSlot,
  checkedItems,
  onSelectItem,
  isExchange,
  className,
}: ClaimProdListProps) => {
  // 상태 관리
  const [valueCount, setValueCount] = useState(1); // Stepper

  return (
    <div className={clsx(styles.section, className)}>
      {title && (
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
      )}
      {topSlot && <div className={styles.topSlot}>{topSlot}</div>}
      <OrderItem
        items={data[0].items}
        showOrderCount
        isCart
        selectable
        checkedItems={checkedItems}
        onSelectItem={onSelectItem}
        orderSlot={(item) => (
          <>
            <div className={styles.controlWrap}>
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
                    value={valueCount}
                    onChange={setValueCount}
                    min={1}
                    max={99}
                    className={styles.stepper}
                    disabled={item.status === 'unselectable'}
                  />
                  {!isExchange ? (
                    <Input name="case" value="23,456,780 원" readOnly className={styles.text} />
                  ) : (
                    <div className={styles.right}>
                      <Button
                        className="ncp-w-full"
                        variant="tertiary"
                        disabled={item.status === 'unselectable'}
                      >
                        옵션 변경
                      </Button>
                    </div>
                  )}
                </Stack>
              </div>
            </div>
          </>
        )}
        lineDivider
      />
      {/* 하단 영역슬롯 */}
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </div>
  );
};
