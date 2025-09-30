import { ButtonArea, Button, Flag, Heading } from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import styles from './GiftDeliveryItem.module.scss';

// 기프트 배송상태 (배송중 | 배송완료)
type DeliveryStatus = 'delivering' | 'delivered';

export interface GroupedReturnData {
  /** ID*/
  id: string;
  /** 배송현황 */
  status: DeliveryStatus;
  /** 기프트 명 */
  title: string;
  infos?: {
    /** 택배사 명 */
    courier?: string;
    /** 접수일 */
    date?: string;
  };
}

const flagMap: Record<DeliveryStatus, { label: string; color: 'dark2' }> = {
  delivering: { label: '배송중', color: 'dark2' },
  delivered: { label: '배송완료', color: 'dark2' },
};

interface GiftDeliveryItemProps {
  /** 데이터 */
  data: GroupedReturnData;
  /** 배송조회 버튼 핸들러 */
  onTrackDelivery?: (id: string) => void;
}

export function GiftDeliveryItem({ data, onTrackDelivery }: GiftDeliveryItemProps) {
  // 구조분해
  const { status, title, infos } = data;

  // 배송조회 버튼 클릭 핸들러
  const handleTrackDeliveryClick = () => {
    onTrackDelivery?.(data.id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.caption}>
          <Flag data={flagMap[status]} />
          {infos && (
            <ul className={styles.infos}>
              {infos.courier && <li>{infos.courier}</li>}
              {infos.date && <li>{formatDate(infos.date, 'dot', true)}</li>}
            </ul>
          )}
        </div>
        <div className={styles.cont}>
          <Heading size="2" className={styles.title}>
            {title}
          </Heading>
        </div>
      </div>
      <ButtonArea margin="0">
        <Button variant="tertiary" onClick={handleTrackDeliveryClick}>
          배송 조회
        </Button>
      </ButtonArea>
    </div>
  );
}
