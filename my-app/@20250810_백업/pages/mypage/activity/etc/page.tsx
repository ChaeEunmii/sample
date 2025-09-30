'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container } from '@widgets/layout/Container';
import ProdReviewGuideDialog from '@/views/mypage/activity/reviews/components/ProdReviewGuideDialog';
import StoreReviewGuideDialog from '@/views/mypage/activity/reviews/components/StoreReviewGuideDialog';
import UploadMethodDrawer from '@/views/mypage/activity/reviews/components/UploadMethodDrawer';
import ImageViewerDialog from '@/views/mypage/activity/components/ImageViewerDialog';

export default function Page() {
  const [isProdReviewGuideDialog, setIsProdReviewGuideDialog] = useState(false);
  const [isStoreReviewGuideDialog, setIsStoreReviewGuideDialog] = useState(false);
  const [isUploadMethodDrawer, setIsUploadMethodDrawer] = useState(false);
  const [isImageViewerDialog, setIsImageViewerDialog] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      {/* 팝업 확인용 페이지입니다 */}
      <ButtonArea vertical className="ncp-mt-s">
        <Button onClick={() => setIsProdReviewGuideDialog(true)}>상품 리뷰 작성안내 (L)</Button>
        <Button onClick={() => setIsStoreReviewGuideDialog(true)}>매장 리뷰 작성안내 (L)</Button>
        <br />
        <br />
        <Button onClick={() => setIsUploadMethodDrawer(true)}>작업선택 (D)</Button>
        <br />
        <br />
        <Button onClick={() => setIsImageViewerDialog(true)}>이미지 크게보기 (L)</Button>
        <br />
        <br />
        <br />
      </ButtonArea>

      {/* 상품 리뷰 작성안내 (L)*/}
      <ProdReviewGuideDialog
        isOpen={isProdReviewGuideDialog}
        onClose={() => setIsProdReviewGuideDialog(false)}
      />
      {/* 매장 리뷰 작성안내 (L)*/}
      <StoreReviewGuideDialog
        isOpen={isStoreReviewGuideDialog}
        onClose={() => setIsStoreReviewGuideDialog(false)}
      />
      {/* 작업선택 (D)*/}
      <UploadMethodDrawer
        isOpen={isUploadMethodDrawer}
        onClose={() => setIsUploadMethodDrawer(false)}
      />
      {/* 이미지 크게보기 (L)*/}
      <ImageViewerDialog
        isOpen={isImageViewerDialog}
        onClose={() => setIsImageViewerDialog(false)}
      />
    </Container>
  );
}
