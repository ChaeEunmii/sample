import { Display, DisplayProps } from '@widgets/display/Display';
import { ColorSetupBanner, ColorSetupBannerProps } from '../banner/ColorSetupBanner';

export interface AT_BN_TX_01Props extends DisplayProps {
  /** Display 여백 옵션 */
  margin?: DisplayProps['margin'];
  data: ColorSetupBannerProps;
}

export const AT_BN_TX_01 = ({ margin, data }: AT_BN_TX_01Props) => {
  return (
    <Display margin={margin}>
      <ColorSetupBanner {...data} />
    </Display>
  );
};
AT_BN_TX_01.displayName = 'AT_BN_TX_01';
