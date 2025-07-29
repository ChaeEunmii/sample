import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

export const ShowroomCTA = () => {
  const { item } = useProdDetail();

  const shopNumber = '0212345678';

  /** 매장 문의 또는 1:1채팅 버튼만 노출 */
  if (item.useChat) {
    return (
      <Button size="large" onClick={() => {}}>
        1:1채팅
      </Button>
    );
  }

  return (
    <Button size="large" onClick={() => (window.location.href = `tel:${shopNumber}`)}>
      매장문의
    </Button>
  );
};
