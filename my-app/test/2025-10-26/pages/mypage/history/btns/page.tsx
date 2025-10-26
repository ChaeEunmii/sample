'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderStatusBtnsPreview } from '@/views/mypage/order/history/components/order/OrderStatusBtnsPreview';
import type { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { mockTestSample, mockTestTorderSample, mockDateNote, mockDateNote2 } from '@mocks/history';

// 오더 샘플데이터
const orderData = mockTestSample as OrderDeliveryData[];
const orderDataTorder = mockTestTorderSample as OrderDeliveryData[];
const SampleOrder = orderData.find((d) => d.id === 'order-detail-test') ?? orderData[0];
const SampleOrderTorder = orderDataTorder.find((d) => d.id === 'order-detail-test') ?? orderData[0];

function SearchParamsWrapper({
  children,
}: {
  children: (component: string | null) => React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const component = searchParams.get('type');

  return <>{children(component)}</>;
}

export default function OrderStatusCaseViewer() {
  const renderComponent = (component: string | null) => {
    switch (component) {
      case 'normal':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '주문접수', status: 'order_completed' },
              { label: '결제완료', status: 'payment_completed' },
              { label: '배송준비중', status: 'delivery_ready' },
              { label: '배송중', status: 'delivering' },
              { label: '배송완료(리뷰X)', status: 'delivered', noReview: true },
              { label: '배송완료(리뷰O)', status: 'delivered' },
              { label: '주문취소', status: 'order_cancel' },
              {
                label: '주문취소(선물)',
                status: 'order_cancel',
                orderCase: 'gift',
                date: null,
                note: '받는 분 거절',
              },
              { label: '클레임(반품)(리뷰X)', status: 'claim_return', noReview: true },
              { label: '클레임(반품)(리뷰O)', status: 'claim_return' },
              { label: '클레임(교환)(리뷰X)', status: 'claim_exchange', noReview: true },
              { label: '클레임(교환)(리뷰O)', status: 'claim_exchange' },
            ]}
          />
        );
      case 'storepick':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '결제완료', status: 'payment_completed', orderCase: 'storePick' },
              { label: '픽업가능', status: 'pickup_available', orderCase: 'storePick' },
              {
                label: '픽업완료(리뷰X)',
                status: 'pickup_completed',
                orderCase: 'storePick',
                noReview: true,
              },
              {
                label: '픽업완료(리뷰O)',
                status: 'pickup_completed',
                orderCase: 'storePick',
              },
              {
                label: '클레임(반품)(리뷰X)',
                status: 'claim_return',
                orderCase: 'storePick',
                noReview: true,
              },
              {
                label: '클레임(반품)(리뷰O)',
                status: 'claim_return',
                orderCase: 'storePick',
              },
              {
                label: '클레임(교환)(리뷰X)',
                status: 'claim_exchange',
                orderCase: 'storePick',
                noReview: true,
              },
              {
                label: '클레임(교환)(리뷰O)',
                status: 'claim_exchange',
                orderCase: 'storePick',
              },
            ]}
          />
        );
      case 'tohome':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              {
                label: '결제완료',
                status: 'payment_completed',
                ...mockDateNote,
              },
              { label: '배송준비중', status: 'delivery_ready', ...mockDateNote },
              {
                label: '배송중',
                status: 'delivering',
                ...mockDateNote,
              },
              { label: '배송중', status: 'delivering', orderCase: 'dawn', ...mockDateNote },
              { label: '배송완료(리뷰X)', status: 'delivered', noReview: true, ...mockDateNote2 },
              {
                label: '배송완료(리뷰X)',
                status: 'delivered',
                noReview: true,
                orderCase: 'dawn',
                ...mockDateNote2,
              },
              { label: '배송완료(리뷰O)', status: 'delivered', ...mockDateNote2 },
              {
                label: '배송완료(리뷰O)',
                status: 'delivered',
                orderCase: 'dawn',
                ...mockDateNote2,
              },
              { label: '주문취소', status: 'order_cancel' },
              { label: '클레임(반품)(리뷰X)', status: 'claim_return', noReview: true },
              {
                label: '클레임(반품)(리뷰X)',
                status: 'claim_return',
                noReview: true,
                orderCase: 'dawn', //새벽배송 여부
              },
              { label: '클레임(반품)(리뷰O)', status: 'claim_return' },
              { label: '클레임(반품)(리뷰O)', status: 'claim_return', orderCase: 'dawn' },
              { label: '클레임(교환)(리뷰X)', status: 'claim_exchange', noReview: true },
              {
                label: '클레임(교환)(리뷰X)',
                status: 'claim_exchange',
                noReview: true,
                orderCase: 'dawn', //새벽배송 여부
              },
              { label: '클레임(교환)(리뷰O)', status: 'claim_exchange' },
              { label: '클레임(교환)(리뷰O)', status: 'claim_exchange', orderCase: 'dawn' },
            ]}
          />
        );
      case 'torder':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrderTorder}
            statusItems={[
              {
                label: '픽업대기',
                status: 'pickup_waiting',
                orderCase: 'tOrder',
              },
              {
                label: '픽업완료',
                status: 'pickup_completed',
                orderCase: 'tOrder',
              },
              {
                label: '픽업완료(리뷰X)',
                status: 'pickup_completed',
                orderCase: 'tOrder',
                noReview: true,
              },
              {
                label: '주문취소',
                status: 'order_cancel',
                orderCase: 'tOrder',
              },
            ]}
          />
        );
      case 'gift':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              {
                label: '수락대기',
                status: 'accept_pending',
                orderCase: 'gift',
                date: null,
                note: '받는 분 수락 대기',
              },
              {
                label: '수락완료, 배송준비중',
                status: 'accepted_gift_ready',
                orderCase: 'gift',
                date: null,
                note: '받는 분 수락 완료',
              },
              {
                label: '배송중',
                status: 'delivering',
                orderCase: 'gift',
                ...mockDateNote,
              },
              {
                label: '배송완료(리뷰X)',
                status: 'delivered',
                orderCase: 'gift',
                noReview: true,
                ...mockDateNote2,
              },
              {
                label: '배송완료(리뷰O)',
                status: 'delivered',
                orderCase: 'gift',
                ...mockDateNote2,
              },
              {
                label: '주문취소',
                status: 'order_cancel',
                orderCase: 'gift',
                date: null,
                detailNote: '받는 분 거절',
              },
              {
                label: '클레임(반품)(리뷰X)',
                status: 'claim_return',
                orderCase: 'gift',
                noReview: true,
              },
              {
                label: '클레임(반품)(리뷰O)',
                status: 'claim_return',
                orderCase: 'gift',
              },
              {
                label: '클레임(교환)(리뷰X)',
                status: 'claim_exchange',
                orderCase: 'gift',
                noReview: true,
              },
              {
                label: '클레임(교환)(리뷰O)',
                status: 'claim_exchange',
                orderCase: 'gift',
              },
            ]}
          />
        );

      default:
        return <div>결제수단 별 결제정보 케이스정리</div>;
    }
  };

  const getTitle = (type: string | null) => {
    switch (type) {
      case 'normal':
        return '더현대 일반 케이스';
      case 'storepick':
        return '더현대 스토어픽 버튼 케이스';
      case 'tohome':
        return '투홈 일반 케이스';
      case 'torder':
        return '투홈 테이블오더 버튼 케이스';
      case 'gift':
        return '투홈 선물/명절선물 버튼 케이스';
      default:
        return '기타 케이스';
    }
  };

  return (
    <Suspense>
      <SearchParamsWrapper>
        {(component) => (
          <Container title={getTitle(component)}>
            <Contents>{renderComponent(component)}</Contents>
          </Container>
        )}
      </SearchParamsWrapper>
    </Suspense>
  );
}
