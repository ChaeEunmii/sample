import { Grid } from '@shared/ui';
import { LiveCard } from './LiveCard';

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

interface LiveCardListProps {
  data: LiveCardData[];
  notification?: {
    /** 알림 설정된 카드 ID 배열 */
    activeIds: (string | number)[];
    /** 알림 토글 핸들러 */
    onToggle: (cardId: string | number, isActive: boolean) => void;
  };
}

export const LiveCardList = ({ data, notification }: LiveCardListProps) => {
  const cardType = data.length === 1 ? 'vertical' : 'horizontal';

  const handleToggle = (id: string, value: boolean) => {
    notification?.onToggle(id, value);
  };

  return (
    <Grid gutter={12}>
      {data.map((item) => (
        <LiveCard
          key={item.id}
          {...item}
          isNotified={notification?.activeIds.includes(item.id) || false}
          onToggle={(value) => handleToggle(item.id, value)}
          type={cardType}
        />
      ))}
    </Grid>
  );
};
