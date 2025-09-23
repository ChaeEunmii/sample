// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { CoordinateBannerListType, CoordinateBannerType } from '../banner/CoordinateBanner';
import CoordinateBannerList from '../banner/CoordinateBanner';

export interface CO_TG_GD_01Props extends DisplayProps {
  type?: CoordinateBannerListType;
  data: CoordinateBannerType[];
}

export const CO_TG_GD_01 = ({
  title,
  subtitle,
  moreUrl,
  margin,
  type = 'list',
  data,
}: CO_TG_GD_01Props) => {
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      <CoordinateBannerList type={type} data={data} showProdList />
    </Display>
  );
};
CO_TG_GD_01.displayName = 'CO_TG_GD_01';
