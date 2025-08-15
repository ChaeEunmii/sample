'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import {
  Icon,
  ReadMore,
  Image,
  IconButton,
  TextButton,
  Text,
  Carousel,
  More,
  Link,
} from '@shared/ui';
import { BrandTags, BrandItem } from '@widgets/brand/BrandTags';
import { MeBar, ReviewData, CollectionData, VoteData } from './MeBar';
import { ProdCardProps } from '@widgets/product/ProdCard';
import { Share } from '@widgets/etc/Share';
// 유틸
import { formatCreatedAt } from '@shared/utils/ui';
// 스타일
import styles from './MeCard.module.scss';
import clsx from 'clsx';

// 타입 정의
type ImagesData = { src: string; alt?: string }[];

// MeBar 데이터 타입 (하나만 선택)
type MeBarData =
  | { type: 'review'; title: string; data: ReviewData }
  | { type: 'collection'; title: string; data: CollectionData }
  | { type: 'vote'; title: string; data: VoteData };

// 01. MeGallery
interface MeGalleryProps {
  images?: ImagesData;
  barData?: MeBarData;
}

const MeGallery = ({ images, barData }: MeGalleryProps) => {
  if (!images && !barData) return null;

  return (
    <div
      className={clsx(styles.gallery)}
      {...(barData?.type ? { 'data-space-type': barData.type } : {})}
    >
      {/* 이미지 섹션 */}
      {images && images.length > 0 && (
        <>
          {images.length === 1 ? (
            <Image className={styles.image} {...images[0]} />
          ) : (
            <Carousel
              slides={images.map((image, idx) => (
                <Image key={idx} className={styles.image} {...image} />
              ))}
              flush
              pagination="bullet"
            />
          )}
        </>
      )}

      {/* MeBar */}
      {barData && <MeBar className={styles.bar} {...barData} />}
    </div>
  );
};

// 02. MeContent
type ProductData = Pick<ProdCardProps, 'id' | 'href' | 'image' | 'brand' | 'title' | 'price'>[];
interface MeContentProps {
  /** 카드 ID */
  id: string;
  /** 등록한 내용 */
  content?: React.ReactNode;
  /** 상품 목록 */
  products?: {
    data: ProductData;
    onClick: (products: ProductData) => void;
  };
  /** 브랜드 태그 */
  brands?: BrandItem[];
  /** 등록/수정일 */
  updateAt: Date | string;
  /** 좋아요 관련 데이터 */
  likes: {
    count: number;
    isLiked: boolean;
    onToggle: (id: string, isLiked: boolean) => void;
  };
  /** 댓글 관련 데이터 */
  comments: {
    count: number;
    onClick: (id: string) => void;
  };
  /** 공유하기 클릭 핸들러 */
  onShareClick: () => void;
  /** 더보기 메뉴 */
  mores?: any[];
}

const MeContent = ({
  id,
  content,
  products,
  brands,
  updateAt,
  likes,
  comments,
  onShareClick,
  mores = [],
}: MeContentProps) => {
  const handleLikeToggle = () => {
    likes.onToggle(id, !likes.isLiked);
  };

  const handleCommentClick = () => {
    comments.onClick(id);
  };

  return (
    <div className={clsx(styles.content)}>
      {/* 등록 내용 */}
      <div className={styles.detail}>
        {content && (
          <ReadMore textProps={{ size: '5' }} className={styles.text}>
            {content}
          </ReadMore>
        )}
        <More iconSize="large" data={mores} />
      </div>

      {/* 상품 썸네일 목록 */}
      {products?.data &&
        products.data.length > 0 &&
        (() => {
          const { data, onClick } = products;

          return (
            <Link
              href="#"
              type="block"
              aria-label={`상품 ${data.length}개 보기`}
              onClick={() => onClick(data)}
            >
              <ul className={styles.products}>
                {data.slice(0, 4).map((item, idx) => (
                  <li key={item.id || idx}>
                    <Image
                      {...item.image}
                      className={clsx(idx === 3 && data.length > 4 && styles.overflow)}
                    />
                    {idx === 3 && data.length > 4 && (
                      <Text as="span" className={styles.rest}>
                        +{data.length - 4}
                      </Text>
                    )}
                  </li>
                ))}
                {Array.from({ length: 4 - data.length }, (_, i) => (
                  <li key={i}></li>
                ))}
              </ul>
            </Link>
          );
        })()}

      {/* 브랜드 목록 */}
      {brands && <BrandTags data={brands} />}

      {/* 하단 actions */}
      <div className={styles.footer}>
        <Text as="span" className="ncp-mr-auto" size="4" color="gray2" indent>
          {formatCreatedAt(updateAt)}
        </Text>

        <TextButton
          size="1"
          color="gray2"
          prefixIcon={likes.isLiked ? 'highfiveOn' : 'highfiveOff'}
          iconSize="medium"
          onClick={handleLikeToggle}
          aria-selected={likes.isLiked}
          aria-label={likes.isLiked ? '도움이 됐어요 취소' : `${likes.count}명에게 도움이 됐어요`}
        >
          {likes.count || 0}
        </TextButton>
        <TextButton
          size="1"
          color="gray2"
          prefixIcon="reply"
          iconSize="medium"
          onClick={handleCommentClick}
        >
          {comments.count}
        </TextButton>
        <IconButton name="share" onClick={onShareClick}>
          공유하기
        </IconButton>
      </div>
    </div>
  );
};

// 메인 컴포넌트 Props
interface MeCardProps extends MeGalleryProps, Omit<MeContentProps, 'onShareClick' | 'mores'> {
  /** 고정 여부 */
  isPinned?: boolean;
  /** 내 컨텐츠 여부 */
  isMyCont?: boolean;
  /** 비공개 전환 여부 */
  isPrivate?: boolean;
  /** 공유할 URL */
  shareUrl: string;
}

// Component
export const MeCard = ({
  id,
  images,
  content,
  barData,
  products,
  updateAt,
  brands,
  likes,
  comments,
  isPinned = false,
  isMyCont = false,
  isPrivate = false,
  shareUrl,
}: MeCardProps) => {
  // 공유하기 팝업 상태 관리
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShareClick = () => {
    setIsShareOpen(true);
  };

  const moreItems = isMyCont
    ? [
        {
          name: isPinned ? '상위 고정 취소' : '상위 고정',
          onClick: () => console.log(isPinned ? '상위 고정 취소 클릭' : '상위 고정 클릭'),
        },
        {
          name: isPrivate ? '비공개 전환 취소' : '비공개 전환',
          onClick: () => console.log(isPrivate ? '비공개 전환 취소 클릭' : '비공개 전환 클릭'),
        },
        {
          name: '수정',
          onClick: () => console.log('수정 클릭'),
        },
        {
          name: '삭제하기',
          onClick: () => console.log('삭제하기 클릭'),
        },
      ]
    : [
        {
          name: '신고하기',
          href: '/report',
        },
      ];

  return (
    <>
      <div className={clsx(styles.root)}>
        {isPinned && <Icon name="pin" size="large" className={styles.pin} />}
        <MeGallery images={images} barData={barData} />
        <MeContent
          id={id}
          content={content}
          products={products}
          brands={brands}
          updateAt={updateAt}
          likes={likes}
          comments={comments}
          onShareClick={handleShareClick}
          mores={moreItems}
        />
      </div>

      {/* 공유하기 팝업 */}
      <Share isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={shareUrl} />
    </>
  );
};

MeCard.displayName = 'MeCard';
