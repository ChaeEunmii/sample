'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';

export default function ConceptFoodSub() {
  const searchParams = useSearchParams();
  const currentPageId = searchParams.get('page') || 'chef';

  // 타이틀 설정
  const titleMap: Record<string, string> = {
    chef: '셰프의 테이블',
    producer: '위대한 생산자',
    artisan: '세계의 장인',
    tools: '미식가의 도구상점',
  };

  const renderContents = () => {
    switch (currentPageId) {
      case 'chef':
        return <Contents>공통 모듈</Contents>;
      case 'producer':
        return <Contents>공통 모듈</Contents>;
      case 'artisan':
        return <Contents>공통 모듈</Contents>;
      case 'tools':
        return <Contents>공통 모듈</Contents>;
      default:
        return null;
    }
  };

  return (
    <Container title={titleMap[currentPageId] ?? ''} showBack type="basket">
      {renderContents()}
    </Container>
  );
}
