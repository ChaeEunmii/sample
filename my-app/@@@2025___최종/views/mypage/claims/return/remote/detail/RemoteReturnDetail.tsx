'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Button, ButtonArea, Section } from '@shared/ui';
import { DeliveryDetail } from '@widgets/order';
import { ReturnStatusFlag } from '@/views/mypage/claims/components/ReturnStatusFlag';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrdererInfo } from '@/views/mypage/order/detail/components';
import { ReturnReason } from '@/views/mypage/claims/components';
import { mockCommonOrder } from '@mocks/claims';
import styles from './RemoteReturnDetail.module.scss';

export default function RemoteReturnDetail() {
  // mock 데이터 할당
  const { deliveryDetail, orderer } = mockCommonOrder;

  return (
    <Container showBack title="비대면 반품 상세">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <div className={styles.remoteTopInfo}>
          <ReturnStatusFlag status="return_request_denied" date="2025-12-25T12:34:56" />
          <OrderInfoBox title="주문번호" content="25122512345678" />
        </div>
        {/* 영수증 정보 */}
        <Section title="영수증 정보" variant="normal" flush>
          <ButtonArea className="ncp-mt-x0">
            <Button>전자 영수증 보기</Button>
          </ButtonArea>
        </Section>
        {/* 반품 사유 */}
        <ReturnReason
          type="return"
          data={{
            reason: '기타',
            detailReason: '상품이 잘못 들어가 있어서 반품합니다. 그냥 새로 주문할게요.',
          }}
        />
        {/* 반품 접수자 정보 */}
        <OrdererInfo title="반품 접수자 정보" data={orderer} variant="normal" />
        {/* 배송지 */}
        <DeliveryDetail
          title="반품 수거지 주소"
          infoData={deliveryDetail}
          borderTop
          level="1"
          defaultOpen={false}
          hideCollapse
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          반품 목록으로
        </Button>
      </ButtonArea>
    </Container>
  );
}
