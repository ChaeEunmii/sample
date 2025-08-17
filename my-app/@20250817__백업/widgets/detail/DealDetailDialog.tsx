'use client';

import React, { useState } from 'react';
import { Carousel, Dialog, Text, Image } from '@shared/ui';
import { mockHtmlContent, mockProdGeneralItem } from '@/mocks/detail';

import styles from './DealDetailDialog.module.scss';
import clsx from 'clsx';
import DetailCTA from './cta/DetailCTA';

interface DealDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// 임시 딜 상품 목록
const mockDealDetailItems = [
  { ...mockProdGeneralItem, id: 'deal-prod-1' },
  { ...mockProdGeneralItem, id: 'deal-prod-2', stock: 0 },
  { ...mockProdGeneralItem, id: 'deal-prod-3' },
  { ...mockProdGeneralItem, id: 'deal-prod-4' },
  { ...mockProdGeneralItem, id: 'deal-prod-5' },
  { ...mockProdGeneralItem, id: 'deal-prod-6' },
  { ...mockProdGeneralItem, id: 'deal-prod-7' },
  { ...mockProdGeneralItem, id: 'deal-prod-8', stock: 0 },
  { ...mockProdGeneralItem, id: 'deal-prod-9' },
];
// 임시 딜 상품 상세 컨텐츠
const mockHtmlContents = [
  { mockHtmlContent, id: 'deal-prod-1' },
  { mockHtmlContent, id: 'deal-prod-2' },
  { mockHtmlContent, id: 'deal-prod-3' },
  { mockHtmlContent, id: 'deal-prod-4' },
  { mockHtmlContent, id: 'deal-prod-5' },
  { mockHtmlContent, id: 'deal-prod-6' },
  { mockHtmlContent, id: 'deal-prod-7' },
  { mockHtmlContent, id: 'deal-prod-8' },
  { mockHtmlContent, id: 'deal-prod-9' },
];

export default function DealDetailDialog({ isOpen, onClose }: DealDetailDialogProps) {
  // 스와이퍼 활성 인덱스 상태
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <Dialog
      title="상품 자세히보기"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.root}
      showClose
      flush
      maximize
      footer={<DetailCTA inDialog />}
    >
      <div className={styles.dialogCont}>
        <Carousel
          className={styles.listCarousel}
          flush
          slidesPerView={5.5}
          spaceBetween={8}
          slideTo={currentIdx}
          onSlideChange={setCurrentIdx}
          slides={mockDealDetailItems.map((item, idx) => (
            <button
              key={item.id}
              className={clsx(styles.dealItem, idx === currentIdx && styles.active)}
              onClick={() => setCurrentIdx(idx)}
            >
              <Text size="1" color="white" className={styles.numbers}>
                선택{idx + 1}
              </Text>
              <Image
                className={clsx(styles.itemThumb, item.stock === 0 && styles.soldout)}
                src={item.image.src}
                alt={item.image.alt}
              />
            </button>
          ))}
        />
        <Carousel
          className={styles.detailCarousel}
          flush
          slidesPerView={1}
          slideTo={currentIdx}
          onSlideChange={setCurrentIdx}
          navigation
          slides={mockHtmlContents.map((html, idx) => (
            <div
              key={idx}
              className={styles.html}
              dangerouslySetInnerHTML={{ __html: mockHtmlContent }}
            />
          ))}
        />
      </div>
    </Dialog>
  );
}
