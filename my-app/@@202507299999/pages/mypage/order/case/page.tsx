'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { PaymentApprovalInfo, PaymentInfo } from '@/views/mypage/order/detail/components';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { OrderItem, OrderStatusFlag, OrderStatusBtns } from '@widgets/product';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
import { ReturnStatusFlag } from '@/views/mypage/claims/components/ReturnStatusFlag';
import { MyOrderGroup, OrderDeliveryData } from '@/views/mypage/components/MyOrderGroup';
import {
  mockPaymentApprovalData,
  mockPaymentContractPending,
  mockPaymentContractDone,
  mockPaymentPenaltyOnly,
  mockOrderItem,
} from '@mocks/myorder';
import { mockProdOptionList } from '@mocks/cart';

// 주문플래그 샘플날짜 데이터
const sampleFlagDate = '2025-10-25T12:34:56';

// OrderItems 샘플용(기존사용하던 OrderItems구성)
const mockTestSample = {
  id: 'order-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '쿼드쎄라',
  title: '포헤르츠 3D 부스터 마스크 젤 80g',
  options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
  orderOptions: ['옵션 1', '옵션 2', '옵션 3', '옵션 4'],
  fieldOption: ['선물포장 + 쇼핑백(+1,000원)', '각인 입력 내용 노출'],
  gift: '[비오템옴므] 핸드크림 증정',
  price: {
    current: 23456780,
    original: 23456780,
  },
  stock: 6,
  quantity: 1,
  orderStatus: {
    status: 'order_completed',
    date: '2025-10-25T12:34:56',
  },
  orderAddInfo: [
    { label: '이름', value: '김현소' },
    { label: '연락처', value: '010-1234-5678' },
    {
      label: '요청사항',
      value: '포장할 때 각별하게 신경써 주세요. 저번에 배송 왔을 때 다 깨지고 난리도 아니더라고요.',
    },
  ],
};
// MyOrderGroup 샘플데이터 (배송관련 정보 노출)
const mockTestSample2 = {
  id: 'order-detail-test',
  sellers: [
    {
      id: 'order-detail-test-seller-01',
      arrival: '10월 10일 (금) 새벽배송 도착',
      items: [
        {
          ...mockOrderItem,
          options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
          orderStatus: {
            status: 'order_completed',
            date: '2025-10-25T12:34:56',
          },
          orderAddInfo: [
            { label: '이름', value: '김현소' },
            { label: '연락처', value: '010-1234-5678' },
            {
              label: '요청사항',
              value:
                '포장할 때 각별하게 신경써 주세요. 저번에 배송 왔을 때 다 깨지고 난리도 아니더라고요.',
            },
          ],
        },
      ],
    },
  ],
};
function DynamicContent({ component }: { component: string | null }) {
  switch (component) {
    case 'paymentApproval':
      return (
        <div className="ncp-mt-s">
          <PaymentApprovalInfo
            {...mockPaymentApprovalData}
            showChangeButton
            isPending={false}
            onCopyClick={(value) => {
              console.log(value);
            }}
          />
          <PaymentApprovalInfo
            {...mockPaymentApprovalData}
            paymentData={[
              {
                ...mockPaymentApprovalData.paymentData[0],
                label: '가상계좌 국민',
                detail: {
                  bank: '국민은행 2193139752437',
                  depositorName: '입금자명 (김현대)',
                },
                info: '입금이 되지 않으면, 주문이 자동으로 취소됩니다. 일부 상품의 경우, 품절 등의 이유로 가상 계좌 재주문이 제한될 수 있습니다.',
              },
            ]}
            showChangeButton
            isPending={false}
            onCopyClick={(value) => {
              console.log(value);
            }}
          />
          <PaymentApprovalInfo
            approvalData={[
              { label: '무통장입금', price: 123456700000 },
              { label: 'H.Point', price: 123456700000 },
              { label: '더머니', price: 123456700000 },
              { label: 'RSVP', price: 123456700000 },
              { label: '예치금', price: 123456700000 },
            ]}
            showChangeButton
            isPending={false}
            onCopyClick={(value) => {
              console.log(value);
            }}
          />
          <PaymentApprovalInfo
            approvalData={[
              { label: '가상계좌 국민', price: 123456700000 },
              { label: 'H.Point', price: 123456700000 },
              { label: '더머니', price: 123456700000 },
              { label: 'RSVP', price: 123456700000 },
              { label: '예치금', price: 123456700000 },
            ]}
            showChangeButton
            isPending={false}
            onCopyClick={(value) => {
              console.log(value);
            }}
          />
          <PaymentApprovalInfo
            {...mockPaymentApprovalData}
            depositDeadlineText={undefined}
            isPending={true}
            onCopyClick={(value) => {
              console.log(value);
            }}
          />
          <PaymentApprovalInfo
            {...mockPaymentApprovalData}
            isPending={true}
            depositDeadlineText="2025년 12월 25일 토요일 23:59까지"
            onCopyClick={(value) => {
              console.log(value);
            }}
          />
        </div>
      );
    case 'payment':
      return (
        <div className="ncp-mt-s">
          <PaymentInfo data={mockPaymentContractPending} />
          <PaymentInfo
            data={mockPaymentContractDone}
            onDetailClick={() => {
              console.log('자세히 버튼 클릭');
            }}
          />
          <PaymentInfo data={mockPaymentPenaltyOnly} />
        </div>
      );
    case 'flag':
      return (
        <div className="ncp-mt-s" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <OrderStatusFlag status="order_completed" date={sampleFlagDate} />
          <OrderStatusFlag status="payment_completed" date={sampleFlagDate} />
          <OrderStatusFlag status="return_requested" date={sampleFlagDate} />
          <OrderStatusFlag status="exchange_apply" date={sampleFlagDate} />
          <OrderStatusFlag status="apply_completed" date={sampleFlagDate} />
          <OrderStatusFlag status="pickup_available" date={sampleFlagDate} />
          <OrderStatusFlag status="product_ready" date={sampleFlagDate} />
          <OrderStatusFlag status="delivering" date={sampleFlagDate} />
          <OrderStatusFlag status="returning" date={sampleFlagDate} />
          <OrderStatusFlag status="exchanging" date={sampleFlagDate} />
          <OrderStatusFlag status="exchanging_delivering" date={sampleFlagDate} />
          <OrderStatusFlag status="exchanging_delivery_requested" date={sampleFlagDate} />
          <OrderStatusFlag status="exchanging_delivery_ready" date={sampleFlagDate} />
          <OrderStatusFlag status="delivered" date={sampleFlagDate} />
          <OrderStatusFlag status="cancelled" date={sampleFlagDate} />
          <OrderStatusFlag status="pickup_completed" date={sampleFlagDate} />
          <OrderStatusFlag status="return_completed" date={sampleFlagDate} />
          <OrderStatusFlag status="return_cancel" date={sampleFlagDate} />
          <OrderStatusFlag status="exchange_return_completed" date={sampleFlagDate} />
          <OrderStatusFlag status="exchange_delivery_complete" date={sampleFlagDate} />
          <OrderStatusFlag status="participating" date={sampleFlagDate} />
        </div>
      );
    case 'myOrder':
      return (
        <div className="ncp-mt-s">
          <p>1. OrderItem</p>
          <div className="ncp-mt-s">
            {/* 주문서/장바구니에서 사용하는 OrderItem 에 slot 형태로 구성 */}
            <OrderItem
              items={[mockTestSample as OrderItemType]}
              showOrderCount
              isCart
              orderTopSlot={(item) => (
                <>
                  {item.orderStatus ? (
                    <OrderStatusFlag
                      status={item.orderStatus.status}
                      date={item.orderStatus.date}
                    />
                  ) : null}
                </>
              )}
              orderSlot={(item) => (
                <>
                  {/* 추가 정보 데이터가 있으면 노출 */}
                  {item.orderAddInfo && <OrderItemsInfoBox />}
                  {/* 주문상태별 버튼 렌더링 */}
                  <OrderStatusBtns
                    item={item}
                    viewType="detail" // list | detail
                    onButtonClick={(action, clickedItem) => {
                      console.log(action, clickedItem);
                    }}
                  />
                </>
              )}
            />
          </div>
          <br />
          <br />
          <p>2. 배송정보가 포함된 마이페이지 오더</p>
          <div className="ncp-mt-s">
            {/* MyOrderGroup (배송정보가 포함된 마이페이지 오더 노출) */}
            <MyOrderGroup
              data={mockTestSample2 as OrderDeliveryData}
              viewType="detail"
              onButtonClick={(action, item) => {
                console.log('Clicked:', action, item);
              }}
            />
          </div>
        </div>
      );
    case 'returnFlag':
      return (
        <div className="ncp-mt-s" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ReturnStatusFlag status="return_request_denied" date={sampleFlagDate} />
          <ReturnStatusFlag status="return_not_allowed" date={sampleFlagDate} />
          <ReturnStatusFlag status="product_collecting" date={sampleFlagDate} />
          <ReturnStatusFlag status="return_requested" date={sampleFlagDate} />
          <ReturnStatusFlag status="refund_completed" date={sampleFlagDate} />
          <ReturnStatusFlag status="return_confirmed" date={sampleFlagDate} />
        </div>
      );
    default:
      return <div>케이스 정리</div>;
  }
}

function getTitle(type: string | null) {
  switch (type) {
    case 'paymentApproval':
      return '결제수단 & 승인내역 케이스';
    case 'payment':
      return '결제정보';
    case 'flag':
      return '플래그 케이스';
    case 'returnFlag':
      return '비대면 반품 플래그 케이스';
    case 'myOrder':
      return 'Full case';
    default:
      return '기타 케이스';
  }
}

export default function DynamicComponent() {
  const searchParams = useSearchParams();
  const component = searchParams.get('type');

  return (
    <Container title={getTitle(component)} showBack>
      <Contents>
        <Suspense>
          <DynamicContent component={component} />
        </Suspense>
      </Contents>
    </Container>
  );
}
