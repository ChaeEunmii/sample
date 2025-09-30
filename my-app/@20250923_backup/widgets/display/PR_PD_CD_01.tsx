// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdPreviewList, ProdPreviewItemProps } from '@widgets/product/ProdPreviewList';

export interface PR_PD_CD_01Props extends DisplayProps {
  data: ProdPreviewItemProps[];
  columns: 1 | 1.5;
}

export const PR_PD_CD_01 = ({
  margin,
  title,
  subtitle,
  moreUrl,
  data,
  columns,
}: PR_PD_CD_01Props) => {
  const showColumns = data.length > 1 ? columns : undefined;
  const displayType = data.length > 1 ? (columns === 1 ? 'grid' : 'swiper') : 'grid';

  return (
    <Display margin={margin} title={title} subtitle={subtitle} moreUrl={moreUrl}>
      <ProdPreviewList data={data} variant={displayType} columns={showColumns} />
    </Display>
  );
};
PR_PD_CD_01.displayName = 'PR_PD_CD_01';
