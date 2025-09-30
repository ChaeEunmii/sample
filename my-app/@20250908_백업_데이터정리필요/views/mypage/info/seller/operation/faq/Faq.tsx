'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Empty, Button, Icon, TextButton } from '@shared/ui';
import BoardAccSearch from '@/views/mypage/info/seller/components/BoardAccSearch';
import styles from './Faq.module.scss';
import { mockFaqProductData, mockFaqUserData } from '@views/mypage/info/seller/SellerDocs';

export default function Faq() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const nodata = searchParams.has('nodata');

  // 데이터 가져오기
  const data = nodata ? [] : mockFaqProductData;
  const data2 = mockFaqUserData;

  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsItems = [
    { label: '상품', data: data },
    { label: '회원', data: data2 },
    { label: '주문배송', data: data },
    { label: '취소반품교환', data: data2 },
    { label: '정산', data: data2 },
    { label: '마케팅프로모션', data: data },
    { label: '브랜드관리', data: data2 },
    { label: '기타', data: data },
  ];

  return (
    <Container showBack title="자주 묻는 질문">
      <Contents className={styles.layout}>
        <BoardAccSearch
          tabs={tabsItems}
          activeTab={activeIndex}
          onTabChange={setActiveIndex}
          listProps={{
            contentBottomSlot: (
              <div className={styles.infoTxt}>
                <Icon name="info" size="small" />
                <span className={styles.txt}>
                  답변이 충분하지 않으셨다면{' '}
                  <TextButton variant="underline" color="inherit" className={styles.txtBtn}>
                    비즈니스 문의
                  </TextButton>
                  를 이용해 주세요.
                </span>
              </div>
            ),
          }}
          noDataSlot={(tabIndex) => (
            <Empty
              title="등록된 질문이 없어요."
              buttons={
                <Button
                  variant="primary"
                  onClick={() => {
                    console.log(`탭 ${tabIndex} 문의하기 이동`);
                  }}
                >
                  비즈니스 문의하기
                </Button>
              }
            />
          )}
        />
      </Contents>
    </Container>
  );
}
