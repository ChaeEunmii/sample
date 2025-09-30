'use client';
import { useState } from 'react';
import { BrandProfile, BrandProfileProps } from '@widgets/brand/BrandProfile';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface BR_BN_CD_01Props {
  margin?: DisplayProps['margin'];
  data: BrandProfileProps;
}

export const BR_BN_CD_01 = ({ margin, data }: BR_BN_CD_01Props) => {
  // gem prop이 없으면 내부 state 사용
  const [gemCount, setGemCount] = useState(147);

  const handleGemToggle = (isActive: boolean, newCount: number) => {
    console.log('젬 상태:', isActive, '새 카운트:', newCount);
    setGemCount(newCount);
  };

  const gemProps = data.gem ?? {
    count: gemCount,
    onToggle: handleGemToggle,
  };

  return (
    <Display margin={margin}>
      <BrandProfile {...data} gem={gemProps} />
    </Display>
  );
};

BR_BN_CD_01.displayName = 'BR_BN_CD_01';
