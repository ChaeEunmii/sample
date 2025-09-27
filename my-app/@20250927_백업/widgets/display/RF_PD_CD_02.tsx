// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCountList, ProdCountItemProps } from '@widgets/product/ProdCountList';

export interface RF_PD_CD_02Props extends DisplayProps {
  data: Omit<ProdCountItemProps, 'countdown'>[];
  columns?: 1 | 1.5;
}

export const RF_PD_CD_02 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  columns = 1.5,
}: RF_PD_CD_02Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <ProdCountList
        data={data}
        variant={data.length > 1 && !Number.isInteger(columns) ? 'swiper' : 'grid'}
        countType="inline"
        columns={columns}
        buttonLabels={{ wait: '오픈예정', active: '응모하기', ended: '응모종료' }}
      />
    </Display>
  );
};
RF_PD_CD_02.displayName = 'RF_PD_CD_02';
