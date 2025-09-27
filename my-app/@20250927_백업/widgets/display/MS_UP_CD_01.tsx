// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { MeProfileCard, MeProfileCardProps } from '@widgets/mespace/MeProfileCard';
import { Carousel } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

interface MS_UP_CD_01Props extends DisplayProps {
  data: Omit<MeProfileCardProps, 'gem'>[];
}

export const MS_UP_CD_01 = ({ title, subtitle, moreUrl, margin, data }: MS_UP_CD_01Props) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-1', 'prod-3']);

  const handleWishlistToggle = (profileId: string, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        return prev.includes(profileId) ? prev : [...prev, profileId];
      } else {
        return prev.filter((id) => id !== profileId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, profileId);
  };

  const renderProfile = () => {
    return data.map((profile) => (
      <MeProfileCard
        key={profile.id}
        id={profile.id}
        image={profile.image}
        name={profile.name}
        traits={profile.traits}
        userType={profile.userType}
        href={profile.href}
        isMyProfile={profile.isMyProfile}
        gem={{
          isActive: wishlistIds.includes(profile.id),
          onChange: handleWishlistToggle,
        }}
      />
    ));
  };

  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      <Carousel slides={renderProfile()} slidesPerView={1.2} spaceBetween={12} />
    </Display>
  );
};

MS_UP_CD_01.displayName = 'MS_UP_CD_01';
