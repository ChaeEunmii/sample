'use client';
import { useState } from 'react';
import { Button, ButtonArea } from '@/shared/ui';
import { Container, Contents } from '@widgets/layout/Container';

export default function Page() {
  // 상태 관리
  const [isRangeFilterDrawerOpen, setIsRangeFilterDrawerOpen] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical>
          <Button onClick={() => setIsRangeFilterDrawerOpen(true)}>
            검색 범위 설정 - 기간 조회 (D)
          </Button>
        </ButtonArea>

        {/* 검색 범위 설정 - 기간 조회 (D) */}
        {/* <RangeFilterDrawer
          isOpen={isRangeFilterDrawerOpen}
          onClose={() => setIsRangeFilterDrawerOpen(false)}
        /> */}
      </Contents>
    </Container>
  );
}
