'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleArea, Section, Link } from '@/shared/ui';
import { ReturnReason, ClaimInfoTxt } from '@views/mypage/claims/components';
import { RefundInfo, PaymentInfo } from '@views/mypage/order/detail/components';
import { ReturnStoreBox, ClaimProdList, CheckGiftBox } from '@/views/mypage/claims/components';
import { DeliveryDetail } from '@widgets/order';

import styles from './ReturnApplyStep3.module.scss';

import { mockCommonOrder } from '@mocks/claims';

export default function ReturnApplyStep3() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isStore = searchParams.has('store');

  // mock 데이터 가져오기
  const {
    refund,
    deliveryDetailItems,
    claimCompleteItem,
    claimApplyItems,
    giftClaim,
    claimReturnReason,
  } = mockCommonOrder;

  // 상품 샘플데이터
  const cancelProdData = claimApplyItems;

  // 멀티 배송지 샘플 데이터
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: deliveryDetailItems[2], // 교환 상품 회수지
      orderData: claimCompleteItem, //주문상품
      exChangeAddrData: deliveryDetailItems[1], // 교환 상품 배송지
    },
    {
      id: 'addr-2',
      infoData: deliveryDetailItems[2], // 교환 상품 회수지
      orderData: claimCompleteItem, //주문상품
      exChangeAddrData: deliveryDetailItems[3], // 교환 상품 배송지
    },
  ];
  // 반품 매장 샘플 데이터
  const ReturnStoreListData = [
    {
      id: 'store-1',
      orderData: claimApplyItems, //주문상품
    },
  ];

  // 택배/매장 조건에 따른 콘텐츠 분기
  const ReturnContent = isStore ? (
    <>
      {/* 반품 매장 */}
      {ReturnStoreListData.map((group, idx) => (
        <Section
          title={`반품 매장`}
          key={`store-${idx}`}
          variant="normal"
          level="1"
          borderTop
          flush
        >
          <div className={styles.store}>
            <ReturnStoreBox />
            <div>
              <ClaimInfoTxt content="반품 접수한 상품을 회수할 수 있도록 준비 부탁드려요" />
              <ClaimProdList
                type="list"
                data={cancelProdData}
                bottomSlot={
                  <>
                    <CheckGiftBox data={giftClaim} isCompleted hideFlag />
                  </>
                }
              />
            </div>
          </div>
        </Section>
      ))}
    </>
  ) : (
    <>
      {/* 택배 */}
      {DeliveryGroupListData.map((group, idx) => (
        <DeliveryDetail
          title={`배송지 ${idx + 1}`}
          key={`delivery-${group.id}`}
          infoData={group.infoData}
          borderTop
          level="1"
          defaultOpen={false}
          hideCollapse
          bottomSlot={
            <>
              <ClaimInfoTxt content="반품 접수한 상품을 회수할 수 있도록 준비 부탁드려요" />
              <ClaimProdList
                type="list"
                data={cancelProdData}
                bottomSlot={
                  <>
                    <CheckGiftBox data={giftClaim} isCompleted hideFlag />
                  </>
                }
              />
            </>
          }
        />
      ))}
    </>
  );

  return (
    <Container showBack title="반품 접수 완료">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              반품 접수가
              <br />
              완료되었습니다.
            </>
          }
          description={
            isStore ? (
              <>
                사은품을 포함하여 반품하실 상품은 3일 내에 꼭 해당 매장에 전달해 주세요.
                <br />
                반품 접수 후 환불이 완료될 때 까지 <br />
                약 7일 정도 소요될 수 있습니다. <br />
                자세한 상담은 고객센터{' '}
                <Link href="tel:18002233" type="inline" variant="underline">
                  1800-2233
                </Link>
                로 문의 주세요.
              </>
            ) : (
              <>
                사은품을 포함하여 반품하실 상품은 꼭 상품 회수지에 두세요.
                <br />
                빠르고 안전하게 수거하겠습니다
                <br />
                반품 접수 후 환불이 완료될 때 까지
                <br />
                약 7일 정도 소요될 수 있습니다.
                <br />
                자세한 상담은 고객센터{' '}
                <Link href="tel:18002233" type="inline" variant="underline">
                  1800-2233
                </Link>
                로 문의 주세요.
              </>
            )
          }
        />
        {/* 택배 또는 매장 */}
        {ReturnContent}
        {/* 반품 사유 */}
        <ReturnReason type="return" data={claimReturnReason} />
        {/* 예상 환불 정보 */}
        <RefundInfo
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          variant="normal"
          data={refund}
        />
        {isStore && (
          <>
            {/* 추가 결제 정보 */}
            <PaymentInfo
              title="추가 결제 정보"
              hideCollapse
              hideReciptBtn
              data={{
                variant: 'extra_payment',
                items: [{ label: '반품 배송비', price: 3000 }],
                totalPrice: 3000,
              }}
            />
          </>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">장바구니 다시 담기</Button>
        <Button size="large" variant="primary">
          주문 목록으로
        </Button>
      </ButtonArea>
    </Container>
  );
}
