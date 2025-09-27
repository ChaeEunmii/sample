'use client';
import { useState } from 'react';
// 컴포넌트
import { TimerBanner } from '@widgets/banner/TimerBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

interface TimerItem {
  endDate: Date | string;
  href: string;
  product: {
    id: string;
    image: { src: string; alt?: string };
    brand?: string;
    title: string;
    price: number;
  };
}
interface HF_PR_LI_01Props {
  margin?: DisplayProps['margin'];
  data: TimerItem[];
}

export const HF_PR_LI_01 = ({ margin, data }: HF_PR_LI_01Props) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const handleToggle = (id?: string) => {
    if (!id) return;
    console.log('알림 신청 ID:', id);

    setActiveIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Display margin={margin}>
      {data.map(({ endDate, href, product }, idx) => (
        <TimerBanner
          key={idx}
          variant="product"
          endDate={endDate}
          href={href}
          product={product}
          notification={{
            isActive: activeIds?.includes(product.id),
            onToggle: (id) => handleToggle(id),
          }}
        />
      ))}
    </Display>
  );
};

HF_PR_LI_01.displayName = 'HF_PR_LI_01';
