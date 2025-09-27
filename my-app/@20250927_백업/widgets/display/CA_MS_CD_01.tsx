import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { Carousel } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

interface CA_MS_CD_01Props extends DisplayProps {
  data: Omit<MeCardProps, 'cardSize'>[];
}

export const CA_MS_CD_01 = ({ title, margin, data }: CA_MS_CD_01Props) => {
  const renderCard = () => {
    return data.map((item, idx) => <MeCard key={idx} {...item} />);
  };
  return (
    <Display title={title} margin={margin}>
      {data.length > 1 ? (
        <Carousel slides={renderCard()} slidesPerView={1.2} spaceBetween={8} />
      ) : (
        renderCard()
      )}
    </Display>
  );
};

CA_MS_CD_01.displayName = 'CA_MS_CD_01';
