import { BrandSeller } from '@widgets/brand/BrandSeller';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface BR_BN_CD_02Props {
  margin?: DisplayProps['margin'];
  data: {
    image?: { src: string; alt?: string };
    name: string;
    desc?: React.ReactNode;
  };
}

export const BR_BN_CD_02 = ({ margin, data }: BR_BN_CD_02Props) => {
  return (
    <Display margin={margin}>
      <BrandSeller {...data} />
    </Display>
  );
};
BR_BN_CD_02.displayName = 'BR_BN_CD_02';
