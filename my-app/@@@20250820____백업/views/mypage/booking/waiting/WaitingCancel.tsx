'use client';
import { TitleArea, Text, Button, ButtonArea } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { ReservedInfo } from '@/widgets/o4o';
// 스타일
import styles from './Waiting.module.scss';

export const WaitingCancel = () => {
  // ✅ 등록 정보 임시 데이터
  const mockUpcomingInfo = [
    {
      title: '취소일자',
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
    <Container title="웨이팅 취소" showBack>
      <Contents>
        <TitleArea
          title="웨이팅이 취소되었습니다"
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
          웨이팅 가능 매장보기
        </Button>
      </ButtonArea>
    </Container>
  );
};

WaitingCancel.displayName = 'WaitingCancel';
