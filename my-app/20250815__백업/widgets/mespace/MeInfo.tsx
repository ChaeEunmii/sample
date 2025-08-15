'use client';
// 라이브러리
import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import {
  Image,
  Heading,
  Text,
  Icon,
  Button,
  IconButton,
  Avatar,
  ButtonArea,
  Link,
  Gem,
} from '@shared/ui';
import { MeBadge } from './MeBadge';
// 유틸
import { formatViewCount } from '@shared/utils/ui';
// 스타일
import styles from './MeInfo.module.scss';
import clsx from 'clsx';

// 타입 정의
interface Brand {
  id?: string;
  name: string;
  image: string;
  href?: string;
}

interface MeInfoProps {
  name: string;
  gems: number;
  avatar?: string;
  userType?: 'influencer' | 'manager' | 'normal';
  traits?: string[];
  description?: React.ReactNode;
  brands?: Brand[];
  partners?: string;
  isMyProfile?: boolean;
  onGemToggle?: (isActive: boolean, newCount: number) => void;
  compact?: boolean;
}

// 브랜드 리스트 컴포넌트
const BrandList = ({ brands = [] }: { brands?: Brand[] }) => {
  if (!brands.length) return null;
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded((prev) => !prev);

  const hasMultiple = brands.length > 1;

  return (
    <div className={clsx(styles.brands)}>
      {brands.map((brand, idx) => (
        <div
          key={brand.id}
          className={clsx(styles.brand, hasMultiple && idx > 0 && !isExpanded && styles.hidden)}
        >
          <Link href={brand.href || '#'} type="flex" className={styles.brandLink}>
            <Image src={brand.image} alt={brand.name} />
            <span>{brand.name}</span>
          </Link>
        </div>
      ))}

      {hasMultiple && (
        <IconButton name={isExpanded ? 'arrowUp' : 'arrowDown'} onClick={handleExpand}>
          {isExpanded ? '접기' : '펼치기'}
        </IconButton>
      )}
    </div>
  );
};

// 메인 컴포넌트
export const MeInfo = ({
  name,
  gems,
  avatar = '/images/no_avatar.png',
  userType = 'normal',
  traits = [],
  description,
  brands = [],
  partners,
  isMyProfile = false,
  onGemToggle,
  compact,
}: MeInfoProps) => {
  const router = useRouter();

  const [isCompact, setIsCompact] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (!ref.current) return;

    const el = ref.current;
    const scrollTop = window.scrollY;

    const shouldBeCompact = scrollTop > el.offsetHeight;

    if (isCompact !== shouldBeCompact) {
      setIsCompact(shouldBeCompact ? true : false);
    }
  }, [isCompact]);

  useEffect(() => {
    // compact 옵션이 있으면 스크롤 이벤트를 등록하지 않음
    if (compact) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(onScroll, 10);
    };

    onScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [onScroll, compact]);

  // compact 옵션이 있을 때는 무조건 축약형태만 렌더링
  if (compact) {
    return (
      <div className={clsx(styles.compact, styles.compactOnly)}>
        <Avatar src={avatar} alt={`${name} 프로필 이미지`} type="mespace" />
        <Heading size="6">{name}</Heading>
        <MeBadge userType={userType} className={styles.badge} />
        {!isMyProfile && (
          <Gem initialGems={gems} onToggle={onGemToggle} size="small" className={styles.gem} />
        )}
      </div>
    );
  }

  return (
    <>
      {/* 축약형 - 스크롤에 따라 나타남 */}
      <div
        className={styles.compact}
        data-state={isCompact ? 'show' : 'hide'}
        aria-hidden={!isCompact}
      >
        <Avatar src={avatar} alt={`${name} 프로필 이미지`} type="mespace" />
        <Heading size="6">{name}</Heading>
        <MeBadge userType={userType} className={styles.badge} />
      </div>

      {/* 확장형 */}
      <div className={clsx(styles.root)} ref={ref} aria-hidden={isCompact}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <Avatar src={avatar} alt={`${name} 프로필 이미지`} type="mespace" />
            <MeBadge userType={userType} size="large" className={styles.badge} />
          </div>

          <div className={styles.name}>
            <Heading size="8">{name}</Heading>
            {isMyProfile && (
              <Text size="3" color="gray2" className={styles.likes}>
                <Icon name="gemOn" size="xsmall" /> {formatViewCount(gems, 'en')}
              </Text>
            )}
          </div>

          {/* 타인 프로필일 때만 젬 버튼 노출 */}
          {!isMyProfile && <Gem initialGems={gems} onToggle={onGemToggle} className={styles.gem} />}

          {traits.length > 0 && (
            <ul className={styles.traits}>
              {traits.map((trait, index) => (
                <li key={index} className={styles.trait}>
                  {trait}
                </li>
              ))}
            </ul>
          )}

          {description && (
            <div className={styles.desc}>
              <Text color="gray2" indent reading>
                {description}
              </Text>
            </div>
          )}
        </div>
        {brands.length > 0 && <BrandList brands={brands} />}

        {partners && (
          <ButtonArea className="ncp-mt-xs">
            <Button
              variant="tertiary"
              suffixIcon="arrowRight"
              onClick={() => router.push(partners)}
            >
              파트너스샵 바로가기
            </Button>
          </ButtonArea>
        )}
      </div>
    </>
  );
};
