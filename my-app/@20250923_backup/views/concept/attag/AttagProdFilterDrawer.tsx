'use client';

import { Drawer, Button } from '@shared/ui';
import styles from './AttagProdFilter.module.scss';

interface AttagProdFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AttagProdFilterDrawer({ isOpen, onClose }: AttagProdFilterDrawerProps) {
  return (
    <Drawer
      title="성별"
      isOpen={isOpen}
      onClose={onClose}
      // 하단 영역: 사용 가능일 때만 '사용하기' 버튼 노출
      footer={
        <>
          <Button size="large" onClick={onClose}>
            초기화
          </Button>
          <Button variant="primary" size="large" onClick={onClose}>
            적용하기
          </Button>
        </>
      }
    >
      <div className={styles.layout}>
        <p>맞나</p>
      </div>
    </Drawer>
  );
}
