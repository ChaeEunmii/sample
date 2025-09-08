'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { TextList, ButtonArea, Button } from '@shared/ui';
import { GiftBoxTopInfo } from '@/views/mypage/gift/components/GiftBoxTopInfo';
import { GiftBoxReceiver } from '@/views/mypage/gift/components/GiftBoxReceiver';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { MessageCardInfo } from '@/views/mypage/gift/components/MessageCardInfo';
import { GIFT_INFO_LIST_2 } from '@/views/mypage/gift/detail/DetailDoc';
import styles from './DetailSent.module.scss';
import { mockReceiverList, mockReceiverHasCardList } from '@mocks/myactivity';

export default function DetailSent() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isCase2 = searchParams.has('case2'); // 개별 카드 메시지

  // mock 데이터 가져오기
  const receiverData = !isCase2 ? mockReceiverList : mockReceiverHasCardList;

  return (
    <Container showBack title="보낸선물 상세">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <GiftBoxTopInfo
          info={{
            date: '20251225',
            orderNumber: '25122512345678',
          }}
        />
        {!isCase2 && (
          <>
            {/* 내가 보낸 메세지 */}
            <MessageCardInfo
              date="20251225"
              sentData={{
                cardId: 'card-1',
                message: '생일을 진심으로 축하합니다.',
                // receiver: '김*대',
                // orderDate: '20251215',
              }}
            />
          </>
        )}
        {/* 받는 분 */}
        <GiftBoxReceiver
          data={receiverData}
          onResend={(group) => {
            console.log('재발송 클릭됨:', group);
          }}
          className="ncp-mt-xl"
        />
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
