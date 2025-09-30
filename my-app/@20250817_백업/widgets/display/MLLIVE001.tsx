import { LiveDateTabs } from '../live/LiveDateTabs';
import { LiveCardList } from '../live/LiveCardList';
import { Display, DisplayProps } from './Display';
import { useState } from 'react';

interface LiveCardData {
  id: string;
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  date?: {
    date: string;
    time: string;
  };
  href: string;
  live?: boolean;
  rsvp?: boolean;
}

export interface MLLIVE001Props extends DisplayProps {
  /** 사용 가능한 날짜들 */
  dates: string[];
  /** 초기 선택된 날짜 */
  defaultDate?: string;
  /** 날짜 선택 시 호출되는 함수 */
  onDateSelect?: (date: string) => void;
  /** 라이브 데이터 */
  data?: LiveCardData[];
  /** 초기 알림 설정된 카드 ID들 */
  activeIds?: string[];
}

export const MLLIVE001 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  dates,
  defaultDate,
  onDateSelect,
  data = [],
  activeIds = [],
}: MLLIVE001Props) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    defaultDate || new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [notiIds, setNotiIds] = useState<string[]>(activeIds);

  const handleDateSelect = (selectedDate: string) => {
    setSelectedDate(selectedDate);
    onDateSelect?.(selectedDate);
  };

  const handleNotiToggle = (cardId: string | number, isActive: boolean) => {
    const id = cardId.toString();
    if (isActive) {
      setNotiIds((prev) => [...prev, id]);
    } else {
      setNotiIds((prev) => prev.filter((notiId) => notiId !== id));
    }
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <LiveDateTabs data={dates} value={selectedDate} onSelect={handleDateSelect} />
      <LiveCardList
        data={data}
        notification={{
          activeIds: notiIds,
          onToggle: handleNotiToggle,
        }}
      />
    </Display>
  );
};

MLLIVE001.displayName = 'MLLIVE001';
