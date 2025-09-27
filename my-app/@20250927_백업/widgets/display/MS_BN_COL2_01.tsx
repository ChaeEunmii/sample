import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { Grid } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

interface MS_BN_COL2_01Props extends DisplayProps {
  data: Omit<MeCardProps, 'cardSize'>[];
}

export const MS_BN_COL2_01 = ({ title, subtitle, moreUrl, margin, data }: MS_BN_COL2_01Props) => {
  const renderCard = () => {
    return data.map((item, idx) => <MeCard key={idx} {...item} cardSize="small" />);
  };
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      <Grid columns={2} gutter={8}>
        {renderCard()}
      </Grid>
    </Display>
  );
};

MS_BN_COL2_01.displayName = 'MS_BN_COL2_01';
