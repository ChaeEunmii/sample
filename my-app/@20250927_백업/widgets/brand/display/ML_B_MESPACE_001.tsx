import { useState } from 'react';
import { MeProfileCard } from '@widgets/mespace/MeProfileCard';
import { Carousel } from '@shared/ui';
import { Display } from '@widgets/display/Display';

// 더미 데이터
const profileData = [
  {
    id: 'profile_01',
    image: { src: '/images/dummy/@sample_brand_01.png', alt: '스트릿패션 무드멜로즈' },
    name: '스트릿패션 무드멜로즈',
    traits: ['무드멜로즈 CEO', '스트릿패션 맛집', '이구역대표여름쿨톤'],
    userType: 'seller' as const,
    href: '#',
    isMyProfile: true,
  },
  {
    id: 'profile_02',
    image: { src: '/images/dummy/@sample_brand_01.png', alt: '빈티지룩 마스터' },
    name: '빈티지룩 마스터',
    traits: ['빈티지 전문가', '레트로 스타일링', '90년대감성'],
    userType: 'influencer' as const,
    href: '#',
    isMyProfile: false,
  },
  {
    id: 'profile_03',
    image: { src: '/images/dummy/@sample_brand_01.png', alt: '미니멀 코디' },
    name: '미니멀 코디',
    traits: ['심플한 매력', '베이직 아이템 전문', '깔끔한 스타일링'],
    userType: 'manager' as const,
    href: '#',
    isMyProfile: false,
  },
  {
    id: 'profile_04',
    image: { src: '/images/dummy/@sample_brand_01.png', alt: '트렌디 셀렉터' },
    name: '트렌디 셀렉터',
    traits: ['최신 트렌드', '컬러 매칭 전문', '젊은 감각'],
    userType: 'normal' as const,
    href: '#',
    isMyProfile: false,
  },
];

export const ML_B_MESPACE_001 = () => {
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
    return profileData.map((profile) => (
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
    <Display title="브랜드매니저">
      <Carousel slides={renderProfile()} slidesPerView={1.2} spaceBetween={12} />
    </Display>
  );
};
