'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ProdSearch } from '@views/mypage/partners/manage/components/ProdSearch';
import { CategoryTabData, mockProdCards3 } from '@mocks/partners';
import styles from './ProductShare.module.scss';

export default function ProductShare() {
  return (
    <Container showBack title="파트너스 활동 상품 공유하기">
      <Contents className={styles.layout}>
        <ProdSearch
          mode="share"
          placeholder="파트너스 활동이 가능한 상품을 검색해보세요"
          tabData={CategoryTabData}
          data={mockProdCards3}
          columns={2}
          onShare={(item) => {
            console.log('공유 클릭 id:', item.id);
          }}
        />
      </Contents>
    </Container>
  );
}
