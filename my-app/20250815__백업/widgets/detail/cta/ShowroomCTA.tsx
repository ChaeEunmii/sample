import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const ShowroomCTA = () => {
  const { item } = useProdDetail();

  const shopNumber = '0212345678';

  // START --- 퍼블 화면 확인용 Parameter
  const searchParams = useSearchParams();
  const [useChat, setUseChat] = useState(item.useChat);
  useEffect(() => {
    const useChatParam = searchParams.get('useChat');

    setUseChat(useChatParam === 'true');
  }, [searchParams]);
  // END --- 퍼블 화면 확인용 Parameter

  /** 매장 문의 또는 1:1채팅 버튼만 노출 */
  if (useChat) {
    return (
      <Button size="large" variant="primary" onClick={() => {}}>
        1:1채팅
      </Button>
    );
  }

  return (
    <Button
      size="large"
      variant="primary"
      onClick={() => (window.location.href = `tel:${shopNumber}`)}
    >
      매장문의
    </Button>
  );
};
