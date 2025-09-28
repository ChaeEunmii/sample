'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Contents } from '@widgets/layout/Container';
import {
  Heading,
  Text,
  Tabs,
  Line,
  TextButton,
  Tooltip,
  Empty,
  Button,
  HashTag,
  TitleBar,
  Stack,
  SelectDrawer,
} from '@shared/ui';
import { BrandProdCardList } from '@/views/gem/gem/brand/BrandProdCardList';
import { BrandCardList } from '@widgets/brand/BrandCardList';
import InterestCategoryDrawer from '@/widgets/store/InterestCategoryDrawer';
import styles from '@views/concept/Concept.module.scss';
import { mockBrandList, mockBrandRecommands } from '@mocks/rsvp';

// 정렬 옵션
const sortOptions = [
  { label: '추천순', value: 'option1' },
  { label: '가나다순', value: 'option2' },
];

// 브랜드 탭
const tabItems = [
  { label: '뷰티' },
  { label: '명품/잡화' },
  { label: '여성패션' },
  { label: '남성패션' },
  { label: '진/캐주얼' },
];

export function ConceptRsvpBrand() {
  const [isDrawer, setIsDrawer] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sortValue, setSortValue] = useState('option1');

  const searchParams = useSearchParams();
  const isNoData = searchParams.has('nodata');
  const isNoKeyword = searchParams.has('nokeyword');

  // mock 데이터 가져오기
  const data = isNoData ? [] : mockBrandList;
  //  렌더용 리스트(키워드 없으면 목록·상단 전체 숨김)
  const brandList = isNoKeyword ? [] : data;
  // 키워드 목록
  const hashTags = isNoKeyword
    ? []
    : [
        '여행/레저',
        '홈퍼니싱',
        '컬렉터블',
        '여행/레저',
        '2줄 이상 키워드 노출시 말줄임 처리 2줄 이상 키워드 노출시 말줄임 처리',
      ];

  // 사용자명
  const userName = '김*대';

  return (
    <Contents>
      {/* 상단(타이틀/해시태그/라인): 데이터 + 키워드 모두 있을 때만 노출 */}
      {brandList.length > 0 && (
        <>
          <div className={styles.title}>
            <Heading as="h2" indent className={styles.tit}>
              {userName} 고객님을
              <br />
              위한 추천 브랜드
              <Tooltip placement="bottom" iconProps={{ size: 'small' }} className={styles.tip}>
                <Heading size="1" weight="semibold">
                  추천 상품/브랜드 안내
                </Heading>
                <Text size="3" weight="regular">
                  고객님의 취향/관심 키워드에 맞는
                  <br />
                  상품과 브랜드를 추천해 드립니다.
                  <br />
                  키워드를 재설정하면 새로운 상품과
                  <br />
                  브랜드를 추천 받을 수 있습니다.
                </Text>
              </Tooltip>
            </Heading>
            <TextButton
              size="1"
              color="gray3"
              variant="underline"
              onClick={() => setIsDrawer(true)}
            >
              관심 재설정
            </TextButton>
          </div>
          {/* 해시태그(있을 때만) */}
          {hashTags.length > 0 && <HashTag data={hashTags} line="2" className="ncp-mt-s" />}
          <Line variant="bold" margin="5" />
        </>
      )}
      {/* 브랜드+상품 목록*/}
      {brandList.length > 0 ? (
        <BrandProdCardList variant="store" brandData={brandList} titleHidden />
      ) : (
        <Empty
          title={
            !isNoKeyword
              ? '선택하신 키워드에 대한 추천 브랜드를 준비중입니다.\n키워드를 재설정하시면\n새로운 브랜드를 추천받을 수 있습니다.'
              : '나에게 딱 맞는 브랜드 찾기'
          }
          desc={
            isNoKeyword &&
            `${userName} 고객님의 취향과 관심에 맞는\n카테고리를 설정하시고 브랜드 추천을 받아보세요.`
          }
          buttons={
            <Button variant="primary" onClick={() => setIsDrawer(true)}>
              관심 설정하기
            </Button>
          }
          variant="minDisplay"
        />
      )}

      <p className="ncp-mt-xxl">공통모듈 영역</p>

      {/* 브랜드 */}
      <TitleBar type="docs" title="브랜드" />
      <Tabs
        data={tabItems}
        variant="divid"
        activeTab={activeIndex}
        onTabChange={(i) => setActiveIndex(i)}
        className="ncp-mt-m"
      />
      <Stack type="between">
        <Text size="4" color="gray2" indent>
          총 {mockBrandRecommands.length}개
        </Text>
        <SelectDrawer
          title="정렬"
          options={sortOptions}
          value={sortValue}
          onChange={setSortValue}
          variant="filter"
        />
      </Stack>
      <BrandCardList
        data={mockBrandRecommands}
        variant="outside"
        gutter="8px 24px"
        columns={3}
        className="ncp-mt-s"
      />

      {/* 관심 카테고리 선택 (D) */}
      <InterestCategoryDrawer isOpen={isDrawer} onClose={() => setIsDrawer(false)} />
    </Contents>
  );
}
