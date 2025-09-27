// 라이브러리
import { Fragment } from 'react';
// 컴포넌트
import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { Carousel } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdThumbs, ProdThumbsProps } from '@widgets/product/ProdThumbs';

interface MS_BP_CD_01Props extends DisplayProps {
  data: {
    mespace: Omit<MeCardProps, 'cardSize'>;
    products?: ProdThumbsProps['data'];
  }[];
}

export const MS_BP_CD_01 = ({ title, subtitle, moreUrl, margin, data }: MS_BP_CD_01Props) => {
  const renderCard = () => {
    return data.map((item, idx) => (
      <Fragment key={idx}>
        <MeCard {...item.mespace} />
        <ProdThumbs data={item.products || []} className="ncp-mt-s" />
      </Fragment>
    ));
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

MS_BP_CD_01.displayName = 'MS_BP_CD_01';
