import { MeCard, MeCardProps } from '@widgets/mespace/MeCard';
import { Grid } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { useState } from 'react';

interface HF_MS_LI_01Props {
  margin?: DisplayProps['margin'];
  data: Omit<MeCardProps, 'cardSize'>[];
  columns?: 1 | 2;
}

export const HF_MS_LI_01 = ({ margin, data, columns = 2 }: HF_MS_LI_01Props) => {
  const cardType = columns === 1 ? 'bar' : 'social';

  // 좋아요 상태 관리
  const [likedCards, setLikedCards] = useState<Record<string, { count: number; isLiked: boolean }>>(
    {}
  );

  const handleLikeToggle = (cardId: string, isLiked: boolean) => {
    setLikedCards((prev) => {
      const currentCard = data.find((item) => item.id === cardId);
      const currentLike = prev[cardId] || {
        count: currentCard?.likes?.count || 0,
        isLiked: currentCard?.likes?.isLiked || false,
      };

      return {
        ...prev,
        [cardId]: {
          count: isLiked ? currentLike.count + 1 : currentLike.count - 1,
          isLiked,
        },
      };
    });
  };

  const renderCard = () => {
    return data.map((cardData, idx) => (
      <MeCard
        key={cardData.id || idx}
        {...cardData}
        cardSize={columns !== 1 ? 'small' : undefined}
        infoType={cardType}
        color="white"
        likes={
          cardData.likes
            ? {
                count: likedCards[cardData.id!]?.count ?? cardData.likes.count,
                isLiked: likedCards[cardData.id!]?.isLiked ?? cardData.likes.isLiked,
                onToggle: handleLikeToggle,
              }
            : undefined
        }
      />
    ));
  };

  return (
    <Display margin={margin}>
      <Grid columns={columns} gutter={8}>
        {renderCard()}
      </Grid>
    </Display>
  );
};

HF_MS_LI_01.displayName = 'HF_MS_LI_01';
