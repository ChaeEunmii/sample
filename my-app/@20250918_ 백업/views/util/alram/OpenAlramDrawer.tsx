import { Drawer, Text } from '@shared/ui';
import styles from './OpenAlram.module.scss';

interface OpenAlramItem {
  /** ID */
  id: string;
  /** 본문 텍스트 */
  content: string;
  /** 시간 표시 */
  timeText: string;
}

interface OpenAlramDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 알람 데이터 배열 */
  data: OpenAlramItem[];
}

export default function OpenAlramDrawer({ isOpen, onClose, data }: OpenAlramDrawerProps) {
  return (
    <Drawer title="관심 브랜드의 래플 상품 오픈 알림" isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id} className={styles.item}>
              <Text size="5" color="gray1">
                {item.content}
              </Text>
              <Text as="span" size="3" color="gray3">
                {item.timeText}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
}
