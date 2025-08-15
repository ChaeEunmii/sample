'use client';
// 라이브러리
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import { Text, TitleBar, Button, ButtonArea } from '@shared/ui';
import { ReviewFilters, FilterValues } from '@widgets/review/ReviewFilters';
import { ReviewList, ReviewData } from '@widgets/review/ReviewList';

interface ReviewAllProps {
  data: ReviewData[];
  totalCount?: number;
  showFilters?: boolean;
  readMore?: boolean;
  showMore?: boolean;
  showAllButton?: boolean;
}

export const ReviewAll = ({
  data,
  totalCount,
  showFilters = false,
  readMore = false,
  showMore = false,
  showAllButton,
}: ReviewAllProps) => {
  const router = useRouter();
  // 필터 관련 상태
  const [photoOnly, setPhotoOnly] = useState(false);
  const [sortValue, setSortValue] = useState('recommended');
  const [filters, setFilters] = useState<FilterValues>({
    type: [],
    score: [],
    persona: [],
  });

  // 리뷰 데이터 상태
  const [reviews, setReviews] = useState<ReviewData[]>(data);

  const total = totalCount || reviews.length;

  const handlePhotoToggle = (checked: boolean) => {
    setPhotoOnly(checked);
  };

  const handleSortChange = (value: string) => {
    setSortValue(value);
  };

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };

  return (
    <article>
      <TitleBar
        level="2"
        title={
          <>
            전체{' '}
            <Text as="span" size="5" color="gray2" weight="regular">
              ({total}건)
            </Text>
          </>
        }
      />

      {/* 필터 바 */}
      {showFilters && (
        <ReviewFilters
          photoOnly={photoOnly}
          sortValue={sortValue}
          filterValues={filters}
          onPhotoToggle={handlePhotoToggle}
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          options={[
            {
              key: 'brand',
              label: '브랜드',
              data: [
                { value: 'all', label: '전체' },
                { value: 'brand1', label: '브랜드1' },
                { value: 'brand2', label: '브랜드2' },
              ],
            },
            {
              key: 'volume',
              label: '용량',
              data: [
                { value: 'all', label: '전체' },
                { value: '50ml', label: '50ml' },
                { value: '100ml', label: '100ml' },
              ],
            },
          ]}
          personaOptions={[
            {
              key: 'skinType',
              title: '피부타입',
              data: [
                { label: '전체', value: 'all' },
                { label: '건성', value: 'dry' },
                { label: '지성', value: 'oily' },
                { label: '복합성', value: 'combo' },
                { label: '민감성', value: 'sensitive' },
              ],
            },
            {
              key: 'skinTone',
              title: '피부톤',
              data: [
                { label: '전체', value: 'all' },
                { label: '쿨톤', value: 'cool' },
                { label: '웜톤', value: 'warm' },
                { label: '뉴트럴', value: 'neutral' },
              ],
            },
          ]}
        />
      )}

      {/* 리뷰 목록 */}
      <ReviewList data={reviews} showMore={showMore} readMore={readMore} />

      {showAllButton && (
        <ButtonArea margin="1">
          <Button suffixIcon="arrowRight" onClick={() => router.push('/shop/review/all')}>
            상품평 전체보기
          </Button>
        </ButtonArea>
      )}
    </article>
  );
};
