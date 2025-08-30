'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Empty } from '@shared/ui';
import { useFAB } from '@/shared/contexts/FABContext';
import { ShopTopBar } from '@views/mypage/partners/manage/shop/component/ShopTopBar';
import { ShopBottomBar } from '@/views/mypage/partners/manage/shop/component/ShopBottomBar';
import { ProductGroup } from '@views/mypage/partners/manage/shop/component/ProductGroup';
import { mockShopTopInfo, sections } from '@mocks/partners';
import styles from './PartnersShop.module.scss';

export default function PartnersShop() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  // mock 데이터 가져오기
  const prodGroupData = isNoData ? [] : sections;

  // 우측하단 상품그룹 추가 버튼설정
  const { setActions, clearActions } = useFAB();
  useEffect(() => {
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
        <ShopTopBar data={mockShopTopInfo} />
        {/* 목록 */}
        {prodGroupData.length > 0 ? (
          <ul className={styles.list}>
            {prodGroupData.map((sec, idx) => (
              <li key={idx} className={styles.item}>
                <ProductGroup
                  title={sec.title}
                  subtitle={sec.subtitle}
                  products={sec.products}
                  maxView={6}
                  onClickMore={() => console.log(`${sec.id} 전체보기 클릭!!`)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <Empty title="아직 등록된 게시물이 없어요" />
        )}
      </Contents>
      <ShopBottomBar />
    </Container>
  );
}
