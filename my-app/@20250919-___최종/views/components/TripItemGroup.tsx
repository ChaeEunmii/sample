import { Button } from '@/shared/ui';
import { TripItem } from '@/views/mypage/components';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import type { OrderItemType } from '@widgets/product/OrderItem';
import clsx from 'clsx';
import styles from './TripItemGroup.module.scss';

/**
 * 여행 주문 섹션 컴포넌트
 * @description (여행 주문 목록) 구성
 */

/** 주문 단위 전체 데이터 타입 */
export interface GroupedOrderData {
  orderNumber?: string; // 주문번호
  orderDate: string;
  reserveNum?: string; // 예약번호
  reserveNumAir?: string; // 예약번호(항공사)
  reserveNumTHT?: string; // 예약번호(THT)
  items: OrderItemType[];
}

interface TripItemGroupProps {
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
  /** 복사 시 실행되는 콜백 */
  onCopy?: (copiedText: string) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** 주문번호 단위의 전체 묶음: 주문번호 상단 + 선물함 주문목록 */
export function TripItemGroup({
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
  onCopy,
  className,
}: TripItemGroupProps) {
  // 전체 상품 수
  const total = data.items.length;

  // 처음부터 보여줄 개수만 계산
  const visibleCount = useItemLimit ? Math.min(itemLimit ?? total, total) : total;

  // 남은 상품 수 (음수 방지)
  const remain = Math.max(total - visibleCount, 0);
  // '더보기' 영역 노출 여부 (제한 사용 + 남은 상품 있을 때)
  const showViewAll = useItemLimit && remain > 0;

  // 상세 버튼 클릭 시 실행되는 핸들러
  const handleClickDetail = () => {
    console.log(`${detailLabel} 버튼 클릭!`);
    onDetailClick?.(data); // 부모에서 전달받은 핸들러 실행
  };

  // 보여줄 아이템 목록 (처음 개수만)
  const visibleItems = data.items.slice(0, visibleCount);

  // 주문정보 상단바 상세라벨
  const infoTopBarLabel = data.reserveNumTHT ? '주문상세(THT)' : '주문상세';

  // 녹색박스 rows
  const rows = (
    [
      ['예약번호', data.reserveNum],
      ['주문번호', data.orderNumber],
      ['예약번호(항공사)', data.reserveNumAir],
      ['예약번호(THT)', data.reserveNumTHT],
    ] as const
  )
    .filter(([, v]) => v != null && `${v}`.trim())
    .map(([title, v]) => ({ title, content: `${v}`, isCopy: true }));

  return (
    <div className={clsx(styles.section, className)}>
      {/* 상단: 주문 정보 ) */}
      <div className={styles.top}>
        <OrderInfoTopBar
          date={data.orderDate}
          detailLabel={hideDetailButton ? undefined : infoTopBarLabel}
          onClickDetail={hideDetailButton ? undefined : handleClickDetail}
        />
        {/* 녹색박스 */}
        {!hideOrderInfoBox && rows.length > 0 && (
          <OrderInfoBox
            isCopy
            rows={rows}
            onCopy={(text) => {
              onCopy?.(text); // 부모에서 내려준 복사 핸들러 실행
            }}
          />
        )}
      </div>
      {/* 하단: 여행 주문목록 */}
      <div className={styles.bottom}>
        <TripItem
          data={visibleItems}
          viewType={viewType ?? 'list'}
          hidePrice={hidePrice}
          hideStatusBtns={hideStatusBtns}
          onButtonClick={onButtonClick}
        />
        {/* 상품 더보기 */}
        {showViewAll && (
          <div className="ncp-text-center ncp-mt-l">
            <Button variant="tertiary" size="small" round>
              {total}건의 주문 상품 더보기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
