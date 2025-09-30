'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import {
  StarRating,
  ReviewImageAttach,
  ReviewText,
  ReviewOrderMenu,
} from '@views/mypage/activity/reviews/components';
import { ReservedList, ReservedItem, ReservationStatus } from '@/widgets/o4o/ReservedList';
import { mockStoreReviewItem } from '@mocks/myactivity';
import styles from './StoreReview.module.scss';

export default function StoreReviewWrite() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isType1 = searchParams.has('type1'); // 예약
  const isType2 = searchParams.has('type2'); // 웨이팅

  // 케이스별 화면보기 모드
  type ReviewMode = 'booking' | 'waiting' | 'torder';
  const mode: ReviewMode = isType1 ? 'booking' : isType2 ? 'waiting' : 'torder';

  // 상태 설정 샘플
  const statusByMode = {
    booking: ReservationStatus.Reservation,
    waiting: ReservationStatus.Reservation,
    torder: ReservationStatus.Order,
  } as const;
  // 뱃지 설정 샘플
  const badgeByMode = {
    booking: '예약',
    waiting: '웨이팅',
    torder: '테이블오더',
  } as const;

  // 샘플데이터 가져오기
  const reviewDetailProdData: ReservedItem[] = [
    {
      ...mockStoreReviewItem,
      type: mode,
      status: statusByMode[mode],
      badge: badgeByMode[mode],
      ...(badgeByMode[mode] === '테이블오더' && {
        info: ['짜장면, 짬뽕, 탕수육'],
      }),
      ...(badgeByMode[mode] === '예약' && {
        info: ['룸 type 예약(소형 룸)'],
        dateTime: '202512261200',
      }),
    },
  ];

  // 화면상태별  placeholder 샘플
  const reviewPlaceholder =
    mode === 'booking'
      ? `예약 후 매장 방문 경험을 들려주세요.\n20자 이상, 상품과 매장 서비스에 대한 솔직한 후기를 작성해 주세요. 자세한 리뷰는 다른 고객의 선택에 큰 도움이 됩니다.`
      : mode === 'waiting'
        ? `웨이팅 서비스, 이용해보니 어떠셨나요?\n20자 이상, 대기 과정과 매장 서비스에 대한 솔직한 후기를 작성해 주세요. 자세한 리뷰는 다른 고객의 선택에 큰 도움이 됩니다.`
        : `테이블오더로 주문해보니 어떠셨나요?\n메뉴, 주문 편의성, 매장 서비스 후기를 20자 이상 남겨주세요. 여러분의 리뷰가 다른 고객에게 큰 도움이 됩니다.`;

  // 주문하신 메뉴 노출 조건
  const showReviewOrderMenu = mode === 'torder';

  // 메뉴 비공개 여부
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <Container showBack title="매장 리뷰 작성">
      <Contents className={styles.wrap}>
        {/* 매장 정보 */}
        <ReservedList
          data={reviewDetailProdData as ReservedItem[]}
          isReview
          hideTopInfo
          hideBtns
          hideCount
          marginTop="0"
        />
        {/*  별점 평가*/}
        <StarRating title="매장은 어떠셨나요?" onChange={(v) => console.log('rating:', v)} />
        {/* 주문하신 메뉴 */}
        {showReviewOrderMenu && (
          <ReviewOrderMenu
            menus={['깐풍기', '잡채소고기덮밥', '짜장면']}
            isPrivate={isPrivate}
            onPrivateChange={setIsPrivate}
          />
        )}
        {/* 리뷰 작성란 */}
        <ReviewText placeholder={reviewPlaceholder} onChange={() => {}} />
        {/* 이미지 첨부 */}
        <ReviewImageAttach
          infoList={[
            '파일당 최대 10MB까지 등록할 수 있습니다. (파일형식 : JPG, JPEG, PNG)',
            '첨부파일은 최대 8개까지 등록가능합니다.',
          ]}
          onChange={(images) => {
            console.log(images);
          }}
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">취소</Button>
        <Button variant="primary" size="large">
          등록
        </Button>
      </ButtonArea>
    </Container>
  );
}
