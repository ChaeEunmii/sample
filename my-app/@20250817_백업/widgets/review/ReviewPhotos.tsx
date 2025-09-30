// 컴포넌트
import { Text, TextButton, TitleBar, Carousel } from '@shared/ui';
import { PhotoCard } from './PhotoCard';

interface ReviewPhotosProps {
  total?: number;
  data: {
    id?: string;
    src: string;
    alt?: string;
  }[];
  onPhotoClick?: (id?: string) => void;
}

export const ReviewPhotos = ({ total, data, onPhotoClick }: ReviewPhotosProps) => {
  const limitedData = data.slice(0, 10);

  const handlePhotoClick = (id?: string) => {
    onPhotoClick?.(id);
  };

  const renderItems = () => {
    return limitedData.map((item, index) => (
      <PhotoCard {...item} key={item.id || index} onClick={() => handlePhotoClick(item.id)} />
    ));
  };

  return (
    <article>
      <TitleBar
        level="2"
        title={
          <>
            포토상품평{' '}
            <Text as="span" size="5" color="gray2" weight="regular">
              ({total || data.length || '0'}건)
            </Text>
          </>
        }
        side={
          <TextButton size="1" color="gray3" suffixIcon="arrowRight" href="/shop/review/photos">
            전체보기
          </TextButton>
        }
      />
      <Carousel slides={renderItems()} slidesPerView={4.5} spaceBetween={6} />
    </article>
  );
};
