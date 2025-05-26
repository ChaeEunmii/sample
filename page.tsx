'use client';

import { useState } from 'react';
import { Button, Stack } from '@shared/ui';
import { useNotification } from '@shared/contexts/NotificationContext';
import GuaranteeDialog from '@views/etc/GuaranteeDialog';
import NewsletterDialog from '@views/etc/NewsletterDialog';
import ChangeCountryDialog from '@views/country/ChangeCountryDialog';
import LoginDialog from '@views/auth/login/LoginDialog';
import HeaderCart from '@views/layout/components/HeaderCart';

// 임시 상품 데이터(shop.tsx 참고)
import { Products } from '@views/product/dummy/ProdData';

export default function Page() {
  const { showNotification } = useNotification();
  const [guaranteeOpen, setGuaranteeOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [changeCountryOpen, setChangeCountryOpen] = useState(false);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [headerCartOpen, setHeaderCart] = useState(false);

  //위시리스트 추가
  const handleWishShowNotification = (id: string) => {
    const product = Products.find((prod) => prod.id === id);
    if (!product) return;

    showNotification('위시리스트 추가', {
      image: { src: product.image.src, alt: product.name },
      buttonLabel: '위시리스트 보기',
      onButtonClick: () => console.log('위시리스트 이동'),
    });
  };

  //장바구니 추가
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
    <>
      <div>
        <Stack>
          <Button size="small" onClick={() => setNewsletterOpen(true)}>
            뉴스레터(L)
          </Button>
          <Button size="small" onClick={() => setLoginOpen(true)}>
            로그인(L)
          </Button>
          <Button size="small" onClick={() => setHeaderCart(true)}>
            장바구니(L)
          </Button>
          <Button size="small" onClick={() => setChangeCountryOpen(true)}>
            국가선택(L)
          </Button>
          <Button size="small" onClick={() => setGuaranteeOpen(true)}>
            서비스 가입사실 확인(L)
          </Button>
        </Stack>
      </div>
      <div className="ut-mt-xs">
        <Stack>
          <Button size="small" onClick={() => handleWishShowNotification('prod4')}>
            위시리스트 추가(NotificationContext)
          </Button>
          <Button size="small" onClick={() => handleCartShowNotification('prod3')}>
            장바구니 추가(NotificationContext)
          </Button>
        </Stack>
      </div>

      {/* 뉴스레터 구독(L) */}
      <NewsletterDialog isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
      {/* 서비스 가입사실 확인: 지급보증서(L) */}
      <GuaranteeDialog isOpen={guaranteeOpen} onClose={() => setGuaranteeOpen(false)} />
      {/* 국가선택(L) */}
      <ChangeCountryDialog isOpen={changeCountryOpen} onClose={() => setChangeCountryOpen(false)} />
      {/* 로그인(L) */}
      <LoginDialog isOpen={LoginOpen} onClose={() => setLoginOpen(false)} />
      {/* 장바구니(L) */}
      <HeaderCart isOpen={headerCartOpen} onClose={() => setHeaderCart(false)} />
    </>
  );
}
