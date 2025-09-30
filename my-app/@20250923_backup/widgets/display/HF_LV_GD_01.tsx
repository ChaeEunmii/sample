// 컴포넌트
import { LiveTiles, LiveTilesProps } from '@widgets/live/LiveTiles';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_LV_GD_01Props {
  margin?: DisplayProps['margin'];
  data: LiveTilesProps['data'];
}

export const HF_LV_GD_01 = ({ margin, data }: HF_LV_GD_01Props) => {
  return (
    <Display margin={margin}>
      <LiveTiles data={data} />
    </Display>
  );
};
HF_LV_GD_01.displayName = 'HF_LV_GD_01';
