import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { Carousel } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

interface MS_BN_CD_01Props extends DisplayProps {
  data: Omit<MeCardProps, 'cardSize'>[];
}

export const MS_BN_CD_01 = ({ title, subtitle, moreUrl, margin, data }: MS_BN_CD_01Props) => {
  const renderCard = () => {
    return data.map((item, idx) => <MeCard key={idx} {...item} />);
  };
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      {data.length > 1 ? (
        <Carousel slides={renderCard()} slidesPerView={1.2} spaceBetween={8} />
      ) : (
        renderCard()
      )}
    </Display>
  );
};

MS_BN_CD_01.displayName = 'MS_BN_CD_01';
