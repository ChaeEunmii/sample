'use client';

import { useState } from 'react';
import { IconButton } from '@shared/ui';
import SellerCenterMenuDialog from './SellerCenterMenuDialog';

interface SellerCenterMenuBtnProps {
  /* *로그인 여부 */
  isLoggedIn?: boolean;
}

export default function SellerCenterMenuBtn({ isLoggedIn = false }: SellerCenterMenuBtnProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton name="menu" size="large" onClick={() => setOpen(true)}>
        메뉴
      </IconButton>
      {/* 판매자센터 메뉴 (L) */}
      <SellerCenterMenuDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}
