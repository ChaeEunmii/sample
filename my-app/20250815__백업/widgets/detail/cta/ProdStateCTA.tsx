'use client';

import { Button } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { useState } from 'react';
import AlramDialog from './AlramDialog';
import { formatDate } from '@/shared/utils/ui';

export const ProdStateCTA = () => {
  const { item, prodState } = useProdDetail();

  // 재입고 알림 팝업 상태
  const [isAlramOpen, setIsAlramOpen] = useState(false);

  if (prodState === 'soldout')
    return (
      <Button size="large" variant="primary" disabled>
        품절
      </Button>
    );
  if (prodState === 'paused')
    return (
      <Button size="large" variant="primary" disabled>
        판매중단
      </Button>
    );
  if (prodState === 'outOfStock')
    return (
      <>
        <Button size="large" variant="primary" disabled>
          일시품절
        </Button>
        <Button size="large" onClick={() => setIsAlramOpen(true)}>
          재입고 알림 신청
        </Button>
        <AlramDialog type="restock" isOpen={isAlramOpen} onClose={() => setIsAlramOpen(false)} />
      </>
    );
  if (prodState === 'preRelease')
    return (
      <>
        <Button iconOnly="bell" size="large" onClick={() => setIsAlramOpen(true)}>
          선공개 알림 신청
        </Button>
        <Button size="large" disabled>
          {item.releaseDate ? `${formatDate(item.releaseDate, 'kor', false)} 공개` : '공개예정'}
        </Button>
        <AlramDialog type="onsale" isOpen={isAlramOpen} onClose={() => setIsAlramOpen(false)} />
      </>
    );
  return null;
};
