'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import OneOnOne from '@/views/mypage/activity/inquiries/oneonone/OneOnOne';
import ProductQnA from '@/views/mypage/activity/inquiries/productqna/ProductQnA';
import styles from './MyInquiries.module.scss';

// 더미데이터
import { mockOneOnOneData, mockQnAData } from '@mocks/myactivity';

export default function MyInquiries() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isTab2 = searchParams.has('tab2');
  const oneOnOneData = isNoData
    ? []
    : mockOneOnOneData.concat(
        Array.from({ length: 8 }, (_, i) => ({ ...mockOneOnOneData.at(-1)!, id: `one-extra-${i}` }))
      ); // 더보기 보기위해서 데이터갯수늘림

  const qnaData = isNoData
    ? []
    : mockQnAData.concat(
        Array.from({ length: 8 }, (_, i) => ({ ...mockQnAData.at(-1)!, id: `qna-extra-${i}` }))
      ); // 더보기 보기위해서 데이터갯수늘림

  // 탭
  const [activeIndex, setActiveIndex] = useState(!isTab2 ? 0 : 1);
  const tabItems = [{ label: '1:1 문의' }, { label: '상품Q&A' }];

  // 문의글 삭제
  const handleDelete = (id: string) => {
    console.log('삭제할 항목 ID:', id);
  };

  return (
    <Container showBack title="나의 문의내역">
      <Contents className={styles.layout}>
        <Tabs activeTab={activeIndex} onTabChange={(i) => setActiveIndex(i)} data={tabItems} />
        {/* 1:1 문의하기 */}
        {activeIndex === 0 && <OneOnOne data={oneOnOneData} rows={10} onDelete={handleDelete} />}
        {/* 상품Q&A */}
        {activeIndex === 1 && <ProductQnA data={qnaData} rows={10} onDelete={handleDelete} />}
      </Contents>
    </Container>
  );
}
