'use client';

import React, { useState, useEffect } from 'react';

import { Drawer, ButtonArea, Button, Icon, Checkbox, Link, Heading, Text, Image } from '@shared/ui';
import styles from './SelectCollectionDrawer.module.scss';

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
interface SelectCollectionDrawerProps {
  /** 컬렉션 목록 데이터 */
  data: collectionSelect[];
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

export default function SelectCollectionDrawer({
  data,
  isOpen,
  onClose,
  selection,
}: SelectCollectionDrawerProps) {
  // 초기값은 부모로부터 받은 activeIds 또는 빈 배열
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>(selection?.activeIds ?? []);

  // 부모에서 activeIds가 변경되면 내부 상태도 동기화
  useEffect(() => {
    if (selection?.activeIds) {
      setSelectedIds(selection.activeIds);
    }
  }, [selection?.activeIds]);

  // 아이템 선택/해제 토글 함수
  const toggleItem = (id: string | number) => {
    const newSelected = selectedIds.includes(id)
      ? selectedIds.filter((i) => i !== id) // 선택 해제
      : [...selectedIds, id]; // 선택 추가
    setSelectedIds(newSelected);
    selection?.onChange(newSelected); // 선택 변경 콜백 호출
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
              <Heading as="strong" className={styles.tit}>
                새로운 컬렉션
              </Heading>
              <Text className={styles.desc}>컬렉션을 생성하여 항목을 추가할 수 있어요.</Text>
            </div>
          </div>
        </Link>
        {/* 개별 아이템 목록 */}
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.side}>
                <Image src={item.image.src} alt={item.image.alt} className={styles.img} />
                <div className={styles.infoWrap}>
                  <Heading as="strong" className={styles.label}>
                    {item.label}
                    {item.isLock && (
                      <>
                        <Icon name="lock" size="xsmall" />
                      </>
                    )}
                  </Heading>
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
