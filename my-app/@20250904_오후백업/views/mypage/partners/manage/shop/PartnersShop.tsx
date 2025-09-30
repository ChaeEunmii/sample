'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Empty } from '@shared/ui';
import { useFAB } from '@/shared/contexts/FABContext';
import { ShopTopBar } from '@views/mypage/partners/manage/shop/component/ShopTopBar';
import { ShopBottomBar } from '@/views/mypage/partners/manage/shop/component/ShopBottomBar';
import { ProductGroup } from '@views/mypage/partners/manage/shop/component/ProductGroup';
import { Share } from '@widgets/etc/Share';
import styles from './PartnersShop.module.scss';
import { mockShopData } from '@mocks/partners';

export default function PartnersShop() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드
  const isNoData = searchParams.has('nodata'); // 데이터 없음
  const isOther = searchParams.has('other'); // 공유된 링크로 파트너스샵 진입 확인용

  // mock 데이터 가져오기
  const ShopData = mockShopData; // 상단정보 + 상품그룹들
  const shopTopInfoData = ShopData.meta; // 상단정보
  const prodGroupData = isNoData ? [] : ShopData.products; // 상품그룹들

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
      <Contents>
        {/* 상단 정보 */}
        <ShopTopBar data={shopTopInfoData} />
        {/* 상품그룹 목록 */}
        {prodGroupData.length > 0 ? (
          <ul className={styles.list}>
            {prodGroupData.map((sec, idx) => (
              <li key={idx} className={styles.item}>
                <ProductGroup
                  data={sec}
                  maxView={6}
                  onClickMore={(id) => console.log(`${id} 전체보기 클릭!`)}
                  onAction={(action, id) => {
                    if (action === 'share') {
                      console.log('그룹공유', id);
                      shareClick();
                    }
                    if (action === 'edit') console.log('그룹명 수정', id);
                    if (action === 'change') console.log('항목 변경', id);
                    if (action === 'delete') console.log('그룹 삭제', id);
                  }}
                  hideControl={isOther}
                />
              </li>
            ))}
          </ul>
        ) : (
          <Empty title="아직 큐레이션된 상품이 없어요" />
        )}
        {/* 공유하기 팝업 */}
        <Share isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={currentUrl} />
      </Contents>
      <ShopBottomBar />
    </Container>
  );
}
