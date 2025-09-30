import { Display, DisplayProps } from '@widgets/display/Display';
import { MarqueeBanner, MarqueeBannerProps } from '../banner/MarqueeBanner';

export interface ML_ATTAG_BN_002Props extends DisplayProps {
  /** Display 여백 옵션 */
  margin?: DisplayProps['margin'];
  data: MarqueeBannerProps;
}

export const ML_ATTAG_BN_002 = ({ margin, data }: ML_ATTAG_BN_002Props) => {
  return (
    <Display margin={margin}>
      <MarqueeBanner {...data} />
    </Display>
  );
};
ML_ATTAG_BN_002.displayName = 'ML_ATTAG_BN_002';
