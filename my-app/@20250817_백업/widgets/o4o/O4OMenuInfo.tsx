'use client';
import React, { useState } from 'react';
import { Image, Stack, Heading, Stepper } from '@/shared/ui';
import { ProdPrice } from '@/widgets/product';
import { O4OItemType } from '@/widgets/product/O4OItem';
import styles from './O4OStoreInfo.module.scss';

interface O4OMenuListProps {
  /** 메뉴 상세 데이터 */
  data: O4OItemType;
  /** 추가 클래스명 */
  className?: string;
}

export const O4OMenuInfo = ({ data, className }: O4OMenuListProps) => {
  // ✅ 상태 관리
  const [quantities, setQuantities] = useState(1); // 수량 변경 stepper

  return (
    <>
      <article className={className}>
        <Image
          src={data.image?.src || '/images/torder_defalut_detail_img.png'}
          alt={data.image?.alt || '기본 이미지'}
          className={styles.imgBox}
        />
        <div className={styles.titleBox}>
          <Heading as="h2" size="6" className="ncp-mt-s">
            {data.title}
          </Heading>
          <ProdPrice
            variant="order"
            currentPrice={data.price?.current ?? 0}
            originalPrice={data.price?.original ?? 0}
            className="ncp-mt-xs"
          />
        </div>
        <Stack type="end" className="ncp-mt-x6">
          <Stepper value={quantities} onChange={setQuantities} min={1} className={styles.stepper} />
        </Stack>
      </article>
    </>
  );
};

O4OMenuInfo.displayName = 'O4OMenuInfo';
