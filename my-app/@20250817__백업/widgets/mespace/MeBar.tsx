'use client';
// 라이브러리
import { useState, useCallback, useMemo } from 'react';
// 컴포넌트
import { Icon, Text, Link, Drawer, Vote, Box, Button, ButtonArea } from '@shared/ui';
import { ReviewCard } from '@widgets/review';
import { CollectionList, CollectionListProps } from '@widgets/collection/CollectionList';
import { ProdCard } from '@widgets/product';
import { BrandBar } from '@widgets/brand';
// 유틸
import { toDate } from '@shared/utils/ui';
// 스타일
import styles from './MeBar.module.scss';
import clsx from 'clsx';

// 타입 정의
interface ProductInfo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  brand?: string;
  title: string;
  price?: {
    current: number | string;
    discountRate?: number;
  };
  updateAt?: Date | string;
}

interface BrandInfo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  name: string;
  updateAt?: Date | string;
}

// 타입별 데이터 정의
export interface ReviewData {
  rating: number;
  date: Date | string;
  review: React.ReactNode;
  photos?: { src: string; alt: string }[];
  product?: {
    image: string;
    title: string;
    brand?: string;
    href?: string;
  };
}

// 컬렉션 타입
export type CollectionData = Omit<CollectionListProps, 'wishlist'>;

// 투표 타입
interface VoteOption {
  id: string;
  label: string;
  count?: number;
}
interface DefaultVote {
  startDate: Date | string;
  endDate?: Date | string;
  status?: 'active' | 'ended';
  hasVoted?: boolean;
}
interface ProdVoteOption extends Omit<VoteOption, 'label'> {
  label: ProductInfo;
}
interface BrandVoteOption extends Omit<VoteOption, 'label'> {
  label: BrandInfo;
}
export type VoteData =
  | (DefaultVote & {
      type: 'product';
      options: ProdVoteOption[];
    })
  | (DefaultVote & {
      type: 'brand';
      options: BrandVoteOption[];
    })
  | (DefaultVote & {
      type?: undefined;
      options: VoteOption[];
    });

// 기본 Props
interface MeBarBaseProps {
  title: string;
  disabled?: boolean;
  className?: string;
}

export type MeBarProps =
  | (MeBarBaseProps & { type: 'review'; data?: ReviewData })
  | (MeBarBaseProps & { type: 'collection'; data?: CollectionData })
  | (MeBarBaseProps & { type: 'vote'; data?: VoteData });

// 타입별 설정
const barTypes = {
  review: {
    icon: 'review' as const,
    tag: '리뷰',
  },
  collection: {
    icon: 'bookmark' as const,
    tag: '컬렉션',
  },
  vote: {
    icon: 'vote' as const,
    tag: '투표',
  },
} as const;

export const MeBar = ({ type, title, disabled = false, className, data }: MeBarProps) => {
  const config = barTypes[type];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const wishlist = {
    activeIds: wishlistIds,
    onToggle: (id: string, isActive: boolean) => {
      if (isActive) {
        setWishlistIds((prev) => [...prev, id]);
      } else {
        setWishlistIds((prev) => prev.filter((item) => item !== id));
      }
    },
  };

  // 투표용 위시리스트 관리
  const [voteWishlistIds, setVoteWishlistIds] = useState<string[]>([]);

  const getEndDate = (startDate: Date | string) => {
    const start = toDate(startDate);
    const end = new Date(start.getTime() + 14 * 24 * 60 * 60 * 1000);
    return end;
  };

  const renderSpecific = (type: MeBarProps['type'], data: any) => {
    if (!data) return null;

    switch (type) {
      case 'review':
        return (
          <div className={styles.review}>
            <Icon name="rating" size="xsmall" label="별점" />
            <Text as="strong">{data.rating}</Text>
          </div>
        );
      case 'collection':
        return (
          <ul className={styles.owned}>
            {data.products && data.products.length > 0 && <li>상품 {data.products.length}</li>}
            {data.brands && data.brands.length > 0 && <li>브랜드 {data.brands.length}</li>}
          </ul>
        );
      case 'vote':
        const endDate = data.endDate ? toDate(data.endDate) : getEndDate(data.startDate);
        const isActive = data.status !== 'ended' && endDate > new Date();
        return (
          <Text as="span" size="4" className={styles.vote}>
            {isActive ? '진행중' : '종료'}
          </Text>
        );
      default:
        return null;
    }
  };

  const renderDrawerContent = () => {
    if (!data) return null;

    switch (type) {
      case 'review':
        return <ReviewCard {...(data as ReviewData)} viewMode />;

      case 'collection':
        return <CollectionList products={data.products} brands={data.brands} wishlist={wishlist} />;

      case 'vote':
        if (data.type === 'product') {
          const renderProductOption = useCallback(
            (option: VoteOption, onVote: (optionId: string) => void) => {
              const originalOption = data.options.find((opt) => opt.id === option.id);
              if (!originalOption) return null;

              return (
                <Box margin="0" key={`prod-vote-${originalOption.label.id}`}>
                  <ProdCard
                    {...originalOption.label}
                    type="horizontal"
                    size="small"
                    gem={{
                      isActive: voteWishlistIds.includes(originalOption.label.id),
                      onChange: (id: string, isActive: boolean) => {
                        if (isActive) {
                          setVoteWishlistIds((prev) => [...prev, id]);
                        } else {
                          setVoteWishlistIds((prev) => prev.filter((item) => item !== id));
                        }
                      },
                    }}
                  />
                  <ButtonArea margin="1">
                    <Button variant="tertiary" size="small" onClick={() => onVote(option.id)}>
                      투표하기
                    </Button>
                  </ButtonArea>
                </Box>
              );
            },
            [data.options, voteWishlistIds]
          );

          const voteOptions = data.options.map((opt) => ({
            ...opt,
            label: opt.label.title,
          }));

          const voteDate = {
            start: data.startDate,
            end: data.endDate ?? getEndDate(data.startDate),
          };

          return (
            <Vote
              title={title}
              date={voteDate}
              options={voteOptions}
              renderOption={renderProductOption}
              isResult={data.status === 'ended' || data.hasVoted}
            />
          );
        } else if (data.type === 'brand') {
          const renderBrandOption = useCallback(
            (option: VoteOption, onVote: (optionId: string) => void) => {
              const originalOption = data.options.find((opt) => opt.id === option.id);
              if (!originalOption) return null;

              return (
                <Box margin="0" key={`brand-vote-${originalOption.label.id}`}>
                  <BrandBar
                    {...originalOption.label}
                    gem={{
                      isActive: voteWishlistIds.includes(originalOption.label.id),
                      onChange: (id: string, isActive: boolean) => {
                        if (isActive) {
                          setVoteWishlistIds((prev) => [...prev, id]);
                        } else {
                          setVoteWishlistIds((prev) => prev.filter((item) => item !== id));
                        }
                      },
                    }}
                  />
                  <ButtonArea margin="1">
                    <Button variant="tertiary" size="small" onClick={() => onVote(option.id)}>
                      투표하기
                    </Button>
                  </ButtonArea>
                </Box>
              );
            },
            [data.options, voteWishlistIds]
          );

          const voteOptions = data.options.map((opt) => ({
            ...opt,
            label: opt.label.name,
          }));

          const voteDate = {
            start: data.startDate,
            end: data.endDate ?? getEndDate(data.startDate),
          };

          return (
            <Vote
              title={title}
              date={voteDate}
              options={voteOptions}
              renderOption={renderBrandOption}
              isResult={data.status === 'ended' || data.hasVoted}
            />
          );
        } else {
          return (
            <Vote
              title={title}
              date={{ start: data.startDate, end: data.endDate ?? getEndDate(data.startDate) }}
              options={data.options}
              isResult={data.status === 'ended' || data.hasVoted}
            />
          );
        }
      default:
        return null;
    }
  };

  const getDrawerTitle = () => {
    switch (type) {
      case 'review':
        return '상품 리뷰';
      case 'vote':
        return '투표';
      case 'collection':
        return title;
      default:
        return '';
    }
  };

  const content = (
    <>
      <div className={styles.tag}>
        <Icon name={config.icon} />
        <Text as="span" weight="semibold">
          {config.tag}
        </Text>
      </div>

      <Text weight="semibold" className={clsx(styles.title, disabled && styles.disabledText)}>
        {title}
      </Text>

      {renderSpecific(type, data)}
    </>
  );

  return (
    <>
      <div className={clsx(styles.root, className)}>
        {disabled ? (
          content
        ) : (
          <Link
            href="#"
            type="flex"
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              setIsDrawerOpen(true);
            }}
          >
            {content}
            <Icon name="arrowRight" size="small" />
          </Link>
        )}
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title={getDrawerTitle()}>
        {renderDrawerContent()}
      </Drawer>
    </>
  );
};
