import React, { useState } from 'react';
import { ButtonArea, Button, Loading, Empty, TitleBar } from '@shared/ui';
import { OrderItemType } from '@/widgets/product/OrderItem';
import { InquiryProductsList, OrderInfoBox } from '@/views/mypage/components';
import clsx from 'clsx';

// 주문 상품 아이템
export interface ProductList {
  id: string;
  date?: string;
  orderNumber?: string;
  sellers?: {
    id: string;
    seller: string;
    items: OrderItemType[];
  }[];
}

interface InquiryProductGroupProps {
  data?: ProductList[] | OrderItemType[];
  /** 현재 선택된 아이템 ID (단일 선택 모드) */
  selectedItem?: string;
  /** 개별 아이템 선택 시 호출되는 콜백 함수 */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** Gem한 상품 선택 가능 유형인 경우(기본: false) */
  isGem?: boolean;
  /** 보여줄 초기 개수 (선택사항) */
  initialCount?: number;
  /** 더보기 클릭 시 증가 개수 (선택사항) */
  step?: number;
  onLoadMore?: () => void;
  /** loading 사용 여부(기본: false) */
  shwoLoading?: boolean;
}

export const InquiryProductGroup = ({
  data,
  selectedItem,
  onSelectItem,
  isGem = false,
  initialCount = 10,
  step = 10,
  onLoadMore,
  shwoLoading = false,
}: InquiryProductGroupProps) => {
  function isProductListArray(data: any[]): data is ProductList[] {
    return data.length > 0 && 'sellers' in data[0];
  }

  // ✅ 모든 주문/셀러 아이템을 flatten
  const allItems: OrderItemType[] =
    data && isProductListArray(data)
      ? data.flatMap((order) => order.sellers?.flatMap((seller) => seller.items) ?? [])
      : ((data as OrderItemType[]) ?? []);

  // ✅ 상태 관리
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({}); // 주문번호별 상품 더보기
  const [visibleOrderCount, setVisibleOrderCount] = useState(10); // 주문 번호 더보기
  const [visibleCountAll, setVisibleCountAll] = useState(initialCount); // GEM한 상품 전체 더보기

  const visibleItemsAll = allItems.slice(0, visibleCountAll);
  const hasMoreAll = allItems.length > visibleCountAll;

  const handleLoadMoreOrderCount = () => {
    setVisibleOrderCount((prev) => prev + step);
    onLoadMore?.();
  };

  const handleLoadMoreAll = () => {
    setVisibleCountAll((prev) => prev + step);
    onLoadMore?.();
  };

  return (
    <>
      {allItems.length > 0 ? (
        <>
          {Array.isArray(data) && isProductListArray(data) ? (
            <>
              {data.slice(0, visibleOrderCount).map((order, orderIndex) => {
                // 주문 단위 아이템 전체
                const allOrderItems = order.sellers?.flatMap((s) => s.items) ?? [];

                // 현재 보여줄 개수 (주문 단위)
                const count = visibleCounts[order.id] ?? initialCount;

                // 주문 단위 visible 아이템
                const visibleItems = allOrderItems.slice(0, count);

                // 아이템 더보기 여부
                const hasMoreItems = allOrderItems.length > count;

                return (
                  <React.Fragment key={orderIndex}>
                    {/* 주문 정보 */}
                    <TitleBar
                      title={order.date ?? ''}
                      level="2"
                      className={clsx(orderIndex !== 0 && 'ncp-mt-xxl')}
                    />
                    <OrderInfoBox
                      title="주문번호"
                      content={order.orderNumber ?? ''}
                      sideSlot="선물하기"
                      isGray
                    />

                    {/* 셀러별 아이템 렌더링 */}
                    {order.sellers?.map((seller) => {
                      // 이 셀러의 아이템 중 visibleItems에 포함된 것만 뽑기
                      const sellerVisibleItems = seller.items.filter((item) =>
                        visibleItems.some((vi) => vi.id === item.id)
                      );

                      // visibleItems가 없으면 타이틀 + 리스트를 아예 렌더링하지 않음
                      if (sellerVisibleItems.length === 0) return null;

                      return (
                        <React.Fragment key={seller.id}>
                          <TitleBar title={seller.seller} level="3" />
                          <InquiryProductsList
                            data={sellerVisibleItems}
                            selectedItem={selectedItem}
                            onSelectItem={onSelectItem}
                            showOrderCount={!isGem}
                          />
                        </React.Fragment>
                      );
                    })}

                    {hasMoreItems && (
                      <ButtonArea margin="1" align="center">
                        <Button
                          round
                          size="small"
                          suffixIcon="arrowDown"
                          variant="tertiary"
                          onClick={() =>
                            setVisibleCounts((prev) => ({
                              ...prev,
                              [order.id]: (prev[order.id] ?? initialCount) + step,
                            }))
                          }
                        >
                          더보기
                        </Button>
                      </ButtonArea>
                    )}
                  </React.Fragment>
                );
              })}

              {/* 주문 개수가 10개 넘으면 주문 단위 더보기 */}
              {data.length > visibleOrderCount && (
                <ButtonArea margin="1" align="center">
                  <Button
                    round
                    size="small"
                    suffixIcon="arrowDown"
                    variant="tertiary"
                    onClick={handleLoadMoreOrderCount}
                  >
                    더보기
                  </Button>
                </ButtonArea>
              )}
            </>
          ) : (
            <>
              <InquiryProductsList
                data={visibleItemsAll}
                selectedItem={selectedItem}
                onSelectItem={onSelectItem}
                showOrderCount={!isGem}
              />
              {hasMoreAll && (
                <ButtonArea margin="1" align="center">
                  <Button
                    round
                    size="small"
                    suffixIcon="arrowDown"
                    variant="tertiary"
                    onClick={handleLoadMoreAll}
                  >
                    더보기
                  </Button>
                </ButtonArea>
              )}
            </>
          )}
          {/* 로딩 */}
          {shwoLoading && <Loading isLoading />}
        </>
      ) : (
        <Empty title={isGem ? 'GEM한 상품이 없어요' : '기간 내 주문 상품이 없어요'} />
      )}
    </>
  );
};

InquiryProductGroup.displayName = 'InquiryProductGroup';
