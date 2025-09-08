'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, TextList, ButtonArea, Button } from '@shared/ui';
import { GiftBoxGroup } from '@/views/mypage/components';
import { DeliveryDetail } from '@widgets/order';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { MessageCardInfo } from '@/views/mypage/gift/components/MessageCardInfo';
import { GIFT_INFO_LIST } from '@/views/mypage/gift/detail/DetailDoc';
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
        <GiftBoxGroup
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
        {/* 유의사항 */}
        <ConfirmInfo title="유의사항">
          <TextList data={GIFT_INFO_LIST} variant="info" />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
