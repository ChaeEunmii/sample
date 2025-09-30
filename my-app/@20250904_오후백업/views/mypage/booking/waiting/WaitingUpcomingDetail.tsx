'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { TitleArea, Text, Heading, Stack, Button, Icon, ButtonArea, TextList } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { ReservedInfo, WaitingCancelDrawer } from '@/widgets/o4o';
import PostponeOrderDialog from './PostponeOrderDialog';
// 스타일
import styles from './Waiting.module.scss';

export const WaitingUpcomingDetail = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isPostpone = searchParams.get('postpone'); // 미루기 사용 전
  const isPostponeDone = searchParams.get('postpone') === 'true'; // 미루기 사용 완료한 경우

  // ✅ 상태 관리
  const [isPostponeOrderDialogOpen, setIsPostponeOrderDialogOpen] = useState(false);
  const [isCancelWaitingDrawerOpen, setIsCancelWaitingDrawerOpen] = useState(false);

  // ✅ 등록 정보 임시 데이터
  const mockUpcomingInfo = [
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
    <Container title="방문예정" showBack>
      <Contents>
        <TitleArea
          title={
            isPostpone ? (
              <>
                이제 입장이 가능합니다
                <br />
                바로 입장해주세요
              </>
            ) : (
              '웨이팅이 등록되었어요'
            )
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
        {/* 웨이팅 현황 */}
        <Stack type="between">
          {/* 폰트 사이즈 28이라서 heading에 사이즈 추가 해야 하는지 확인 필요 */}
          <Heading as="strong" weight="bold" size="9">
            <Text as="span" color="point">
              {isPostpone ? '1' : '101'}
            </Text>{' '}
            번째
          </Heading>
          <Button iconOnly="refresh" variant="ghost">
            새로고침
          </Button>
        </Stack>
        <Text weight="semibold" indent>
          웨이팅번호 1234번
        </Text>
        {/* 등록 정보 */}
        <ReservedInfo data={mockUpcomingInfo} />
        {isPostpone ? (
          <Text size="3" color="gray2" indent>
            웨이팅 등록 후, 방문을 하지 않으면 방문 이력이 노쇼로 처리될 수 있습니다. 노쇼로 처리될
            경우, 이용에 제한이 생길 수 있으니 이 점 꼭 확인 부탁드립니다.
          </Text>
        ) : (
          <TextList
            data={[
              '웨이팅 등록 후, 방문을 하지 않으면 방문 이력이 노쇼로 처리될 수 있습니다. 노쇼로 처리될 경우, 이용에 제한이 생길 수 있으니 이 점 꼭 확인 부탁드립니다.',
              '미루기는 한 번만 가능합니다.',
            ]}
            variant="level3"
          />
        )}
        <Text size="4" weight="medium" indent className={styles.noti}>
          <Icon name="caution" size="small" />
          부득이하게 방문이 어려운 경우에는 웨이팅을 취소해 주세요.
        </Text>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" onClick={() => setIsCancelWaitingDrawerOpen(true)}>
          웨이팅 취소
        </Button>
        {isPostpone && (
          <Button
            variant="primary"
            size="large"
            onClick={isPostponeDone ? undefined : () => setIsPostponeOrderDialogOpen(true)}
            disabled={isPostponeDone}
          >
            {isPostponeDone ? '미루기 사용 완료' : '웨이팅 미루기'}
          </Button>
        )}
      </ButtonArea>

      {/* 미루기 순서 선택 (L) */}
      <PostponeOrderDialog
        isOpen={isPostponeOrderDialogOpen}
        onClose={() => setIsPostponeOrderDialogOpen(false)}
      />
      {/* 웨이팅 취소 (D) */}
      <WaitingCancelDrawer
        isOpen={isCancelWaitingDrawerOpen}
        onClose={() => setIsCancelWaitingDrawerOpen(false)}
      />
    </Container>
  );
};

WaitingUpcomingDetail.displayName = 'WaitingUpcomingDetail';
