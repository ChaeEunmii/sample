// 컴포넌트
import { ProdFlexList, ProdFlexListProps } from '@widgets/product/ProdFlexList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface LV_BN_LI_01Props extends Omit<ProdFlexListProps, 'align'> {
  margin?: DisplayProps['margin'];
}

export const LV_BN_LI_01 = ({ margin, data, columns }: LV_BN_LI_01Props) => {
  return (
    <Display margin={margin}>
      <ProdFlexList data={data} columns={columns} />
    </Display>
  );
};
LV_BN_LI_01.displayName = 'LV_BN_LI_01';
