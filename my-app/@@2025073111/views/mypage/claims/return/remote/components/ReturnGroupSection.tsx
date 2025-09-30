import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { ReturnStatusFlag, ReturnStatus } from '@/views/mypage/claims/components/ReturnStatusFlag';
import styles from './ReturnGroupSection.module.scss';

/**
 * 주문번호 단위 비대면반품 섹션그룹 컴포넌트
 * @description (주문상단 정보 + 비대면반품 내역 목록) 구성
 */

// 비대면반품 내역 데이터 타입 정의
export interface OrderReturnData {
  /** 반품 상태 */
  status?: ReturnStatus;
  /** 이름 */
  name: string;
  /** 폰번호 */
  phone: string;
  /** 내용 */
  text: string;
}

export interface GroupedReturnData {
  id: string;
  orderNumber: string;
  orderDate: string;
  paymentLabel?: string;
  infos: OrderReturnData;
}

interface ReturnGroupSectionProps {
  /** 주문번호 단위 데이터 */
  data: GroupedReturnData;
}

/** 주문번호 단위의 전체 묶음: 주문상단 + 배송유형 그룹 반복 */
export function ReturnGroupSection({ data }: ReturnGroupSectionProps) {
  const handleClickDetail = () => {
    console.log('주문상세 버튼 클릭!');
  };

  return (
    <div className={styles.section}>
      {/* 상단: 주문 정보 (주문일자, 주문번호, 결제수단 등) */}
      <div className={styles.top}>
        <OrderInfoTopBar
          date={data.orderDate}
          detailLabel="주문상세"
          onClickDetail={handleClickDetail}
        />
        <OrderInfoBox
          title="영수번호"
          content={data.orderNumber}
          isCopy
          sideSlot={data.paymentLabel && <>{data.paymentLabel}</>}
        />
      </div>
      {/* 하단 : 입력된 정보와 상태플래그 노출 */}
      <div className={styles.bottom}>
        {data.infos.status && <ReturnStatusFlag status={data.infos.status} />}
        <div className={styles.wrap}>
          <div className={styles.cont}>{data.infos.text}</div>
          <ul className={styles.info}>
            <li>{data.infos.name}</li>
            <li>{data.infos.phone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
