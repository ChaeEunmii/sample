// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCountList, ProdCountItemProps } from '@widgets/product/ProdCountList';

export interface RF_PD_CD_01Props extends DisplayProps {
  data: Omit<ProdCountItemProps, 'countdown'>[];
}

export const RF_PD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: RF_PD_CD_01Props) => {
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
        variant={data.length > 1 ? 'swiper' : 'grid'}
        buttonLabels={{ wait: '오픈예정', active: '응모하기', ended: '응모종료' }}
      />
    </Display>
  );
};
RF_PD_CD_01.displayName = 'RF_PD_CD_01';
