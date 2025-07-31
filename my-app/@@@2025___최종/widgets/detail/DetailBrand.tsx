'use client';

import { useState } from 'react';
import { Heading, Icon, Line, Text, TextList, Image } from '@/shared/ui';
import { BrandBar } from '../brand';
import { BrandBarProps } from '../brand/BrandBar';

import styles from './DetailBrand.module.scss';

interface DetailBrandProps {
  /** 지점 출력 (하위 브랜드만) */
  branch?: string;
  /** 브랜드 데이터 */
  brandData: Omit<BrandBarProps, 'variant' | 'flag'> & {
    notice: { text: string[]; image?: { src: string; alt: string } };
  };
}

export const DetailBrand = ({ branch, brandData }: DetailBrandProps) => {
  const [gemBrandIds, setGemBrandIds] = useState<(string | number)[]>([brandData.id]);

  const handleBrandGemToggle = (brandId: string | number, isActive: boolean) => {
    setGemBrandIds((prev) => {
      if (isActive) {
        return prev.includes(brandId) ? prev : [...prev, brandId];
      } else {
        return prev.filter((id) => id !== brandId);
      }
    });
  };

  return (
    <>
      <Line variant="bold" margin="5" color="bg1" className={styles.topLine} />
      <BrandBar
        {...brandData}
        variant={!branch ? 'detail' : 'branch'}
        // 상단 브랜드 영역 : 화살표 및 gem 출력
        {...(!branch && {
          gem: {
            isActive: gemBrandIds.includes(brandData.id),
            onChange: handleBrandGemToggle,
          },
        })}
        // 하위 브랜드 영역 : 지점 출력
        {...(branch && {
          // 점별 브랜드 페이지로 이동
          href: '##',
          slot: (
            <div className={styles.branch}>
              <Text size="4">{branch}</Text>
              <Icon name="arrowRight" size="xsmall" />
            </div>
          ),
        })}
      />
      {!branch && brandData.notice && (
        <div className={styles.notice}>
          <Heading as="h2" size="3" weight="semibold">
            브랜드 공지
          </Heading>
          {/* 공지 우선 순위 : 이미지 1순위, 이미지가 없으면 텍스트 출력 */}
          {brandData.notice.image ? (
            <Image
              src={brandData.notice.image.src}
              alt={brandData.notice.image.alt}
              className={styles.img}
            />
          ) : (
            brandData.notice.text && (
              <TextList data={brandData.notice.text} className={styles.textlist}></TextList>
            )
          )}
        </div>
      )}
      <Line variant="bold" margin="5" color="bg1" className={styles.bottomLine} />
    </>
  );
};

DetailBrand.displayName = 'DetailBrand';
