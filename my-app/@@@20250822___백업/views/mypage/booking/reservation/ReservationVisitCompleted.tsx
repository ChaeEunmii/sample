'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { TitleArea, Text, Button, ButtonArea } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { BookingCustomerInfo, BookingInfo, PaidDeposit } from '@/widgets/o4o';
import { visitCompletedData } from './ResevationTextData';
// 스타일
import styles from './Reservation.module.scss';

export const ReservationVisitCompleted = () => {
  // 화면 상태
  const searchParams = useSearchParams();
  const isDeposit = searchParams.get('deposit') === 'true'; // 예약금 있는 경우
  const isReviewed = searchParams.get('reviewed') === 'true'; // 미루기 사용 완료한 경우
  const lang = (searchParams.get('lang') ?? 'ko') as 'ko' | 'en' | 'cn';

  // ✅ 다국어 데이터(ko, en, cn)
  const data = visitCompletedData;

  // ✅ titleArea 영역 데이터
  const subTitle = (
    <span className={styles.locationInfo}>
      <Text as="span">{data.titleArea.subTitle.name[lang]}</Text>
      <Text as="span" color="gray2">
        {data.titleArea.subTitle.location[lang]}
      </Text>
    </span>
  );

  return (
    <Container title={data.title[lang]} showBack>
      <Contents>
        <TitleArea
          title={
            <>
              {data.titleArea.title[lang].split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </>
          }
          subTitle={subTitle}
          level="2"
        />
        {/* 얘약 내용 */}
        <BookingInfo type="completed" lang={lang} hideLocationButton />
        {/* 고객 정보 */}
        <BookingCustomerInfo
          title={data.customerInfo.title[lang]}
          showMail={lang === 'en' || lang === 'cn'}
        />
        {isDeposit && <PaidDeposit />}
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">{data.buttons.revisit[lang]}</Button>
        <Button variant="primary" size="large">
          {isReviewed ? data.buttons.edit[lang] : data.buttons.write[lang]}
        </Button>
      </ButtonArea>
    </Container>
  );
};

ReservationVisitCompleted.displayName = 'ReservationVisitCompleted';
