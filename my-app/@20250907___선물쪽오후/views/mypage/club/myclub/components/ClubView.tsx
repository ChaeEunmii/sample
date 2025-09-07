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
  reward?: RewardData; // 추가 적립
  benefits?: BenefitData; // 추가 혜택
  reviews?: ReviewSData[]; // 작성 가능한 리뷰
  interest?: ClubInterestItem[][]; // 관심정보
  otherClubs?: ClubOtherData[];
}

interface ClubViewProps {
  clubData: ClubViewData;
}

// '클럽이지웰', '클럽프렌즈'는 reward(추가적립), reviews(작성가능한리뷰), interest(관심정보) 없음.(데이터에서 제거)
export const ClubView = ({ clubData }: ClubViewProps) => {
  return (
    <>
      <ClubTitle type={clubData.id} />
      {/* 추가 적립 */}
      {clubData.reward && <ClubReward data={clubData.reward} />}
      {/* 추가 혜택 */}
      {clubData.benefits && <ClubBenefit data={clubData.benefits} />}
      {/* 작성 가능한 리뷰 */}
      {clubData.reviews && <ClubReview data={clubData.reviews} />}
      {/* 관심정보 */}
      {clubData.interest && <ClubInterest data={clubData.interest} />}
      {/* 클럽 탈퇴하기 */}
      <ButtonArea align="right" className={styles.clubLeave}>
        <TextButton variant="underline" color="gray3" size="1">
          클럽 탈퇴하기
        </TextButton>
      </ButtonArea>
      <Line variant="bold" />
      {/* 다른 클럽 둘러보기 */}
      {clubData.otherClubs && <ClubOtherView data={clubData.otherClubs} />}
    </>
  );
};
