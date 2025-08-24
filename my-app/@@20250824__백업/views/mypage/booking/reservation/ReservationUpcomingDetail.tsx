'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { TitleArea, Text, Button, Icon, ButtonArea, TextList, TitleBar, Line } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { BookingCustomerInfo, BookingInfo, CancelRefundPolicy, PaidDeposit } from '@/widgets/o4o';
import { ReservationCancelDrawer } from './ReservationCancelDrawer';
import { upcomingDetailData } from './ResevationTextData';
// 스타일
import styles from './Reservation.module.scss';
import clsx from 'clsx';

export const ReservationUpcomingDetail = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isPending = searchParams.get('pending'); // 예약 확인중(예약 확정)
  const isCancelBlocked = searchParams.get('pending') === 'true'; // 예약 취소 불가(예약 신청)
  const lang = (searchParams.get('lang') ?? 'ko') as 'ko' | 'en' | 'cn';

  // ✅ 상태 관리
  const [isCancelBookingDrawerOpen, setIsCancelBookingDrawerOpen] = useState(false);

  // ✅ 다국어 데이터(ko, en, cn)
  const data = upcomingDetailData;

  // ✅ titleArea 영역 데이터
  const title = isPending ? data.titleArea.pending[lang] : data.titleArea.confirmed[lang];
  const subTitle = (
    <span className={styles.locationInfo}>
      <Text as="span">{data.titleArea.subTitle.name[lang]}</Text>
      <Text as="span" color="gray2">
        {data.titleArea.subTitle.location[lang]}
      </Text>
    </span>
  );

  return (
    <Container
      title={data.title[lang]}
      showBack
      actions={
        lang === 'en' || lang === 'cn'
          ? [
              {
                type: 'lang' as const,
                value: lang === 'cn' ? 'zh' : 'en',
                options: ['en', 'zh'],
              },
            ]
          : []
      }
    >
      <Contents>
        <TitleArea title={title} subTitle={subTitle} level="2" />
        {/* 얘약 내용 */}
        <BookingInfo lang={lang} />
        {isPending && (
          <Text size="4" color="gray2" indent reading className="ncp-mt-x6">
            {data.bookinginInfoGuide[lang].split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        )}
        {/* 고객 정보 */}
        <BookingCustomerInfo
          title={data.customerInfo.title[lang]}
          showMail={lang === 'en' || lang === 'cn'}
        />
        {/* 결제 완료한 예약금 */}
        {isPending && lang === 'ko' && (
          <>
            <PaidDeposit />
            <Text size="4" indent className={clsx(styles.noti, 'ncp-mt-x6')}>
              <Icon name="caution" size="small" />
              <span>
                <strong>10월 12일</strong>(방문 4일 전) 내 취소 시 예약금 100% 환불됩니다.
              </span>
            </Text>
            <Text size="4" indent className={clsx(styles.noti, 'ncp-mt-xxs')}>
              <Icon name="caution" size="small" />
              노쇼의 경우 예약금이 환불되지 않습니다.
            </Text>
          </>
        )}
        <Line variant="bold" margin="4" />
        {/* 매장 이용 시 안내사항 */}
        <TitleBar level="3" title={data.information.title[lang]} />
        <TextList data={[...data.information.textList[lang]]} variant="level2" />
        {/* 취소 및 환불정책 */}
        {isPending && lang === 'ko' && <CancelRefundPolicy />}
      </Contents>
      <ButtonArea type="sticky">
        <Button
          size="large"
          onClick={() => setIsCancelBookingDrawerOpen(true)}
          disabled={isCancelBlocked}
        >
          {data.buttons.cancel[lang]}
        </Button>
        <Button variant="primary" size="large">
          {data.buttons.confirm[lang]}
        </Button>
      </ButtonArea>

      {/* 예약 취소 (D) */}
      <ReservationCancelDrawer
        isOpen={isCancelBookingDrawerOpen}
        onClose={() => setIsCancelBookingDrawerOpen(false)}
      />
    </Container>
  );
};

ReservationUpcomingDetail.displayName = 'ReservationUpcomingDetail';
