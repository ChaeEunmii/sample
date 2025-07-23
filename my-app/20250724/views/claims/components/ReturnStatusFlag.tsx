import { Flag } from '@shared/ui';
import styles from './ReturnStatusFlag.module.scss';

/* 반품 상태 플래그 */

export type ReturnStatus =
  | 'return_request_denied' // 반품접수불가
  | 'return_not_allowed' // 반품불가
  | 'product_collecting' // 상품회수중
  | 'return_requested' // 반품접수
  | 'refund_completed' // 환불완료
  | 'return_confirmed'; // 반품확정

// 반품 상태 메타 정보 매핑 (한글 라벨 + 플래그 색상)
const returnStatusMetaMap = {
  return_request_denied: { label: '반품접수불가', color: 'order5' },
  return_not_allowed: { label: '반품불가', color: 'order5' },
  product_collecting: { label: '상품회수중', color: 'order3' },
  return_requested: { label: '반품접수', color: 'order1' },
  refund_completed: { label: '환불완료', color: 'order4' },
  return_confirmed: { label: '반품확정', color: 'order4' },
} as const;

type ReturnStatusFlagProps = {
  /** 현재 반품 상태 코드 */
  status: ReturnStatus;
  /** 상태 관련 날짜 (옵션) */
  date?: string;
};

export function ReturnStatusFlag({ status, date }: ReturnStatusFlagProps) {
  // 현재 상태에 해당하는 메타 정보 조회
  const meta = returnStatusMetaMap[status];
  // 상태 정보가 없으면 아무것도 렌더링하지 않음
  if (!meta) return null;

  // 날짜 문자열을 'YYYY.MM.DD HH:mm:ss' 포맷으로 변환하는 함수 (데이터 예시 : 2025-12-25T12:34:56)
  function formatDateTime(dateString: string) {
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString; // 유효하지 않으면 원본 반환

      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      const hh = String(d.getHours()).padStart(2, '0');
      const mi = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');

      return `${yyyy}.${mm}.${dd} ${hh}:${mi}:${ss}`;
    } catch {
      return dateString;
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* Flag 컴포넌트에 data를 객체 형태로 전달 */}
      <Flag data={{ label: meta.label, color: meta.color }} />
      {/* date 값이 있을 경우 포맷 후 출력 */}
      {date && <span className={styles.date}>{formatDateTime(date)}</span>}
    </div>
  );
}
