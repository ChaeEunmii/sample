'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TextList, ButtonArea, Button, Text } from '@shared/ui';
import { GiftBoxTopInfo } from '@/views/mypage/gift/components/GiftBoxTopInfo';
import { GiftBoxReceiver } from '@/views/mypage/gift/components/GiftBoxReceiver';
import { MessageCardInfo } from '@/views/mypage/gift/components/MessageCardInfo';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { GIFT_INFO_LIST_2 } from '@/views/mypage/gift/detail/DetailDoc';
import styles from './DetailPick.module.scss';
import { mockReceiverItem } from '@mocks/myactivity';

export default function DetailPick() {
  // mock 데이터 가져오기
  const receiverData = {
    ...mockReceiverItem,
    id: 'receiver-1',
    canResend: false, // 재발송 가능 여부
  };

  return (
    <Container showBack title="선물픽 상세">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <GiftBoxTopInfo
          info={{
            date: '20251225',
            orderNumber: '25122512345678',
          }}
          sideAreaSlot={
            <Text size="4" color="gray3">
              선물픽 P25122512345678
            </Text>
          }
        />
        {/* 내가 보낸 메세지 */}
        <MessageCardInfo
          // date="20251225"
          sentData={{
            cardId: 'card-1',
            message: '생일을 진심으로 축하합니다.',
            receiver: '김*대',
            orderDate: '20251215',
          }}
        />
        {/* 받는 분 */}
        <GiftBoxReceiver data={receiverData} className="ncp-mt-xl" />
        {/* 하단 버튼 */}
        <ButtonArea margin="2">
          <Button size="large">취소/반품/교환</Button>
          <Button variant="primary" size="large">
            목록 보기
          </Button>
        </ButtonArea>
        {/* 유의사항 */}
        <ConfirmInfo title="유의사항">
          <TextList data={GIFT_INFO_LIST_2} variant="info" />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
