import { Line, ButtonArea, TextButton } from '@shared/ui';
import {
  ClubTitle,
  ClubReward,
  ClubBenefit,
  ClubReview,
  ClubInterest,
  ClubOtherView,
} from '@/views/mypage/club/myclub/components';
// 데이터 타입
import { RewardData } from '@/views/mypage/club/myclub/components/ClubReward'; /** 추가 적립 */
import { BenefitData } from '@/views/mypage/club/myclub/components/ClubBenefit'; /** 추가 혜택 */
import { ReviewSData } from '@/views/mypage/club/myclub/components/ClubReview'; /** 작성 가능한 리뷰 */
import { ClubInterestItem } from '@/views/mypage/club/myclub/components/ClubInterest'; /** 관심정보 */
import { ClubOtherData } from '@/views/mypage/club/myclub/components/ClubOtherView'; /** 다른클럽 둘러보기 */
import styles from './ClubView.module.scss';

export interface ClubViewData {
  id: string;
  reward: RewardData;
  benefits: BenefitData;
  reviews: ReviewSData[];
  interest: ClubInterestItem[][];
  otherClubs: ClubOtherData[];
}

interface ClubViewProps {
  clubData: ClubViewData;
}

export const ClubView = ({ clubData }: ClubViewProps) => {
  return (
    <>
      <ClubTitle type={clubData.id} />
      {/* 추가 적립 */}
      <ClubReward data={clubData.reward} />
      <Line color="bg2" />
      {/* 추가 혜택 */}
      <ClubBenefit data={clubData.benefits} />
      <Line color="bg2" />
      {/* 작성 가능한 리뷰 */}
      <ClubReview data={clubData.reviews} />
      <Line color="bg2" />
      {/* 관심정보 */}
      <ClubInterest data={clubData.interest} />
      {/* 클럽 탈퇴하기 */}
      <ButtonArea align="right" className={styles.clubLeave}>
        <TextButton variant="underline" color="gray3" size="1">
          클럽 탈퇴하기
        </TextButton>
      </ButtonArea>
      <Line variant="bold" />
      {/* 다른 클럽 둘러보기 */}
      <ClubOtherView data={clubData.otherClubs} />
    </>
  );
};
