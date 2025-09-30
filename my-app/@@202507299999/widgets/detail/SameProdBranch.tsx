'use client';

import { useState } from 'react';
import { formatPrice } from '@/shared/utils/ui';
import { mockSameProdBranch } from '@/mocks/detail';
import SameProdBranchDialog from './SameProdBranchDialog';

import { Carousel, Flag, Heading, Link, Text, TextButton } from '@/shared/ui';

import styles from './SameProdBranch.module.scss';
import clsx from 'clsx';

export const SameProdBranch = () => {
  // 임시데이터
  const branchId = 'branch-1'; // 현재 지점의 id
  const data = mockSameProdBranch;

  // 지점 별 재고 현황 팝업
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 다른 지점 동일 상품이 본 상품 포함 1개 이상인 경우 (총 2개 이상)에만 노출
  return data.length > 1 ? (
    <section>
      {/* 타이틀 영역 */}
      <div className={styles.title}>
        <Heading as="h2" size="5">
          다른 지점 동일 상품
        </Heading>
        <TextButton
          size="1"
          color="gray3"
          suffixIcon="arrowRight"
          onClick={() => {
            setIsDialogOpen(true);
          }}
        >
          지점별재고현황
        </TextButton>
      </div>

      {/* 지점 슬라이더 */}
      <Carousel
        className={styles.carousel}
        slideClassName={styles.slide}
        slidesPerView="auto"
        spaceBetween={8}
        autofit
        slides={data.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={clsx(styles.branch, item.id === branchId && styles.active)}
          >
            <Text size="4">{item.branch}</Text>
            <Text size="5" weight="semibold" className={styles.price}>
              {formatPrice(item.price)}
            </Text>
            {item.storePick && (
              <Flag
                data={{ label: '스토어픽', color: 'gray' }}
                radius="all"
                className={styles.flag}
              />
            )}
          </Link>
        ))}
      />

      {/* 지점 별 재고 현황 팝업 */}
      <SameProdBranchDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  ) : null;
};

SameProdBranch.displayName = 'SameProdBranch';
