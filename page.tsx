'use client';

import { Button, Stack } from '@shared/ui';
import { useNotification } from '@shared/contexts/NotificationContext';

// 임시 상품 데이터
import { Products } from '@views/product/dummy/ProdData';

export default function Page() {
  const { showNotification } = useNotification();

  const handleWishShowNotification = (id: string) => {
    const product = Products.find((prod) => prod.id === id);
    if (!product) return;

    showNotification('위시리스트 추가', {
      image: { src: product.image.src, alt: product.name },
      buttonLabel: '위시리스트 보기',
      onButtonClick: () => console.log('위시리스트 이동'),
    });
  };

  const handleCartShowNotification = (id: string) => {
    const product = Products.find((prod) => prod.id === id);
    if (!product) return;

    showNotification('장바구니 추가', {
      image: { src: product.image.src, alt: product.name },
      buttonLabel: '주문하기',
      onButtonClick: () => console.log('주문하기 이동'),
    });
  };

  return (
    <Stack>
      <Button size="small" onClick={() => handleWishShowNotification('prod4')}>
        위시리스트 추가
      </Button>
      <Button size="small" onClick={() => handleCartShowNotification('prod3')}>
        장바구니 추가
      </Button>
    </Stack>
  );
}
