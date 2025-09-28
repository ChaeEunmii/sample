'use client';

import { useState, useRef, useEffect } from 'react';
import { useModalOverlay } from '@shared/hooks';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Icon, Link } from '@shared/ui';
import { ProdCardList } from '@widgets/product';
// 공통 검색필터
import { SearchFilters } from '@views/search/SearchFilters';
import { ResultTitle } from '@views/search/result/ResultTitle';
// 스타일
import clsx from 'clsx';
import styles from './Concept.module.scss';

// 임시 데이터
import { mockProdCards2 } from '@mocks/product';
import { sortProducts, filterItems, mockFilterData } from '@/mocks/search';
const tabData = [
  {
    label: '전체',
    subTabs: [],
  },
  {
    label: '소카테고리',
    subTabs: [{ label: '세카테고리' }, { label: '세카테고리' }, { label: '세카테고리' }],
  },
  {
    label: '소카테고리',
    subTabs: [{ label: '세카테고리' }, { label: '세카테고리' }, { label: '세카테고리' }],
  },
];
// 카테고리 텍스트 배너
const mockCategoryLinks = Array.from({ length: 7 }, (_, i) => ({
  title: `중카테고리${i > 0 ? i + 1 : ''}`,
  subtitle: `중카테고리${i > 0 ? i + 1 : ''}`,
  href: '#',
}));

export default function ConceptRsvpProductsSub() {
  const [sortValue, setSortValue] = useState('recommended'); // 공통 검색필터
  const [activeCategory, setActiveCategory] = useState('중카테고리');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const products = mockProdCards2; //상품목록
  const activeTab = tabData[activeIndex];
  const subtabData = activeTab.subTabs;

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const onClose = () => {
    setIsNavOpen(false);
  };

  const handleCategorySelect = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
    setIsNavOpen(false);
  };

  const { overlayProps, modalProps } = useModalOverlay({
    isOpen: isNavOpen,
    onClose,
    isDismissable: true,
    parentDepth: 2,
  });

  useEffect(() => {
    if (tabsRef.current && rootRef.current) {
      const tabsHeight = tabsRef.current.offsetHeight;
      rootRef.current.style.setProperty('--category-tabs-height', `${tabsHeight}px`);
    }
  }, [activeIndex, subtabData.length]);

  //위시리스트
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  return (
    <Container
      showBack
      type="store"
      title={
        <Link href="#" title="카테고리 선택" className={styles.trigger} onClick={handleToggle}>
          {activeCategory}
          <Icon name={isNavOpen ? 'arrowUp' : 'arrowDown'} className={styles.navIcon} />
        </Link>
      }
      content={
        isNavOpen && (
          <div className={styles.popover} {...overlayProps}>
            <ul className={styles.nav} {...modalProps}>
              {mockCategoryLinks.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.href}
                    className={clsx(styles.navLink, {
                      [styles.navActive]: activeCategory === category.title,
                    })}
                    onClick={() => handleCategorySelect(category.title)}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    >
      <Contents className={styles.sub} ref={rootRef}>
        <div className={styles.tabs} ref={tabsRef}>
          <Tabs
            variant="divid"
            data={tabData.map(({ label }) => ({ label }))}
            onTabChange={(index) => setActiveIndex(index)}
          />

          {subtabData.length > 0 && (
            <Tabs
              variant="texts"
              textActiveType="none"
              data={subtabData}
              className={styles.subtab}
            />
          )}
        </div>
        {/* 공통 검색필터 */}
        {products.length > 1 && <SearchFilters filters={filterItems} filterData={mockFilterData} />}
        <ResultTitle
          count={products.length}
          options={sortProducts}
          value={sortValue}
          onChange={setSortValue}
          showSort={products.length > 1}
        />
        {/* 상품 목록 */}
        <ProdCardList
          data={products}
          columns={2}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </Contents>
    </Container>
  );
}
