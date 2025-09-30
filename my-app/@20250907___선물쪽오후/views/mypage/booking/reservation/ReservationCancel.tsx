'use client';
import { useSearchParams } from 'next/navigation';
import { TitleArea, Text, Button, ButtonArea, Line, Icon } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { BookingCustomerInfo, BookingInfo, CancelRefundPolicy, DepositRefund } from '@/widgets/o4o';
import { cancelData } from './ResevationTextData';

// 스타일
import styles from './Reservation.module.scss';

export const ReservationCancel = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isDeposit = searchParams.get('deposit') === 'true'; // 예약금 있는 경우
  const isNoShow = searchParams.get('noshow') === 'true'; // 노쇼
  const lang = (searchParams.get('lang') ?? 'ko') as 'ko' | 'en' | 'cn';

  // ✅ 다국어 데이터(ko, en, cn)
  const data = cancelData;

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
              {isNoShow && (
                <>
                  {data.titleArea.noshow[lang]}
                  <br />
                </>
              )}
              {data.titleArea.default[lang]}
            </>
          }
          subTitle={subTitle}
          level="2"
        />
        {/* 얘약 내용 */}
        <BookingInfo type="canceled" lang={lang} hideLocationButton />
        {/* 고객 정보 */}
        <BookingCustomerInfo
          title={data.customerInfo.title[lang]}
          showMail={lang === 'en' || lang === 'cn'}
        />
        {(isDeposit || isNoShow) && (
          <>
            {/* 예약금 환불 */}
            <DepositRefund />
            <Text size="4" indent className={styles.noti}>
              <Icon name="caution" size="small" />
              결제 취소 및 환불까지 평균 3-10일이 소요됩니다.
            </Text>
            <Line variant="bold" margin="4" />
            {/* 취소 및 환불정책 */}
            <CancelRefundPolicy />
          </>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">{data.buttons.list[lang]}</Button>
        <Button variant="primary" size="large">
          {data.buttons.available[lang]}
        </Button>
      </ButtonArea>
    </Container>
  );
};

ReservationCancel.displayName = 'ReservationCancel';
