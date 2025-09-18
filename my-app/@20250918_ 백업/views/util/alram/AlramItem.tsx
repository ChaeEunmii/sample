'use client';

import { Text, TextButton, Heading } from '@shared/ui';
import styles from './AlramItem.module.scss';

interface AlramItem {
  /** 제목 */
  title: string;
  /** 본문 */
  content?: string;
  /** 시간 텍스트 (없으면 미노출) */
  timeText?: string;
  /** 더보기 버튼 노출 여부 */
  showMore?: boolean;
}
interface AlramSection {
  /** ID */
  id: string;
  /** 날짜 문자열 */
  date?: string;
  /** 알림 아이템 배열 */
  items: AlramItem[];
}

interface AlramItemProps {
  /** 알람 데이터 */
  data: AlramSection;
  /** 더보기 버튼 클릭 핸들러 */
  onMore?: (item: AlramItem, index: number) => void;
}

export function AlramItem({ data, onMore }: AlramItemProps) {
  return (
    <>
      {data.date && (
        <Text size="4" color="gray3" className={styles.date}>
          {data.date}
        </Text>
      )}
      <ul className={styles.listWrap}>
        {data.items.map((item, idx) => (
          <li key={idx} className={styles.listItem}>
            <div className={styles.tit}>
              <Heading size="2" weight="semibold">
                {item.title}
              </Heading>
              {item.timeText && (
                <Text as="span" size="3" color="gray3">
                  {item.timeText}
                </Text>
              )}
            </div>
            <Text as="span" size="5" reading>
              {item.content}
            </Text>
            {item.showMore && onMore && (
              <div className={styles.btns}>
                <TextButton
                  size="1"
                  variant="underline"
                  color="gray3"
                  onClick={() => onMore(item, idx)}
                >
                  더보기
                </TextButton>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
