import { useState } from 'react';
import { MeCard } from '@widgets/mespace';
import { Carousel } from '@shared/ui';
import { Display } from '@widgets/display/Display';

// 더미 데이터
import { mockMeCardData } from '@mocks/mespace';

export const ML_B_MESPACE_002 = () => {
  const renderCard = () => {
    return mockMeCardData.map((item, idx) => <MeCard key={idx} {...item} />);
  };
  return (
    <Display title="미스페이스" moreUrl="#">
      <Carousel slides={renderCard()} slidesPerView={1.2} spaceBetween={8} />
    </Display>
  );
};
