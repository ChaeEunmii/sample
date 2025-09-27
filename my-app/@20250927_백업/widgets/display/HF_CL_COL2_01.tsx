'use client';
import { useEffect, useState } from 'react';
// 컴포넌트
import { Masonry } from '@/shared/ui';
import { CollectionCard, CollectionCardProps } from '@widgets/collection/CollectionCard';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_CL_COL2_01Props {
  title?: string;
  margin?: DisplayProps['margin'];
  data: Omit<CollectionCardProps, 'gem' | 'pattern' | 'thumbsView'>[];
}

export const HF_CL_COL2_01 = ({ title, margin, data }: HF_CL_COL2_01Props) => {
  const [views, setViews] = useState<number[]>(() => new Array(data.length).fill(0));

  useEffect(() => {
    setViews(data.map(() => (Math.random() < 0.5 ? 2 : 4)));
  }, [data]);

  return (
    <Display title={title} margin={margin} titleType="bubble">
      <Masonry columns={2}>
        {data.map((item, idx) => (
          <CollectionCard key={idx} {...item} pattern="3" thumbsView={views[idx]} />
        ))}
      </Masonry>
    </Display>
  );
};
HF_CL_COL2_01.displayName = 'HF_CL_COL2_01';
