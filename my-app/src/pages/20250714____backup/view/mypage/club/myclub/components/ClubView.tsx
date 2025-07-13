import { Line } from '@shared/ui';
import {
  ClubTitle,
  ClubReward,
  ClubBenefit,
  ClubReview,
  ClubInterest,
  ClubOtherView,
} from '@/views/mypage/club/myclub/components';
import { RewardData } from '@/views/mypage/club/myclub/components/ClubReward';
import { BenefitData } from '@/views/mypage/club/myclub/components/ClubBenefit';
import { ReviewSData } from '@/views/mypage/club/myclub/components/ClubReview';
import { ClubInterestItem } from '@/views/mypage/club/myclub/components/ClubInterest';
import { ClubOtherData } from '@/views/mypage/club/myclub/components/ClubOtherView';

export interface ClubViewData {
  id: string;
  reward: RewardData;
  benefits: BenefitData;
  reviews: ReviewSData[];
  interest: ClubInterestItem[];
  otherClubs: ClubOtherData[];
}

interface ClubViewProps {
  clubData: ClubViewData;
}

export const ClubView = ({ clubData }: ClubViewProps) => {
  return (
    <>
      <ClubTitle type={clubData.id} />
      <ClubReward data={clubData.reward} />
      <Line color="bg2" />
      <ClubBenefit data={clubData.benefits} />
      <Line color="bg2" />
      <ClubReview data={clubData.reviews} />
      <Line color="bg2" />
      <ClubInterest data={clubData.interest} />
      <Line variant="bold" />
      <ClubOtherView data={clubData.otherClubs} />
    </>
  );
};
