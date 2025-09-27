import { Display, DisplayProps } from '@widgets/display/Display';
import { MarqueeBanner, MarqueeBannerProps } from '../banner/MarqueeBanner';

export interface AT_BN_TX_02Props extends DisplayProps {
  /** Display 여백 옵션 */
  margin?: DisplayProps['margin'];
  data: MarqueeBannerProps;
}

export const AT_BN_TX_02 = ({ margin, data }: AT_BN_TX_02Props) => {
  return (
    <Display margin={margin}>
      <MarqueeBanner {...data} />
    </Display>
  );
};
AT_BN_TX_02.displayName = 'AT_BN_TX_02';
