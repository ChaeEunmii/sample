'use client';

import React, { useState, useEffect } from 'react';

import { Drawer, Button, Collapse, Heading, TextList } from '@shared/ui';
import styles from './UseVoucherDrawer.module.scss';

//컬렉션선택 상품
type collectionSelect = {
  /** 고유 ID */
  id: string | number;
  /** 컬렉션명 */
  label: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
  /** 상품 카운트 */
  product: number;
  /** 브랜드 카운트 */
  brand: number;
  /** 공개/비공개여부 */
  isLock?: boolean;
};
interface UseVoucherDrawerProps {
  /** 컬렉션 목록 데이터 */
  data?: collectionSelect[];
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 선택 상태 및 변경 콜백 */
  selection?: {
    activeIds: (string | number)[];
    onChange: (selectedIds: (string | number)[]) => void;
  };
}

export default function UseVoucherDrawer({
  data,
  isOpen,
  onClose,
  selection,
}: UseVoucherDrawerProps) {
  return (
    <Drawer
      title="바우처 사용하기"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            사용하기
          </Button>
        </>
      }
    >
      <div className={styles.root}>
        <div>이곳은 바우처가 들어갑니다</div>
        <Collapse variant="section">
          <Collapse.Control>
            <Heading size="5">상세정보</Heading>
          </Collapse.Control>
          <Collapse.Content>
            <TextList
              data={[
                '상품 상세와 동일한 콘텐츠 노출 됩니다.',
                '상품 상세와 동일한 콘텐츠 노출 됩니다.',
              ]}
              variant="info"
            />
          </Collapse.Content>
        </Collapse>
      </div>
    </Drawer>
  );
}
