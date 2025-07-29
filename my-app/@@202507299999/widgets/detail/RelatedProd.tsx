'use client';

import React, { useState } from 'react';
import { Flag, Heading } from '@/shared/ui';
import { ProdCardList } from '../product';

import styles from './RelatedProd.module.scss';

interface RelatedProdType {
  title: string;
  data: any[];
}

interface RelatedProdProps {
  data: RelatedProdType[];
}

export const RelatedProd = ({ data }: RelatedProdProps) => {
  // START ---- 상품 리스트 젬 관련 ----
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };
  // END ---- 상품 리스트 젬 관련 ----

  return (
    <>
      {data.map((list, idx) => {
        const isAllAd =
          Array.isArray(list.data) && list.data.length > 0 && list.data.every((item) => item.ad);

        return (
          <div key={`${list.title}${idx}`} className={styles.root}>
            <div className={styles.title}>
              <Heading as="h2" size="5">
                {list.title}
              </Heading>
              {/* 전체 리스트가 ad:true일 때만 노출 */}
              {isAllAd && <Flag size="small" data={{ label: 'AD', color: 'black30' }} />}
            </div>
            <ProdCardList
              className={styles.list}
              data={list.data}
              variant={'swiper'}
              columns={2.5}
              wishlist={{
                activeIds: wishlistIds,
                onToggle: handleWishlistToggle,
              }}
            />
          </div>
        );
      })}
    </>
  );
};

RelatedProd.displayName = 'RelatedProd';
