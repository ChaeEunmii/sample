import { useState } from 'react';
import { Box, Heading, TextButton } from '@/shared/ui';
import { GiftItem } from '@/views/mypage/components';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import type { OrderItemType } from '@widgets/product/OrderItem';
import clsx from 'clsx';
import styles from './GiftGroup.module.scss';

/**
 * 선물함 주문 섹션 컴포넌트
 * @description (선물함 주문 목록) 구성
 */

/** 주문 단위 전체 데이터 타입 */
export interface GroupedOrderData {
  orderNumber: string;
  orderDate: string;
  senderName?: string; // 선물하신 분
  giftPickNumber?: string; // 선물픽 번호
  receiverName?: string; // 받으시는 분
  items: OrderItemType[];
}

interface GiftGroupProps {
  /** 주문번호 단위 데이터 */
  data: GroupedOrderData;
  /** 표시 방식: 'list'는 목록형, 'detail'은 상세형 */
  viewType?: 'list' | 'detail';
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 주문번호 박스 숨김여부 */
  hideOrderInfoBox?: boolean;
  /** 주문상세 버튼 라벨 (기본값: "주문상세") */
  detailLabel?: string;
  /** 주문상세 버튼 숨김 여부 */
  hideDetailButton?: boolean;
  /** 가격영역 숨김 여부 */
  hidePrice?: boolean;
  /** 노출 개수 제한 사용 여부 */
  useItemLimit?: boolean;
  /** 제한 시 처음 노출 개수 (기본 3) */
  itemLimit?: number;
  /** 상세 버튼 클릭 핸들러 */
  onDetailClick?: (order: GroupedOrderData) => void;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** 주문번호 단위의 전체 묶음: 주문번호 상단 + 선물함 주문목록 */
export function GiftGroup({
  data,
  viewType,
  hideStatusBtns,
  hideOrderInfoBox,
  detailLabel = '주문상세',
  hideDetailButton,
  hidePrice,
  useItemLimit = false,
  itemLimit = 3,
  onDetailClick,
  onButtonClick,
  className,
}: GiftGroupProps) {
  // 전체 상품 수
  const total = data.items.length;

  // 처음 보여줄 개수 (제한이 있으면 itemLimit, 없으면 전체)
  const [visible, setVisible] = useState(
    useItemLimit ? Math.min(itemLimit ?? total, total) : total
  );

  // 남은 상품 수 (음수 방지)
  const remain = Math.max(total - visible, 0);
  // '더보기' 버튼 표시 여부 (제한 사용 + 남은 상품 있을 때)
  const showViewAll = useItemLimit && remain > 0;

  // 회색 박스에 표시할 정보(row) 구성 (데이터가 있을 때만 추가)
  const rows: { label: React.ReactNode; value: React.ReactNode; className?: string }[] = [];
  if (data.senderName) {
    rows.push({ label: '선물하신 분', value: data.senderName, className: styles.sender });
  }
  if (data.giftPickNumber) {
    rows.push({ label: '선물픽 번호', value: data.giftPickNumber });
  }
  if (data.receiverName) {
    rows.push({ label: '받으시는 분', value: data.receiverName });
  }

  // 상세 버튼 클릭 시 실행되는 핸들러
  const handleClickDetail = () => {
    console.log(`${detailLabel} 버튼 클릭!`);
    onDetailClick?.(data); // 부모에서 전달받은 핸들러 실행
  };

  // 보여줄 아이템 목록 조건
  const visibleItems = useItemLimit ? data.items.slice(0, visible) : data.items;

  return (
    <div className={clsx(styles.section, className)}>
      {/* 상단: 주문 정보 ) */}
      <div className={styles.top}>
        <OrderInfoTopBar
          date={data.orderDate}
          detailLabel={hideDetailButton ? undefined : detailLabel}
          onClickDetail={hideDetailButton ? undefined : handleClickDetail}
        />
        {/* 녹색박스: 주문번호 */}
        {!hideOrderInfoBox && <OrderInfoBox title="주문번호" content={data.orderNumber} isCopy />}
        {/* 회색박스 : 선물정보 */}
        {rows.length > 0 && (
          <Box style={{ margin: 0 }} className={styles.box}>
            {rows.map((r, i) => (
              <div key={i} className={styles.item}>
                <Heading className={styles.tit}>{r.label}</Heading>
                <span className={clsx(styles.cont, r.className)}>{r.value}</span>
              </div>
            ))}
          </Box>
        )}
      </div>
      {/* 하단: 선물함 주문목록 */}
      <div className={styles.bottom}>
        <GiftItem
          data={visibleItems}
          viewType={viewType ?? 'list'}
          hidePrice={hidePrice}
          hideStatusBtns={hideStatusBtns}
          onButtonClick={onButtonClick}
        />
        {/* 상품 더보기 */}
        {showViewAll && (
          <div className="ncp-text-center ncp-mt-l">
            <TextButton
              suffixIcon="arrowRight"
              iconSize="xsmall"
              size="1"
              onClick={() => setVisible(total)}
            >
              {remain}건의 주문 상품 더보기
            </TextButton>
          </div>
        )}
      </div>
    </div>
  );
}
