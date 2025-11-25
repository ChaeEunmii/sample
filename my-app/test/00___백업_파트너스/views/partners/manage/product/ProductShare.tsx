'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ProdSearch } from '@views/mypage/partners/manage/components/ProdSearch';
import { Share } from '@widgets/etc/Share';
import { CategoryTabData, mockProdShareCards } from '@mocks/partners';
import styles from './ProductShare.module.scss';

export default function ProductShare() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // 공유하기
  const shareClick = () => {
    setCurrentUrl(window.location.href);
    setIsShareOpen(true);
  };

  return (
    <Container showBack title="파트너스 활동 상품 공유하기">
      <Contents className={styles.layout}>
        <ProdSearch
          mode="share"
          placeholder="상품을 검색해보세요"
          tabData={CategoryTabData}
          data={mockProdShareCards}
          columns={2}
          onShare={(item) => {
            console.log('공유 클릭 id:', item.id);
            shareClick();
          }}
        />

        {/* 공유하기 팝업 */}
        <Share isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={currentUrl} />
      </Contents>
    </Container>
  );
}
