'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import {
  Heading,
  Link,
  Flag,
  Text,
  IconButton,
  Input,
  Tabs,
  Icon,
  Empty,
  Button,
} from '@shared/ui';
import { ProdGem } from '@widgets/product';
import { BrandBadge } from './BrandBadge';
import styles from './BrandIndex.module.scss';
import clsx from 'clsx';

// 임시 데이터
const mockCategory = [
  { label: '전체' },
  { label: 'RSVP' },
  { label: '여성패션' },
  { label: '카테고리' },
  { label: '카테고리' },
  { label: '카테고리' },
  { label: '카테고리' },
];
const mockBrands = [
  // A
  { id: 'brand-a1', name: 'ADIDAS', subName: '아디다스', isRSVP: true, isOfficial: true },
  { id: 'brand-a2', name: 'APPLE', subName: '애플', isRSVP: false, isOfficial: false },
  { id: 'brand-a3', name: 'ARMANI', subName: '아르마니', isRSVP: false, isOfficial: true },
  { id: 'brand-a4', name: 'ASICS', subName: '아식스', isRSVP: true, isOfficial: false },

  // B
  { id: 'brand-b1', name: 'BURBERRY', subName: '버버리', isRSVP: false, isOfficial: true },
  { id: 'brand-b2', name: 'BALENCIAGA', subName: '발렌시아가', isRSVP: true, isOfficial: true },
  { id: 'brand-b3', name: 'BVLGARI', subName: '불가리', isRSVP: false, isOfficial: false },
  { id: 'brand-b4', name: 'BMW', subName: '비엠더블유', isRSVP: false, isOfficial: true },

  // C
  { id: 'brand-c1', name: 'CHANEL', subName: '샤넬', isRSVP: true, isOfficial: true },
  { id: 'brand-c2', name: 'CALVIN KLEIN', subName: '캘빈클라인', isRSVP: false, isOfficial: false },
  { id: 'brand-c3', name: 'CARTIER', subName: '까르띠에', isRSVP: true, isOfficial: true },
  { id: 'brand-c4', name: 'COACH', subName: '코치', isRSVP: false, isOfficial: true },

  // D
  { id: 'brand-d1', name: 'DIOR', subName: '디올', isRSVP: true, isOfficial: true },
  {
    id: 'brand-d2',
    name: 'DOLCE & GABBANA',
    subName: '돌체앤가바나',
    isRSVP: false,
    isOfficial: false,
  },
  { id: 'brand-d3', name: 'DR MARTENS', subName: '닥터마틴', isRSVP: false, isOfficial: false },
  { id: 'brand-d4', name: 'DIESEL', subName: '디젤', isRSVP: true, isOfficial: false },

  // E
  { id: 'brand-e1', name: 'ESTEE LAUDER', subName: '에스티로더', isRSVP: false, isOfficial: true },
  {
    id: 'brand-e2',
    name: 'ERMENEGILDO ZEGNA',
    subName: '에르메네질도 제냐',
    isRSVP: true,
    isOfficial: false,
  },
  { id: 'brand-e3', name: 'EVISU', subName: '에비수', isRSVP: false, isOfficial: false },

  // F
  { id: 'brand-f1', name: 'FENDI', subName: '펜디', isRSVP: true, isOfficial: true },
  { id: 'brand-f2', name: 'FERRARI', subName: '페라리', isRSVP: false, isOfficial: false },
  { id: 'brand-f3', name: 'FOSSIL', subName: '포실', isRSVP: false, isOfficial: true },

  // G
  { id: 'brand-g1', name: 'GUCCI', subName: '구찌', isRSVP: true, isOfficial: true },
  { id: 'brand-g2', name: 'GIVENCHY', subName: '지방시', isRSVP: false, isOfficial: true },
  {
    id: 'brand-g3',
    name: 'GIORGIO ARMANI',
    subName: '조르지오 아르마니',
    isRSVP: true,
    isOfficial: false,
  },
  { id: 'brand-g4', name: 'GAP', subName: '갭', isRSVP: false, isOfficial: false },

  // H
  { id: 'brand-h1', name: 'HERMES', subName: '에르메스', isRSVP: true, isOfficial: true },
  { id: 'brand-h2', name: 'HUGO BOSS', subName: '휴고보스', isRSVP: false, isOfficial: true },
  { id: 'brand-h3', name: 'H&M', subName: '에이치앤엠', isRSVP: false, isOfficial: false },
  { id: 'brand-h4', name: 'HUBLOT', subName: '위블로', isRSVP: true, isOfficial: false },

  // I
  { id: 'brand-i1', name: 'IKEA', subName: '이케아', isRSVP: false, isOfficial: true },
  {
    id: 'brand-i2',
    name: 'ISABEL MARANT',
    subName: '이자벨 마랑',
    isRSVP: true,
    isOfficial: false,
  },
  {
    id: 'brand-i3',
    name: 'ISSEY MIYAKE',
    subName: '이세이 미야케',
    isRSVP: false,
    isOfficial: true,
  },
  { id: 'brand-i4', name: 'IWC', subName: '아이더블유씨', isRSVP: true, isOfficial: false },

  // J
  { id: 'brand-j1', name: 'JIMMY CHOO', subName: '지미추', isRSVP: true, isOfficial: true },
  { id: 'brand-j2', name: 'JACQUEMUS', subName: '자크뮈스', isRSVP: false, isOfficial: false },
  { id: 'brand-j3', name: 'JIL SANDER', subName: '질 샌더', isRSVP: true, isOfficial: true },
  {
    id: 'brand-j4',
    name: 'JEAN PAUL GAULTIER',
    subName: '장 폴 고티에',
    isRSVP: false,
    isOfficial: false,
  },
];

// 알파벳 및 자음 필터
const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
const consonants = [
  'ㄱ',
  'ㄴ',
  'ㄷ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

// 한글 첫 글자를 자음으로 변환
const getConsonant = (char: string) => {
  const code = char.charCodeAt(0) - 0xac00;
  const consonants = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  const initial = consonants[Math.floor(code / 588)];
  return ['ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'].includes(initial)
    ? { ㄲ: 'ㄱ', ㄸ: 'ㄷ', ㅃ: 'ㅂ', ㅆ: 'ㅅ', ㅉ: 'ㅈ' }[initial]
    : initial;
};

export const BrandIndex = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isAlphabetView, setIsAlphabetView] = useState(true);
  const [activeChar, setActiveChar] = useState<string | null>(null);
  const [gemStates, setGemStates] = useState<Record<string, boolean>>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const indexBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const clickScrollLock = useRef(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  // 알파벳 또는 자음 목록 설정
  const indexList = isAlphabetView ? alphabets : consonants;

  // 검색어 필터링
  const autoCompleteBrands = useMemo(() => {
    if (!value.trim()) return mockBrands;

    const searchTerm = value.toLowerCase().trim();
    return mockBrands.filter((brand) => {
      return (
        brand.name.toLowerCase().includes(searchTerm) ||
        brand.subName.toLowerCase().includes(searchTerm)
      );
    });
  }, [value]);

  // 검색 중인지 확인
  const isSearching = value.trim().length > 0;
  const hasSearchResults = autoCompleteBrands.length > 0;

  // 인덱스 그룹핑
  const grouped = indexList.reduce<Record<string, typeof mockBrands>>((acc, key) => {
    acc[key] = mockBrands.filter((brand) => {
      if (isAlphabetView) {
        return brand.name[0].toUpperCase() === key;
      } else {
        return getConsonant(brand.subName[0]) === key;
      }
    });
    return acc;
  }, {});

  // indexTabs 스크롤 중앙정렬
  const centerIndexTabs = (char: string) => {
    const btn = indexBtnRefs.current[char];
    if (!btn) return;
    const container = btn.parentElement as HTMLElement | null;
    if (!container) return;

    const targetTop = btn.offsetTop - container.clientHeight / 2 + btn.clientHeight / 2;
    container.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  // 인덱스 클릭 시 스크롤 이동
  const handleIndexClick = (char: string) => {
    const el = groupRefs.current[char];
    if (!el) return;

    clickScrollLock.current = true;
    setActiveChar(char);

    // scrollTo content
    const y = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: y, behavior: 'smooth' });

    centerIndexTabs(char);

    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }
    scrollTimer.current = setTimeout(() => {
      clickScrollLock.current = false;
    }, 1000);
  };

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 검색어 초기화
  const handleSearchCancel = () => {
    setValue('');
    inputRef.current?.blur();
  };

  // 알파벳 및 자음 보기 토글
  const toggleCharView = () => setIsAlphabetView((prev) => !prev);

  // 젬 관리
  const handleGemToggle = (brandKey: string) => {
    return (value: boolean) => {
      setGemStates((prev) => ({
        ...prev,
        [brandKey]: value,
      }));
    };
  };

  // 브랜드 아이템 (공통)
  const renderBrandItem = (brand: (typeof mockBrands)[0]) => (
    <li key={brand.id}>
      <Link type="block" href="#" className={styles.brandLink}>
        <div className={styles.mainName}>
          <Heading as="strong" size="3" className={styles.brand}>
            {isAlphabetView ? brand.name : brand.subName}
            {brand.isOfficial && <BrandBadge brandType="official" size="small" />}
          </Heading>
          {brand.isRSVP && <Flag data={['RSVP']} color="gray" />}
        </div>
        <Text as="span" size="4" className={styles.subName}>
          {isAlphabetView ? brand.subName : brand.name}
        </Text>
      </Link>
      <ProdGem isActive={gemStates[brand.id] || false} onChange={handleGemToggle(brand.id)} />
    </li>
  );

  useEffect(() => {
    const handleScroll = () => {
      // 클릭으로 인한 스크롤 중이면 무시
      if (clickScrollLock.current) return;

      const centerY = window.innerHeight / 2;
      const entries = Object.entries(groupRefs.current);

      for (const [char, el] of entries) {
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        // 화면 중앙이 이 요소 안에 포함되어 있으면 활성화
        if (top <= centerY && bottom >= centerY) {
          setActiveChar(char);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!activeChar) return;
    centerIndexTabs(activeChar);
  }, [activeChar]);

  return (
    <div className={styles.root}>
      <Input
        ref={inputRef}
        type="search"
        placeholder="원하는 브랜드를 검색하세요."
        value={value}
        clearable={false}
        className={styles.search}
        suffix={
          isFocused || isSearching ? (
            <IconButton
              name="delete"
              className={styles.searchClear}
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleSearchCancel}
            >
              취소
            </IconButton>
          ) : (
            // 꾸밈용 아이콘
            <Icon name="search" size="large" />
          )
        }
        onChange={handleSearchChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {isSearching ? (
        <>
          {hasSearchResults ? (
            <ul className={styles.groupList}>{autoCompleteBrands.map(renderBrandItem)}</ul>
          ) : (
            // 결과 없음 문구
            <Empty
              variant="minDisplay"
              title={'일치하는 검색 결과가 없어요.\n다른 키워드로 검색해 주세요.'}
              buttons={<Button variant="primary">목록으로 이동</Button>}
            />
          )}
        </>
      ) : (
        // 검색어 없으면 기존 탭과 인덱스 표시
        <>
          <div className={styles.filter}>
            <button
              type="button"
              onClick={toggleCharView}
              className={styles.filterChar}
              data-char-views={isAlphabetView ? 'A' : '가'}
            >
              <span className="ncp-blind">{isAlphabetView ? '자음 보기' : '알파벳 보기'}</span>
            </button>
            <Tabs variant="buttons" data={mockCategory} className={styles.filterTabs} />
          </div>

          <div className={styles.index}>
            <div className={styles.indexTabs}>
              {indexList
                .filter((char) => grouped[char].length > 0)
                .map((char) => (
                  <button
                    key={char}
                    ref={(el) => {
                      indexBtnRefs.current[char] = el;
                    }}
                    type="button"
                    onClick={() => handleIndexClick(char)}
                    className={clsx(styles.indexBtn, {
                      [styles.active]: char === activeChar,
                    })}
                  >
                    {char}
                  </button>
                ))}
            </div>

            <div className={styles.indexList}>
              {indexList.map((char) =>
                grouped[char].length ? (
                  <div
                    key={char}
                    ref={(el) => {
                      groupRefs.current[char] = el;
                    }}
                    className={styles.indexGroup}
                  >
                    <Heading className={styles.groupTitle}>{char}</Heading>
                    <ul className={styles.groupList}>{grouped[char].map(renderBrandItem)}</ul>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

BrandIndex.displayName = 'BrandIndex';
