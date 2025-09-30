'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleArea, Section } from '@/shared/ui';
import { ReturnReason, ClaimInfoTxt } from '@views/mypage/claims/components';
import { PaymentInfo } from '@views/mypage/order/detail/components';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
import { DeliveryDetail } from '@widgets/order';
import { OrderItem } from '@widgets/product';

import styles from './ExchangeApplyStep3.module.scss';

import { mockCommonOrder } from '@mocks/claims';

export default function ExchangeApplyStep2() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const { payment, deliveryDetailItems, claimCompleteItem, claimExchangeReason } = mockCommonOrder;

  // 교환접수 상품 샘플데이터
  const exChangeProdData = claimCompleteItem;

  // 멀티 배송지 샘플 데이터
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: deliveryDetailItems[1], // 교환 상품 회수지
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

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const deliveryContent = isMulti ? (
    <>
      {/* 멀티구조 */}
      {DeliveryGroupListData.map((group, idx) => (
        <DeliveryDetail
          title={`교환 회수지 ${idx + 1}`}
          key={`delivery-${group.id}`}
          infoData={group.infoData}
          borderTop
          level="1"
          defaultOpen={false}
          hideCollapse
          bottomSlot={
            <>
              <ClaimInfoTxt content="교환 접수한 상품의 회수를 준비해 주세요" />
              <OrderItem
                items={exChangeProdData}
                showOrderCount
                isCart
                lineDivider
                orderSlot={(item) => (
                  <>
                    {/* 추가 정보 데이터가 있으면 노출 */}
                    {item.orderAddInfo && <OrderItemsInfoBox data={item.orderAddInfo} />}
                  </>
                )}
              />
              <DeliveryDetail
                title={`교환 배송지 ${idx + 1}`}
                infoData={group.exChangeAddrData}
                borderTop
                level="1"
                defaultOpen={false}
                hideCollapse
              />
            </>
          }
        />
      ))}
    </>
  ) : (
    <>
      {/* 단독 구조 */}
      {/* 교환 상품 목록 */}
      <Section title="교환 상품 목록" variant="normal" level="1" flush borderTop>
        <ClaimInfoTxt content="교환 접수한 상품의 회수를 준비해 주세요" />
        <OrderItem
          items={exChangeProdData}
          showOrderCount
          isCart
          lineDivider
          orderSlot={(item) => (
            <>
              {/* 추가 정보 데이터가 있으면 노출 */}
              {item.orderAddInfo && <OrderItemsInfoBox data={item.orderAddInfo} />}
            </>
          )}
        />
      </Section>
      {/* 교환 회수지 */}
      <DeliveryDetail
        title="교환 회수지"
        infoData={deliveryDetailItems[3]}
        borderTop
        level="1"
        defaultOpen={false}
        hideCollapse
      />
      {/* 교환 배송지 */}
      <DeliveryDetail
        title="교환 배송지"
        infoData={deliveryDetailItems[3]}
        borderTop
        level="1"
        defaultOpen={false}
        hideCollapse
      />
    </>
  );

  return (
    <Container showBack title="교환 접수 완료">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              교환 접수가
              <br />
              완료되었습니다.
            </>
          }
          description={
            <>
              교환하실 상품은 꼭 상품 회수지에 두세요.
              <br />
              빠르고 안전하게 수거하겠습니다.
              <br />
              교환 접수 후 재발송이 완료될 때까지 약 7일 정도 <br />
              소요될 수 있습니다.
              <br />
              자세한 상듬은 고객센터 1800-2233로 문의 부탁드려요.
            </>
          }
        />
        {/* 일반 또는 멀티 */}
        {deliveryContent}
        {/* 교환 사유 */}
        <ReturnReason type="exchange" data={claimExchangeReason} />
        {/* 추가 결제 정보 */}
        <PaymentInfo title="추가 결제 정보" data={payment} hideCollapse hideReciptBtn />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" variant="primary">
          주문 목록으로
        </Button>
      </ButtonArea>
    </Container>
  );
}
