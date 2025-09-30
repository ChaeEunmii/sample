'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@/shared/ui';
import { OrderTopInfo, OrderProducts } from '@/views/mypage/order/detail/components';
import { MyOrderList } from '@views/mypage/claims/components/MyOrderList';
import { CostInfoSection, CancelReason } from '@/views/mypage/claims/components';
import { RefundInfo } from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/claims';
import ImageViewerDialog from '@widgets/etc/ImageViewerDialog';
import styles from './CancelApply.module.scss';
// 참고용
import { mockProdImages } from '@mocks/product';
import { mockOrderList } from '@/mocks/test';

export default function CancelApply() {
  // 썸네일보기 팝업 상태
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 테스트중 (OrderList로)
  const orders = mockOrderList;
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({}); // 전체 선택 체크

  // 샘플 이미지
  const sampleImages = [...mockProdImages, ...mockProdImages.slice(0, 2)]; // 예시 데이터

  // mock 데이터 할당
  const { topInfo, refund, orderItems } = mockCommonOrder;

  return (
    <Container showBack title="주문 취소 신청">
      <Contents className={styles.layout}>
        <Button onClick={() => setIsDialogOpen(true)}>이미지뷰어 다이얼로그</Button>
        <br />
        <br />
        <br />
        {/* OrderList 참고해서 작업해본것 */}
        <MyOrderList data={orders} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />

        <br />
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 주문상품 */}
        <OrderProducts data={orderItems} />
        {/* 배송비 안내 */}
        <CostInfoSection
          title="배송비 안내"
          costTitle="추가 배송비"
          cost={3000}
          info="부분 취소로 무료 배송을 제공드릴 수 없게 되었어요. 추가된 배송비는 취소 후 환불 금액에서
                    제외되는 점 양해 부탁드립니다."
          marginTop="2"
        />
        {/* 취소 위약금 안내 */}
        <CostInfoSection
          title="취소 위약금 안내"
          costTitle="취소 위약금"
          cost={123000}
          info={
            <>
              주문 취소로 위와 같이 위약금이 발생하였어요.
              <br />
              자세한 사항은 주문서 상세와 주문 상품의 상세 페이지를 참고해 주세요.
            </>
          }
        />
        {/* 예상 환불 정보 */}
        <RefundInfo
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          variant="normal"
          data={refund}
        />
        {/* 취소 사유를 입력해주세요 */}
        <CancelReason />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">이전으로</Button>
        <Button variant="primary" size="large">
          취소 확인
        </Button>
      </ButtonArea>
      <ImageViewerDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        images={sampleImages}
      />
    </Container>
  );
}
