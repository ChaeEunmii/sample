import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { formatRemainTime } from '@/shared/utils/ui';

export const LiveCTA = () => {
  const { item } = useProdDetail();

  const remainToStart = formatRemainTime(item.schedule.start);

  if (remainToStart !== '00:00:00' && !item.preLive) {
    // 방송 시작 전
    return (
      <Button size="large" variant="primary" disabled>
        방송중에만 구매가능
      </Button>
    );
  } else {
    // 방송 종료 후
    return (
      <Button size="large" variant="primary" disabled>
        방송 종료
      </Button>
    );
  }
};
