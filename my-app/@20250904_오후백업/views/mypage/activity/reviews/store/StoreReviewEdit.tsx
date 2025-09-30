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
import { ReservedList, ReservedItem } from '@/widgets/o4o/ReservedList';
import { initialImages } from '@mocks/myactivity';
import { mockStoreReviewItem } from '@mocks/myactivity';
import styles from './StoreReview.module.scss';

export default function StoreReviewEdit() {
  // 샘플데이터 가져오기
  const reviewDetailProdData = [mockStoreReviewItem];

  // 메뉴 비공개 여부
  const [isPrivate, setIsPrivate] = useState(false);

  // 리뷰작성 상태
  const reviewTextData = `이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!!`;
  const [reviewText, setReviewText] = useState(reviewTextData);

  return (
    <Container showBack title="매장 리뷰 수정">
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
        {/* 별점 평가 */}
        <StarRating
          title="매장은 어떠셨나요?"
          defaultValue={2}
          onChange={(v) => console.log('rating:', v)}
        />
        {/* 주문하신 메뉴 */}
        <ReviewOrderMenu
          menus={['깐풍기', '잡채소고기덮밥', '짜장면']}
          isPrivate={isPrivate}
          onPrivateChange={setIsPrivate}
        />
        {/* 리뷰 작성란 */}
        <ReviewText value={reviewText} onChange={setReviewText} />
        {/* 이미지 첨부 */}
        <ReviewImageAttach
          defaultValue={initialImages}
          onChange={(images) => {
            console.log(images);
          }}
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">취소</Button>
        <Button variant="primary" size="large">
          저장
        </Button>
      </ButtonArea>
    </Container>
  );
}
