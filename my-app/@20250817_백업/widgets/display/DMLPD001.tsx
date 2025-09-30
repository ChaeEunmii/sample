import { useState } from 'react';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';

export interface DMLPD001Props extends DisplayProps {
  data: ProdCardItemProps[];
  columns?: 1.5 | 2.5;
  rows?: 1 | 2;
}

export const DMLPD001 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  columns = 2.5,
  rows = 1,
}: DMLPD001Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <ProdCardList data={data} variant="swiper" columns={columns} autofit rows={rows} />
    </Display>
  );
};
DMLPD001.displayName = 'DMLPD001';
