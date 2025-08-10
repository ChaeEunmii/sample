'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Tabs, Empty } from '@shared/ui';
import { QnAList } from '@widgets/qna';
import styles from './MyInquiries.module.scss';
// 더미데이터
import { mockQnAData } from '@/mocks/myactivity';

export default function MyInquiries() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const qnaData = isNoData ? [] : mockQnAData;

  // 탭
  const [activeIndex, setActiveIndex] = useState(1);
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
        {activeIndex === 0 && (
          <>
            <ButtonArea vertical margin="3">
              <Button>1:1 문의하기</Button>
            </ButtonArea>
            <QnAList data={mockQnAData} onDelete={handleDelete} />
            <div className={styles.btns}>
              <Button size="small" suffixIcon="arrowDown" variant="tertiary" round>
                더보기
              </Button>
            </div>
          </>
        )}
        {/* 상품Q&A */}
        {activeIndex === 1 && (
          <>
            {qnaData.length > 0 ? (
              <>
                <QnAList data={qnaData} rows={2} onDelete={handleDelete} showMore />
              </>
            ) : (
              <>
                {/* 내역 없음 */}
                <Empty
                  title="문의한 내역이 없어요."
                  buttons={
                    <>
                      <Button variant="primary">샵메인 바로가기</Button>
                    </>
                  }
                />
              </>
            )}
          </>
        )}
      </Contents>
    </Container>
  );
}
