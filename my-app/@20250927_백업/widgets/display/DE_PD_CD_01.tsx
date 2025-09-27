// 컴포넌트
import { Countdown } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';

export interface DE_PD_CD_01Props extends DisplayProps {
  countdown: Date | string;
  data: ProdCardItemProps[];
}

export const DE_PD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  countdown,
  data,
}: DE_PD_CD_01Props) => {
  const refinedData = data.map(({ id, brand, image, title, href, price }) => ({
    id,
    brand,
    image,
    title,
    subtitle,
    href,
    price,
  }));
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Countdown endDate={countdown} showDday variant="display2" />
      <ProdCardList
        data={refinedData}
        variant={data.length === 1 ? 'grid' : 'swiper'}
        {...(data.length !== 1 ? { columns: 1.5 } : {})}
      />
    </Display>
  );
};
DE_PD_CD_01.displayName = 'DE_PD_CD_01';
