'use client';
import { useState } from 'react';
// 컴포넌트
import { TimerBanner } from '@widgets/banner/TimerBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_PR_LI_01Props {
  margin?: DisplayProps['margin'];
  endDate: Date | string;
  product: {
    image: { src: string; alt?: string };
    brand?: string;
    title: string;
    price: number;
    href?: string;
  };
}

export const HF_PR_LI_01 = ({ margin, endDate, product }: HF_PR_LI_01Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (id?: string) => {
    console.log('알림 신청 ID:', id);
    setIsActive((prev) => !prev);
  };
  return (
    <Display margin={margin}>
      <TimerBanner
        variant="product"
        endDate={endDate}
        product={product}
        notification={{
          isActive,
          onToggle: handleToggle,
        }}
      />
    </Display>
  );
};
HF_PR_LI_01.displayName = 'HF_PR_LI_01';
