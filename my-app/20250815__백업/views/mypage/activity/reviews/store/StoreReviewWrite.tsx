'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import {
  StarRating,
  ReviewImageAttach,
  ReviewText,
  ReviewOrderMenu,
} from '@views/mypage/activity/reviews/components';
import styles from './StoreReview.module.scss';
import { ReservedList, ReservedItem } from '@/widgets/o4o/ReservedList';

// 샘플 데이터
export const mockReviewItem = {
  id: 'store-1',
  type: 'torder',
  status: 'ORDER',
  image: {
    src: '/images/dummy/@sample_torder_01.png',
    alt: '크리스탈제이드 대표 이미지',
  },
  date: '20250703',
  badge: '테이블오더',
  title: '크리스탈제이드(매장 리뷰)',
  dateTime: '202512261200',
  guestCount: 30,
  location: '압구정본점 4F',
};

export default function StoreReviewWrite() {
  // 샘플데이터 가져오기
  const reviewDetailProdData = [mockReviewItem];

  // 메뉴 비공개 여부
  const [isPrivate, setIsPrivate] = useState(false);

  // 리뷰작성 placeholder
  const reviewPlaceholder = `테이블오더로 주문해보니 어떠셨나요?\n메뉴, 주문 편의성, 매장 서비스 후기를 20자 이상 남겨주세요. 여러분의 리뷰가 다른 고객에게 큰 도움이 됩니다.`;

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
        <ReviewOrderMenu
          menus={['깐풍기', '잡채소고기덮밥', '짜장면']}
          isPrivate={isPrivate}
          onPrivateChange={setIsPrivate}
        />
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
