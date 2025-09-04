'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import BoardAccSearch from '@/views/mypage/info/seller/components/BoardAccSearch';
import styles from './Faq.module.scss';
import { mockFaqProductData, mockFaqUserData } from '@views/mypage/info/seller/SellerDocs';

export default function Faq() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const nodata = searchParams.has('nodata');

  // 데이터 가져오기
  const data = nodata ? [] : mockFaqProductData;
  const data2 = nodata ? [] : mockFaqUserData;

  return (
    <Container showBack title="자주 묻는 질문">
      <Contents className={styles.layout}>
        <BoardAccSearch
          tabs={[
            { label: '상품', data: data },
            { label: '회원', data: data2 },
            { label: '주문배송', data: data },
            { label: '취소반품교환', data: data2 },
            { label: '정산', data: data2 },
            { label: '마케팅프로모션', data: data },
            { label: '브랜드관리', data: data2 },
            { label: '기타', data: data },
          ]}
          defaultTabIndex={0}
        />
      </Contents>
    </Container>
  );
}
