'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, TextList, ButtonArea, Button } from '@shared/ui';
import { GiftGroup } from '@/views/mypage/components';
import { DeliveryDetail } from '@widgets/order';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { MessageCardInfo } from '@views/mypage/activity/gift/components/MessageCardInfo';
import styles from './DetailReceived.module.scss';
import { mockReceivedGiftDetail, mockDelivery } from '@mocks/myactivity';

export default function DetailReceived() {
  // mock 데이터 가져오기
  const deliveryData = mockDelivery;
  const receivedOrders = mockReceivedGiftDetail;

  return (
    <Container showBack title="선물보기">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              정현대 님이 김현대 님 에게
              <br />
              보낸 선물입니다
            </>
          }
        />
        <MessageCardInfo
          date="20251225"
          sentData={{
            cardId: 'card-1',
            message: '생일을 진심으로 축하합니다.',
          }}
          hideTitleBar
        />
        <GiftGroup
          data={receivedOrders}
          viewType="detail"
          onButtonClick={(action, item) => {
            console.log('버튼 클릭:', action, item);
          }}
          hideDetailButton
          className="ncp-mt-xl"
        />
        <DeliveryDetail
          title="배송지 정보"
          infoData={deliveryData}
          borderTop
          level="1"
          defaultOpen={false}
          hideCollapse
          hideChangeBtns
          hideDefaultMark
          className="ncp-mt-xl"
        />
        <ButtonArea margin="3">
          <Button variant="primary" size="large">
            답례 선물하기
          </Button>
        </ButtonArea>
        {/* 확인해주세요 */}
        <ConfirmInfo title="유의사항">
          <TextList
            data={[
              '받은 선물의 취소/반품/교환 신청은 결제자(선물한사람)을 통해서만 접수 가능합니다.',
              '선물픽으로 고르신 선물이 품절로 인하여 일부만 배송되거나 주문 취소 되는 경우도 발생할 수 있으니 양해 바랍니다.',
              '선물 서비스 관련 궁금한 사항은 고객센터(1800-2233)로 연락주시기 바랍니다.',
            ]}
            variant="info"
          />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
