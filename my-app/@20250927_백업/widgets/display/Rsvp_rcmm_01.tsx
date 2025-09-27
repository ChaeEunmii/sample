'use client';

import { useState } from 'react';
import {
  Tabs,
  TitleBar,
  Heading,
  Text,
  TextButton,
  ButtonArea,
  Button,
  Empty,
  HashTag,
} from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { BrandCardList, BrandCardPropsFilter } from '@widgets/brand/BrandCardList';
import InterestCategoryDrawer from '@/widgets/store/InterestCategoryDrawer';

export interface Rsvp_rcmm_01Props extends DisplayProps {
  name: string;
  keywords?: string[];
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  products: ProdCardItemProps[];
  brands: BrandCardPropsFilter[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export const Rsvp_rcmm_01 = ({
  margin,
  name,
  keywords,
  tabs,
  products,
  brands,
  defaultTab,
  onTabChange,
}: Rsvp_rcmm_01Props) => {
  const [isDrawer, setIsDrawer] = useState(false); // 관심 카테고리 설정 (D)

  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;

  // 활성 탭 인덱스 상태
  const [activeIdx, setActiveIdx] = useState(defaultTabIdx);

  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    setActiveIdx(activeIdx);
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

  // 추천 더보기 버튼렌더
  const renderMoreButton = (label: string, current: number, total: number) => (
    <ButtonArea margin="1" align="center">
      <Button size="small" variant="tertiary" suffixIcon="refresh" round>
        {label}
        <Text as="em" weight="semibold">
          {current}/
          <Text as="span" color="gray3">
            {total}
          </Text>
        </Text>
      </Button>
    </ButtonArea>
  );

  // 키워드 유무
  const hasKeywords = !!(keywords && keywords.length > 0);

  return (
    <Display margin={margin}>
      <TitleBar
        type="module"
        title={
          <>
            <Text as="span" color="point">
              {name}
            </Text>{' '}
            님을 위한 추천
          </>
        }
        tip={
          <>
            {/* 하드코딩 고정 텍스트 */}
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
          </>
        }
        side={
          <TextButton size="1" color="gray3" variant="underline" onClick={() => setIsDrawer(true)}>
            관심 재설정
          </TextButton>
        }
        className="ncp-mb-s"
      />
      {keywords && <HashTag data={keywords} className="ncp-mt-s" />}
      <Tabs
        data={tabs}
        variant="divid"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
        className="ncp-mt-m"
      />
      {/* 추천 상품 */}
      {activeIdx === 0 &&
        (products?.length > 0 ? (
          <>
            <ProdCardList
              data={products}
              variant="grid"
              columns={2}
              gutter="8px 16px"
              cardSize="small"
              className="ncp-mt-s"
            />
            {renderMoreButton('추천 상품 더보기', 1, 3)}
          </>
        ) : (
          <Empty
            title={
              hasKeywords
                ? `선택하신 키워드에 대한 추천 상품을 준비중입니다.\n키워드를 재설정하시면\n새로운 상품을 추천받을 수 있습니다.`
                : '나에게 딱 맞는 상품 찾기'
            }
            desc={
              hasKeywords
                ? ''
                : `${name} 고객님의 취향과 관심에 맞는\n카테고리를 설정하시고 상품 추천을 받아보세요.`
            }
            buttons={!hasKeywords && <Button variant="primary">관심 설정하기</Button>}
            variant={!hasKeywords ? 'minDisplay' : 'minDisplay'}
          />
        ))}
      {/* 추천 브랜드 */}
      {activeIdx === 1 &&
        (brands?.length > 0 ? (
          <>
            <BrandCardList data={brands} variant="outside" gutter="8px 24px" />
            {renderMoreButton('추천 브랜드 더보기', 2, 5)}
          </>
        ) : (
          <Empty
            title={
              hasKeywords
                ? `선택하신 키워드에 대한 추천 브랜드를 준비중입니다.\n키워드를 재설정하시면\n새로운 브랜드를 추천받을 수 있습니다.`
                : '나에게 딱 맞는 브랜드 찾기'
            }
            desc={
              hasKeywords
                ? ''
                : `${name} 고객님의 취향과 관심에 맞는\n카테고리를 설정하시고 브랜드 추천을 받아보세요.`
            }
            buttons={!hasKeywords && <Button variant="primary">관심 설정하기</Button>}
            variant={!hasKeywords ? 'minDisplay' : 'minDisplay'}
          />
        ))}
      {/* 관심 카테고리 선택 (D)*/}
      <InterestCategoryDrawer isOpen={isDrawer} onClose={() => setIsDrawer(false)} />
    </Display>
  );
};

Rsvp_rcmm_01.displayName = 'Rsvp_rcmm_01';
