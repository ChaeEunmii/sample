'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { mockMembershipHistoryList } from '@mocks/mypage';
import { HistoryMembershipList } from '@views/mypage/membership/history/HistoryMembershipList';

export const MembershipHistory = () => {
  return (
    <Container title="이용 내역 상세 보기" showBack>
      <Contents>
        <HistoryMembershipList data={mockMembershipHistoryList} />
      </Contents>
    </Container>
  );
};
