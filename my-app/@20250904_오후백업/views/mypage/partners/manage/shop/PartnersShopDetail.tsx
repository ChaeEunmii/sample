'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { useSearchParams } from 'next/navigation';
import { useFAB } from '@/shared/contexts/FABContext';
import { ShopBottomBar } from '@/views/mypage/partners/manage/shop/component/ShopBottomBar';
import { ProductGroup } from '@views/mypage/partners/manage/shop/component/ProductGroup';
import { Share } from '@widgets/etc/Share';
import { mockProdCards } from '@mocks/partners';
import styles from './PartnersShopDetail.module.scss';

export default function PartnersShopDetail() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드
  const isOther = searchParams.has('other'); // 공유된 링크로 파트너스샵 진입 확인용
  // 샘플 데이터
  const prodGroupData = {
    id: 'group-1',
    title: 'EXCLUSIVE OFFERS',
    subtitle: '신규 런칭 최저가 특가 타임딜',
    products: mockProdCards,
  };

  // 공유하기
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const shareClick = () => {
    setCurrentUrl(window.location.href);
    setIsShareOpen(true);
  };

  // 우측하단 상품그룹 추가 버튼설정
  const { setActions, clearActions } = useFAB();
  useEffect(() => {
    if (isOther) {
      return;
    }
    setActions([
      {
        name: 'plus',
        label: '추가 fab',
        onClick: () => alert('추가 fab 테스트!'),
      },
    ]);
    return () => clearActions();
  }, [setActions]);

  return (
    <Container showBack title="파트너스샵" type="share">
      <Contents className={styles.layout}>
        <ProductGroup
          data={prodGroupData}
          hideControl={isOther}
          onAction={(action, id) => {
            if (action === 'share') {
              console.log('그룹공유', id);
              shareClick();
            }
            if (action === 'edit') console.log('그룹명 수정', id);
            if (action === 'change') console.log('항목 변경', id);
            if (action === 'delete') console.log('그룹 삭제', id);
          }}
          className="ncp-mt-l"
        />
        {/* 공유하기 팝업 */}
        <Share isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={currentUrl} />
      </Contents>
      <ShopBottomBar />
    </Container>
  );
}
