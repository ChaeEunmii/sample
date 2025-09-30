'use client';
// 라이브러리
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
// 컴포넌트
// import { Heading } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { PaymentApprovalInfo, PaymentInfo } from '@/views/mypage/order/detail/components';
// 임시 데이터
import {
  mockPaymentApprovalData,
  mockPaymentContractPending,
  mockPaymentContractDone,
  mockPaymentPenaltyOnly,
} from '@mocks/myorder';

function SearchParamsWrapper({
  children,
}: {
  children: (component: string | null) => React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const component = searchParams.get('type');

  return <>{children(component)}</>;
}

export default function DynamicComponent() {
  // 컴포넌트
  const renderComponent = (component: string | null) => {
    switch (component) {
      // 배너
      case 'paymentApproval':
        return (
          <>
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
          </>
        );
      case 'payment':
        return (
          <>
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
          </>
        );
      default:
        return <div>결제수단 별 결제정보 케이스정리</div>;
    }
  };

  return (
    <Container title="주문상세 컴퍼넌트 케이스" showBack>
      <Contents>
        <Suspense>
          <SearchParamsWrapper>{(component) => renderComponent(component)}</SearchParamsWrapper>
        </Suspense>
      </Contents>
    </Container>
  );
}
