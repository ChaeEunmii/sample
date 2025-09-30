// 라이브러리
import { useState, useMemo } from 'react';
// 컴포넌트
import { Drawer } from '@shared/ui';
import { ProdCardList } from '@widgets/product';
import { MeCard, MeComment } from '@widgets/mespace';

// 더미데이터
import { mockMeCardData, mockCurrentUser, mockMeComments } from '@/mocks/mespace';

interface MeCardListProps {
  meGemIds: (string | number)[];
  onWishlistToggle: (productId: string | number, isActive: boolean) => void;
  isMyCont?: boolean;
}

export const MeCardList = ({ meGemIds, onWishlistToggle, isMyCont }: MeCardListProps) => {
  const [meProducts, setMeProducts] = useState([]);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [likedCards, setLikedCards] = useState<Record<string, { isLiked: boolean; count: number }>>(
    {}
  );
  const [likedComments, setLikedComments] = useState<
    Record<string, { isLiked: boolean; count: number }>
  >({});

  const handleLikeToggle = (cardId: string, isLiked: boolean) => {
    setLikedCards((prev) => {
      const currentCard = prev[cardId];
      const original = mockMeCardData.find((card) => card.id === cardId)?.likes.count || 0;
      const currentCount = currentCard?.count ?? original;

      return {
        ...prev,
        [cardId]: {
          isLiked,
          count: isLiked ? currentCount + 1 : currentCount - 1,
        },
      };
    });
  };

  // 댓글 좋아요
  const handleCommentLikeToggle = (commentId: string, isLiked: boolean) => {
    setLikedComments((prev) => {
      // 좋아요 수 찾기(덧글 포함)
      const findLikes = (comments: any[], id: string): number => {
        for (const comment of comments) {
          if (comment.id === id) return comment.likes || 0;
          if (comment.replies) {
            const found = findLikes(comment.replies, id);
            if (found !== -1) return found;
          }
        }
        return 0;
      };

      const currentCmt = prev[commentId];
      const original = findLikes(mockMeComments, commentId);
      const currentCount = currentCmt?.count ?? original;

      return {
        ...prev,
        [commentId]: {
          isLiked,
          count: isLiked ? currentCount + 1 : currentCount - 1,
        },
      };
    });
  };

  // 댓글 좋아요 상태 병합
  const meComments = useMemo(() => {
    const mergeLikes = (comments: any[]): any[] => {
      return comments.map((comment) => ({
        ...comment,
        isLiked: likedComments[comment.id]?.isLiked ?? false,
        likes: likedComments[comment.id]?.count ?? comment.likes,
        replies: comment.replies ? mergeLikes(comment.replies) : undefined,
      }));
    };

    return mergeLikes(mockMeComments);
  }, [likedComments]);

  // 댓글 추가
  const handleAddComment = (content: string) => {
    console.log('새 댓글 추가:', content);
  };
  // 답글 추가
  const handleReplyComment = (commentId: string, content: string) => {
    console.log('답글 추가:', commentId, content);
  };
  // 댓글 수정
  const handleEditComment = (commentId: string) => {
    console.log('댓글 수정:', commentId);
  };
  // 댓글 삭제
  const handleDeleteComment = (commentId: string) => {
    console.log('댓글 삭제:', commentId);
  };

  return (
    <>
      {mockMeCardData.map((cardData) => (
        <MeCard
          key={cardData.id}
          {...cardData}
          products={
            cardData.products
              ? {
                  ...cardData.products,
                  onClick: (products) => {
                    setMeProducts(products as any);
                    setIsProductsOpen(true);
                  },
                }
              : undefined
          }
          likes={{
            count: likedCards[cardData.id]?.count ?? cardData.likes.count,
            isLiked: likedCards[cardData.id]?.isLiked ?? cardData.likes.isLiked,
            onToggle: handleLikeToggle,
          }}
          comments={{
            ...cardData.comments,
            onClick: (cardId) => {
              setSelectedCardId(cardId);
              setIsCommentOpen(true);
              console.log('댓글', cardId);
            },
          }}
          isMyCont={isMyCont}
        />
      ))}

      <MeComment
        isOpen={isCommentOpen}
        onClose={() => setIsCommentOpen(false)}
        comments={selectedCardId === mockMeCardData[0]?.id ? [] : meComments} // (임시)첫 번째 카드에 댓글 없음 케이스 추가
        currentUser={mockCurrentUser}
        onAddComment={handleAddComment}
        onReplyComment={handleReplyComment}
        onEditComment={handleEditComment}
        onDeleteComment={handleDeleteComment}
        onLikeToggle={handleCommentLikeToggle}
      />

      <Drawer isOpen={isProductsOpen} onClose={() => setIsProductsOpen(false)} title="상품">
        <ProdCardList
          cardType="horizontal"
          cardSize="small"
          data={meProducts}
          wishlist={{
            activeIds: meGemIds,
            onToggle: onWishlistToggle,
          }}
        />
      </Drawer>
    </>
  );
};
