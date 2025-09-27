// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCountList, ProdCountItemProps } from '@widgets/product/ProdCountList';

export interface AU_PD_CD_01Props extends DisplayProps {
  data: Omit<ProdCountItemProps, 'countdown'>[];
  columns?: 1 | 1.5;
}

export const AU_PD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  columns = 1.5,
}: AU_PD_CD_01Props) => {
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
        buttonLabels={{ wait: '오픈예정', active: '입찰하기', ended: '입찰마감' }}
      />
    </Display>
  );
};
AU_PD_CD_01.displayName = 'AU_PD_CD_01';
