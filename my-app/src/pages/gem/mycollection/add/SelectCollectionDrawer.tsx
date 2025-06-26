'use client';

import React, { useState } from 'react';

import { Drawer, ButtonArea, Button, Icon, Checkbox, Link } from '@shared/ui';
import styles from './SelectCollectionDrawer.module.scss';

type Item = {
  id: number;
  label: string;
  product: number;
  brand: number;
  isLock?: boolean;
};
// 샘플 데이터
const SAMPLE_DATA: Item[] = [
  { id: 1, label: '오늘 뭐 입지 OOTD', product: 3, brand: 5, isLock: true },
  { id: 2, label: '쓸모없어도 귀여운거 모음집', product: 3, brand: 5 },
  { id: 3, label: '탐나는 여름 신발 모음', product: 3, brand: 5, isLock: true },
  { id: 4, label: '오늘 뭐 입지 OOTD', product: 3, brand: 5 },
  { id: 5, label: '쓸모없어도 귀여운거 모음집', product: 3, brand: 5 },
];

interface SelectCollectionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SelectCollectionDrawer({ isOpen, onClose }: SelectCollectionDrawerProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <Drawer
      title="컬렉션 선택"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
      footer={
        <>
          <div className={styles.footer}>
            <p className={styles.info}>{selectedIds.length}개의 컬렉션 선택</p>
            <ButtonArea vertical className={styles.btns}>
              <Button
                variant="primary"
                size="large"
                onClick={onClose}
                disabled={selectedIds.length === 0}
              >
                완료
              </Button>
            </ButtonArea>
          </div>
        </>
      }
    >
      <div className={styles.root}>
        {/* 컬렉션명 입력 페이지로 이동 */}
        <Link as="route" href="/" type="block">
          <div className={styles.new}>
            <div className={styles.addImg}>
              <Icon name="plus" size="large" />
            </div>
            <div className={styles.titWrap}>
              <p className={styles.tit}>새로운 컬렉션</p>
              <p className={styles.desc}>컬렉션을 생성하여 항목을 추가할 수 있어요.</p>
            </div>
          </div>
        </Link>
        {/* 개별 아이템 목록 */}
        <ul className={styles.list}>
          {SAMPLE_DATA.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.side}>
                <span className={styles.img}>
                  <img src="/images/dummy/@sample_product_01.png" alt="테스트" />
                </span>
                <div className={styles.infoWrap}>
                  <p className={styles.label}>
                    {item.label}
                    {item.isLock && (
                      <>
                        <Icon name="lock" size="xsmall" />
                      </>
                    )}
                  </p>
                  <ul className={styles.infos}>
                    <li>상품 {item.product}</li>
                    <li>브랜드 {item.brand}</li>
                  </ul>
                </div>
                <Checkbox
                  label={item.label}
                  size="medium"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => toggleItem(item.id)}
                  hideLabel
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
}
