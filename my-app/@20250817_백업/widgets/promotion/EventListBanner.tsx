import React, { useState } from 'react';
import { Image, Text, Link, Button, TitleBar, Box, TextButton, Flag } from '@shared/ui';

import styles from './EventListBanner.module.scss';
import { formatDate, formatNumber } from '@/shared/utils/ui';
import { useSearchParams } from 'next/navigation';

export interface CardProps {
  /** 링크 */
  href?: string;
  /** 이미지 */
  image: string;
  /** 이벤트 타이틀 */
  title: string;
  /** 이벤트 서브 타이틀 */
  subtitle?: string;
  /** 이벤트 기간 */
  date: string;
  /** 이벤트 시작일까지의 D-Day */
  dDay?: number;
  /** 이벤트 : 당첨 발표일, H.Point : 지급 예정일 */
  resultDate?: string;
  /** 조건 */
  condition?: string[];
  /** 리워드 포인트 */
  rewardPoint?: {
    /** 포인트 값 */
    value: number;
    /** 지급 완료 여부 */
    isCompleted: boolean;
  };
  /** 광고 여부 */
  ad?: boolean;
}

interface EventListBannerProps {
  /** 이벤트 카테고리 타이틀 */
  title: string;
  /** 이벤트 카테고리 타이틀 우측 사이드 영역 */
  titleSide?: {
    href: string;
    text: string;
  };
  /** 이벤트 배너 카드 데이터 */
  data: CardProps[];
}

/** 개별 이벤트 카드 Wrap */
function Wrap({ href, children }: { href?: string; children: React.ReactNode }) {
  if (href) {
    return (
      <Link href={href} className={styles.card}>
        {children}
      </Link>
    );
  }
  return <div className={styles.card}>{children}</div>;
}

/** 개별 이벤트 카드 */
function Card({
  href,
  image,
  title,
  subtitle,
  date,
  dDay,
  resultDate,
  condition,
  rewardPoint,
  ad,
}: CardProps) {
  return (
    <Wrap href={href}>
      <div className={styles.left}>
        <Image src={image} alt="" className={styles.image} />
        <Text as="strong" weight="semibold" className={styles.title}>
          {title}
        </Text>
        {subtitle && <Text as="span">{subtitle}</Text>}
        <div className={styles.dates}>
          {dDay && <Flag data={{ label: `D-${dDay}`, color: 'green2' }}></Flag>}
          <Text as="span" className={styles.date} size="3" color="gray3">
            {date}
          </Text>
        </div>
        {condition && (
          <Text as="span" className={styles.date} size="3" color="gray3">
            [
            {condition?.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx !== 0 && ', '}
                {item}
              </React.Fragment>
            ))}
            &nbsp;전용]
          </Text>
        )}
      </div>
      {(ad || rewardPoint) && (
        <div className={styles.right}>
          {rewardPoint && (
            <Text color="point" weight="medium" align="right">
              +{formatNumber(rewardPoint.value)}P
            </Text>
          )}
          <Text size="3" color="gray3" align="right">
            {formatDate(resultDate, 'dot')}
            <br />
            지급{rewardPoint?.isCompleted ? ' 완료' : ' 예정'}
          </Text>
        </div>
      )}
    </Wrap>
  );
}

export default function EventListBanner({
  title,
  titleSide = undefined,
  data,
}: EventListBannerProps) {
  const searchParams = useSearchParams();

  /** 로그인 여부 */
  const isLogin = searchParams.has('login');

  /** 보여질 카드 개수 */
  const [visibleCount, setVisibleCount] = useState(10);

  /** 보여질 카드 리스트 */
  const visibleCards = data.slice(0, visibleCount);

  /** 더보기 버튼 노출 여부 */
  const showMoreButton = data.length > visibleCount;

  return (
    <>
      {/* 분류 타이틀 */}
      <TitleBar
        title={title}
        level="2"
        side={
          titleSide && (
            <TextButton
              href={titleSide.href}
              suffixIcon="arrowRight"
              size="1"
              iconSize="xsmall"
              color="inherit"
            >
              {titleSide.text}
            </TextButton>
          )
        }
      />

      {/* 쿠폰인 경우에만 노출되는 박스 */}
      {title === '쿠폰' && (
        <>
          <Box className={styles.box}>
            {!isLogin && '로그인 하시고 '}더 많은 쿠폰을 확인해 보세요
            <TextButton
              href={!isLogin ? '/login' : '/mypage'}
              variant="underline"
              size="1"
              color="gray3"
            >
              {!isLogin ? '로그인' : '마이페이지'}
            </TextButton>
          </Box>
          <Box className={styles.box}>
            쿠폰 번호를 등록해 주세요
            <TextButton href="#" variant="underline" size="1" color="gray3">
              쿠폰등록
            </TextButton>
          </Box>
        </>
      )}

      {/* 이벤트 카드 */}
      <div className={styles.data}>
        {visibleCards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>

      {/* 더보기 버튼 */}
      {data.length > 10 && showMoreButton && (
        <div className={styles.moreViewButton}>
          <Button
            suffixIcon="arrowDown"
            variant="tertiary"
            size="small"
            round
            onClick={() => setVisibleCount((count) => Math.min(count + 10, data.length))}
          >
            더보기
          </Button>
        </div>
      )}
    </>
  );
}
