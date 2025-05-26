'use client';

import { TextButton } from '@shared/ui';
import { useNotification } from '@shared/contexts/NotificationContext';

// 임시 상품 데이터
import { Products } from '@views/product/dummy/ProdData';

export default function Page() {
  const { showNotification } = useNotification();

  const handleShowToast = (id: string) => {
    const product = Products.find((prod) => prod.id === id);
    if (!product) return;

    showNotification('위시리스트 추가', {
      image: { src: product.image.src, alt: product.name },
      buttonLabel: '위시리스트 보기',
      onButtonClick: () => console.log('위시리스트 이동'),
    });
  };

  return (
    <div>
      <TextButton onClick={() => handleShowToast('prod4')}>위시리스트</TextButton>
    </div>
  );
}
