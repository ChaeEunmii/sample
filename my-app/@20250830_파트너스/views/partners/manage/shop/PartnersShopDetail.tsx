'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ShopBottomBar } from '@/views/mypage/partners/manage/shop/component/ShopBottomBar';
import { ProductGroup } from '@views/mypage/partners/manage/shop/component/ProductGroup';
import { mockProdCards1 } from '@mocks/partners';
import styles from './PartnersShopDetail.module.scss';

export default function PartnersShopDetail() {
  // 샘플 데이터
  const prodGroupData = {
    id: 'group-1',
    title: '너무 더울 땐 필수, 선풍기',
    subtitle: '시원한 바람~~',
    products: mockProdCards1,
  };

  return (
    <Container showBack title="파트너스샵" type="share">
      <Contents className={styles.layout}>
        <ProductGroup
          title={prodGroupData.title}
          subtitle={prodGroupData.subtitle}
          products={prodGroupData.products}
          className="ncp-mt-l"
        />
      </Contents>
      <ShopBottomBar />
    </Container>
  );
}
