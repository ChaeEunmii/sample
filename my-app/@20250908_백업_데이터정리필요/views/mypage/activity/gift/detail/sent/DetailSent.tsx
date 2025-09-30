'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { TextList, ButtonArea, Button } from '@shared/ui';
import { GiftBoxTopInfo } from '@/views/mypage/activity/gift/components/GiftBoxTopInfo';
import { GiftBoxReceiver } from '@/views/mypage/activity/gift/components/GiftBoxReceiver';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { MessageCardInfo } from '@views/mypage/activity/gift/components/MessageCardInfo';
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
                receiver: '김현대',
                orderDate: '20251215',
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
