'use client';

import { useState } from 'react';
import { Tabs, Stack, Drawer, TextList, Text, Empty, Button } from '@shared/ui';
import styles from './GemList.module.scss';
import { GemNav } from '@views/gem/components/GemNav';
import { TotalCount } from '@views/gem/components/TotalCount';
import PeopleItemList from '@/views/gem/gem/people/PeopleList';
import CollectionItemList from '@/views/gem/gem/collection/CollectionList';
import BrandProductSectionList from '@/views/gem/gem/brand/BrandProdList';
import { mockBrandList, mockPeopleList, mockCollectionList, mockProductList } from '@mocks/gem';
import { ProdCardList } from '@widgets/product';
import { SelectDrawer } from '@/views/gem/components/SelectDrawer';
import { Avatar } from '@views/gem/components/Avatar';
import { Tooltip } from '@/shared/ui/base/Tooltip';

export const tabItems = [
  {
    href: '/gem/etc',
    label: 'PRODUCT',
  },
  {
    href: '/gem/etc',
    label: 'BRAND',
  },
  {
    href: '/gem/etc',
    label: 'COLLECTION',
  },
  {
    href: '/gem/etc',
    label: 'PEOPLE',
  },
];

/**
   1. container props에 배경색 주는것 
   2. 디자인에 하단 nav잇는경우 layout.tsx에 추가하면되는것인가
   3. header type 추가된경우 직접추가?
*/

export default function GemList() {
  // selectDrawer 테스트
  const [selectedValue, setSelectedValue] = useState('option1');

  // gemBrandIds: 현재 활성화된 브랜드 ID 배열 상태
  const [gemBrandIds, setGemBrandIds] = useState<(string | number)[]>(['diptyque']);
  /**
   * 브랜드 젬(GEM) 토글 핸들러
   * @param brandId - 토글할 브랜드의 ID
   * @param isActive - 토글 상태 (true: 활성화, false: 비활성화)
   *
   * 기능:
   * - isActive가 true일 때는 해당 brandId를 배열에 추가 (중복 가능성 있음)
   * - isActive가 false일 때는 해당 brandId를 배열에서 제거
   */
  // 브랜드잼 토글 핸들러
  const handleBrandGemToggle = (brandId: string | number, isActive: boolean) => {
    //setGemBrandIds((prev) => (isActive ? [...prev, brandId] : prev.filter((id) => id !== brandId)));
    setGemBrandIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(brandId) ? prev : [...prev, brandId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== brandId);
      }
    });

    console.log(`브랜드젬 ${isActive ? '추가' : '제거'}:`, brandId);
  };

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'diptyque-prod-2',
    'atkinsons-prod-1',
  ]);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  // 모든 브랜드의 모든 상품을 다 합친 배열 (flat)
  const allProducts = mockBrandList.flatMap((section) => section.products);
  // 위시리스트에 담긴 상품만 필터링
  const wishlistProducts = allProducts.filter((product) => wishlistIds.includes(product.id));
  // 활성화된 브랜드 객체 배열
  const activeGemBrands = mockBrandList.filter(({ brand }) => gemBrandIds.includes(brand.id));

  // ================== 피플 ==================== //
  // 위시리스트 상태 관리
  const [gemPeopleIds, setGemPeopleIds] = useState<(string | number)[]>([
    'people-1',
    'people-2',
    'people-3',
    'people-4',
  ]);

  // 위시리스트 토글 핸들러
  const handlePeopleGemToggle = (productId: string | number, isActive: boolean) => {
    setGemPeopleIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  // Select Drawer형
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ==================== 팁 ===================== //
  // 팁 보임여부
  const [tipStates, setTipStates] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.sticky}>
        <GemNav activeKey="gem" />
        <Tabs data={tabItems} variant="buttons" defaultActive={2} className={styles.tabs} />
      </div>

      <div className={styles.content}>
        <Empty title="GEM한 상품이 없어요."></Empty>
        <br />
        <Empty
          title="데이터없음 타이틀"
          desc="데이터없음 설명글입니다."
          buttons={
            <>
              <Button variant="primary">버튼이 있다면</Button>
            </>
          }
        ></Empty>
        <br />
        <Empty
          title="생성한 컬렉션이 없어요."
          desc={
            <>
              컬렉션을 생성해 상품/브랜드를
              <br />
              편하게 모아 보세요.
            </>
          }
        ></Empty>
        <br />
        <Tooltip title="타이틀??">하하하</Tooltip>
        <br />
        <Tooltip title="타이틀??">
          <TextList
            data={[
              '더 궁금하신 사항이 있다면 고객센터 (1800-2233) 또는 1:1문의를 이용해 주세요.',
              '더 궁금하신 사항이 있다면 고객센터 (1800-2233) 또는 1:1문의를 이용해 주세요.',
              '더 궁금하신 사항이 있다면 고객센터 (1800-2233) 또는 1:1문의를 이용해 주세요.',
            ]}
            variant="info"
          />
          <Text color="point">네네네네</Text>
        </Tooltip>
        <br />
        <div>pppppppppppppppppppp</div>
        <br />
        <Avatar src="/images/dummy/@sample_people_01.png" alt="dfsdf" />
        <Avatar src="/images/dummy/@sample_people_02.png" alt="dfsdf" />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" />
        <br />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" size="2" />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" size="2" />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" size="2" />
        <br />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" size="3" />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" size="3" />
        <Avatar src="/images/dummy/@sample_people_03.png" alt="dfsdf" size="3" />
        <br />
        <Avatar type="brand" src="/images/dummy/@sample_brand_logo_01.png" alt="dfsdf" size="1" />
        <Avatar type="brand" src="/images/dummy/@sample_brand_logo_02.png" alt="dfsdf" size="2" />
        <Avatar type="brand" src="/images/dummy/@sample_brand_logo_03.png" alt="dfsdf" size="3" />
        <Stack type="between">
          <TotalCount type="product" count={300} tip={<>최대 300개까지 GEM할 수 있어요.</>} />
          {/* <TextButton suffixIcon="arrowDown" onClick={() => setIsDrawerOpen(true)}>
            최신순
          </TextButton> */}
          <SelectDrawer
            title="정렬"
            options={[
              {
                label: '최신순',
                value: 'option1',
              },
              {
                label: 'GEM한순',
                value: 'option2',
              },
            ]}
            value={selectedValue}
            onChange={setSelectedValue}
            variant="filter"
          />
        </Stack>
      </div>
      <div className={styles.collectionContent}>
        <CollectionItemList
          data={mockCollectionList}
          wishlist={{
            activeIds: gemPeopleIds,
            onToggle: handlePeopleGemToggle,
          }}
        />
      </div>
      <div className={styles.prodContent}>
        {/* 만들어주신거 데이터구조만 변경 사용 */}
        <ProdCardList
          data={mockProductList}
          variant="grid"
          columns={2}
          cardType="vertical"
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
          autofit
        />
      </div>

      <div className={styles.peopleContent}>
        <PeopleItemList
          data={mockPeopleList}
          wishlist={{
            activeIds: gemPeopleIds,
            onToggle: handlePeopleGemToggle,
          }}
        />
      </div>
      <div className={styles.brandContent}>
        {/* <p>전체 상품 목록:</p>
        <ul>
          {allProducts.map((prod) => (
            <li key={prod.id}>
              {prod.id} - {prod.title}
            </li>
          ))}
        </ul>
        <br />
        <p>위시리스트 상품:</p>
        <ul>
          {wishlistProducts.map((prod) => (
            <li key={prod.id}>
              {prod.id} - {prod.title}
            </li>
          ))}
        </ul>
        <br />
        <p>활성화된 브랜드 젬 목록:</p>
        <ul>
          {activeGemBrands.map(({ brand }) => (
            <li key={brand.id}>
              {brand.id} - {brand.name}
            </li>
          ))}
        </ul> */}
        {/* 브랜드 상품목록 */}
        {/* {mockBrandList.map(({ brand, products }) => (
          <BrandProductSection
            key={brand.id}
            brand={brand}
            products={products}
            brandGem={{
              isActive: gemBrandIds.includes(brand.id),
              onChange: (val) => handleBrandGemToggle(brand.id, val),
            }}
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
          />
        ))} */}
        <p>----------------</p>
        <BrandProductSectionList
          brandData={mockBrandList}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
          brandGem={{
            activeIds: gemBrandIds,
            onToggle: handleBrandGemToggle,
          }}
        />
        <p>전체 상품 목록:</p>
        <ul>
          {allProducts.map((prod) => (
            <li key={prod.id}>
              {prod.id} - {prod.title}
            </li>
          ))}
        </ul>

        <p>위시리스트 상품:</p>
        <ul>
          {wishlistProducts.map((prod) => (
            <li key={prod.id}>
              {prod.id} - {prod.title}
            </li>
          ))}
        </ul>

        <p>활성화된 브랜드 젬 목록:</p>
        <ul>
          {activeGemBrands.map(({ brand }) => (
            <li key={brand.id}>
              {brand.id} - {brand.name}
            </li>
          ))}
        </ul>
      </div>
      <Drawer title="정렬" isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        정렬 이렇게 할 것인가???
      </Drawer>
    </div>
  );
}
