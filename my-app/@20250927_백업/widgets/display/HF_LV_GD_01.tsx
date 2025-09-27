// 컴포넌트
import { LiveTiles, LiveTilesProps } from '@widgets/live/LiveTiles';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_LV_GD_01Props extends LiveTilesProps {
  margin?: DisplayProps['margin'];
}

export const HF_LV_GD_01 = ({ margin, currentLive, data }: HF_LV_GD_01Props) => {
  return (
    <Display margin={margin}>
      <LiveTiles currentLive={currentLive} data={data} />
    </Display>
  );
};
HF_LV_GD_01.displayName = 'HF_LV_GD_01';
