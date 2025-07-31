'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderStatusBtnsPreview } from '@views/mypage/components/OrderStatusBtnsPreview';
import { mockTestSample } from '@mocks/myorder';
import type { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

const orderData = mockTestSample as OrderDeliveryData[];
const SampleOrder = orderData.find((d) => d.id === 'order-detail-test') ?? orderData[0];

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
      case 'common':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '주문완료', status: 'order_completed' },
              { label: '상품준비', status: 'product_ready' },
              { label: '배송중', status: 'delivering', orderCase: 'holiday' },
              { label: '배송완료_구매확정전', status: 'delivered_not_confirmed' },
              { label: '배송완료_구매확정_리뷰작성 전', status: 'delivered_confirmed_no_review' },
              { label: '결제완료', status: 'payment_completed' },
              { label: '배송완료_리뷰작성 후', status: 'delivered_reviewed' },
              { label: '취소완료', status: 'cancelled' },
              { label: '반품진행중', status: 'returning' },
              { label: '교환배송중', status: 'exchanging_delivering' },
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
              { label: '픽업완료', status: 'pickup_completed', orderCase: 'storePick' },
              { label: '픽업완료&구매확정', status: 'pickup_confirmed', orderCase: 'storePick' },
              { label: '취소완료', status: 'cancelled', orderCase: 'storePick' },
              { label: '반품완료', status: 'return_completed', orderCase: 'storePick' },
            ]}
          />
        );
      case 'gift':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '주문완료', status: 'order_completed', orderCase: 'gift' },
              { label: '결제완료', status: 'payment_completed', orderCase: 'gift' },
              { label: '배송중', status: 'delivering', orderCase: 'gift' },
              {
                label: '배송완료_구매확정전',
                status: 'delivered_not_confirmed',
                orderCase: 'gift',
              },
              {
                label: '배송완료_리뷰작성전',
                status: 'delivered_pending_review',
                orderCase: 'gift',
              },
              {
                label: '배송완료_리뷰작성후',
                status: 'delivered_reviewed',
                orderCase: 'gift',
              },
              { label: '취소완료', status: 'cancelled', orderCase: 'gift' },
            ]}
          />
        );
      case 'pickup':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '결제완료', status: 'payment_completed', orderCase: 'pickup' },
              { label: '픽업가능', status: 'pickup_available', orderCase: 'pickup' },
              { label: '픽업완료', status: 'pickup_completed', orderCase: 'pickup' },
              { label: '픽업완료&구매확정', status: 'pickup_confirmed', orderCase: 'pickup' },
              { label: '취소완료', status: 'cancelled', orderCase: 'pickup' },
              { label: '반품완료', status: 'return_completed', orderCase: 'pickup' },
              { label: '교환배송중', status: 'exchanging_delivering', orderCase: 'pickup' },
            ]}
          />
        );
      case 'experience':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '결제완료', status: 'payment_completed', orderCase: 'experience' },
              { label: '결제완료', status: 'payment_completed', orderCase: 'purchaseGift' },
              { label: '상품준비', status: 'product_ready', orderCase: 'experience' },
              { label: '배송중', status: 'delivering', orderCase: 'experience' },
              { label: '배송완료', status: 'delivered', orderCase: 'experience' },
            ]}
          />
        );
      case 'etc':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              { label: '배송완료_클레임_불가상품', status: 'delivered_claim_blocked' },
              { label: '반품신청_클레임_철회상품', status: 'delivered_return_cancelled' },
              { label: '반품취소', status: 'return_cancel' },
            ]}
          />
        );
      case 'cancelable':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              {
                label: 'case1',
                status: 'order_completed',
                orderCase: 'cancelable',
              },
              {
                label: 'case2',
                status: 'order_completed',
                orderCase: 'cancel_limit',
              },
              {
                label: 'case3',
                status: 'order_completed',
                orderCase: 'cancel_disabled',
              },
            ]}
          />
        );
      case 'culture':
        return (
          <OrderStatusBtnsPreview
            baseData={SampleOrder}
            statusItems={[
              {
                label: '문화센터 예외',
                status: 'payment_completed',
                orderCase: 'cultureCenter',
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
      case 'common':
        return '공통 버튼 케이스';
      case 'storepick':
        return '스토어픽 버튼 케이스';
      case 'gift':
        return '선물하기 버튼 케이스';
      case 'pickup':
        return '방문픽업 버튼 케이스';
      case 'experience':
        return '체험단 / 0원상품 버튼 케이스';
      case 'etc':
        return '기타 버튼 케이스';
      case 'cancelable':
        return '취소 가능 버튼 케이스';
      case 'culture':
        return '문화센터 예외 버튼 케이스';
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
