'use client';
import { useSearchParams } from 'next/navigation';
import { TitleArea, Text, Button, ButtonArea } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { ReservedInfo } from '@/widgets/o4o';
// 스타일
import styles from './Waiting.module.scss';

export const WaitingVisitCompleted = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isReviewed = searchParams.get('reviewed') === 'true'; // 리뷰를 작성한 경우

  // ✅ 등록 정보 임시 데이터
  const mockUpcomingInfo = [
    {
      title: '방문일자',
      content: '2025.11.11 15:30',
    },
    {
      title: '웨이팅번호',
      content: '1234번',
    },
    {
      title: '입장 인원',
      content: '2명',
    },
    {
      title: '등록자정보',
      content: '김*대',
    },
    {
      title: '연락처',
      content: '010-****-7221',
    },
  ];

  return (
    <Container title="방문완료" showBack>
      <Contents>
        <TitleArea
          title={
            <>
              방문해주셔서 감사합니다
              <br />
              다음에도 좋은 서비스로 찾아뵙겠습니다
            </>
          }
          subTitle={
            <span className={styles.locationInfo}>
              <Text as="span">크리스탈제이드</Text>
              <Text as="span" color="gray2">
                무역센터점 6F
              </Text>
            </span>
          }
          level="2"
        />
        {/* 등록 정보 */}
        <ReservedInfo data={mockUpcomingInfo} />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">목록으로</Button>
        <Button variant="primary" size="large">
          리뷰 {isReviewed ? '수정' : '쓰기'}
        </Button>
      </ButtonArea>
    </Container>
  );
};

WaitingVisitCompleted.displayName = 'WaitingVisitCompleted';
